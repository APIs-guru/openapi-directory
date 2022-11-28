package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Accounts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAccounts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Accounts {
	return &Accounts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddUserToAccount - Add user to account
// Endpoint used to add a user to an account.
func (s *Accounts) AddUserToAccount(ctx context.Context, request operations.AddUserToAccountRequest) (*operations.AddUserToAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/users", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddUserToAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddUserToAccount201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddUserToAccount201ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddUserToAccount400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddUserToAccount400ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddUserToAccount401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddUserToAccount401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddUserToAccount429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddUserToAccount429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddUserToAccount500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddUserToAccount500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// RemoveUserFromAccount - Remove user from account
// Endpoint used to remove a user from an account.
func (s *Accounts) RemoveUserFromAccount(ctx context.Context, request operations.RemoveUserFromAccountRequest) (*operations.RemoveUserFromAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/users", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RemoveUserFromAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount201ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount400ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RemoveUserFromAccount500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RemoveUserFromAccount500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpsertAccount - Create or update account
// Endpoint used to create or update an account.
func (s *Accounts) UpsertAccount(ctx context.Context, request operations.UpsertAccountRequest) (*operations.UpsertAccountResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/accounts/upsert"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpsertAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpsertAccount201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertAccount201ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpsertAccount400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertAccount400ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpsertAccount401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertAccount401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpsertAccount429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertAccount429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpsertAccount500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertAccount500ApplicationJSONObject = out
		}
	}

	return res, nil
}
