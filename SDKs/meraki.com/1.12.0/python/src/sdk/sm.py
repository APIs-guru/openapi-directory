import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Sm:
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

    
    def checkin_network_sm_devices(self, request: operations.CheckinNetworkSmDevicesRequest) -> operations.CheckinNetworkSmDevicesResponse:
        r"""Force check-in a set of devices
        Force check-in a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/checkin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckinNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.checkin_network_sm_devices_200_application_json_object = out

        return res

    
    def create_network_sm_bypass_activation_lock_attempt(self, request: operations.CreateNetworkSmBypassActivationLockAttemptRequest) -> operations.CreateNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt
        Bypass activation lock attempt
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_bypass_activation_lock_attempt_201_application_json_object = out

        return res

    
    def create_network_sm_target_group(self, request: operations.CreateNetworkSmTargetGroupRequest) -> operations.CreateNetworkSmTargetGroupResponse:
        r"""Add a target group
        Add a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_target_group_201_application_json_object = out

        return res

    
    def delete_network_sm_target_group(self, request: operations.DeleteNetworkSmTargetGroupRequest) -> operations.DeleteNetworkSmTargetGroupResponse:
        r"""Delete a target group from a network
        Delete a target group from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_sm_user_access_device(self, request: operations.DeleteNetworkSmUserAccessDeviceRequest) -> operations.DeleteNetworkSmUserAccessDeviceResponse:
        r"""Delete a User Access Device
        Delete a User Access Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmUserAccessDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_sm_bypass_activation_lock_attempt(self, request: operations.GetNetworkSmBypassActivationLockAttemptRequest) -> operations.GetNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt status
        Bypass activation lock attempt status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_bypass_activation_lock_attempt_200_application_json_object = out

        return res

    
    def get_network_sm_device_cellular_usage_history(self, request: operations.GetNetworkSmDeviceCellularUsageHistoryRequest) -> operations.GetNetworkSmDeviceCellularUsageHistoryResponse:
        r"""Return the client's daily cellular data usage history
        Return the client's daily cellular data usage history. Usage data is in kilobytes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCellularUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_cellular_usage_history_200_application_json_object = out

        return res

    
    def get_network_sm_device_certs(self, request: operations.GetNetworkSmDeviceCertsRequest) -> operations.GetNetworkSmDeviceCertsResponse:
        r"""List the certs on a device
        List the certs on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/certs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_certs_200_application_json_object = out

        return res

    
    def get_network_sm_device_connectivity(self, request: operations.GetNetworkSmDeviceConnectivityRequest) -> operations.GetNetworkSmDeviceConnectivityResponse:
        r"""Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/connectivity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceConnectivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_connectivity_200_application_json_object = out

        return res

    
    def get_network_sm_device_desktop_logs(self, request: operations.GetNetworkSmDeviceDesktopLogsRequest) -> operations.GetNetworkSmDeviceDesktopLogsResponse:
        r"""Return historical records of various Systems Manager network connection details for desktop devices.
        Return historical records of various Systems Manager network connection details for desktop devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/desktopLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDesktopLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_desktop_logs_200_application_json_object = out

        return res

    
    def get_network_sm_device_device_command_logs(self, request: operations.GetNetworkSmDeviceDeviceCommandLogsRequest) -> operations.GetNetworkSmDeviceDeviceCommandLogsResponse:
        r"""Return historical records of commands sent to Systems Manager devices
        Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceCommandLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_command_logs_200_application_json_object = out

        return res

    
    def get_network_sm_device_device_profiles(self, request: operations.GetNetworkSmDeviceDeviceProfilesRequest) -> operations.GetNetworkSmDeviceDeviceProfilesResponse:
        r"""Get the profiles associated with a device
        Get the profiles associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_device_network_adapters(self, request: operations.GetNetworkSmDeviceNetworkAdaptersRequest) -> operations.GetNetworkSmDeviceNetworkAdaptersResponse:
        r"""List the network adapters of a device
        List the network adapters of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/networkAdapters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceNetworkAdaptersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_network_adapters_200_application_json_object = out

        return res

    
    def get_network_sm_device_performance_history(self, request: operations.GetNetworkSmDevicePerformanceHistoryRequest) -> operations.GetNetworkSmDevicePerformanceHistoryResponse:
        r"""Return historical records of various Systems Manager client metrics for desktop devices.
        Return historical records of various Systems Manager client metrics for desktop devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/performanceHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicePerformanceHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_performance_history_200_application_json_object = out

        return res

    
    def get_network_sm_device_restrictions(self, request: operations.GetNetworkSmDeviceRestrictionsRequest) -> operations.GetNetworkSmDeviceRestrictionsResponse:
        r"""List the restrictions on a device
        List the restrictions on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/restrictions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_restrictions_200_application_json_object = out

        return res

    
    def get_network_sm_device_security_centers(self, request: operations.GetNetworkSmDeviceSecurityCentersRequest) -> operations.GetNetworkSmDeviceSecurityCentersResponse:
        r"""List the security centers on a device
        List the security centers on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/securityCenters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSecurityCentersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_security_centers_200_application_json_object = out

        return res

    
    def get_network_sm_device_softwares(self, request: operations.GetNetworkSmDeviceSoftwaresRequest) -> operations.GetNetworkSmDeviceSoftwaresResponse:
        r"""Get a list of softwares associated with a device
        Get a list of softwares associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/softwares", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_softwares_200_application_json_object = out

        return res

    
    def get_network_sm_device_wlan_lists(self, request: operations.GetNetworkSmDeviceWlanListsRequest) -> operations.GetNetworkSmDeviceWlanListsResponse:
        r"""List the saved SSID names on a device
        List the saved SSID names on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/wlanLists", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceWlanListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_wlan_lists_200_application_json_object = out

        return res

    
    def get_network_sm_devices(self, request: operations.GetNetworkSmDevicesRequest) -> operations.GetNetworkSmDevicesResponse:
        r"""List the devices enrolled in an SM network with various specified fields and filters
        List the devices enrolled in an SM network with various specified fields and filters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_devices_200_application_json_object = out

        return res

    
    def get_network_sm_profiles(self, request: operations.GetNetworkSmProfilesRequest) -> operations.GetNetworkSmProfilesResponse:
        r"""List all profiles in a network
        List all profiles in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/profiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_target_group(self, request: operations.GetNetworkSmTargetGroupRequest) -> operations.GetNetworkSmTargetGroupResponse:
        r"""Return a target group
        Return a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_group_200_application_json_object = out

        return res

    
    def get_network_sm_target_groups(self, request: operations.GetNetworkSmTargetGroupsRequest) -> operations.GetNetworkSmTargetGroupsResponse:
        r"""List the target groups in this network
        List the target groups in this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_groups_200_application_json_object = out

        return res

    
    def get_network_sm_user_access_devices(self, request: operations.GetNetworkSmUserAccessDevicesRequest) -> operations.GetNetworkSmUserAccessDevicesResponse:
        r"""List User Access Devices and its Trusted Access Connections
        List User Access Devices and its Trusted Access Connections
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/userAccessDevices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserAccessDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_access_devices_200_application_json_object = out

        return res

    
    def get_network_sm_user_device_profiles(self, request: operations.GetNetworkSmUserDeviceProfilesRequest) -> operations.GetNetworkSmUserDeviceProfilesResponse:
        r"""Get the profiles associated with a user
        Get the profiles associated with a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/deviceProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_device_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_user_softwares(self, request: operations.GetNetworkSmUserSoftwaresRequest) -> operations.GetNetworkSmUserSoftwaresResponse:
        r"""Get a list of softwares associated with a user
        Get a list of softwares associated with a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users/{userId}/softwares", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUserSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_user_softwares_200_application_json_object = out

        return res

    
    def get_network_sm_users(self, request: operations.GetNetworkSmUsersRequest) -> operations.GetNetworkSmUsersResponse:
        r"""List the owners in an SM network with various specified fields and filters
        List the owners in an SM network with various specified fields and filters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_users_200_application_json_object = out

        return res

    
    def get_organization_sm_apns_cert(self, request: operations.GetOrganizationSmApnsCertRequest) -> operations.GetOrganizationSmApnsCertResponse:
        r"""Get the organization's APNS certificate
        Get the organization's APNS certificate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/apnsCert", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmApnsCertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_apns_cert_200_application_json_object = out

        return res

    
    def get_organization_sm_vpp_account(self, request: operations.GetOrganizationSmVppAccountRequest) -> operations.GetOrganizationSmVppAccountResponse:
        r"""Get a hash containing the unparsed token of the VPP account with the given ID
        Get a hash containing the unparsed token of the VPP account with the given ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts/{vppAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_account_200_application_json_object = out

        return res

    
    def get_organization_sm_vpp_accounts(self, request: operations.GetOrganizationSmVppAccountsRequest) -> operations.GetOrganizationSmVppAccountsResponse:
        r"""List the VPP accounts in the organization
        List the VPP accounts in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/sm/vppAccounts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationSmVppAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_sm_vpp_accounts_200_application_json_object = out

        return res

    
    def lock_network_sm_devices(self, request: operations.LockNetworkSmDevicesRequest) -> operations.LockNetworkSmDevicesResponse:
        r"""Lock a set of devices
        Lock a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/lock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LockNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.lock_network_sm_devices_200_application_json_object = out

        return res

    
    def modify_network_sm_devices_tags(self, request: operations.ModifyNetworkSmDevicesTagsRequest) -> operations.ModifyNetworkSmDevicesTagsResponse:
        r"""Add, delete, or update the tags of a set of devices
        Add, delete, or update the tags of a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/modifyTags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyNetworkSmDevicesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_network_sm_devices_tags_200_application_json_object = out

        return res

    
    def move_network_sm_devices(self, request: operations.MoveNetworkSmDevicesRequest) -> operations.MoveNetworkSmDevicesResponse:
        r"""Move a set of devices to a new network
        Move a set of devices to a new network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_network_sm_devices_200_application_json_object = out

        return res

    
    def refresh_network_sm_device_details(self, request: operations.RefreshNetworkSmDeviceDetailsRequest) -> operations.RefreshNetworkSmDeviceDetailsResponse:
        r"""Refresh the details of a device
        Refresh the details of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/refreshDetails", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshNetworkSmDeviceDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def unenroll_network_sm_device(self, request: operations.UnenrollNetworkSmDeviceRequest) -> operations.UnenrollNetworkSmDeviceResponse:
        r"""Unenroll a device
        Unenroll a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/unenroll", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnenrollNetworkSmDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unenroll_network_sm_device_200_application_json_object = out

        return res

    
    def update_network_sm_devices_fields(self, request: operations.UpdateNetworkSmDevicesFieldsRequest) -> operations.UpdateNetworkSmDevicesFieldsResponse:
        r"""Modify the fields of a device
        Modify the fields of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmDevicesFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_devices_fields_200_application_json_object = out

        return res

    
    def update_network_sm_target_group(self, request: operations.UpdateNetworkSmTargetGroupRequest) -> operations.UpdateNetworkSmTargetGroupResponse:
        r"""Update a target group
        Update a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_target_group_200_application_json_object = out

        return res

    
    def wipe_network_sm_devices(self, request: operations.WipeNetworkSmDevicesRequest) -> operations.WipeNetworkSmDevicesResponse:
        r"""Wipe a device
        Wipe a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/wipe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WipeNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.wipe_network_sm_devices_200_application_json_object = out

        return res

    