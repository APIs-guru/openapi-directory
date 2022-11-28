import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Pages:
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

    
    def factchecktools_pages_create(self, request: operations.FactchecktoolsPagesCreateRequest) -> operations.FactchecktoolsPagesCreateResponse:
        r"""Create `ClaimReview` markup on a page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha1/pages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    
    def factchecktools_pages_delete(self, request: operations.FactchecktoolsPagesDeleteRequest) -> operations.FactchecktoolsPagesDeleteResponse:
        r"""Delete all `ClaimReview` markup on a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def factchecktools_pages_get(self, request: operations.FactchecktoolsPagesGetRequest) -> operations.FactchecktoolsPagesGetResponse:
        r"""Get all `ClaimReview` markup on a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    
    def factchecktools_pages_list(self, request: operations.FactchecktoolsPagesListRequest) -> operations.FactchecktoolsPagesListResponse:
        r"""List the `ClaimReview` markup pages for a specific URL or for an organization.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1alpha1/pages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse])
                res.google_factchecking_factchecktools_v1alpha1_list_claim_review_markup_pages_response = out

        return res

    
    def factchecktools_pages_update(self, request: operations.FactchecktoolsPagesUpdateRequest) -> operations.FactchecktoolsPagesUpdateResponse:
        r"""Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FactchecktoolsPagesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage])
                res.google_factchecking_factchecktools_v1alpha1_claim_review_markup_page = out

        return res

    