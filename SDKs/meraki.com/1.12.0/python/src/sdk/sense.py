import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Sense:
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

    
    def get_device_camera_sense(self, request: operations.GetDeviceCameraSenseRequest) -> operations.GetDeviceCameraSenseResponse:
        r"""Returns sense settings for a given camera
        Returns sense settings for a given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_200_application_json_object = out

        return res

    
    def get_device_camera_sense_object_detection_models(self, request: operations.GetDeviceCameraSenseObjectDetectionModelsRequest) -> operations.GetDeviceCameraSenseObjectDetectionModelsResponse:
        r"""Returns the MV Sense object detection model list for the given camera
        Returns the MV Sense object detection model list for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense/objectDetectionModels", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraSenseObjectDetectionModelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_sense_object_detection_models_200_application_json_object = out

        return res

    
    def update_device_camera_sense(self, request: operations.UpdateDeviceCameraSenseRequest) -> operations.UpdateDeviceCameraSenseResponse:
        r"""Update sense settings for the given camera
        Update sense settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/sense", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraSenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_sense_200_application_json_object = out

        return res

    