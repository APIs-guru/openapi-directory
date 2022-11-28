import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Customers:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def chromemanagement_customers_apps_count_chrome_app_requests(self, request: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest) -> operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse:
        r"""Generate summary of app installation requests.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/apps:countChromeAppRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeAppRequestsResponse])
                res.google_chrome_management_v1_count_chrome_app_requests_response = out

        return res

    
    def chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date(self, request: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest) -> operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse:
        r"""Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse])
                res.google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response = out

        return res

    
    def chromemanagement_customers_reports_count_chrome_devices_that_need_attention(self, request: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest) -> operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse:
        r"""Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse])
                res.google_chrome_management_v1_count_chrome_devices_that_need_attention_response = out

        return res

    
    def chromemanagement_customers_reports_count_chrome_hardware_fleet_devices(self, request: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest) -> operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse:
        r"""Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeHardwareFleetDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse])
                res.google_chrome_management_v1_count_chrome_hardware_fleet_devices_response = out

        return res

    
    def chromemanagement_customers_reports_count_chrome_versions(self, request: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest) -> operations.ChromemanagementCustomersReportsCountChromeVersionsResponse:
        r"""Generate report of installed Chrome versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeVersionsResponse])
                res.google_chrome_management_v1_count_chrome_versions_response = out

        return res

    
    def chromemanagement_customers_reports_count_installed_apps(self, request: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest) -> operations.ChromemanagementCustomersReportsCountInstalledAppsResponse:
        r"""Generate report of app installations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countInstalledApps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountInstalledAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountInstalledAppsResponse])
                res.google_chrome_management_v1_count_installed_apps_response = out

        return res

    
    def chromemanagement_customers_reports_find_installed_app_devices(self, request: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest) -> operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse:
        r"""Generate report of devices that have a specified app installed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/reports:findInstalledAppDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse])
                res.google_chrome_management_v1_find_installed_app_devices_response = out

        return res

    
    def chromemanagement_customers_telemetry_devices_get(self, request: operations.ChromemanagementCustomersTelemetryDevicesGetRequest) -> operations.ChromemanagementCustomersTelemetryDevicesGetResponse:
        r"""Get telemetry device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersTelemetryDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1TelemetryDevice])
                res.google_chrome_management_v1_telemetry_device = out

        return res

    
    def chromemanagement_customers_telemetry_devices_list(self, request: operations.ChromemanagementCustomersTelemetryDevicesListRequest) -> operations.ChromemanagementCustomersTelemetryDevicesListResponse:
        r"""List all telemetry devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/telemetry/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersTelemetryDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1ListTelemetryDevicesResponse])
                res.google_chrome_management_v1_list_telemetry_devices_response = out

        return res

    