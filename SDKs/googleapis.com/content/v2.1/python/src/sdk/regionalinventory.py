import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Regionalinventory:
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

    
    def content_regionalinventory_custombatch(self, request: operations.ContentRegionalinventoryCustombatchRequest) -> operations.ContentRegionalinventoryCustombatchResponse:
        r"""Updates regional inventory for multiple products or regions in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionalinventory/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRegionalinventoryCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionalinventoryCustomBatchResponse])
                res.regionalinventory_custom_batch_response = out

        return res

    
    def content_regionalinventory_insert(self, request: operations.ContentRegionalinventoryInsertRequest) -> operations.ContentRegionalinventoryInsertResponse:
        r"""Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/products/{productId}/regionalinventory", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRegionalinventoryInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionalInventory])
                res.regional_inventory = out

        return res

    