import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Overview:
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

    
    def get_device_camera_analytics_overview(self, request: operations.GetDeviceCameraAnalyticsOverviewRequest) -> operations.GetDeviceCameraAnalyticsOverviewResponse:
        r"""Returns an overview of aggregate analytics data for a timespan
        Returns an overview of aggregate analytics data for a timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_overview_200_application_json_object = out

        return res

    
    def get_network_clients_overview(self, request: operations.GetNetworkClientsOverviewRequest) -> operations.GetNetworkClientsOverviewResponse:
        r"""Return overview statistics for network clients
        Return overview statistics for network clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_overview_200_application_json_object = out

        return res

    
    def get_organization_api_requests_overview(self, request: operations.GetOrganizationAPIRequestsOverviewRequest) -> operations.GetOrganizationAPIRequestsOverviewResponse:
        r"""Return an aggregated overview of API requests data
        Return an aggregated overview of API requests data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_overview_200_application_json_object = out

        return res

    
    def get_organization_licenses_overview(self, request: operations.GetOrganizationLicensesOverviewRequest) -> operations.GetOrganizationLicensesOverviewResponse:
        r"""Return an overview of the license state for an organization
        Return an overview of the license state for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/overview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_overview_200_application_json_object = out

        return res

    