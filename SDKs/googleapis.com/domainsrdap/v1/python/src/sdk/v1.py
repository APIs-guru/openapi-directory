import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class V1:
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

    
    def domainsrdap_get_domains(self, request: operations.DomainsrdapGetDomainsRequest) -> operations.DomainsrdapGetDomainsResponse:
        r"""The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_get_entities(self, request: operations.DomainsrdapGetEntitiesRequest) -> operations.DomainsrdapGetEntitiesResponse:
        r"""The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/entities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_get_help(self, request: operations.DomainsrdapGetHelpRequest) -> operations.DomainsrdapGetHelpResponse:
        r"""Get help information for the RDAP API, including links to documentation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/help"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetHelpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def domainsrdap_get_ip(self, request: operations.DomainsrdapGetIPRequest) -> operations.DomainsrdapGetIPResponse:
        r"""The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ip"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def domainsrdap_get_nameservers(self, request: operations.DomainsrdapGetNameserversRequest) -> operations.DomainsrdapGetNameserversResponse:
        r"""The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/nameservers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetNameserversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    