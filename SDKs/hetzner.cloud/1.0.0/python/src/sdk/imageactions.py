import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ImageActions:
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

    
    def get_images_id_actions(self, request: operations.GetImagesIDActionsRequest) -> operations.GetImagesIDActionsResponse:
        r"""Get all Actions for an Image
        Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_images_id_actions_action_id_(self, request: operations.GetImagesIDActionsActionIDRequest) -> operations.GetImagesIDActionsActionIDResponse:
        r"""Get an Action for an Image
        Returns a specific Action for an Image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_images_id_actions_change_protection(self, request: operations.PostImagesIDActionsChangeProtectionRequest) -> operations.PostImagesIDActionsChangeProtectionResponse:
        r"""Change Image Protection
        Changes the protection configuration of the Image. Can only be used on snapshots.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostImagesIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostImagesIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    