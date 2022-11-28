import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class WirelessProfiles:
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

    
    def create_network_camera_wireless_profile(self, request: operations.CreateNetworkCameraWirelessProfileRequest) -> operations.CreateNetworkCameraWirelessProfileResponse:
        r"""Creates a new camera wireless profile for this network.
        Creates a new camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def delete_network_camera_wireless_profile(self, request: operations.DeleteNetworkCameraWirelessProfileRequest) -> operations.DeleteNetworkCameraWirelessProfileResponse:
        r"""Delete an existing camera wireless profile for this network.
        Delete an existing camera wireless profile for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_device_camera_wireless_profiles(self, request: operations.GetDeviceCameraWirelessProfilesRequest) -> operations.GetDeviceCameraWirelessProfilesResponse:
        r"""Returns wireless profile assigned to the given camera
        Returns wireless profile assigned to the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profile(self, request: operations.GetNetworkCameraWirelessProfileRequest) -> operations.GetNetworkCameraWirelessProfileResponse:
        r"""Retrieve a single camera wireless profile.
        Retrieve a single camera wireless profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profile_200_application_json_object = out

        return res

    
    def get_network_camera_wireless_profiles(self, request: operations.GetNetworkCameraWirelessProfilesRequest) -> operations.GetNetworkCameraWirelessProfilesResponse:
        r"""List the camera wireless profiles for this network.
        List the camera wireless profiles for this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def update_device_camera_wireless_profiles(self, request: operations.UpdateDeviceCameraWirelessProfilesRequest) -> operations.UpdateDeviceCameraWirelessProfilesResponse:
        r"""Assign wireless profiles to the given camera
        Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/wirelessProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraWirelessProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_wireless_profiles_200_application_json_object = out

        return res

    
    def update_network_camera_wireless_profile(self, request: operations.UpdateNetworkCameraWirelessProfileRequest) -> operations.UpdateNetworkCameraWirelessProfileResponse:
        r"""Update an existing camera wireless profile in this network.
        Update an existing camera wireless profile in this network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCameraWirelessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_camera_wireless_profile_200_application_json_object = out

        return res

    