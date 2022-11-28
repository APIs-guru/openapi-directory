import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Domains:
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

    
    def gmailpostmastertools_domains_list(self, request: operations.GmailpostmastertoolsDomainsListRequest) -> operations.GmailpostmastertoolsDomainsListResponse:
        r"""Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainsResponse])
                res.list_domains_response = out

        return res

    
    def gmailpostmastertools_domains_traffic_stats_get(self, request: operations.GmailpostmastertoolsDomainsTrafficStatsGetRequest) -> operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse:
        r"""Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrafficStats])
                res.traffic_stats = out

        return res

    
    def gmailpostmastertools_domains_traffic_stats_list(self, request: operations.GmailpostmastertoolsDomainsTrafficStatsListRequest) -> operations.GmailpostmastertoolsDomainsTrafficStatsListResponse:
        r"""List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/trafficStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailpostmastertoolsDomainsTrafficStatsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTrafficStatsResponse])
                res.list_traffic_stats_response = out

        return res

    