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

type AccountInformationServiceAis struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAccountInformationServiceAis(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AccountInformationServiceAis {
	return &AccountInformationServiceAis{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateConsent - Create consent
// This method create a consent resource, defining access rights to dedicated accounts of
// a given PSU-ID. These accounts are addressed explicitly in the method as
// parameters as a core function.
//
// **Side Effects**
// When this consent request is a request where the "recurringIndicator" equals "true",
// and if it exists already a former consent for recurring access on account information
// for the addressed PSU, then the former consent automatically expires as soon as the new
// consent request is authorised by the PSU.
//
// Optional Extension:
// As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.
//
// As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account.
// The relation to accounts is then handled afterwards between PSU and ASPSP.
// This option is not supported for the Embedded SCA Approach.
// As a last option, an ASPSP might in addition accept a command with access rights
//   - to see the list of available payment accounts or
//   - to see the list of available payment accounts with balances.
func (s *AccountInformationServiceAis) CreateConsent(ctx context.Context, request operations.CreateConsentRequest) (*operations.CreateConsentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/consents"

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

	res := &operations.CreateConsentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConsentsResponse201
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConsentsResponse201 = out
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

// DeleteConsent - Delete Consent
// The TPP can delete an account information consent object if needed.
func (s *AccountInformationServiceAis) DeleteConsent(ctx context.Context, request operations.DeleteConsentRequest) (*operations.DeleteConsentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}", request.PathParams)

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

	res := &operations.DeleteConsentResponse{
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

// GetAccountList - Read account list
// Read the identifiers of the available payment account together with
// booking balance information, depending on the consent granted.
//
// It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
// The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
// respectively the OAuth2 access token.
//
// Returns all identifiers of the accounts, to which an account access has been granted to through
// the /consents endpoint by the PSU.
// In addition, relevant information about the accounts and hyperlinks to corresponding account
// information resources are provided if a related consent has been already granted.
//
// Remark: Note that the /consents endpoint optionally offers to grant an access on all available
// payment accounts of a PSU.
// In this case, this endpoint will deliver the information about all available payment accounts
// of the PSU at this ASPSP.
func (s *AccountInformationServiceAis) GetAccountList(ctx context.Context, request operations.GetAccountListRequest) (*operations.GetAccountListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/accounts"

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

	res := &operations.GetAccountListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AccountList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccountList = out
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

// GetBalances - Read balance
// Reads account data from a given account addressed by "account-id".
//
// **Remark:** This account-id can be a tokenised identification due to data protection reason since the path
// information might be logged on intermediary servers within the ASPSP sphere.
// This account-id then can be retrieved by the "Get account list" call.
//
// The account-id is constant at least throughout the lifecycle of a given consent.
func (s *AccountInformationServiceAis) GetBalances(ctx context.Context, request operations.GetBalancesRequest) (*operations.GetBalancesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/{account-id}/balances", request.PathParams)

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
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReadAccountBalanceResponse200
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReadAccountBalanceResponse200 = out
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

// GetConsentAuthorisation - Get consent authorisation sub-resources request
// Return a list of all authorisation subresources IDs which have been created.
//
// This function returns an array of hyperlinks to all generated authorisation sub-resources.
func (s *AccountInformationServiceAis) GetConsentAuthorisation(ctx context.Context, request operations.GetConsentAuthorisationRequest) (*operations.GetConsentAuthorisationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}/authorisations", request.PathParams)

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

	res := &operations.GetConsentAuthorisationResponse{
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

// GetConsentInformation - Get consent request
// Returns the content of an account information consent object.
// This is returning the data for the TPP especially in cases,
// where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.
func (s *AccountInformationServiceAis) GetConsentInformation(ctx context.Context, request operations.GetConsentInformationRequest) (*operations.GetConsentInformationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}", request.PathParams)

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

	res := &operations.GetConsentInformationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConsentInformationResponse200JSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConsentInformationResponse200JSON = out
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

// GetConsentScaStatus - Read the SCA status of the consent authorisation
// This method returns the SCA status of a consent initiation's authorisation sub-resource.
func (s *AccountInformationServiceAis) GetConsentScaStatus(ctx context.Context, request operations.GetConsentScaStatusRequest) (*operations.GetConsentScaStatusResponse, error) {
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

// GetConsentStatus - Consent status request
// Read the status of an account information consent resource.
func (s *AccountInformationServiceAis) GetConsentStatus(ctx context.Context, request operations.GetConsentStatusRequest) (*operations.GetConsentStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/consents/{consentId}/status", request.PathParams)

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

	res := &operations.GetConsentStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConsentStatusResponse200
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConsentStatusResponse200 = out
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

// GetTransactionDetails - Read transaction details
// Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
// This call is only available on transactions as reported in a JSON format.
//
// **Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
// "Read Transaction List" call within the _links subfield.
func (s *AccountInformationServiceAis) GetTransactionDetails(ctx context.Context, request operations.GetTransactionDetailsRequest) (*operations.GetTransactionDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/{account-id}/transactions/{transactionId}", request.PathParams)

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

	res := &operations.GetTransactionDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTransactionDetails200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTransactionDetails200ApplicationJSONObject = out
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

// GetTransactionList - Read transaction list of an account
// Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
// "bookingStatus" together with balances.
//
// For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
// The ASPSP might add balance information, if transaction lists without balances are not supported.
func (s *AccountInformationServiceAis) GetTransactionList(ctx context.Context, request operations.GetTransactionListRequest) (*operations.GetTransactionListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/{account-id}/transactions", request.PathParams)

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

	res := &operations.GetTransactionListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TransactionsResponse200JSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TransactionsResponse200JSON = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `text/plain`):
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

// ReadAccountDetails - Read account details
// Reads details about an account, with balances where required.
// It is assumed that a consent of the PSU to
// this access is already given and stored on the ASPSP system.
// The addressed details of this account depends then on the stored consent addressed by consentId,
// respectively the OAuth2 access token.
//
// **NOTE:** The account-id can represent a multicurrency account.
// In this case the currency code is set to "XXX".
//
// Give detailed information about the addressed account.
//
// Give detailed information about the addressed account together with balance information
func (s *AccountInformationServiceAis) ReadAccountDetails(ctx context.Context, request operations.ReadAccountDetailsRequest) (*operations.ReadAccountDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/accounts/{account-id}", request.PathParams)

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

	res := &operations.ReadAccountDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ReadAccountDetails200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReadAccountDetails200ApplicationJSONObject = out
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
func (s *AccountInformationServiceAis) StartConsentAuthorisation(ctx context.Context, request operations.StartConsentAuthorisationRequest) (*operations.StartConsentAuthorisationResponse, error) {
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
func (s *AccountInformationServiceAis) UpdateConsentsPsuData(ctx context.Context, request operations.UpdateConsentsPsuDataRequest) (*operations.UpdateConsentsPsuDataResponse, error) {
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
