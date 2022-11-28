package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
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

// CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate - Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.
func (s *Accounts) CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate(ctx context.Context, request operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest) (*operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/channelPartnerRepricingConfigs", request.PathParams)

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

	res := &operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ChannelPartnerRepricingConfig = out
		}
	}

	return res, nil
}

// CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList - Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * channel partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.
func (s *Accounts) CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsList(ctx context.Context, request operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest) (*operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/channelPartnerRepricingConfigs", request.PathParams)

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

	res := &operations.CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsChannelPartnerLinksCreate - Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.
func (s *Accounts) CloudchannelAccountsChannelPartnerLinksCreate(ctx context.Context, request operations.CloudchannelAccountsChannelPartnerLinksCreateRequest) (*operations.CloudchannelAccountsChannelPartnerLinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/channelPartnerLinks", request.PathParams)

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

	res := &operations.CloudchannelAccountsChannelPartnerLinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ChannelPartnerLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ChannelPartnerLink = out
		}
	}

	return res, nil
}

// CloudchannelAccountsChannelPartnerLinksList - List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.
func (s *Accounts) CloudchannelAccountsChannelPartnerLinksList(ctx context.Context, request operations.CloudchannelAccountsChannelPartnerLinksListRequest) (*operations.CloudchannelAccountsChannelPartnerLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/channelPartnerLinks", request.PathParams)

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

	res := &operations.CloudchannelAccountsChannelPartnerLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListChannelPartnerLinksResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCheckCloudIdentityAccountsExist - Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.
func (s *Accounts) CloudchannelAccountsCheckCloudIdentityAccountsExist(ctx context.Context, request operations.CloudchannelAccountsCheckCloudIdentityAccountsExistRequest) (*operations.CloudchannelAccountsCheckCloudIdentityAccountsExistResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}:checkCloudIdentityAccountsExist", request.PathParams)

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

	res := &operations.CloudchannelAccountsCheckCloudIdentityAccountsExistResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersCreate - Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
func (s *Accounts) CloudchannelAccountsCustomersCreate(ctx context.Context, request operations.CloudchannelAccountsCustomersCreateRequest) (*operations.CloudchannelAccountsCustomersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customers", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1Customer
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1Customer = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersCustomerRepricingConfigsCreate - Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
func (s *Accounts) CloudchannelAccountsCustomersCustomerRepricingConfigsCreate(ctx context.Context, request operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest) (*operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customerRepricingConfigs", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1CustomerRepricingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1CustomerRepricingConfig = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersCustomerRepricingConfigsList - Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.
func (s *Accounts) CloudchannelAccountsCustomersCustomerRepricingConfigsList(ctx context.Context, request operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest) (*operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customerRepricingConfigs", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersCustomerRepricingConfigsPatch - Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
func (s *Accounts) CloudchannelAccountsCustomersCustomerRepricingConfigsPatch(ctx context.Context, request operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest) (*operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1CustomerRepricingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1CustomerRepricingConfig = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsActivate - Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsActivate(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsActivateRequest) (*operations.CloudchannelAccountsCustomersEntitlementsActivateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:activate", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsActivateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsChangeOffer - Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsChangeOffer(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsChangeOfferRequest) (*operations.CloudchannelAccountsCustomersEntitlementsChangeOfferResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:changeOffer", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsChangeOfferResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsChangeParameters - Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsChangeParameters(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsChangeParametersRequest) (*operations.CloudchannelAccountsCustomersEntitlementsChangeParametersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:changeParameters", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsChangeParametersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsChangeRenewalSettings - Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsChangeRenewalSettings(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsRequest) (*operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:changeRenewalSettings", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsCreate - Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsCreate(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsCreateRequest) (*operations.CloudchannelAccountsCustomersEntitlementsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/entitlements", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsList - Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsList(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsListRequest) (*operations.CloudchannelAccountsCustomersEntitlementsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/entitlements", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListEntitlementsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListEntitlementsResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsLookupOffer - Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsLookupOffer(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsLookupOfferRequest) (*operations.CloudchannelAccountsCustomersEntitlementsLookupOfferResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{entitlement}:lookupOffer", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsLookupOfferResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1Offer
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1Offer = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsStartPaidService - Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsStartPaidService(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceRequest) (*operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:startPaidService", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsStartPaidServiceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersEntitlementsSuspend - Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersEntitlementsSuspend(ctx context.Context, request operations.CloudchannelAccountsCustomersEntitlementsSuspendRequest) (*operations.CloudchannelAccountsCustomersEntitlementsSuspendResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:suspend", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersEntitlementsSuspendResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersImport - Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
func (s *Accounts) CloudchannelAccountsCustomersImport(ctx context.Context, request operations.CloudchannelAccountsCustomersImportRequest) (*operations.CloudchannelAccountsCustomersImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customers:import", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1Customer
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1Customer = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersList - List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
func (s *Accounts) CloudchannelAccountsCustomersList(ctx context.Context, request operations.CloudchannelAccountsCustomersListRequest) (*operations.CloudchannelAccountsCustomersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customers", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListCustomersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListCustomersResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersListPurchasableOffers - Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.
func (s *Accounts) CloudchannelAccountsCustomersListPurchasableOffers(ctx context.Context, request operations.CloudchannelAccountsCustomersListPurchasableOffersRequest) (*operations.CloudchannelAccountsCustomersListPurchasableOffersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}:listPurchasableOffers", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersListPurchasableOffersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListPurchasableOffersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListPurchasableOffersResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersListPurchasableSkus - Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.
func (s *Accounts) CloudchannelAccountsCustomersListPurchasableSkus(ctx context.Context, request operations.CloudchannelAccountsCustomersListPurchasableSkusRequest) (*operations.CloudchannelAccountsCustomersListPurchasableSkusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}:listPurchasableSkus", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersListPurchasableSkusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListPurchasableSkusResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListPurchasableSkusResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersProvisionCloudIdentity - Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersProvisionCloudIdentity(ctx context.Context, request operations.CloudchannelAccountsCustomersProvisionCloudIdentityRequest) (*operations.CloudchannelAccountsCustomersProvisionCloudIdentityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}:provisionCloudIdentity", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersProvisionCloudIdentityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersTransferEntitlements - Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersTransferEntitlements(ctx context.Context, request operations.CloudchannelAccountsCustomersTransferEntitlementsRequest) (*operations.CloudchannelAccountsCustomersTransferEntitlementsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}:transferEntitlements", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersTransferEntitlementsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsCustomersTransferEntitlementsToGoogle - Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
func (s *Accounts) CloudchannelAccountsCustomersTransferEntitlementsToGoogle(ctx context.Context, request operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleRequest) (*operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}:transferEntitlementsToGoogle", request.PathParams)

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

	res := &operations.CloudchannelAccountsCustomersTransferEntitlementsToGoogleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsListSubscribers - Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.
func (s *Accounts) CloudchannelAccountsListSubscribers(ctx context.Context, request operations.CloudchannelAccountsListSubscribersRequest) (*operations.CloudchannelAccountsListSubscribersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{account}:listSubscribers", request.PathParams)

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

	res := &operations.CloudchannelAccountsListSubscribersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListSubscribersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListSubscribersResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsListTransferableOffers - List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.
func (s *Accounts) CloudchannelAccountsListTransferableOffers(ctx context.Context, request operations.CloudchannelAccountsListTransferableOffersRequest) (*operations.CloudchannelAccountsListTransferableOffersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}:listTransferableOffers", request.PathParams)

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

	res := &operations.CloudchannelAccountsListTransferableOffersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListTransferableOffersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListTransferableOffersResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsListTransferableSkus - List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.
func (s *Accounts) CloudchannelAccountsListTransferableSkus(ctx context.Context, request operations.CloudchannelAccountsListTransferableSkusRequest) (*operations.CloudchannelAccountsListTransferableSkusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}:listTransferableSkus", request.PathParams)

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

	res := &operations.CloudchannelAccountsListTransferableSkusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListTransferableSkusResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListTransferableSkusResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsOffersList - Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
func (s *Accounts) CloudchannelAccountsOffersList(ctx context.Context, request operations.CloudchannelAccountsOffersListRequest) (*operations.CloudchannelAccountsOffersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/offers", request.PathParams)

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

	res := &operations.CloudchannelAccountsOffersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListOffersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListOffersResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsRegister - Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.
func (s *Accounts) CloudchannelAccountsRegister(ctx context.Context, request operations.CloudchannelAccountsRegisterRequest) (*operations.CloudchannelAccountsRegisterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{account}:register", request.PathParams)

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

	res := &operations.CloudchannelAccountsRegisterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1RegisterSubscriberResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1RegisterSubscriberResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsReportJobsFetchReportResults - Retrieves data generated by CloudChannelReportsService.RunReportJob.
func (s *Accounts) CloudchannelAccountsReportJobsFetchReportResults(ctx context.Context, request operations.CloudchannelAccountsReportJobsFetchReportResultsRequest) (*operations.CloudchannelAccountsReportJobsFetchReportResultsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{reportJob}:fetchReportResults", request.PathParams)

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

	res := &operations.CloudchannelAccountsReportJobsFetchReportResultsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1FetchReportResultsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1FetchReportResultsResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsReportsList - Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.
func (s *Accounts) CloudchannelAccountsReportsList(ctx context.Context, request operations.CloudchannelAccountsReportsListRequest) (*operations.CloudchannelAccountsReportsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/reports", request.PathParams)

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

	res := &operations.CloudchannelAccountsReportsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1ListReportsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1ListReportsResponse = out
		}
	}

	return res, nil
}

// CloudchannelAccountsReportsRun - Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.
func (s *Accounts) CloudchannelAccountsReportsRun(ctx context.Context, request operations.CloudchannelAccountsReportsRunRequest) (*operations.CloudchannelAccountsReportsRunResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}:run", request.PathParams)

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

	res := &operations.CloudchannelAccountsReportsRunResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// CloudchannelAccountsUnregister - Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.
func (s *Accounts) CloudchannelAccountsUnregister(ctx context.Context, request operations.CloudchannelAccountsUnregisterRequest) (*operations.CloudchannelAccountsUnregisterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{account}:unregister", request.PathParams)

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

	res := &operations.CloudchannelAccountsUnregisterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudChannelV1UnregisterSubscriberResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudChannelV1UnregisterSubscriberResponse = out
		}
	}

	return res, nil
}
