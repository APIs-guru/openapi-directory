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

type ConfirmationOfFundsServicePiis struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewConfirmationOfFundsServicePiis(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ConfirmationOfFundsServicePiis {
	return &ConfirmationOfFundsServicePiis{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CheckAvailabilityOfFunds - Confirmation of funds request
// Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
// If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
func (s *ConfirmationOfFundsServicePiis) CheckAvailabilityOfFunds(ctx context.Context, request operations.CheckAvailabilityOfFundsRequest) (*operations.CheckAvailabilityOfFundsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/funds-confirmations"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.CheckAvailabilityOfFundsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CheckAvailabilityOfFunds200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CheckAvailabilityOfFunds200ApplicationJSONObject = out
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
			var out *shared.Error401NgPiis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401NgPiis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error401Piis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error401Piis = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error403NgPiis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403NgPiis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error403Piis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error403Piis = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error404NgPiis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404NgPiis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error404Piis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error404Piis = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error405NgPiis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPiis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405Piis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405Piis = out
		}
	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error409NgPiis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409NgPiis = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error409Piis
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error409Piis = out
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
