import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Shoppingadsprogram:
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

    
    def content_shoppingadsprogram_get(self, request: operations.ContentShoppingadsprogramGetRequest) -> operations.ContentShoppingadsprogramGetResponse:
        r"""Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/shoppingadsprogram", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShoppingadsprogramGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShoppingAdsProgramStatus])
                res.shopping_ads_program_status = out

        return res

    
    def content_shoppingadsprogram_requestreview(self, request: operations.ContentShoppingadsprogramRequestreviewRequest) -> operations.ContentShoppingadsprogramRequestreviewResponse:
        r"""Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/shoppingadsprogram/requestreview", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShoppingadsprogramRequestreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    