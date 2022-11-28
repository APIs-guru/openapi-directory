import requests
from sdk.models import operations
from . import utils

class Private:
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

    
    def get_api_docs(self) -> operations.GetAPIDocsResponse:
        r"""Browse API documentation
        Access api docs as served by Redoc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/docs"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIDocsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_swagger_ui(self) -> operations.GetAPISwaggerUIResponse:
        r"""Browse interactive API documentation
        Interactive API docs using swagger-ui
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/docs/swagger-ui"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPISwaggerUIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_autocomplete(self, request: operations.GetAutocompleteRequest) -> operations.GetAutocompleteResponse:
        r"""Get `autocomplete` objects.
        Search for the closest term to autocomplete in the search box.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/autocomplete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutocompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_disease_by_id(self, request: operations.GetDiseaseByIDRequest) -> operations.GetDiseaseByIDResponse:
        r"""Find information about a disease
        Get `disease` objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/disease/{disease}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiseaseByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_drug_by_id(self, request: operations.GetDrugByIDRequest) -> operations.GetDrugByIDResponse:
        r"""Get drug by ID
        Get `drug` objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/drug/{DRUG_ID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDrugByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ec_oby_id(self, request: operations.GetEcObyIDRequest) -> operations.GetEcObyIDResponse:
        r"""Get evidence code by ID
        Get `ECO` objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/eco/{ECO_ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEcObyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_quick_search(self, request: operations.GetQuickSearchRequest) -> operations.GetQuickSearchResponse:
        r"""Search most relevant results
        Get `search-result` objects. Enables search bar functionality.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/quicksearch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuickSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_relation_by_efoid(self, request: operations.GetRelationByEfoidRequest) -> operations.GetRelationByEfoidResponse:
        r"""Find related entities by disease
        Get `relation` objects starting from diseases.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/relation/disease/{disease}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationByEfoidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_relation_by_ensgid(self, request: operations.GetRelationByEnsgidRequest) -> operations.GetRelationByEnsgidResponse:
        r"""Find related entities by target
        Get `relation` objects starting from diseases.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/relation/target/{target}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelationByEnsgidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_swagger(self) -> operations.GetSwaggerResponse:
        r"""Get OpenAPI schema
        Get swagger.yaml specs for the API
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/swagger"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSwaggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_target_by_ensgid(self, request: operations.GetTargetByEnsgidRequest) -> operations.GetTargetByEnsgidResponse:
        r"""Find information about a target
        Get `target` objects.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/platform/private/target/{target}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetByEnsgidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_target_expression_by_ensgid(self, request: operations.GetTargetExpressionByEnsgidRequest) -> operations.GetTargetExpressionByEnsgidResponse:
        r"""Query expression levels
        Get `gene-expression` objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/target/expression"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetExpressionByEnsgidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_best_hit_search(self, request: operations.PostBestHitSearchRequest) -> operations.PostBestHitSearchResponse:
        r"""Find the best hit
        Fire the search method for multiple strings
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/besthitsearch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBestHitSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_disease_by_id(self, request: operations.PostDiseaseByIDRequest) -> operations.PostDiseaseByIDResponse:
        r"""Find information about a list of diseases
        Get `disease` objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/disease"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDiseaseByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_enrichment_target(self, request: operations.PostEnrichmentTargetRequest) -> operations.PostEnrichmentTargetResponse:
        r"""Enrichment analysis
        Returns an enrichment analysis for a list of targets passed in the body
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/enrichment/targets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnrichmentTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_relation(self, request: operations.PostRelationRequest) -> operations.PostRelationResponse:
        r"""Find related entities
        Get `relation` objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/relation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRelationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_target_by_ensgid(self, request: operations.PostTargetByEnsgidRequest) -> operations.PostTargetByEnsgidResponse:
        r"""Find information about a list of targets
        Get `target` objects. Used for the target profile page.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/target"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetByEnsgidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_target_expression_by_ensgid(self, request: operations.PostTargetExpressionByEnsgidRequest) -> operations.PostTargetExpressionByEnsgidResponse:
        r"""Batch query expression levels
        Get `gene-expression` objects.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/private/target/expression"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetExpressionByEnsgidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    