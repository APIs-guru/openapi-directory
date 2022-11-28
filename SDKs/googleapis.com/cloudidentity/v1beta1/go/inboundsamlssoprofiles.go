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

type InboundSamlSsoProfiles struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInboundSamlSsoProfiles(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *InboundSamlSsoProfiles {
	return &InboundSamlSsoProfiles{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CloudidentityInboundSamlSsoProfilesCreate - Creates an InboundSamlSsoProfile for a customer.
func (s *InboundSamlSsoProfiles) CloudidentityInboundSamlSsoProfilesCreate(ctx context.Context, request operations.CloudidentityInboundSamlSsoProfilesCreateRequest) (*operations.CloudidentityInboundSamlSsoProfilesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1beta1/inboundSamlSsoProfiles"

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

	res := &operations.CloudidentityInboundSamlSsoProfilesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd - Adds an IdpCredential. Up to 2 credentials are allowed.
func (s *InboundSamlSsoProfiles) CloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(ctx context.Context, request operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest) (*operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/idpCredentials:add", request.PathParams)

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

	res := &operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// CloudidentityInboundSamlSsoProfilesIdpCredentialsList - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
func (s *InboundSamlSsoProfiles) CloudidentityInboundSamlSsoProfilesIdpCredentialsList(ctx context.Context, request operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest) (*operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1beta1/{parent}/idpCredentials", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListIdpCredentialsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListIdpCredentialsResponse = out
		}
	}

	return res, nil
}

// CloudidentityInboundSamlSsoProfilesList - Lists InboundSamlSsoProfiles for a customer.
func (s *InboundSamlSsoProfiles) CloudidentityInboundSamlSsoProfilesList(ctx context.Context, request operations.CloudidentityInboundSamlSsoProfilesListRequest) (*operations.CloudidentityInboundSamlSsoProfilesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1beta1/inboundSamlSsoProfiles"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CloudidentityInboundSamlSsoProfilesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListInboundSamlSsoProfilesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListInboundSamlSsoProfilesResponse = out
		}
	}

	return res, nil
}
