import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Enterprises:
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

    
    def smartdevicemanagement_enterprises_devices_execute_command(self, request: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest) -> operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse:
        r"""Executes a command to device managed by the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:executeCommand", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse])
                res.google_home_enterprise_sdm_v1_execute_device_command_response = out

        return res

    
    def smartdevicemanagement_enterprises_devices_list(self, request: operations.SmartdevicemanagementEnterprisesDevicesListRequest) -> operations.SmartdevicemanagementEnterprisesDevicesListResponse:
        r"""Lists devices managed by the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartdevicemanagementEnterprisesDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleHomeEnterpriseSdmV1ListDevicesResponse])
                res.google_home_enterprise_sdm_v1_list_devices_response = out

        return res

    
    def smartdevicemanagement_enterprises_structures_list(self, request: operations.SmartdevicemanagementEnterprisesStructuresListRequest) -> operations.SmartdevicemanagementEnterprisesStructuresListResponse:
        r"""Lists structures managed by the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/structures", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartdevicemanagementEnterprisesStructuresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse])
                res.google_home_enterprise_sdm_v1_list_structures_response = out

        return res

    
    def smartdevicemanagement_enterprises_structures_rooms_get(self, request: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest) -> operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse:
        r"""Gets a room managed by the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleHomeEnterpriseSdmV1Room])
                res.google_home_enterprise_sdm_v1_room = out

        return res

    
    def smartdevicemanagement_enterprises_structures_rooms_list(self, request: operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest) -> operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse:
        r"""Lists rooms managed by the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/rooms", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse])
                res.google_home_enterprise_sdm_v1_list_rooms_response = out

        return res

    