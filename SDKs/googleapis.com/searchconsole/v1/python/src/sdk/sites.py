import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Sites:
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

    
    def webmasters_sites_add(self, request: operations.WebmastersSitesAddRequest) -> operations.WebmastersSitesAddResponse:
        r""" Adds a site to the set of the user's sites in Search Console.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def webmasters_sites_delete(self, request: operations.WebmastersSitesDeleteRequest) -> operations.WebmastersSitesDeleteResponse:
        r""" Removes a site from the set of the user's Search Console sites.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def webmasters_sites_get(self, request: operations.WebmastersSitesGetRequest) -> operations.WebmastersSitesGetResponse:
        r""" Retrieves information about specific site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WmxSite])
                res.wmx_site = out

        return res

    
    def webmasters_sites_list(self, request: operations.WebmastersSitesListRequest) -> operations.WebmastersSitesListResponse:
        r""" Lists the user's Search Console sites.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webmasters/v3/sites"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SitesListResponse])
                res.sites_list_response = out

        return res

    