package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type PaymentInitiationServicePis struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPaymentInitiationServicePis(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PaymentInitiationServicePis {
	return &PaymentInitiationServicePis{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CancelPayment - Payment cancellation request
// This method initiates the cancellation of a payment.
// Depending on the payment-service, the payment-product and the ASPSP's implementation,
// this TPP call might be sufficient to cancel a payment.
// If an authorisation of the payment cancellation is mandated by the ASPSP,
// a corresponding hyperlink will be contained in the response message.
//
// Cancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day).
//
// The response to this DELETE command will tell the TPP whether the
//   - access method was rejected,
//   - access method was successful, or
//   - access method is generally applicable, but further authorisation processes are needed.
func (s *PaymentInitiationServicePis) CancelPayment(ctx context.Context, request operations.CancelPaymentRequest) (*operations.CancelPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", request.PathParams)

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

	res := &operations.CancelPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaymentInitiationCancelResponse202
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaymentInitiationCancelResponse202 = out
		}
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

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
			var out *shared.Error405NgPisCanc
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405NgPisCanc = out
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error405PisCanc
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error405PisCanc = out
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

// GetPaymentCancellationScaStatus - Read the SCA status of the payment cancellation's authorisation
// This method returns the SCA status of a payment initiation's authorisation sub-resource.
func (s *PaymentInitiationServicePis) GetPaymentCancellationScaStatus(ctx context.Context, request operations.GetPaymentCancellationScaStatusRequest) (*operations.GetPaymentCancellationScaStatusResponse, error) {
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

// GetPaymentInformation - Get payment information
// Returns the content of a payment object
func (s *PaymentInitiationServicePis) GetPaymentInformation(ctx context.Context, request operations.GetPaymentInformationRequest) (*operations.GetPaymentInformationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", request.PathParams)

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

	res := &operations.GetPaymentInformationResponse{
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

			res.GetPaymentInformation200ApplicationJSONOneOf = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `multipart/form-data`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
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
func (s *PaymentInitiationServicePis) GetPaymentInitiationAuthorisation(ctx context.Context, request operations.GetPaymentInitiationAuthorisationRequest) (*operations.GetPaymentInitiationAuthorisationResponse, error) {
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

// GetPaymentInitiationCancellationAuthorisationInformation - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
// Retrieve a list of all created cancellation authorisation sub-resources.
func (s *PaymentInitiationServicePis) GetPaymentInitiationCancellationAuthorisationInformation(ctx context.Context, request operations.GetPaymentInitiationCancellationAuthorisationInformationRequest) (*operations.GetPaymentInitiationCancellationAuthorisationInformationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", request.PathParams)

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

	res := &operations.GetPaymentInitiationCancellationAuthorisationInformationResponse{
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
func (s *PaymentInitiationServicePis) GetPaymentInitiationScaStatus(ctx context.Context, request operations.GetPaymentInitiationScaStatusRequest) (*operations.GetPaymentInitiationScaStatusResponse, error) {
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

// GetPaymentInitiationStatus - Payment initiation status request
// Check the transaction status of a payment initiation.
func (s *PaymentInitiationServicePis) GetPaymentInitiationStatus(ctx context.Context, request operations.GetPaymentInitiationStatusRequest) (*operations.GetPaymentInitiationStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/status", request.PathParams)

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

	res := &operations.GetPaymentInitiationStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaymentInitiationStatusResponse200JSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaymentInitiationStatusResponse200JSON = out
		case utils.MatchContentType(contentType, `application/xml`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PaymentInitiationStatusResponse200XML = &out
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

// InitiatePayment - Payment initiation request
// This method is used to initiate a payment at the ASPSP.
//
// ## Variants of payment initiation requests
//
// This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
//
// There are the following **payment products**:
//
//   - Payment products with payment information in *JSON* format:
//   - ***domestic-swiss-credit-transfers-isr***
//   - ***domestic-swiss-credit-transfers***
//   - ***domestic-swiss-credit-transfers-qr***
//   - ***domestic-swiss-foreign-credit-transfers***
//   - ***swiss-sepa-credit-transfers***
//   - ***swiss-cross-border-credit-transfers***
//   - Payment products with payment information in *SIX pain.001* XML format:
//   - ***pain.001-sepa-credit-transfers***
//   - ***pain.001-cross-border-credit-transfers***
//   - ***pain.001-swiss-six-credit-transfers***
//
// Furthermore the request body depends on the **payment-service**:
//
//   - ***payments***: A single payment initiation request.
//
//   - ***bulk-payments***: A collection of several payment initiation requests.
//
//     In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
//
//     In case of a *JSON* there are several JSON payment blocks contained in a joining list.
//
//   - ***periodic-payments***:
//     Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
//     with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
//
// This is the first step in the API to initiate the related recurring/periodic payment.
//
// ## Single and mulitilevel SCA Processes
//
// The payment initiation requests are independent from the need of one or multilevel
// SCA processing, i.e. independent from the number of authorisations needed for the execution of payments.
//
// But the response messages are specific to either one SCA processing or multilevel SCA processing.
//
// For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation,
// i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the
// response message of a Payment Initation Request for a payment, where multiple authorisations are needed.
// Also if any data is needed for the next action, like selecting an SCA method is not supported in the response,
// since all starts of the multiple authorisations are fully equal.
// In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
func (s *PaymentInitiationServicePis) InitiatePayment(ctx context.Context, request operations.InitiatePaymentRequest) (*operations.InitiatePaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{payment-service}/{payment-product}", request.PathParams)

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

	res := &operations.InitiatePaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaymentInitationRequestResponse201
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaymentInitationRequestResponse201 = out
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
func (s *PaymentInitiationServicePis) StartPaymentAuthorisation(ctx context.Context, request operations.StartPaymentAuthorisationRequest) (*operations.StartPaymentAuthorisationResponse, error) {
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
func (s *PaymentInitiationServicePis) StartPaymentInitiationCancellationAuthorisation(ctx context.Context, request operations.StartPaymentInitiationCancellationAuthorisationRequest) (*operations.StartPaymentInitiationCancellationAuthorisationResponse, error) {
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
func (s *PaymentInitiationServicePis) UpdatePaymentCancellationPsuData(ctx context.Context, request operations.UpdatePaymentCancellationPsuDataRequest) (*operations.UpdatePaymentCancellationPsuDataResponse, error) {
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
func (s *PaymentInitiationServicePis) UpdatePaymentPsuData(ctx context.Context, request operations.UpdatePaymentPsuDataRequest) (*operations.UpdatePaymentPsuDataResponse, error) {
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
