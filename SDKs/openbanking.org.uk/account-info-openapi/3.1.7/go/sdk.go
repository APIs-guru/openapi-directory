package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1/aisp",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// CreateAccountAccessConsents - Create Account Access Consents
func (s *SDK) CreateAccountAccessConsents(ctx context.Context, request operations.CreateAccountAccessConsentsRequest) (*operations.CreateAccountAccessConsentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/account-access-consents"

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

	res := &operations.CreateAccountAccessConsentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadConsentResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadConsentResponse1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 415:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// DeleteAccountAccessConsentsConsentID - Delete Account Access Consents
func (s *SDK) DeleteAccountAccessConsentsConsentID(ctx context.Context, request operations.DeleteAccountAccessConsentsConsentIDRequest) (*operations.DeleteAccountAccessConsentsConsentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/account-access-consents/{ConsentId}", request.PathParams)

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

	res := &operations.DeleteAccountAccessConsentsConsentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountAccessConsentsConsentID - Get Account Access Consents
func (s *SDK) GetAccountAccessConsentsConsentID(ctx context.Context, request operations.GetAccountAccessConsentsConsentIDRequest) (*operations.GetAccountAccessConsentsConsentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/account-access-consents/{ConsentId}", request.PathParams)

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

	res := &operations.GetAccountAccessConsentsConsentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadConsentResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadConsentResponse1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccounts - Get Accounts
func (s *SDK) GetAccounts(ctx context.Context, request operations.GetAccountsRequest) (*operations.GetAccountsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/accounts"

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

	res := &operations.GetAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadAccount6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadAccount6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadAccount6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadAccount6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountID - Get Accounts
func (s *SDK) GetAccountsAccountID(ctx context.Context, request operations.GetAccountsAccountIDRequest) (*operations.GetAccountsAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}", request.PathParams)

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

	res := &operations.GetAccountsAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadAccount6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadAccount6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadAccount6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadAccount6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDBalances - Get Balances
func (s *SDK) GetAccountsAccountIDBalances(ctx context.Context, request operations.GetAccountsAccountIDBalancesRequest) (*operations.GetAccountsAccountIDBalancesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/balances", request.PathParams)

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

	res := &operations.GetAccountsAccountIDBalancesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadBalance1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBalance1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadBalance1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBalance1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDBeneficiaries - Get Beneficiaries
func (s *SDK) GetAccountsAccountIDBeneficiaries(ctx context.Context, request operations.GetAccountsAccountIDBeneficiariesRequest) (*operations.GetAccountsAccountIDBeneficiariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/beneficiaries", request.PathParams)

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

	res := &operations.GetAccountsAccountIDBeneficiariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadBeneficiary5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBeneficiary5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadBeneficiary5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBeneficiary5 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDDirectDebits - Get Direct Debits
func (s *SDK) GetAccountsAccountIDDirectDebits(ctx context.Context, request operations.GetAccountsAccountIDDirectDebitsRequest) (*operations.GetAccountsAccountIDDirectDebitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/direct-debits", request.PathParams)

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

	res := &operations.GetAccountsAccountIDDirectDebitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadDirectDebit2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadDirectDebit2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadDirectDebit2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadDirectDebit2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDOffers - Get Offers
func (s *SDK) GetAccountsAccountIDOffers(ctx context.Context, request operations.GetAccountsAccountIDOffersRequest) (*operations.GetAccountsAccountIDOffersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/offers", request.PathParams)

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

	res := &operations.GetAccountsAccountIDOffersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadOffer1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadOffer1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadOffer1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadOffer1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDParties - Get Parties
func (s *SDK) GetAccountsAccountIDParties(ctx context.Context, request operations.GetAccountsAccountIDPartiesRequest) (*operations.GetAccountsAccountIDPartiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/parties", request.PathParams)

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

	res := &operations.GetAccountsAccountIDPartiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadParty3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty3 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadParty3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty3 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDParty - Get Parties
func (s *SDK) GetAccountsAccountIDParty(ctx context.Context, request operations.GetAccountsAccountIDPartyRequest) (*operations.GetAccountsAccountIDPartyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/party", request.PathParams)

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

	res := &operations.GetAccountsAccountIDPartyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadParty2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadParty2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDProduct - Get Products
func (s *SDK) GetAccountsAccountIDProduct(ctx context.Context, request operations.GetAccountsAccountIDProductRequest) (*operations.GetAccountsAccountIDProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/product", request.PathParams)

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

	res := &operations.GetAccountsAccountIDProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadProduct2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadProduct2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadProduct2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadProduct2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDScheduledPayments - Get Scheduled Payments
func (s *SDK) GetAccountsAccountIDScheduledPayments(ctx context.Context, request operations.GetAccountsAccountIDScheduledPaymentsRequest) (*operations.GetAccountsAccountIDScheduledPaymentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/scheduled-payments", request.PathParams)

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

	res := &operations.GetAccountsAccountIDScheduledPaymentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadScheduledPayment3 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadScheduledPayment3 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDStandingOrders - Get Standing Orders
func (s *SDK) GetAccountsAccountIDStandingOrders(ctx context.Context, request operations.GetAccountsAccountIDStandingOrdersRequest) (*operations.GetAccountsAccountIDStandingOrdersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/standing-orders", request.PathParams)

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

	res := &operations.GetAccountsAccountIDStandingOrdersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadStandingOrder6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStandingOrder6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadStandingOrder6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStandingOrder6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDStatements - Get Statements
func (s *SDK) GetAccountsAccountIDStatements(ctx context.Context, request operations.GetAccountsAccountIDStatementsRequest) (*operations.GetAccountsAccountIDStatementsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/statements", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountsAccountIDStatementsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDStatementsStatementID - Get Statements
func (s *SDK) GetAccountsAccountIDStatementsStatementID(ctx context.Context, request operations.GetAccountsAccountIDStatementsStatementIDRequest) (*operations.GetAccountsAccountIDStatementsStatementIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/statements/{StatementId}", request.PathParams)

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

	res := &operations.GetAccountsAccountIDStatementsStatementIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDStatementsStatementIDFile - Get Statements
func (s *SDK) GetAccountsAccountIDStatementsStatementIDFile(ctx context.Context, request operations.GetAccountsAccountIDStatementsStatementIDFileRequest) (*operations.GetAccountsAccountIDStatementsStatementIDFileResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/statements/{StatementId}/file", request.PathParams)

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

	res := &operations.GetAccountsAccountIDStatementsStatementIDFileResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.File = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.File = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDStatementsStatementIDTransactions - Get Transactions
func (s *SDK) GetAccountsAccountIDStatementsStatementIDTransactions(ctx context.Context, request operations.GetAccountsAccountIDStatementsStatementIDTransactionsRequest) (*operations.GetAccountsAccountIDStatementsStatementIDTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/statements/{StatementId}/transactions", request.PathParams)

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

	res := &operations.GetAccountsAccountIDStatementsStatementIDTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetAccountsAccountIDTransactions - Get Transactions
func (s *SDK) GetAccountsAccountIDTransactions(ctx context.Context, request operations.GetAccountsAccountIDTransactionsRequest) (*operations.GetAccountsAccountIDTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{AccountId}/transactions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountsAccountIDTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetBalances - Get Balances
func (s *SDK) GetBalances(ctx context.Context, request operations.GetBalancesRequest) (*operations.GetBalancesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/balances"

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

	res := &operations.GetBalancesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadBalance1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBalance1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadBalance1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBalance1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetBeneficiaries - Get Beneficiaries
func (s *SDK) GetBeneficiaries(ctx context.Context, request operations.GetBeneficiariesRequest) (*operations.GetBeneficiariesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/beneficiaries"

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

	res := &operations.GetBeneficiariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadBeneficiary5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBeneficiary5 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadBeneficiary5
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadBeneficiary5 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetDirectDebits - Get Direct Debits
func (s *SDK) GetDirectDebits(ctx context.Context, request operations.GetDirectDebitsRequest) (*operations.GetDirectDebitsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/direct-debits"

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

	res := &operations.GetDirectDebitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadDirectDebit2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadDirectDebit2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadDirectDebit2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadDirectDebit2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetOffers - Get Offers
func (s *SDK) GetOffers(ctx context.Context, request operations.GetOffersRequest) (*operations.GetOffersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/offers"

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

	res := &operations.GetOffersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadOffer1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadOffer1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadOffer1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadOffer1 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetParty - Get Parties
func (s *SDK) GetParty(ctx context.Context, request operations.GetPartyRequest) (*operations.GetPartyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/party"

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

	res := &operations.GetPartyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadParty2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadParty2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadParty2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetProducts - Get Products
func (s *SDK) GetProducts(ctx context.Context, request operations.GetProductsRequest) (*operations.GetProductsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/products"

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

	res := &operations.GetProductsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadProduct2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadProduct2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadProduct2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadProduct2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetScheduledPayments - Get Scheduled Payments
func (s *SDK) GetScheduledPayments(ctx context.Context, request operations.GetScheduledPaymentsRequest) (*operations.GetScheduledPaymentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/scheduled-payments"

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

	res := &operations.GetScheduledPaymentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadScheduledPayment3 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadScheduledPayment3 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetStandingOrders - Get Standing Orders
func (s *SDK) GetStandingOrders(ctx context.Context, request operations.GetStandingOrdersRequest) (*operations.GetStandingOrdersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/standing-orders"

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

	res := &operations.GetStandingOrdersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadStandingOrder6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStandingOrder6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadStandingOrder6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStandingOrder6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetStatements - Get Statements
func (s *SDK) GetStatements(ctx context.Context, request operations.GetStatementsRequest) (*operations.GetStatementsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statements"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStatementsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadStatement2
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadStatement2 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}

// GetTransactions - Get Transactions
func (s *SDK) GetTransactions(ctx context.Context, request operations.GetTransactionsRequest) (*operations.GetTransactionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/transactions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadTransaction6
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObReadTransaction6 = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 405:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 406:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/jose+jwe`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ObErrorResponse1 = out
		}
	}

	return res, nil
}
