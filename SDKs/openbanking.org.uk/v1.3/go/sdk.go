package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var Servers = []string{
	"https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) GetAtms(ctx context.Context, request operations.GetAtmsRequest) (*operations.GetAtmsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/atms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAtmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetAtmsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetBranches(ctx context.Context, request operations.GetBranchesRequest) (*operations.GetBranchesResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/branches"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBranchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBranchesDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetBusinessCurrentAccounts(ctx context.Context, request operations.GetBusinessCurrentAccountsRequest) (*operations.GetBusinessCurrentAccountsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/business-current-accounts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBusinessCurrentAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetBusinessCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetCommercialCreditCards(ctx context.Context, request operations.GetCommercialCreditCardsRequest) (*operations.GetCommercialCreditCardsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/commercial-credit-cards"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCommercialCreditCardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetCommercialCreditCardsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetPersonalCurrentAccounts(ctx context.Context, request operations.GetPersonalCurrentAccountsRequest) (*operations.GetPersonalCurrentAccountsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/personal-current-accounts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPersonalCurrentAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetPersonalCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) GetUnsecuredSmeLoans(ctx context.Context, request operations.GetUnsecuredSmeLoansRequest) (*operations.GetUnsecuredSmeLoansResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/unsecured-sme-loans"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUnsecuredSmeLoansResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredErrorObject = out
		}
	case httpRes.StatusCode == 408:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndEightErrorObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FourHundredAndTwentyNineErrorObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredErrorObject = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoans503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FiveHundredAndThreeErrorObject = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out *operations.GetUnsecuredSmeLoansDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorObject = out
		}
	}

	return res, nil
}

func (s *SDK) HeadAtms(ctx context.Context, request operations.HeadAtmsRequest) (*operations.HeadAtmsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/atms"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadAtmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}

func (s *SDK) HeadBranches(ctx context.Context, request operations.HeadBranchesRequest) (*operations.HeadBranchesResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/branches"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadBranchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}

func (s *SDK) HeadBusinessCurrentAccounts(ctx context.Context, request operations.HeadBusinessCurrentAccountsRequest) (*operations.HeadBusinessCurrentAccountsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/business-current-accounts"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadBusinessCurrentAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}

func (s *SDK) HeadCommercialCreditCards(ctx context.Context, request operations.HeadCommercialCreditCardsRequest) (*operations.HeadCommercialCreditCardsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/commercial-credit-cards"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadCommercialCreditCardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}

func (s *SDK) HeadPersonalCurrentAccounts(ctx context.Context, request operations.HeadPersonalCurrentAccountsRequest) (*operations.HeadPersonalCurrentAccountsResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/personal-current-accounts"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadPersonalCurrentAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}

func (s *SDK) HeadUnsecuredSmeLoans(ctx context.Context, request operations.HeadUnsecuredSmeLoansRequest) (*operations.HeadUnsecuredSmeLoansResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/unsecured-sme-loans"

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadUnsecuredSmeLoansResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NoResponse = out
		}
	}

	return res, nil
}
