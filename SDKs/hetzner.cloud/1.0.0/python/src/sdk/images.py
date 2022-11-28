import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Images:
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

    
    def delete_images_id_(self, request: operations.DeleteImagesIDRequest) -> operations.DeleteImagesIDResponse:
        r"""Delete an Image
        Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_images(self, request: operations.GetImagesRequest) -> operations.GetImagesResponse:
        r"""Get all Images
        Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/images"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImages200ApplicationJSON])
                res.get_images_200_application_json_object = out

        return res

    
    def get_images_id_(self, request: operations.GetImagesIDRequest) -> operations.GetImagesIDResponse:
        r"""Get an Image
        Returns a specific Image object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesID200ApplicationJSON])
                res.get_images_id_200_application_json_object = out

        return res

    
    def put_images_id_(self, request: operations.PutImagesIDRequest) -> operations.PutImagesIDResponse:
        r"""Update an Image
        Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
        
        Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutImagesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutImagesID200ApplicationJSON])
                res.put_images_id_200_application_json_object = out

        return res

    