import requests
from sdk.models import operations
from . import utils

class Organizations:
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

    
    def cloudprivatecatalog_organizations_catalogs_search(self, request: operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest) -> operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse:
        r"""Search Catalog resources that consumers have access to, within the
        scope of the consumer cloud resource hierarchy context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}/catalogs:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalog_organizations_products_search(self, request: operations.CloudprivatecatalogOrganizationsProductsSearchRequest) -> operations.CloudprivatecatalogOrganizationsProductsSearchResponse:
        r"""Search Product resources that consumers have access to, within the
        scope of the consumer cloud resource hierarchy context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}/products:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsProductsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def cloudprivatecatalog_organizations_versions_search(self, request: operations.CloudprivatecatalogOrganizationsVersionsSearchRequest) -> operations.CloudprivatecatalogOrganizationsVersionsSearchResponse:
        r"""Search Version resources that consumers have access to, within the
        scope of the consumer cloud resource hierarchy context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}/versions:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsVersionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    