import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FullHashes:
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

    
    def safebrowsing_full_hashes_find(self, request: operations.SafebrowsingFullHashesFindRequest) -> operations.SafebrowsingFullHashesFindResponse:
        r"""Finds the full hashes that match the requested hash prefixes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/fullHashes:find"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingFullHashesFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse])
                res.google_security_safebrowsing_v4_find_full_hashes_response = out

        return res

    