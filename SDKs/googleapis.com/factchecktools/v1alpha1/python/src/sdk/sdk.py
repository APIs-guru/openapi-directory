import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://factchecktools.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def factchecktools_claims_search(self, request: operations.FactchecktoolsClaimsSearchRequest) -> operations.FactchecktoolsClaimsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha1/claims:search"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsClaimsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse])
                res.google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response = out

        return res

    
    
    def factchecktools_pages_create(self, request: operations.FactchecktoolsPagesCreateRequest) -> operations.FactchecktoolsPagesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha1/pages"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    
    
    def factchecktools_pages_delete(self, request: operations.FactchecktoolsPagesDeleteRequest) -> operations.FactchecktoolsPagesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def factchecktools_pages_get(self, request: operations.FactchecktoolsPagesGetRequest) -> operations.FactchecktoolsPagesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    
    
    def factchecktools_pages_list(self, request: operations.FactchecktoolsPagesListRequest) -> operations.FactchecktoolsPagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha1/pages"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse])
                res.google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response = out

        return res

    
    
    def factchecktools_pages_update(self, request: operations.FactchecktoolsPagesUpdateRequest) -> operations.FactchecktoolsPagesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    