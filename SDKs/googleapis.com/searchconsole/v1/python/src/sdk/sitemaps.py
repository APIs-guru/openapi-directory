import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Sitemaps:
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

    
    def webmasters_sitemaps_delete(self, request: operations.WebmastersSitemapsDeleteRequest) -> operations.WebmastersSitemapsDeleteResponse:
        r"""Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitemapsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def webmasters_sitemaps_get(self, request: operations.WebmastersSitemapsGetRequest) -> operations.WebmastersSitemapsGetResponse:
        r"""Retrieves information about a specific sitemap.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitemapsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WmxSitemap])
                res.wmx_sitemap = out

        return res

    
    def webmasters_sitemaps_list(self, request: operations.WebmastersSitemapsListRequest) -> operations.WebmastersSitemapsListResponse:
        r""" Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}/sitemaps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitemapsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SitemapsListResponse])
                res.sitemaps_list_response = out

        return res

    
    def webmasters_sitemaps_submit(self, request: operations.WebmastersSitemapsSubmitRequest) -> operations.WebmastersSitemapsSubmitResponse:
        r"""Submits a sitemap for a site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebmastersSitemapsSubmitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    