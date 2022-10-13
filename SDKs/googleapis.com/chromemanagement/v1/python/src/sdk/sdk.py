import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://chromemanagement.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def chromemanagement_customers_apps_count_chrome_app_requests(self, request: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest) -> operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/apps:countChromeAppRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeAppRequestsResponse])
                res.google_chrome_management_v1_count_chrome_app_requests_response = out

        return res

    
    
    def chromemanagement_customers_reports_count_chrome_devices_reaching_auto_expiration_date(self, request: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest) -> operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse])
                res.google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response = out

        return res

    
    
    def chromemanagement_customers_reports_count_chrome_devices_that_need_attention(self, request: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest) -> operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeDevicesThatNeedAttention", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse])
                res.google_chrome_management_v1_count_chrome_devices_that_need_attention_response = out

        return res

    
    
    def chromemanagement_customers_reports_count_chrome_hardware_fleet_devices(self, request: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest) -> operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeHardwareFleetDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse])
                res.google_chrome_management_v1_count_chrome_hardware_fleet_devices_response = out

        return res

    
    
    def chromemanagement_customers_reports_count_chrome_versions(self, request: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest) -> operations.ChromemanagementCustomersReportsCountChromeVersionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countChromeVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountChromeVersionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountChromeVersionsResponse])
                res.google_chrome_management_v1_count_chrome_versions_response = out

        return res

    
    
    def chromemanagement_customers_reports_count_installed_apps(self, request: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest) -> operations.ChromemanagementCustomersReportsCountInstalledAppsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:countInstalledApps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsCountInstalledAppsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1CountInstalledAppsResponse])
                res.google_chrome_management_v1_count_installed_apps_response = out

        return res

    
    
    def chromemanagement_customers_reports_find_installed_app_devices(self, request: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest) -> operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/reports:findInstalledAppDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse])
                res.google_chrome_management_v1_find_installed_app_devices_response = out

        return res

    
    
    def chromemanagement_customers_telemetry_devices_get(self, request: operations.ChromemanagementCustomersTelemetryDevicesGetRequest) -> operations.ChromemanagementCustomersTelemetryDevicesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersTelemetryDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1TelemetryDevice])
                res.google_chrome_management_v1_telemetry_device = out

        return res

    
    
    def chromemanagement_customers_telemetry_devices_list(self, request: operations.ChromemanagementCustomersTelemetryDevicesListRequest) -> operations.ChromemanagementCustomersTelemetryDevicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/telemetry/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromemanagementCustomersTelemetryDevicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromeManagementV1ListTelemetryDevicesResponse])
                res.google_chrome_management_v1_list_telemetry_devices_response = out

        return res

    