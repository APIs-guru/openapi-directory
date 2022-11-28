import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Devices:
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

    
    def cloudidentity_devices_create(self, request: operations.CloudidentityDevicesCreateRequest) -> operations.CloudidentityDevicesCreateResponse:
        r"""Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/devices"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_devices_device_users_approve(self, request: operations.CloudidentityDevicesDeviceUsersApproveRequest) -> operations.CloudidentityDevicesDeviceUsersApproveResponse:
        r"""Approves device to access user data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:approve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_devices_device_users_block(self, request: operations.CloudidentityDevicesDeviceUsersBlockRequest) -> operations.CloudidentityDevicesDeviceUsersBlockResponse:
        r"""Blocks device from accessing user data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:block", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_devices_device_users_cancel_wipe(self, request: operations.CloudidentityDevicesDeviceUsersCancelWipeRequest) -> operations.CloudidentityDevicesDeviceUsersCancelWipeResponse:
        r"""Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancelWipe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersCancelWipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_devices_device_users_client_states_list(self, request: operations.CloudidentityDevicesDeviceUsersClientStatesListRequest) -> operations.CloudidentityDevicesDeviceUsersClientStatesListResponse:
        r"""Lists the client states for the given search query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/clientStates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersClientStatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsCloudidentityDevicesV1ListClientStatesResponse])
                res.google_apps_cloudidentity_devices_v1_list_client_states_response = out

        return res

    
    def cloudidentity_devices_device_users_list(self, request: operations.CloudidentityDevicesDeviceUsersListRequest) -> operations.CloudidentityDevicesDeviceUsersListResponse:
        r"""Lists/Searches DeviceUsers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deviceUsers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse])
                res.google_apps_cloudidentity_devices_v1_list_device_users_response = out

        return res

    
    def cloudidentity_devices_device_users_lookup(self, request: operations.CloudidentityDevicesDeviceUsersLookupRequest) -> operations.CloudidentityDevicesDeviceUsersLookupResponse:
        r"""Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:lookup", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse])
                res.google_apps_cloudidentity_devices_v1_lookup_self_device_users_response = out

        return res

    
    def cloudidentity_devices_device_users_wipe(self, request: operations.CloudidentityDevicesDeviceUsersWipeRequest) -> operations.CloudidentityDevicesDeviceUsersWipeResponse:
        r"""Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the \"deviceUser\" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:wipe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesDeviceUsersWipeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_devices_list(self, request: operations.CloudidentityDevicesListRequest) -> operations.CloudidentityDevicesListResponse:
        r"""Lists/Searches devices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/devices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsCloudidentityDevicesV1ListDevicesResponse])
                res.google_apps_cloudidentity_devices_v1_list_devices_response = out

        return res

    