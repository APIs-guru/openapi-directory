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

var ServerList = []string{
	"https://onsched.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
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

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
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

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteSetupV1BusinessusersID - Permanently deletes businessUser object.
// Use this endpoint to permanently delete a businessUser.
func (s *SDK) DeleteSetupV1BusinessusersID(ctx context.Context, request operations.DeleteSetupV1BusinessusersIDRequest) (*operations.DeleteSetupV1BusinessusersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/businessusers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1BusinessusersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// DeleteSetupV1CalendarsBlockID - Delete a calendar block object
// Deletes a calendar block.
func (s *SDK) DeleteSetupV1CalendarsBlockID(ctx context.Context, request operations.DeleteSetupV1CalendarsBlockIDRequest) (*operations.DeleteSetupV1CalendarsBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/block/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1CalendarsBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1CalendarsID - Deletes a calendar object.
// Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
func (s *SDK) DeleteSetupV1CalendarsID(ctx context.Context, request operations.DeleteSetupV1CalendarsIDRequest) (*operations.DeleteSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1CompaniesDomainsID - Deletes a whitelisted domain for the authorized company
// Returns view of domain deleted
func (s *SDK) DeleteSetupV1CompaniesDomainsID(ctx context.Context, request operations.DeleteSetupV1CompaniesDomainsIDRequest) (*operations.DeleteSetupV1CompaniesDomainsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/domains/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1CompaniesDomainsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyDomainViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyDomainViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1CompaniesEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *SDK) DeleteSetupV1CompaniesEmailTemplatesMaster(ctx context.Context) (*operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/email/templates/master"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1CompaniesRegionsID - Delete a region
// Deletes a region.
//
// If the region is related to any business locations it cannot be deleted
func (s *SDK) DeleteSetupV1CompaniesRegionsID(ctx context.Context, request operations.DeleteSetupV1CompaniesRegionsIDRequest) (*operations.DeleteSetupV1CompaniesRegionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/regions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1CompaniesRegionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsID - Deletes a location object.
// Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
func (s *SDK) DeleteSetupV1LocationsID(ctx context.Context, request operations.DeleteSetupV1LocationsIDRequest) (*operations.DeleteSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDDeleteallimages - Deletes all images from location blob storage container
// An option exists to use upper case for matching the subdirectory name
// Legacy apps stored pics using upper case externalId. Api uses lower case names.
func (s *SDK) DeleteSetupV1LocationsIDDeleteallimages(ctx context.Context, request operations.DeleteSetupV1LocationsIDDeleteallimagesRequest) (*operations.DeleteSetupV1LocationsIDDeleteallimagesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/deleteallimages", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDDeleteallimagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *bool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteSetupV1LocationsIDDeleteallimages200ApplicationJSONBoolean = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDDeleteimage - Removes a location image
// Use this endpoint to delete a previously uploaded location image.
func (s *SDK) DeleteSetupV1LocationsIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1LocationsIDDeleteimageRequest) (*operations.DeleteSetupV1LocationsIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/deleteimage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDDeleteimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *SDK) DeleteSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDEmailTemplatesTemplateName - Deletes a custom email template
// Use this endpoint to remove a custom email template.
//
// Custom email templates created in the primary location are company scope and inherited by all locations
// unless overriden in a location. Templates created in any location other than the primary apply to that location only.
func (s *SDK) DeleteSetupV1LocationsIDEmailTemplatesTemplateName(ctx context.Context, request operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest) (*operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/{templateName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDGoogleServiceAccount - Remove authorized access to all google calendar users in an organization
// Use this endpoint to remove authorized access to all google calendar users.
// Calendars will no longer be synced for resources
func (s *SDK) DeleteSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// DeleteSetupV1LocationsIDServices - Deletes all location services from the specified location
// Use this endpoint to delete all location services for a location
func (s *SDK) DeleteSetupV1LocationsIDServices(ctx context.Context, request operations.DeleteSetupV1LocationsIDServicesRequest) (*operations.DeleteSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsServicesID - Deletes a location service from the specified location
// Use this endpoint to delete a location service for a location
func (s *SDK) DeleteSetupV1LocationsServicesID(ctx context.Context, request operations.DeleteSetupV1LocationsServicesIDRequest) (*operations.DeleteSetupV1LocationsServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1LocationsServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcegroupsID - Deletes a resource group object.
// Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
func (s *SDK) DeleteSetupV1ResourcegroupsID(ctx context.Context, request operations.DeleteSetupV1ResourcegroupsIDRequest) (*operations.DeleteSetupV1ResourcegroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resourcegroups/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcegroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceGroupViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesAllocationsID - Delete a resource allocation object
// Deletes a resource allocation.
func (s *SDK) DeleteSetupV1ResourcesAllocationsID(ctx context.Context, request operations.DeleteSetupV1ResourcesAllocationsIDRequest) (*operations.DeleteSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesBlockID - Delete a resource block object
// Deletes a resource block.
func (s *SDK) DeleteSetupV1ResourcesBlockID(ctx context.Context, request operations.DeleteSetupV1ResourcesBlockIDRequest) (*operations.DeleteSetupV1ResourcesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/block/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesID - Deletes a resource object.
// Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
func (s *SDK) DeleteSetupV1ResourcesID(ctx context.Context, request operations.DeleteSetupV1ResourcesIDRequest) (*operations.DeleteSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesIDDeleteimage - Removes a resource image
// Use this endpoint to delete a previously uploaded resource image.
func (s *SDK) DeleteSetupV1ResourcesIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1ResourcesIDDeleteimageRequest) (*operations.DeleteSetupV1ResourcesIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/deleteimage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcesIDDeleteimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ResourcesIDServices - Deletes resource services from the specified resource
// Use this endpoint to delete all resource services for a resource
func (s *SDK) DeleteSetupV1ResourcesIDServices(ctx context.Context, request operations.DeleteSetupV1ResourcesIDServicesRequest) (*operations.DeleteSetupV1ResourcesIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ResourcesIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesAllocationsID - Delete a service allocation object
// Deletes a service allocation.
func (s *SDK) DeleteSetupV1ServicesAllocationsID(ctx context.Context, request operations.DeleteSetupV1ServicesAllocationsIDRequest) (*operations.DeleteSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesBlockID - Delete a service block object
// Deletes a service block.
func (s *SDK) DeleteSetupV1ServicesBlockID(ctx context.Context, request operations.DeleteSetupV1ServicesBlockIDRequest) (*operations.DeleteSetupV1ServicesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/block/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesBookingwindowsID - Permanently deletes bookingWindow object.
// Use this endpoint to permanently delete a bookingWindow.
func (s *SDK) DeleteSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.DeleteSetupV1ServicesBookingwindowsIDRequest) (*operations.DeleteSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

func (s *SDK) DeleteSetupV1ServicesCalendarID(ctx context.Context, request operations.DeleteSetupV1ServicesCalendarIDRequest) (*operations.DeleteSetupV1ServicesCalendarIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/calendar/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesCalendarIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesID - Deletes a service object.
// Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
func (s *SDK) DeleteSetupV1ServicesID(ctx context.Context, request operations.DeleteSetupV1ServicesIDRequest) (*operations.DeleteSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1ServicesIDDeleteimage - Removes a service image
// Use this endpoint to delete a previously uploaded service image.
func (s *SDK) DeleteSetupV1ServicesIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1ServicesIDDeleteimageRequest) (*operations.DeleteSetupV1ServicesIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/deleteimage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSetupV1ServicesIDDeleteimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

func (s *SDK) GetPlanID(ctx context.Context, request operations.GetPlanIDRequest) (*operations.GetPlanIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{planId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPlanIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetSetupV1Appointments - Returns a list of appointments.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Appointments(ctx context.Context, request operations.GetSetupV1AppointmentsRequest) (*operations.GetSetupV1AppointmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/appointments"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1AppointmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1AppointmentsID - Returns an appointment object.
// The result returned is a single appointment object. A valid id is required to find the appointment.
//
// Find appointment id's using the GET consumer/v1/appointments end point.
func (s *SDK) GetSetupV1AppointmentsID(ctx context.Context, request operations.GetSetupV1AppointmentsIDRequest) (*operations.GetSetupV1AppointmentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/appointments/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1AppointmentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Businessusers - Returns a list of business users.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Businessusers(ctx context.Context, request operations.GetSetupV1BusinessusersRequest) (*operations.GetSetupV1BusinessusersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/businessusers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1BusinessusersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessUserListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1BusinessusersEmailCompanies - Returns a list of companies for the business user.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1BusinessusersEmailCompanies(ctx context.Context, request operations.GetSetupV1BusinessusersEmailCompaniesRequest) (*operations.GetSetupV1BusinessusersEmailCompaniesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/businessusers/{email}/companies", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1BusinessusersEmailCompaniesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthorizedCompanyListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthorizedCompanyListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1BusinessusersID - Returns a businessUser object.
// The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
func (s *SDK) GetSetupV1BusinessusersID(ctx context.Context, request operations.GetSetupV1BusinessusersIDRequest) (*operations.GetSetupV1BusinessusersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/businessusers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1BusinessusersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessUserViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessUserViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1BusinessusersPermissions - Returns a list of system roles and permission.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1BusinessusersPermissions(ctx context.Context, request operations.GetSetupV1BusinessusersPermissionsRequest) (*operations.GetSetupV1BusinessusersPermissionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/businessusers/permissions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1BusinessusersPermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessPermissionListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Calendars - Returns a list of calendars.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Calendars(ctx context.Context, request operations.GetSetupV1CalendarsRequest) (*operations.GetSetupV1CalendarsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/calendars"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsBlocksID - Update a calendar block
func (s *SDK) GetSetupV1CalendarsBlocksID(ctx context.Context, request operations.GetSetupV1CalendarsBlocksIDRequest) (*operations.GetSetupV1CalendarsBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/blocks/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsBlocksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsID - Returns a calendar object.
// The result returned is a single calendar object. An id is required to find the calendar.
func (s *SDK) GetSetupV1CalendarsID(ctx context.Context, request operations.GetSetupV1CalendarsIDRequest) (*operations.GetSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsIDBlocks - Returns a list of calendar blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1CalendarsIDBlocks(ctx context.Context, request operations.GetSetupV1CalendarsIDBlocksRequest) (*operations.GetSetupV1CalendarsIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/blocks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsIDBlocksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1CalendarsIDServices - Returns a list of services linked to a calendar.
// The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
func (s *SDK) GetSetupV1CalendarsIDServices(ctx context.Context, request operations.GetSetupV1CalendarsIDServicesRequest) (*operations.GetSetupV1CalendarsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Companies - Returns a company profile information of the authorized company
func (s *SDK) GetSetupV1Companies(ctx context.Context) (*operations.GetSetupV1CompaniesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesDomains - Returns a list of whitelisted domains for the authorized company
func (s *SDK) GetSetupV1CompaniesDomains(ctx context.Context) (*operations.GetSetupV1CompaniesDomainsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/domains"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesDomainsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyDomainListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyDomainListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesDomainsID - Returns a whitelisted domain for the authorized company
func (s *SDK) GetSetupV1CompaniesDomainsID(ctx context.Context, request operations.GetSetupV1CompaniesDomainsIDRequest) (*operations.GetSetupV1CompaniesDomainsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/domains/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesDomainsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyDomainViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyDomainViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesEmailTemplates - Returns email template list from the authorized company
// Returns a list of email templates that may be customized
// If the template has been customized, the customized property is true.
// The scope parameter indicates if the email template has been customized
// at Business Location level or Company level.
// This endpoint returns only company level templates so the scope is always company
func (s *SDK) GetSetupV1CompaniesEmailTemplates(ctx context.Context) (*operations.GetSetupV1CompaniesEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/email/templates"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesEmailTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EmailTemplateListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesEmailTemplatesMaster - Returns master email template settings
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *SDK) GetSetupV1CompaniesEmailTemplatesMaster(ctx context.Context) (*operations.GetSetupV1CompaniesEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/email/templates/master"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesEmailTemplatesTemplateName - Returns default or custom email template from the authorized company
// The default email template is returned when a custom template is not found
// The response content is in html format.
func (s *SDK) GetSetupV1CompaniesEmailTemplatesTemplateName(ctx context.Context, request operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest) (*operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/email/templates/{templateName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesRegions - Returns a list of regions.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1CompaniesRegions(ctx context.Context, request operations.GetSetupV1CompaniesRegionsRequest) (*operations.GetSetupV1CompaniesRegionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/regions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesRegionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1CompaniesRegionsID - Get a Region
func (s *SDK) GetSetupV1CompaniesRegionsID(ctx context.Context, request operations.GetSetupV1CompaniesRegionsIDRequest) (*operations.GetSetupV1CompaniesRegionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/regions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesRegionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CompaniesTimezonesDate - Returns timezone information for all supported Timezone's
// The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
func (s *SDK) GetSetupV1CompaniesTimezonesDate(ctx context.Context, request operations.GetSetupV1CompaniesTimezonesDateRequest) (*operations.GetSetupV1CompaniesTimezonesDateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/timezones/{date}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CompaniesTimezonesDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TimezoneViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TimezoneViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Customers - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Customers(ctx context.Context, request operations.GetSetupV1CustomersRequest) (*operations.GetSetupV1CustomersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/customers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CustomersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CustomersID - Returns a customer object.
// The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
// or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
func (s *SDK) GetSetupV1CustomersID(ctx context.Context, request operations.GetSetupV1CustomersIDRequest) (*operations.GetSetupV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/customers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CustomersIDPrivacy - Returns a customer privacy report data.
// The result returned contains customer data and customer appointments data
func (s *SDK) GetSetupV1CustomersIDPrivacy(ctx context.Context, request operations.GetSetupV1CustomersIDPrivacyRequest) (*operations.GetSetupV1CustomersIDPrivacyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/customers/{id}/privacy", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CustomersIDPrivacyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerPrivacyViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Locations - Returns a list of business locations.
// Use this api end point if you have multiple business locations in your company.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Locations(ctx context.Context, request operations.GetSetupV1LocationsRequest) (*operations.GetSetupV1LocationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsID - Returns a business location object.
// The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
func (s *SDK) GetSetupV1LocationsID(ctx context.Context, request operations.GetSetupV1LocationsIDRequest) (*operations.GetSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplates - Returns email template list from the authorized company
// Returns a list of email templates that may be customized
// If the template has been customized, the customized property is true.
// The scope parameter indicates if the email template has been customized
// at Business Location level or Company level.
// Only when querying the primary business location will company scope
// customized templates display. Otherwise, the scope shows if a template has been customized
// at the business location level.
func (s *SDK) GetSetupV1LocationsIDEmailTemplates(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDEmailTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EmailTemplateListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplatesMaster - Returns master email template settings
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *SDK) GetSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplatesTemplateName - Returns company default or custom email template from the specified location
// These are custom email templates defined with Business Scope at a location other than the primary.
// The default email template is returned when a custom email template is not found.
func (s *SDK) GetSetupV1LocationsIDEmailTemplatesTemplateName(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/{templateName}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDGoogleServiceAccount - Returns google service account info
// This endpoint will not go to production. It is temporary.
func (s *SDK) GetSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.GetSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.GetSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleServiceAccountCreds
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleServiceAccountCreds = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDServices - Returns a list of location services.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1LocationsIDServices(ctx context.Context, request operations.GetSetupV1LocationsIDServicesRequest) (*operations.GetSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessServiceListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1LocationsServicesID - Returns a single location services.
func (s *SDK) GetSetupV1LocationsServicesID(ctx context.Context, request operations.GetSetupV1LocationsServicesIDRequest) (*operations.GetSetupV1LocationsServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1LocationsServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessServiceViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1Resourcegroups - Returns a list of resourcegroups.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Resourcegroups(ctx context.Context, request operations.GetSetupV1ResourcegroupsRequest) (*operations.GetSetupV1ResourcegroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resourcegroups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcegroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceGroupListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcegroupsID - Returns a resourceGroup object.
// The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
func (s *SDK) GetSetupV1ResourcegroupsID(ctx context.Context, request operations.GetSetupV1ResourcegroupsIDRequest) (*operations.GetSetupV1ResourcegroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resourcegroups/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcegroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceGroupViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Resources - Returns a list of resources.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Resources(ctx context.Context, request operations.GetSetupV1ResourcesRequest) (*operations.GetSetupV1ResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesAllocationsID - Update a resource allocation
func (s *SDK) GetSetupV1ResourcesAllocationsID(ctx context.Context, request operations.GetSetupV1ResourcesAllocationsIDRequest) (*operations.GetSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAllocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesBlocksID - Update a resource block
func (s *SDK) GetSetupV1ResourcesBlocksID(ctx context.Context, request operations.GetSetupV1ResourcesBlocksIDRequest) (*operations.GetSetupV1ResourcesBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/blocks/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesBlocksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesID - Returns a resource object.
// The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
// or the GET consumer/v1/appointments end point.
func (s *SDK) GetSetupV1ResourcesID(ctx context.Context, request operations.GetSetupV1ResourcesIDRequest) (*operations.GetSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDAllocations - Returns a list of resource allocations.
// Resource allocations allow you to specify explicitly the times you are available as opposed to
// generating resource availability from the times that are not unavailable.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ResourcesIDAllocations(ctx context.Context, request operations.GetSetupV1ResourcesIDAllocationsRequest) (*operations.GetSetupV1ResourcesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/allocations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDAllocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAllocationListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesIDAvailability - Returns a list of weekly availability
// Use this endpoint to get weekly availability for a resource. The displayed
// available times represent the resource timezone. The resource timezone can
// be set to any world timezone. By default it is set to the Business timezone.
func (s *SDK) GetSetupV1ResourcesIDAvailability(ctx context.Context, request operations.GetSetupV1ResourcesIDAvailabilityRequest) (*operations.GetSetupV1ResourcesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/availability", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDBlocks - Returns a list of resource blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ResourcesIDBlocks(ctx context.Context, request operations.GetSetupV1ResourcesIDBlocksRequest) (*operations.GetSetupV1ResourcesIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/blocks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDBlocksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress - Returns a resource object.
// The result returned contains the google calendar authorization url
func (s *SDK) GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress(ctx context.Context, request operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest) (*operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarAuthViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarAuthViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress - Returns a resource object.
// The result returned contains the outlook calendar authorization url
func (s *SDK) GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress(ctx context.Context, request operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest) (*operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarAuthViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarAuthViewModel = out
		}
	}

	return res, nil
}

func (s *SDK) GetSetupV1ResourcesTimezones(ctx context.Context) (*operations.GetSetupV1ResourcesTimezonesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/timezones"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ResourcesTimezonesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SystemTimezoneViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SystemTimezoneViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Services - Returns a list of services.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1Services(ctx context.Context, request operations.GetSetupV1ServicesRequest) (*operations.GetSetupV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesAllocationsID - Get a service allocation
func (s *SDK) GetSetupV1ServicesAllocationsID(ctx context.Context, request operations.GetSetupV1ServicesAllocationsIDRequest) (*operations.GetSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesBlocksID - Get a service block
func (s *SDK) GetSetupV1ServicesBlocksID(ctx context.Context, request operations.GetSetupV1ServicesBlocksIDRequest) (*operations.GetSetupV1ServicesBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/blocks/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesBlocksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesBookingwindowsID - Get a booking window
func (s *SDK) GetSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.GetSetupV1ServicesBookingwindowsIDRequest) (*operations.GetSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesID - Returns a service object.
// The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
// or the GET consumer/v1/appointments end point.
func (s *SDK) GetSetupV1ServicesID(ctx context.Context, request operations.GetSetupV1ServicesIDRequest) (*operations.GetSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesIDAllocations - Returns a list of service allocations.
// This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
// against the service.
//
// You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
// pass in the service id.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ServicesIDAllocations(ctx context.Context, request operations.GetSetupV1ServicesIDAllocationsRequest) (*operations.GetSetupV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDAllocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ServicesIDAvailability - Returns a list of weekly availability
// Use this endpoint to get weekly availability for a service.
func (s *SDK) GetSetupV1ServicesIDAvailability(ctx context.Context, request operations.GetSetupV1ServicesIDAvailabilityRequest) (*operations.GetSetupV1ServicesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/availability", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesIDBlocks - Returns a list of service blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ServicesIDBlocks(ctx context.Context, request operations.GetSetupV1ServicesIDBlocksRequest) (*operations.GetSetupV1ServicesIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/blocks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDBlocksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ServicesIDBookingwindows - Returns a list of service booking windows.
// This endpoint is used to retrieve any booking windows related to the service
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ServicesIDBookingwindows(ctx context.Context, request operations.GetSetupV1ServicesIDBookingwindowsRequest) (*operations.GetSetupV1ServicesIDBookingwindowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/bookingwindows", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDBookingwindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1ServicesIDCalendar - Returns the linked calendar for the service
// Use this endpoint to get the linked calendar for the service.
// A service can only be linked to one calendar in a location.
func (s *SDK) GetSetupV1ServicesIDCalendar(ctx context.Context, request operations.GetSetupV1ServicesIDCalendarRequest) (*operations.GetSetupV1ServicesIDCalendarResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/calendar", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDCalendarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1ServicesIDResources - Returns a list of resources for the specified service.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetSetupV1ServicesIDResources(ctx context.Context, request operations.GetSetupV1ServicesIDResourcesRequest) (*operations.GetSetupV1ServicesIDResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/resources", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1ServicesIDResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceListViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Businessusers - Creates a new businessUser object.
// Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
// Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required.
// For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
//
// Business Roles:
// bizowner (Business Owner)
// bizadmin (Business Administrator)
// bizresource (Business User - Bookable Resource)
// bizclerk (Business User - Portal Booking Privileges)
// bizuser (Business User - Portal View Only Privileges)
func (s *SDK) PostSetupV1Businessusers(ctx context.Context, request operations.PostSetupV1BusinessusersRequest) (*operations.PostSetupV1BusinessusersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/businessusers"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1BusinessusersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessUserViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessUserViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Calendars - Creates a new calendar object.
// Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
// Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
// name is a required parameter<br /><br />
// type is a required parameter with a value of “resource”<br /><br />
// interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
// bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
// scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
// weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
func (s *SDK) PostSetupV1Calendars(ctx context.Context, request operations.PostSetupV1CalendarsRequest) (*operations.PostSetupV1CalendarsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/calendars"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CalendarsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1CalendarsIDBlock - Create a new calendar block
// Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Calendar blocks can be set to specific time ranges or for the whole day.
//
// Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily blocks will repeat for each day of the week for the date range specified.
//
// Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
// should continue indefinitely.
func (s *SDK) PostSetupV1CalendarsIDBlock(ctx context.Context, request operations.PostSetupV1CalendarsIDBlockRequest) (*operations.PostSetupV1CalendarsIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/block", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CalendarsIDBlockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Companies - Creates a company profile.
// Use this endpoint to create a new Company Profile.
// This endpoint is restricted by scope and limited to use by OnSched internal apps
//
// The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
// or a Microsoft Timezone e.g. Eastern Standard Time
func (s *SDK) PostSetupV1Companies(ctx context.Context, request operations.PostSetupV1CompaniesRequest) (*operations.PostSetupV1CompaniesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CompaniesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1CompaniesDomains - Creates a whitelisted domain for the authorized company
// Returns view of domain created
func (s *SDK) PostSetupV1CompaniesDomains(ctx context.Context, request operations.PostSetupV1CompaniesDomainsRequest) (*operations.PostSetupV1CompaniesDomainsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/domains"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CompaniesDomainsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyDomainViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyDomainViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1CompaniesEmailTemplatesMaster - Updates / creates custom master email template settings
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *SDK) PostSetupV1CompaniesEmailTemplatesMaster(ctx context.Context, request operations.PostSetupV1CompaniesEmailTemplatesMasterRequest) (*operations.PostSetupV1CompaniesEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/email/templates/master"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CompaniesEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1CompaniesRegions - Create a new region
// Creates a new region.
//
// Regions can be mapped to business locations. Locations can be filtered by region id
func (s *SDK) PostSetupV1CompaniesRegions(ctx context.Context, request operations.PostSetupV1CompaniesRegionsRequest) (*operations.PostSetupV1CompaniesRegionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies/regions"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CompaniesRegionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Locations - Creates a new location object.
// Use this endpoint to create a new business location.
//
// Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
// can define their own settings that override the company level settings.
//
// If you wish to update settings then pass in the settings element in the input.
// When you are working with the Primary location, then the settings will update the company level settings.
// Otherwise, the settings will update business location settings.
//
// If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
func (s *SDK) PostSetupV1Locations(ctx context.Context, request operations.PostSetupV1LocationsRequest) (*operations.PostSetupV1LocationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsBulk - Creates new location objects.
// Use this endpoint to create new business locations. The incoming list of
// locations cannot exceed 100 location objects for performance purposes.
//
// Each location object may consist of:
// Name: The Name of the location.
// AdminName: The Name of the location admin.
// AdminEmail: The email address of the location admin.
// TimezoneName: The IANA formatted name of the locations timezone.
// FriendlyId: A friendly id to use to refer to the location.
// Address: The physical address of the location.
// BusinessHours: The hours of operation of the location.
// Settings: Additional location options that can affect things like
// the book ahead restrictions, customer bookings per day, etc.
func (s *SDK) PostSetupV1LocationsBulk(ctx context.Context, request operations.PostSetupV1LocationsBulkRequest) (*operations.PostSetupV1LocationsBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations/bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDEmailTemplates - Uploads a custom email template
// Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
// Updates to the primary business location create company scoped custom templates
// Updates to non primary business locations create business location scoped custom templates
// The master template cannot be updated with this endpoint.
func (s *SDK) PostSetupV1LocationsIDEmailTemplates(ctx context.Context, request operations.PostSetupV1LocationsIDEmailTemplatesRequest) (*operations.PostSetupV1LocationsIDEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsIDEmailTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDEmailTemplatesMaster - Saves settings for the master email template
// Use this endpoint to a customize the master email template settings.
// Updates to the primary business location create company scoped master email template custom settings
// Updates to non primary business locations create business location scoped master email template custom settings
func (s *SDK) PostSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDGoogleServiceAccount - Authorize access to all google calendar users in an organization
// Use this endpoint to authorize access to all google calendar users.
// You must create a Google Service account as an admin of your GSuite,
// then save credentials as a Json Key file
func (s *SDK) PostSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.PostSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.PostSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleServiceAccountCreds
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleServiceAccountCreds = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDServices - Adds location services to the specified location
// Use this endpoint to explicitly define what company scoped services
// at this location are offered. GET locations allows serviceId as a
// search parameter.
func (s *SDK) PostSetupV1LocationsIDServices(ctx context.Context, request operations.PostSetupV1LocationsIDServicesRequest) (*operations.PostSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDUploadimage - Uploads a location image
// Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *SDK) PostSetupV1LocationsIDUploadimage(ctx context.Context, request operations.PostSetupV1LocationsIDUploadimageRequest) (*operations.PostSetupV1LocationsIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/uploadimage", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1LocationsIDUploadimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Resourcegroups - Creates a new resource group object.
// Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
// Email Address and a Name are required for creating a new resource.
func (s *SDK) PostSetupV1Resourcegroups(ctx context.Context, request operations.PostSetupV1ResourcegroupsRequest) (*operations.PostSetupV1ResourcegroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resourcegroups"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcegroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceGroupViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Resources - Creates a new resource object.
// Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br />
// Email Address and a Name are required for creating a new resource. <br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
func (s *SDK) PostSetupV1Resources(ctx context.Context, request operations.PostSetupV1ResourcesRequest) (*operations.PostSetupV1ResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesBulk - Creates new resource objects.
// Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
// Email Address and a Name are required for creating each new resource.<br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *SDK) PostSetupV1ResourcesBulk(ctx context.Context, request operations.PostSetupV1ResourcesBulkRequest) (*operations.PostSetupV1ResourcesBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/bulk"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDAllocations - Create a new resource allocation
// Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
// A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
//
// Resource allocations can be set to specific time ranges or for the whole day.
//
// Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily allocations will repeat for each day of the week for the date range specified.
//
// Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
// the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in
// the EndDate field to indicate the repeating block should continue indefinitely.
func (s *SDK) PostSetupV1ResourcesIDAllocations(ctx context.Context, request operations.PostSetupV1ResourcesIDAllocationsRequest) (*operations.PostSetupV1ResourcesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/allocations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesIDAllocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDBlock - Create a new resource block
// Creates a new resource block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily blocks will repeat for each day of the week for the date range specified.
//
// Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
// the EndDate field to indicate the repeating block should continue indefinitely.
func (s *SDK) PostSetupV1ResourcesIDBlock(ctx context.Context, request operations.PostSetupV1ResourcesIDBlockRequest) (*operations.PostSetupV1ResourcesIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/block", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesIDBlockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDServices - Adds resource services to the specified resource
// Use this endpoint to add resource services
func (s *SDK) PostSetupV1ResourcesIDServices(ctx context.Context, request operations.PostSetupV1ResourcesIDServicesRequest) (*operations.PostSetupV1ResourcesIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/services", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ResourcesIDUploadimage - Uploads a resource image
// Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *SDK) PostSetupV1ResourcesIDUploadimage(ctx context.Context, request operations.PostSetupV1ResourcesIDUploadimageRequest) (*operations.PostSetupV1ResourcesIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/uploadimage", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ResourcesIDUploadimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Services - Creates a new service object.
// Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
// The service Type defaults to 1 if not entered.
// The service Type can be one of the following values:
// 1 = Appointment
// 2 = Event
// 3 = Meeting
func (s *SDK) PostSetupV1Services(ctx context.Context, request operations.PostSetupV1ServicesRequest) (*operations.PostSetupV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesBookingwindows - Creates a new bookingWindow object.
// Use this endpoint to create a new bookingWindow.
func (s *SDK) PostSetupV1ServicesBookingwindows(ctx context.Context, request operations.PostSetupV1ServicesBookingwindowsRequest) (*operations.PostSetupV1ServicesBookingwindowsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services/bookingwindows"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesBookingwindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesCalendar - Links the service to a calendar
// Use this endpoint to link a service to a calendar.
func (s *SDK) PostSetupV1ServicesCalendar(ctx context.Context, request operations.PostSetupV1ServicesCalendarRequest) (*operations.PostSetupV1ServicesCalendarResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/services/calendar"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesCalendarResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceCalendarViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceCalendarViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDAllocations - Create a new service allocation
// Creates a new service allocation. You must specify a StartDate and EndDate.
// A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
//
// Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
//
// Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily allocations will repeat for each day of the week for the date range specified.
//
// Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
// should continue indefinitely.
func (s *SDK) PostSetupV1ServicesIDAllocations(ctx context.Context, request operations.PostSetupV1ServicesIDAllocationsRequest) (*operations.PostSetupV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDAllocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDAllocationsBulk - Create new service allocations in bulk
// Creates new service allocations in bulk. Refer to documentation
// for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
// for understanding how to populate the properties
//
// Use this endpoint only if you need to POST multiple allocations in one call
func (s *SDK) PostSetupV1ServicesIDAllocationsBulk(ctx context.Context, request operations.PostSetupV1ServicesIDAllocationsBulkRequest) (*operations.PostSetupV1ServicesIDAllocationsBulkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/allocations/bulk", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDAllocationsBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDBlock - Create a new service block
// Creates a new service block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
//
// Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily blocks will repeat for each day of the week for the date range specified.
//
// Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
// the EndDate field to indicate the repeating block should continue indefinitely.
func (s *SDK) PostSetupV1ServicesIDBlock(ctx context.Context, request operations.PostSetupV1ServicesIDBlockRequest) (*operations.PostSetupV1ServicesIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/block", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDBlockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceBlockViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1ServicesIDUploadimage - Uploads a service image
// Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *SDK) PostSetupV1ServicesIDUploadimage(ctx context.Context, request operations.PostSetupV1ServicesIDUploadimageRequest) (*operations.PostSetupV1ServicesIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/uploadimage", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1ServicesIDUploadimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1AppointmentsIDReassignResourceResourceID - Reassigns the appointment to the supplied resourceId
// The result returned is a single appointment object. A valid id is required to find the appointment.
//
// Find appointment id's using the GET consumer/v1/appointments end point.
func (s *SDK) PutSetupV1AppointmentsIDReassignResourceResourceID(ctx context.Context, request operations.PutSetupV1AppointmentsIDReassignResourceResourceIDRequest) (*operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/appointments/{id}/reassign/resource/{resourceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1BusinessusersID - Updates a businessUser object.
// Use this endpoint to update a businessUser.
func (s *SDK) PutSetupV1BusinessusersID(ctx context.Context, request operations.PutSetupV1BusinessusersIDRequest) (*operations.PutSetupV1BusinessusersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/businessusers/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1BusinessusersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessUserViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessUserViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsBlockID - Update a calendar block
// Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
func (s *SDK) PutSetupV1CalendarsBlockID(ctx context.Context, request operations.PutSetupV1CalendarsBlockIDRequest) (*operations.PutSetupV1CalendarsBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/block/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CalendarsBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsID - Updates a calendar object.
// Use this endpoint to update a calendar.
// Calendar availability is optional. If this element is not populated then weekly availability is not updated
func (s *SDK) PutSetupV1CalendarsID(ctx context.Context, request operations.PutSetupV1CalendarsIDRequest) (*operations.PutSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsIDRecover - Recovers a calendar object.
// Use this endpoint to recover a deleted calendar.
func (s *SDK) PutSetupV1CalendarsIDRecover(ctx context.Context, request operations.PutSetupV1CalendarsIDRecoverRequest) (*operations.PutSetupV1CalendarsIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CalendarsIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1Companies - Updates a company object.
// Use this endpoint to update the authorized company.
//
// Your client credentials resolve to a single company.
//
// The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
// or a Microsoft Timezone e.g. Eastern Standard Time
func (s *SDK) PutSetupV1Companies(ctx context.Context, request operations.PutSetupV1CompaniesRequest) (*operations.PutSetupV1CompaniesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/companies"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CompaniesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CompaniesDomainsID - Updates a whitelisted domain for the authorized company
// Returns view of domain updated
func (s *SDK) PutSetupV1CompaniesDomainsID(ctx context.Context, request operations.PutSetupV1CompaniesDomainsIDRequest) (*operations.PutSetupV1CompaniesDomainsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/domains/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CompaniesDomainsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CompanyDomainViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CompanyDomainViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CompaniesRegionsID - Update a region
// Updates a region.
//
// Regions can be mapped to business locations. Locations can be filtered by region id.
func (s *SDK) PutSetupV1CompaniesRegionsID(ctx context.Context, request operations.PutSetupV1CompaniesRegionsIDRequest) (*operations.PutSetupV1CompaniesRegionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/companies/regions/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CompaniesRegionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsID - Use this endpoint to change the scope of online booking settings
// Use this endpoint to update a business location.
//
// # The optional removeRegion query parameter is used to remove the region relationship from the location
//
// If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
//
// If all your settings are uniform across all locations then do not pass settings and the location will use the settings
// defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
// that needs different settings by providing settings in the update model.
func (s *SDK) PutSetupV1LocationsID(ctx context.Context, request operations.PutSetupV1LocationsIDRequest) (*operations.PutSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDHolidaysHolidayIDClosed - Sets a business holiday to open or closed.
// Use this endpoint to set business holidays to open or closed.
//
// If you pass in an asterisk for the holidayId then all business holidays
// will be set to the valaue
func (s *SDK) PutSetupV1LocationsIDHolidaysHolidayIDClosed(ctx context.Context, request operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest) (*operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDRecover - Recovers a location object.
// Use this endpoint to recover a deleted business location.
func (s *SDK) PutSetupV1LocationsIDRecover(ctx context.Context, request operations.PutSetupV1LocationsIDRecoverRequest) (*operations.PutSetupV1LocationsIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1LocationsIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDSettingsScopeSettingsScope - Changes the scope of OnlineBooking Settings.
// Use this endpoint to update a business location.
//
// settingsScope values are 0 = company scope, 1 = business location scope
// if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
// Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
// ///
func (s *SDK) PutSetupV1LocationsIDSettingsScopeSettingsScope(ctx context.Context, request operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest) (*operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcegroupsID - Updates a resource group object.
// Use this endpoint to update a resource group.
func (s *SDK) PutSetupV1ResourcegroupsID(ctx context.Context, request operations.PutSetupV1ResourcegroupsIDRequest) (*operations.PutSetupV1ResourcegroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resourcegroups/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcegroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceGroupViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcegroupsIDRecover - Recovers a resource group object.
// Use this endpoint to recover a deleted resource group.
func (s *SDK) PutSetupV1ResourcegroupsIDRecover(ctx context.Context, request operations.PutSetupV1ResourcegroupsIDRecoverRequest) (*operations.PutSetupV1ResourcegroupsIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resourcegroups/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcegroupsIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesAllocationsID - Update a resource allocation
// Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
func (s *SDK) PutSetupV1ResourcesAllocationsID(ctx context.Context, request operations.PutSetupV1ResourcesAllocationsIDRequest) (*operations.PutSetupV1ResourcesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/allocations/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesBlockID - Update a resource block
// Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
func (s *SDK) PutSetupV1ResourcesBlockID(ctx context.Context, request operations.PutSetupV1ResourcesBlockIDRequest) (*operations.PutSetupV1ResourcesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/block/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesBulk - Updates resource objects.
// Use this endpoint to update multiple resources.<br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *SDK) PutSetupV1ResourcesBulk(ctx context.Context, request operations.PutSetupV1ResourcesBulkRequest) (*operations.PutSetupV1ResourcesBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/resources/bulk"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModels = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesID - Updates a resource object.
// Use this endpoint to update a resource. <br /><br />
// Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
// while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
func (s *SDK) PutSetupV1ResourcesID(ctx context.Context, request operations.PutSetupV1ResourcesIDRequest) (*operations.PutSetupV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDAvailability - Updates Weekly Availability
// Use this endpoint to update resource availability. The Id parameter specifies the resource
// for which you are updating availability. Availability day entries do not need to be created.
// The availbility day entries are created when a resource object is created. They default to
// the business hours.
//
// Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
// Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
//
// OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
//
// To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
// to be unavailable, use the resource blocks endpoints.
//
// Times entered represent the
// timezone of the resource. Resources can belong to any world timezone.
func (s *SDK) PutSetupV1ResourcesIDAvailability(ctx context.Context, request operations.PutSetupV1ResourcesIDAvailabilityRequest) (*operations.PutSetupV1ResourcesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/availability", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDReassignAppointmentsResourceID - Reassigns appointments to another resource
// Use this endpoint to reassign appointments from one resource to another.
// If the startDate is not supplied, the default is today's date + 1 day;
// If the endDate is not supplied, all future appointments from the start date will be reassigned
// If the calendarId is not supplied the default is the primary calendar of the location.
func (s *SDK) PutSetupV1ResourcesIDReassignAppointmentsResourceID(ctx context.Context, request operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest) (*operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModels = out
		}
	}

	return res, nil
}

// PutSetupV1ResourcesIDRecover - Recovers a resource object.
// Use this endpoint to recover a deleted resource.
func (s *SDK) PutSetupV1ResourcesIDRecover(ctx context.Context, request operations.PutSetupV1ResourcesIDRecoverRequest) (*operations.PutSetupV1ResourcesIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/resources/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ResourcesIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesAllocationsID - Update a service allocation
// Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
func (s *SDK) PutSetupV1ServicesAllocationsID(ctx context.Context, request operations.PutSetupV1ServicesAllocationsIDRequest) (*operations.PutSetupV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/allocations/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesBlockID - Update a service block
// Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
func (s *SDK) PutSetupV1ServicesBlockID(ctx context.Context, request operations.PutSetupV1ServicesBlockIDRequest) (*operations.PutSetupV1ServicesBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/block/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesBookingwindowsID - Updates a bookingWindow object.
// Use this endpoint to update a booking window
func (s *SDK) PutSetupV1ServicesBookingwindowsID(ctx context.Context, request operations.PutSetupV1ServicesBookingwindowsIDRequest) (*operations.PutSetupV1ServicesBookingwindowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/bookingwindows/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesBookingwindowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingWindowViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingWindowViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesID - Updates a service object.
// Use this endpoint to update a service.
func (s *SDK) PutSetupV1ServicesID(ctx context.Context, request operations.PutSetupV1ServicesIDRequest) (*operations.PutSetupV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesIDAvailability - Updates Weekly Availability
// Use this endpoint to update service availability. The Id parameter specifies the service
// for which you are updating availability. Availability day entries do not need to be created.
// The availbility day entries are created when a service object is created. They default to
// the business hours.
//
// Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
// Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
//
// OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
//
// To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
// to be unavailable, use the resource blocks endpoints.
//
// Times entered represent the timezone of the business location.
func (s *SDK) PutSetupV1ServicesIDAvailability(ctx context.Context, request operations.PutSetupV1ServicesIDAvailabilityRequest) (*operations.PutSetupV1ServicesIDAvailabilityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/availability", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesIDAvailabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAvailabilityViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1ServicesIDRecover - Recovers a service object.
// Use this endpoint to recover a deleted service.
func (s *SDK) PutSetupV1ServicesIDRecover(ctx context.Context, request operations.PutSetupV1ServicesIDRecoverRequest) (*operations.PutSetupV1ServicesIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/services/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1ServicesIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}
