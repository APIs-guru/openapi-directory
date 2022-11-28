package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Customers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Customers {
	return &Customers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ChromemanagementCustomersAppsCountChromeAppRequests - Generate summary of app installation requests.
func (s *Customers) ChromemanagementCustomersAppsCountChromeAppRequests(ctx context.Context, request operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest) (*operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/apps:countChromeAppRequests", request.PathParams)

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

	res := &operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountChromeAppRequestsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountChromeAppRequestsResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
func (s *Customers) ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(ctx context.Context, request operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest) (*operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
func (s *Customers) ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(ctx context.Context, request operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest) (*operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsCountChromeHardwareFleetDevices - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
func (s *Customers) ChromemanagementCustomersReportsCountChromeHardwareFleetDevices(ctx context.Context, request operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest) (*operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:countChromeHardwareFleetDevices", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsCountChromeVersions - Generate report of installed Chrome versions.
func (s *Customers) ChromemanagementCustomersReportsCountChromeVersions(ctx context.Context, request operations.ChromemanagementCustomersReportsCountChromeVersionsRequest) (*operations.ChromemanagementCustomersReportsCountChromeVersionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:countChromeVersions", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsCountChromeVersionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountChromeVersionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountChromeVersionsResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsCountInstalledApps - Generate report of app installations.
func (s *Customers) ChromemanagementCustomersReportsCountInstalledApps(ctx context.Context, request operations.ChromemanagementCustomersReportsCountInstalledAppsRequest) (*operations.ChromemanagementCustomersReportsCountInstalledAppsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:countInstalledApps", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsCountInstalledAppsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1CountInstalledAppsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1CountInstalledAppsResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersReportsFindInstalledAppDevices - Generate report of devices that have a specified app installed.
func (s *Customers) ChromemanagementCustomersReportsFindInstalledAppDevices(ctx context.Context, request operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest) (*operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{customer}/reports:findInstalledAppDevices", request.PathParams)

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

	res := &operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1FindInstalledAppDevicesResponse = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersTelemetryDevicesGet - Get telemetry device.
func (s *Customers) ChromemanagementCustomersTelemetryDevicesGet(ctx context.Context, request operations.ChromemanagementCustomersTelemetryDevicesGetRequest) (*operations.ChromemanagementCustomersTelemetryDevicesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.ChromemanagementCustomersTelemetryDevicesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1TelemetryDevice
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1TelemetryDevice = out
		}
	}

	return res, nil
}

// ChromemanagementCustomersTelemetryDevicesList - List all telemetry devices.
func (s *Customers) ChromemanagementCustomersTelemetryDevicesList(ctx context.Context, request operations.ChromemanagementCustomersTelemetryDevicesListRequest) (*operations.ChromemanagementCustomersTelemetryDevicesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/telemetry/devices", request.PathParams)

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

	res := &operations.ChromemanagementCustomersTelemetryDevicesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleChromeManagementV1ListTelemetryDevicesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleChromeManagementV1ListTelemetryDevicesResponse = out
		}
	}

	return res, nil
}
