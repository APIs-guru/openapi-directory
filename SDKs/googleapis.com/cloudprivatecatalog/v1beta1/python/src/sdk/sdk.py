import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://cloudprivatecatalog.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def cloudprivatecatalog_organizations_catalogs_search(self, request: operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest) -> operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}/catalogs:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def cloudprivatecatalog_organizations_products_search(self, request: operations.CloudprivatecatalogOrganizationsProductsSearchRequest) -> operations.CloudprivatecatalogOrganizationsProductsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}/products:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsProductsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def cloudprivatecatalog_organizations_versions_search(self, request: operations.CloudprivatecatalogOrganizationsVersionsSearchRequest) -> operations.CloudprivatecatalogOrganizationsVersionsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}/versions:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudprivatecatalogOrganizationsVersionsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    