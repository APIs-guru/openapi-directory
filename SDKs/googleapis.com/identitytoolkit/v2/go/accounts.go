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

// IdentitytoolkitAccountsMfaEnrollmentFinalize - Finishes enrolling a second factor for the user.
func (s *Accounts) IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx context.Context, request operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest) (*operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/accounts/mfaEnrollment:finalize"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitAccountsMfaEnrollmentStart - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
func (s *Accounts) IdentitytoolkitAccountsMfaEnrollmentStart(ctx context.Context, request operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest) (*operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/accounts/mfaEnrollment:start"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitAccountsMfaEnrollmentWithdraw - Revokes one second factor from the enrolled second factors for an account.
func (s *Accounts) IdentitytoolkitAccountsMfaEnrollmentWithdraw(ctx context.Context, request operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest) (*operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/accounts/mfaEnrollment:withdraw"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitAccountsMfaSignInFinalize - Verifies the MFA challenge and performs sign-in
func (s *Accounts) IdentitytoolkitAccountsMfaSignInFinalize(ctx context.Context, request operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest) (*operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/accounts/mfaSignIn:finalize"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse = out
		}
	}

	return res, nil
}

// IdentitytoolkitAccountsMfaSignInStart - Sends the MFA challenge
func (s *Accounts) IdentitytoolkitAccountsMfaSignInStart(ctx context.Context, request operations.IdentitytoolkitAccountsMfaSignInStartRequest) (*operations.IdentitytoolkitAccountsMfaSignInStartResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/accounts/mfaSignIn:start"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.IdentitytoolkitAccountsMfaSignInStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse = out
		}
	}

	return res, nil
}
