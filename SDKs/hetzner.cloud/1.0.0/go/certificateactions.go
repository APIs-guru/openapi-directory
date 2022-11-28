package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type CertificateActions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCertificateActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CertificateActions {
	return &CertificateActions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCertificatesIDActions - Get all Actions for a Certificate
// Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
//
// Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
func (s *CertificateActions) GetCertificatesIDActions(ctx context.Context, request operations.GetCertificatesIDActionsRequest) (*operations.GetCertificatesIDActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/certificates/{id}/actions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCertificatesIDActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetCertificatesIDActionsActionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsResponse = out
		}
	}

	return res, nil
}

// GetCertificatesIDActionsActionID - Get an Action for a Certificate
// Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
func (s *CertificateActions) GetCertificatesIDActionsActionID(ctx context.Context, request operations.GetCertificatesIDActionsActionIDRequest) (*operations.GetCertificatesIDActionsActionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/certificates/{id}/actions/{action_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCertificatesIDActionsActionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetCertificatesIDActionsActionIDActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostCertificatesIDActionsRetry - Retry Issuance or Renewal
// Retry a failed Certificate issuance or renewal.
//
// Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
//
// #### Call specific error codes
//
// | Code                                                    | Description                                                               |
// |---------------------------------------------------------|---------------------------------------------------------------------------|
// | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
// | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
// | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
// | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
// | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
// | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
// | `dns_zone_not_found`                                    | DNS zone not found                                                        |
// | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
func (s *CertificateActions) PostCertificatesIDActionsRetry(ctx context.Context, request operations.PostCertificatesIDActionsRetryRequest) (*operations.PostCertificatesIDActionsRetryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/certificates/{id}/actions/retry", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCertificatesIDActionsRetryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostCertificatesIDActionsRetryActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}
