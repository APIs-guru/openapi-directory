import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def cloudiot_projects_locations_registries_bind_device_to_gateway(self, request: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest) -> operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse:
        r"""Associates the device with the gateway.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:bindDeviceToGateway", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bind_device_to_gateway_response = out

        return res

    
    def cloudiot_projects_locations_registries_create(self, request: operations.CloudiotProjectsLocationsRegistriesCreateRequest) -> operations.CloudiotProjectsLocationsRegistriesCreateResponse:
        r"""Creates a device registry that contains devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/registries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRegistry])
                res.device_registry = out

        return res

    
    def cloudiot_projects_locations_registries_devices_config_versions_list(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse:
        r"""Lists the last few versions of the device configuration in descending order (i.e.: newest first).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/configVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDeviceConfigVersionsResponse])
                res.list_device_config_versions_response = out

        return res

    
    def cloudiot_projects_locations_registries_devices_create(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse:
        r"""Creates a device in a device registry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def cloudiot_projects_locations_registries_devices_delete(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse:
        r"""Deletes a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def cloudiot_projects_locations_registries_devices_get(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse:
        r"""Gets details about a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def cloudiot_projects_locations_registries_devices_modify_cloud_to_device_config(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse:
        r"""Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:modifyCloudToDeviceConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceConfig])
                res.device_config = out

        return res

    
    def cloudiot_projects_locations_registries_devices_patch(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse:
        r"""Updates a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def cloudiot_projects_locations_registries_devices_send_command_to_device(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse:
        r"""Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:sendCommandToDevice", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.send_command_to_device_response = out

        return res

    
    def cloudiot_projects_locations_registries_devices_states_list(self, request: operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest) -> operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse:
        r"""Lists the last few versions of the device state in descending order (i.e.: newest first).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/states", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDeviceStatesResponse])
                res.list_device_states_response = out

        return res

    
    def cloudiot_projects_locations_registries_groups_devices_list(self, request: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest) -> operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse:
        r"""List devices in a device registry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDevicesResponse])
                res.list_devices_response = out

        return res

    
    def cloudiot_projects_locations_registries_groups_get_iam_policy(self, request: operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest) -> operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudiot_projects_locations_registries_groups_set_iam_policy(self, request: operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest) -> operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudiot_projects_locations_registries_groups_test_iam_permissions(self, request: operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest) -> operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def cloudiot_projects_locations_registries_list(self, request: operations.CloudiotProjectsLocationsRegistriesListRequest) -> operations.CloudiotProjectsLocationsRegistriesListResponse:
        r"""Lists device registries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/registries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDeviceRegistriesResponse])
                res.list_device_registries_response = out

        return res

    
    def cloudiot_projects_locations_registries_unbind_device_from_gateway(self, request: operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest) -> operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse:
        r"""Deletes the association between the device and the gateway.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:unbindDeviceFromGateway", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unbind_device_from_gateway_response = out

        return res

    