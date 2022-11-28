import requests
from sdk.models import operations
from . import utils

class SwaggerDocs:
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

    
    def facets(self, request: operations.FacetsRequest) -> operations.FacetsResponse:
        r"""View the facet information corresponding to a search
        In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Facets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FacetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/nsidcfacets+xml"):
                res.facets_200_application_nsidcfacets_plus_xml_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def id(self, request: operations.IDRequest) -> operations.IDResponse:
        r"""Suggest search terms based on a partial query
        In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/suggest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-suggestions+json"):
                res.id_200_application_x_suggestions_plus_json_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def open_search(self, request: operations.OpenSearchRequest) -> operations.OpenSearchResponse:
        r"""Search documents using the OpenSearch 1.1 Specification
        This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/OpenSearch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OpenSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/atom+xml"):
                res.open_search_200_application_atom_plus_xml_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def opensearch_description(self) -> operations.OpensearchDescriptionResponse:
        r"""Describes the web interface of NSIDC's data search engine
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/OpenSearchDescription"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OpensearchDescriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/opensearchdescription+xml"):
                res.opensearch_description_200_application_opensearchdescription_plus_xml_string = r.content

        return res

    