package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type SigningBasketsServiceSbs struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSigningBasketsServiceSbs(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SigningBasketsServiceSbs {
	return &SigningBasketsServiceSbs{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateSigningBasket - Create a signing basket resource
// Create a signing basket resource for authorising several transactions with one SCA method.
// The resource identifications of these transactions are contained in the payload of this access method
func (s *SigningBasketsServiceSbs) CreateSigningBasket(ctx context.Context, request operations.CreateSigningBasketRequest) (*operations.CreateSigningBasketResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/signing-baskets"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSigningBasketResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SigningBasketResponse201
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SigningBasketResponse201 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// DeleteSigningBasket - Delete the signing basket
// Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
// The undlerying transactions are not affected by this deletion.
//
// Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
// Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
func (s *SigningBasketsServiceSbs) DeleteSigningBasket(ctx context.Context, request operations.DeleteSigningBasketRequest) (*operations.DeleteSigningBasketResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSigningBasketResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetSigningBasket - Returns the content of an signing basket object
// Returns the content of a signing basket object.
func (s *SigningBasketsServiceSbs) GetSigningBasket(ctx context.Context, request operations.GetSigningBasketRequest) (*operations.GetSigningBasketResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSigningBasketResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SigningBasketResponse200
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SigningBasketResponse200 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetSigningBasketAuthorisation - Get signing basket authorisation sub-resources request
// Read a list of all authorisation subresources IDs which have been created.
//
// This function returns an array of hyperlinks to all generated authorisation sub-resources.
func (s *SigningBasketsServiceSbs) GetSigningBasketAuthorisation(ctx context.Context, request operations.GetSigningBasketAuthorisationRequest) (*operations.GetSigningBasketAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}/authorisations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSigningBasketAuthorisationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Authorisations
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Authorisations = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetSigningBasketScaStatus - Read the SCA status of the signing basket authorisation
// This method returns the SCA status of a signing basket's authorisation sub-resource.
func (s *SigningBasketsServiceSbs) GetSigningBasketScaStatus(ctx context.Context, request operations.GetSigningBasketScaStatusRequest) (*operations.GetSigningBasketScaStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSigningBasketScaStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScaStatusResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScaStatusResponse = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetSigningBasketStatus - Read the status of the signing basket
// Returns the status of a signing basket object.
func (s *SigningBasketsServiceSbs) GetSigningBasketStatus(ctx context.Context, request operations.GetSigningBasketStatusRequest) (*operations.GetSigningBasketStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSigningBasketStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SigningBasketStatusResponse200
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SigningBasketStatusResponse200 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// StartSigningBasketAuthorisation - Start the authorisation process for a signing basket
// Create an authorisation sub-resource and start the authorisation process of a signing basket.
// The message might in addition transmit authentication and authorisation related data.
//
// This method is iterated n times for a n times SCA authorisation in a
// corporate context, each creating an own authorisation sub-endpoint for
// the corresponding PSU authorising the signing-baskets.
//
// The ASPSP might make the usage of this access method unnecessary in case
// of only one SCA process needed, since the related authorisation resource
// might be automatically created by the ASPSP after the submission of the
// payment data with the first POST signing basket call.
//
// The start authorisation process is a process which is needed for creating a new authorisation
// or cancellation sub-resource.
//
// This applies in the following scenarios:
//
//   - The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment
//     initiation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
//     uploaded by using the extended forms:
//   - 'startAuthorisationWithPsuIdentfication',
//   - 'startAuthorisationWithPsuAuthentication'
//   - 'startAuthorisationWithEncryptedPsuAuthentication'
//   - 'startAuthorisationWithAuthentciationMethodSelection'
//   - The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
//   - The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
//     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
//     by using the extended forms as indicated above.
//   - The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
//     executing the cancellation.
//   - The signing basket needs to be authorised yet.
func (s *SigningBasketsServiceSbs) StartSigningBasketAuthorisation(ctx context.Context, request operations.StartSigningBasketAuthorisationRequest) (*operations.StartSigningBasketAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}/authorisations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.StartSigningBasketAuthorisationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StartScaprocessResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StartScaprocessResponse = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// UpdateSigningBasketPsuData - Update PSU data for signing basket
// This method update PSU data on the signing basket resource if needed.
// It may authorise a igning basket within the embedded SCA approach where needed.
//
// Independently from the SCA Approach it supports e.g. the selection of
// the authentication method and a non-SCA PSU authentication.
//
// There are several possible update PSU data requests in the context of a consent request if needed,
// which depends on the SCA approach:
//
//   - Redirect SCA Approach:
//     A specific Update PSU data request is applicable for
//   - the selection of authentication methods, before choosing the actual SCA approach.
//   - Decoupled SCA Approach:
//     A specific Update PSU data request is only applicable for
//   - adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
//   - the selection of authentication methods.
//   - Embedded SCA Approach:
//     The update PSU data request might be used
//   - to add credentials as a first factor authentication data of the PSU and
//   - to select the authentication method and
//   - transaction authorisation.
//
// The SCA approach might depend on the chosen SCA method.
// For that reason, the following possible update PSU data request can apply to all SCA approaches:
//
// * Select an SCA method in case of several SCA methods are available for the customer.
//
// There are the following request types on this access path:
//   - Update PSU identification
//   - Update PSU authentication
//   - Select PSU autorization Method
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
//   - Transaction Authorisation
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
func (s *SigningBasketsServiceSbs) UpdateSigningBasketPsuData(ctx context.Context, request operations.UpdateSigningBasketPsuDataRequest) (*operations.UpdateSigningBasketPsuDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSigningBasketPsuDataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateSigningBasketPsuData200ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Sbs = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Sbs = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Sbs = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Sbs = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Sbs = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgSbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgSbs = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Sbs
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Sbs = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}
