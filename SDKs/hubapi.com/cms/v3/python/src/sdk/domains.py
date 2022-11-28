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

    
    def get_cms_v3_domains_get_page(self, request: operations.GetCmsV3DomainsGetPageRequest) -> operations.GetCmsV3DomainsGetPageResponse:
        r"""Get current domains
        Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cms/v3/domains/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCmsV3DomainsGetPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionResponseWithTotalDomainForwardPaging])
                res.collection_response_with_total_domain_forward_paging = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_cms_v3_domains_domain_id_get_by_id(self, request: operations.GetCmsV3DomainsDomainIDGetByIDRequest) -> operations.GetCmsV3DomainsDomainIDGetByIDResponse:
        r"""Get a single domain
        Returns a single domains with the id specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cms/v3/domains/{domainId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCmsV3DomainsDomainIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    