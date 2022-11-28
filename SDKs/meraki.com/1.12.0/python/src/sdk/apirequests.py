import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class APIRequests:
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

    
    def get_organization_api_requests(self, request: operations.GetOrganizationAPIRequestsRequest) -> operations.GetOrganizationAPIRequestsResponse:
        r"""List the API requests made by an organization
        List the API requests made by an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_200_application_json_object = out

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

    