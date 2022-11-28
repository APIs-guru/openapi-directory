package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type CommonServices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommonServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CommonServices {
	return &CommonServices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteSigningBasket - Delete the signing basket
// Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
// The undlerying transactions are not affected by this deletion.
//
// Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
// Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
func (s *CommonServices) DeleteSigningBasket(ctx context.Context, request operations.DeleteSigningBasketRequest) (*operations.DeleteSigningBasketResponse, error) {
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

// GetConsentScaStatus - Read the SCA status of the consent authorisation
// This method returns the SCA status of a consent initiation's authorisation sub-resource.
func (s *CommonServices) GetConsentScaStatus(ctx context.Context, request operations.GetConsentScaStatusRequest) (*operations.GetConsentScaStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.GetConsentScaStatusResponse{
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
			var out *shared.Error400NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Ais = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Ais = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Ais = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Ais = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Ais = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error406NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error406Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406Ais = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Ais = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error429NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error429Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429Ais = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetPaymentCancellationScaStatus - Read the SCA status of the payment cancellation's authorisation
// This method returns the SCA status of a payment initiation's authorisation sub-resource.
func (s *CommonServices) GetPaymentCancellationScaStatus(ctx context.Context, request operations.GetPaymentCancellationScaStatusRequest) (*operations.GetPaymentCancellationScaStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.GetPaymentCancellationScaStatusResponse{
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
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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

// GetPaymentInitiationAuthorisation - Get payment initiation authorisation sub-resources request
// Read a list of all authorisation subresources IDs which have been created.
//
// This function returns an array of hyperlinks to all generated authorisation sub-resources.
func (s *CommonServices) GetPaymentInitiationAuthorisation(ctx context.Context, request operations.GetPaymentInitiationAuthorisationRequest) (*operations.GetPaymentInitiationAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", request.PathParams)

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

	res := &operations.GetPaymentInitiationAuthorisationResponse{
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
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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

// GetPaymentInitiationScaStatus - Read the SCA status of the payment authorisation
// This method returns the SCA status of a payment initiation's authorisation sub-resource.
func (s *CommonServices) GetPaymentInitiationScaStatus(ctx context.Context, request operations.GetPaymentInitiationScaStatusRequest) (*operations.GetPaymentInitiationScaStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.GetPaymentInitiationScaStatusResponse{
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
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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
func (s *CommonServices) GetSigningBasketAuthorisation(ctx context.Context, request operations.GetSigningBasketAuthorisationRequest) (*operations.GetSigningBasketAuthorisationResponse, error) {
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
func (s *CommonServices) GetSigningBasketScaStatus(ctx context.Context, request operations.GetSigningBasketScaStatusRequest) (*operations.GetSigningBasketScaStatusResponse, error) {
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
func (s *CommonServices) GetSigningBasketStatus(ctx context.Context, request operations.GetSigningBasketStatusRequest) (*operations.GetSigningBasketStatusResponse, error) {
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

// StartConsentAuthorisation - Start the authorisation process for a consent
// Create an authorisation sub-resource and start the authorisation process of a consent.
// The message might in addition transmit authentication and authorisation related data.
//
// his method is iterated n times for a n times SCA authorisation in a
// corporate context, each creating an own authorisation sub-endpoint for
// the corresponding PSU authorising the consent.
//
// The ASPSP might make the usage of this access method unnecessary,
// since the related authorisation resource will be automatically created by
// the ASPSP after the submission of the consent data with the first POST consents call.
//
// The start authorisation process is a process which is needed for creating a new authorisation
// or cancellation sub-resource.
//
// This applies in the following scenarios:
//
//   - The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment
//     initiation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
//     uploaded by using the extended forms:
//   - 'startAuthorisationWithPsuIdentfication',
//   - 'startAuthorisationWithPsuAuthentication'
//   - 'startAuthorisationWithEncryptedPsuAuthentication'
//   - 'startAuthorisationWithAuthentciationMethodSelection'
//   - The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
//   - The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding
//     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
//     by using the extended forms as indicated above.
//   - The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
//     executing the cancellation.
//   - The signing basket needs to be authorised yet.
func (s *CommonServices) StartConsentAuthorisation(ctx context.Context, request operations.StartConsentAuthorisationRequest) (*operations.StartConsentAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}/authorisations", request.PathParams)

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

	res := &operations.StartConsentAuthorisationResponse{
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
			var out *shared.Error400NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Ais = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Ais = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Ais = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Ais = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Ais = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error406NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error406Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406Ais = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Ais = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error429NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error429Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429Ais = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// StartPaymentAuthorisation - Start the authorisation process for a payment initiation
// Create an authorisation sub-resource and start the authorisation process.
// The message might in addition transmit authentication and authorisation related data.
//
// This method is iterated n times for a n times SCA authorisation in a
// corporate context, each creating an own authorisation sub-endpoint for
// the corresponding PSU authorising the transaction.
//
// The ASPSP might make the usage of this access method unnecessary in case
// of only one SCA process needed, since the related authorisation resource
// might be automatically created by the ASPSP after the submission of the
// payment data with the first POST payments/{payment-product} call.
//
// The start authorisation process is a process which is needed for creating a new authorisation
// or cancellation sub-resource.
//
// This applies in the following scenarios:
//
//   - The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment
//     initiation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
//     uploaded by using the extended forms:
//   - 'startAuthorisationWithPsuIdentfication'
//   - 'startAuthorisationWithPsuAuthentication'
//   - 'startAuthorisationWithEncryptedPsuAuthentication'
//   - 'startAuthorisationWithAuthentciationMethodSelection'
//   - The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
//   - The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
//     Payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
//     by using the extended forms as indicated above.
//   - The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
//     executing the cancellation.
//   - The signing basket needs to be authorised yet.
func (s *CommonServices) StartPaymentAuthorisation(ctx context.Context, request operations.StartPaymentAuthorisationRequest) (*operations.StartPaymentAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", request.PathParams)

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

	res := &operations.StartPaymentAuthorisationResponse{
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
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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

// StartPaymentInitiationCancellationAuthorisation - Start the authorisation process for the cancellation of the addressed payment
// Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.
// The message might in addition transmit authentication and authorisation related data.
//
// This method is iterated n times for a n times SCA authorisation in a
// corporate context, each creating an own authorisation sub-endpoint for
// the corresponding PSU authorising the cancellation-authorisation.
//
// The ASPSP might make the usage of this access method unnecessary in case
// of only one SCA process needed, since the related authorisation resource
// might be automatically created by the ASPSP after the submission of the
// payment data with the first POST payments/{payment-product} call.
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
//   - 'startAuthorisationWithPsuIdentfication'
//   - 'startAuthorisationWithPsuAuthentication'
//   - 'startAuthorisationWithAuthentciationMethodSelection'
//   - The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
//   - The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
//     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
//     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
//     by using the extended forms as indicated above.
//   - The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
//     executing the cancellation.
//   - The signing basket needs to be authorised yet.
func (s *CommonServices) StartPaymentInitiationCancellationAuthorisation(ctx context.Context, request operations.StartPaymentInitiationCancellationAuthorisationRequest) (*operations.StartPaymentInitiationCancellationAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", request.PathParams)

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

	res := &operations.StartPaymentInitiationCancellationAuthorisationResponse{
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
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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
func (s *CommonServices) StartSigningBasketAuthorisation(ctx context.Context, request operations.StartSigningBasketAuthorisationRequest) (*operations.StartSigningBasketAuthorisationResponse, error) {
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

// UpdateConsentsPsuData - Update PSU Data for consents
// This method update PSU data on the consents  resource if needed.
// It may authorise a consent within the Embedded SCA Approach where needed.
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
//     A specific update PSU data request is only applicable for
//   - adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
//   - the selection of authentication methods.
//   - Embedded SCA Approach:
//     The Update PSU data request might be used
//   - to add credentials as a first factor authentication data of the PSU and
//   - to select the authentication method and
//   - transaction authorisation.
//
// The SCA Approach might depend on the chosen SCA method.
// For that reason, the following possible update PSU data request can apply to all SCA approaches:
//
// * Select an SCA method in case of several SCA methods are available for the customer.
//
// There are the following request types on this access path:
//   - Update PSU identification
//   - Update PSU authentication
//   - Select PSU autorization method
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
//   - Transaction Authorisation
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
func (s *CommonServices) UpdateConsentsPsuData(ctx context.Context, request operations.UpdateConsentsPsuDataRequest) (*operations.UpdateConsentsPsuDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.UpdateConsentsPsuDataResponse{
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

			res.UpdateConsentsPsuData200ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Ais = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Ais = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Ais = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Ais = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Ais = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error406NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error406Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error406Ais = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Ais = out
		}
	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error429NgAis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429NgAis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error429Ais
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error429Ais = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// UpdatePaymentCancellationPsuData - Update PSU data for payment initiation cancellation
// This method updates PSU data on the cancellation authorisation resource if needed.
// It may authorise a cancellation of the payment within the Embedded SCA Approach where needed.
//
// Independently from the SCA Approach it supports e.g. the selection of
// the authentication method and a non-SCA PSU authentication.
//
// There are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed,
// which depends on the SCA approach:
//
//   - Redirect SCA Approach:
//     A specific Update PSU data request is applicable for
//   - the selection of authentication methods, before choosing the actual SCA approach.
//   - Decoupled SCA Approach:
//     A specific Update PSU data request is only applicable for
//   - adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
//   - the selection of authentication methods.
//   - Embedded SCA Approach:
//     The Update PSU data request might be used
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
//   - Select PSU autorization method
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
//   - Transaction Authorisation
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
func (s *CommonServices) UpdatePaymentCancellationPsuData(ctx context.Context, request operations.UpdatePaymentCancellationPsuDataRequest) (*operations.UpdatePaymentCancellationPsuDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.UpdatePaymentCancellationPsuDataResponse{
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

			res.UpdatePaymentCancellationPsuData200ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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

// UpdatePaymentPsuData - Update PSU data for payment initiation
// This methods updates PSU data on the authorisation resource if needed.
// It may authorise a payment within the Embedded SCA Approach where needed.
//
// Independently from the SCA Approach it supports e.g. the selection of
// the authentication method and a non-SCA PSU authentication.
//
// There are several possible update PSU data requests in the context of payment initiation services needed,
// which depends on the SCA approach:
//
//   - Redirect SCA Approach:
//     A specific update PSU data request is applicable for
//   - the selection of authentication methods, before choosing the actual SCA approach.
//   - Decoupled SCA Approach:
//     A specific update PSU data request is only applicable for
//   - adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
//   - the selection of authentication methods.
//   - Embedded SCA Approach:
//     The Update PSU Data request might be used
//   - to add credentials as a first factor authentication data of the PSU and
//   - to select the authentication method and
//   - transaction authorisation.
//
// The SCA Approach might depend on the chosen SCA method.
// For that reason, the following possible Update PSU data request can apply to all SCA approaches:
//
// * Select an SCA method in case of several SCA methods are available for the customer.
//
// There are the following request types on this access path:
//   - Update PSU identification
//   - Update PSU authentication
//   - Select PSU autorization method
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
//   - Transaction authorisation
//     WARNING: This method needs a reduced header,
//     therefore many optional elements are not present.
//     Maybe in a later version the access path will change.
func (s *CommonServices) UpdatePaymentPsuData(ctx context.Context, request operations.UpdatePaymentPsuDataRequest) (*operations.UpdatePaymentPsuDataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", request.PathParams)

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

	res := &operations.UpdatePaymentPsuDataResponse{
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

			res.UpdatePaymentPsuData200ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error400NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error400Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error400Pis = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error401NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Pis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Pis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Pis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Pis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Pis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Pis = out
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
func (s *CommonServices) UpdateSigningBasketPsuData(ctx context.Context, request operations.UpdateSigningBasketPsuDataRequest) (*operations.UpdateSigningBasketPsuDataResponse, error) {
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
