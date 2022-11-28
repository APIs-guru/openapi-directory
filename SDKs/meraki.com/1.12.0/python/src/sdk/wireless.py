import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Wireless:
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

    
    def create_network_wireless_rf_profile(self, request: operations.CreateNetworkWirelessRfProfileRequest) -> operations.CreateNetworkWirelessRfProfileResponse:
        r"""Creates new RF profile for this network
        Creates new RF profile for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_rf_profile_201_application_json_object = out

        return res

    
    def create_network_wireless_ssid_identity_psk(self, request: operations.CreateNetworkWirelessSsidIdentityPskRequest) -> operations.CreateNetworkWirelessSsidIdentityPskResponse:
        r"""Create an Identity PSK
        Create an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_wireless_ssid_identity_psk_201_application_json_object = out

        return res

    
    def delete_network_wireless_rf_profile(self, request: operations.DeleteNetworkWirelessRfProfileRequest) -> operations.DeleteNetworkWirelessRfProfileResponse:
        r"""Delete a RF Profile
        Delete a RF Profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_wireless_ssid_identity_psk(self, request: operations.DeleteNetworkWirelessSsidIdentityPskRequest) -> operations.DeleteNetworkWirelessSsidIdentityPskResponse:
        r"""Delete an Identity PSK
        Delete an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_device_wireless_bluetooth_settings(self, request: operations.GetDeviceWirelessBluetoothSettingsRequest) -> operations.GetDeviceWirelessBluetoothSettingsResponse:
        r"""Return the bluetooth settings for a wireless device
        Return the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_device_wireless_connection_stats(self, request: operations.GetDeviceWirelessConnectionStatsRequest) -> operations.GetDeviceWirelessConnectionStatsResponse:
        r"""Aggregated connectivity info for a given AP on this network
        Aggregated connectivity info for a given AP on this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_connection_stats_200_application_json_object = out

        return res

    
    def get_device_wireless_latency_stats(self, request: operations.GetDeviceWirelessLatencyStatsRequest) -> operations.GetDeviceWirelessLatencyStatsResponse:
        r"""Aggregated latency info for a given AP on this network
        Aggregated latency info for a given AP on this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_latency_stats_200_application_json_object = out

        return res

    
    def get_device_wireless_radio_settings(self, request: operations.GetDeviceWirelessRadioSettingsRequest) -> operations.GetDeviceWirelessRadioSettingsResponse:
        r"""Return the radio settings of a device
        Return the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def get_device_wireless_status(self, request: operations.GetDeviceWirelessStatusRequest) -> operations.GetDeviceWirelessStatusResponse:
        r"""Return the SSID statuses of an access point
        Return the SSID statuses of an access point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_status_200_application_json_object = out

        return res

    
    def get_network_wireless_air_marshal(self, request: operations.GetNetworkWirelessAirMarshalRequest) -> operations.GetNetworkWirelessAirMarshalResponse:
        r"""List Air Marshal scan results from a network
        List Air Marshal scan results from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/airMarshal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAirMarshalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_air_marshal_200_application_json_object = out

        return res

    
    def get_network_wireless_alternate_management_interface(self, request: operations.GetNetworkWirelessAlternateManagementInterfaceRequest) -> operations.GetNetworkWirelessAlternateManagementInterfaceResponse:
        r"""Return alternate management interface and devices with IP assigned
        Return alternate management interface and devices with IP assigned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    def get_network_wireless_billing(self, request: operations.GetNetworkWirelessBillingRequest) -> operations.GetNetworkWirelessBillingResponse:
        r"""Return the billing settings of this network
        Return the billing settings of this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_billing_200_application_json_object = out

        return res

    
    def get_network_wireless_bluetooth_settings(self, request: operations.GetNetworkWirelessBluetoothSettingsRequest) -> operations.GetNetworkWirelessBluetoothSettingsResponse:
        r"""Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_channel_utilization_history(self, request: operations.GetNetworkWirelessChannelUtilizationHistoryRequest) -> operations.GetNetworkWirelessChannelUtilizationHistoryResponse:
        r"""Return AP channel utilization over time for a device or network client
        Return AP channel utilization over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/channelUtilizationHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessChannelUtilizationHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_channel_utilization_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_connection_stats(self, request: operations.GetNetworkWirelessClientConnectionStatsRequest) -> operations.GetNetworkWirelessClientConnectionStatsResponse:
        r"""Aggregated connectivity info for a given client on this network
        Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_client_connectivity_events(self, request: operations.GetNetworkWirelessClientConnectivityEventsRequest) -> operations.GetNetworkWirelessClientConnectivityEventsResponse:
        r"""List the wireless connectivity events for a client within a network in the timespan.
        List the wireless connectivity events for a client within a network in the timespan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectivityEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectivityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connectivity_events_200_application_json_object = out

        return res

    
    def get_network_wireless_client_count_history(self, request: operations.GetNetworkWirelessClientCountHistoryRequest) -> operations.GetNetworkWirelessClientCountHistoryResponse:
        r"""Return wireless client counts over time for a network, device, or network client
        Return wireless client counts over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clientCountHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientCountHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_count_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_latency_history(self, request: operations.GetNetworkWirelessClientLatencyHistoryRequest) -> operations.GetNetworkWirelessClientLatencyHistoryResponse:
        r"""Return the latency history for a client
        Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_latency_stats(self, request: operations.GetNetworkWirelessClientLatencyStatsRequest) -> operations.GetNetworkWirelessClientLatencyStatsResponse:
        r"""Aggregated latency info for a given client on this network
        Aggregated latency info for a given client on this network. Clients are identified by their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_clients_connection_stats(self, request: operations.GetNetworkWirelessClientsConnectionStatsRequest) -> operations.GetNetworkWirelessClientsConnectionStatsResponse:
        r"""Aggregated connectivity info for this network, grouped by clients
        Aggregated connectivity info for this network, grouped by clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_clients_latency_stats(self, request: operations.GetNetworkWirelessClientsLatencyStatsRequest) -> operations.GetNetworkWirelessClientsLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by clients
        Aggregated latency info for this network, grouped by clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_connection_stats(self, request: operations.GetNetworkWirelessConnectionStatsRequest) -> operations.GetNetworkWirelessConnectionStatsResponse:
        r"""Aggregated connectivity info for this network
        Aggregated connectivity info for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_data_rate_history(self, request: operations.GetNetworkWirelessDataRateHistoryRequest) -> operations.GetNetworkWirelessDataRateHistoryResponse:
        r"""Return PHY data rates over time for a network, device, or network client
        Return PHY data rates over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/dataRateHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDataRateHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_data_rate_history_200_application_json_object = out

        return res

    
    def get_network_wireless_devices_connection_stats(self, request: operations.GetNetworkWirelessDevicesConnectionStatsRequest) -> operations.GetNetworkWirelessDevicesConnectionStatsResponse:
        r"""Aggregated connectivity info for this network, grouped by node
        Aggregated connectivity info for this network, grouped by node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_devices_latency_stats(self, request: operations.GetNetworkWirelessDevicesLatencyStatsRequest) -> operations.GetNetworkWirelessDevicesLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by node
        Aggregated latency info for this network, grouped by node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_failed_connections(self, request: operations.GetNetworkWirelessFailedConnectionsRequest) -> operations.GetNetworkWirelessFailedConnectionsResponse:
        r"""List of all failed client connection events on this network in a given time range
        List of all failed client connection events on this network in a given time range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/failedConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessFailedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_failed_connections_200_application_json_object = out

        return res

    
    def get_network_wireless_latency_history(self, request: operations.GetNetworkWirelessLatencyHistoryRequest) -> operations.GetNetworkWirelessLatencyHistoryResponse:
        r"""Return average wireless latency over time for a network, device, or network client
        Return average wireless latency over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_history_200_application_json_object = out

        return res

    
    def get_network_wireless_latency_stats(self, request: operations.GetNetworkWirelessLatencyStatsRequest) -> operations.GetNetworkWirelessLatencyStatsResponse:
        r"""Aggregated latency info for this network
        Aggregated latency info for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_mesh_statuses(self, request: operations.GetNetworkWirelessMeshStatusesRequest) -> operations.GetNetworkWirelessMeshStatusesResponse:
        r"""List wireless mesh statuses for repeaters
        List wireless mesh statuses for repeaters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/meshStatuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessMeshStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_mesh_statuses_200_application_json_object = out

        return res

    
    def get_network_wireless_rf_profile(self, request: operations.GetNetworkWirelessRfProfileRequest) -> operations.GetNetworkWirelessRfProfileResponse:
        r"""Return a RF profile
        Return a RF profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    def get_network_wireless_rf_profiles(self, request: operations.GetNetworkWirelessRfProfilesRequest) -> operations.GetNetworkWirelessRfProfilesResponse:
        r"""List the non-basic RF profiles for this network
        List the non-basic RF profiles for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessRfProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_rf_profiles_200_application_json_object = out

        return res

    
    def get_network_wireless_settings(self, request: operations.GetNetworkWirelessSettingsRequest) -> operations.GetNetworkWirelessSettingsResponse:
        r"""Return the wireless settings for a network
        Return the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_signal_quality_history(self, request: operations.GetNetworkWirelessSignalQualityHistoryRequest) -> operations.GetNetworkWirelessSignalQualityHistoryResponse:
        r"""Return signal quality (SNR/RSSI) over time for a device or network client
        Return signal quality (SNR/RSSI) over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/signalQualityHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSignalQualityHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_signal_quality_history_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid(self, request: operations.GetNetworkWirelessSsidRequest) -> operations.GetNetworkWirelessSsidResponse:
        r"""Return a single MR SSID
        Return a single MR SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_bonjour_forwarding(self, request: operations.GetNetworkWirelessSsidBonjourForwardingRequest) -> operations.GetNetworkWirelessSsidBonjourForwardingResponse:
        r"""List the Bonjour forwarding setting and rules for the SSID
        List the Bonjour forwarding setting and rules for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_device_type_group_policies(self, request: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""List the device type group policies for the SSID
        List the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_eap_override(self, request: operations.GetNetworkWirelessSsidEapOverrideRequest) -> operations.GetNetworkWirelessSsidEapOverrideResponse:
        r"""Return the EAP overridden parameters for an SSID
        Return the EAP overridden parameters for an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        r"""Return the L3 firewall rules for an SSID on an MR network
        Return the L3 firewall rules for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        r"""Return the L7 firewall rules for an SSID on an MR network
        Return the L7 firewall rules for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_hotspot20(self, request: operations.GetNetworkWirelessSsidHotspot20Request) -> operations.GetNetworkWirelessSsidHotspot20Response:
        r"""Return the Hotspot 2.0 settings for an SSID
        Return the Hotspot 2.0 settings for an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_identity_psk(self, request: operations.GetNetworkWirelessSsidIdentityPskRequest) -> operations.GetNetworkWirelessSsidIdentityPskResponse:
        r"""Return an Identity PSK
        Return an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_identity_psks(self, request: operations.GetNetworkWirelessSsidIdentityPsksRequest) -> operations.GetNetworkWirelessSsidIdentityPsksResponse:
        r"""List all Identity PSKs in a wireless network
        List all Identity PSKs in a wireless network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidIdentityPsksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_identity_psks_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_schedules(self, request: operations.GetNetworkWirelessSsidSchedulesRequest) -> operations.GetNetworkWirelessSsidSchedulesResponse:
        r"""List the outage schedule for the SSID
        List the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_splash_settings(self, request: operations.GetNetworkWirelessSsidSplashSettingsRequest) -> operations.GetNetworkWirelessSsidSplashSettingsResponse:
        r"""Display the splash page settings for the given SSID
        Display the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_traffic_shaping_rules(self, request: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.GetNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings for a SSID on an MR network
        Display the traffic shaping settings for a SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_vpn(self, request: operations.GetNetworkWirelessSsidVpnRequest) -> operations.GetNetworkWirelessSsidVpnResponse:
        r"""List the VPN settings for the SSID.
        List the VPN settings for the SSID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    
    def get_network_wireless_ssids(self, request: operations.GetNetworkWirelessSsidsRequest) -> operations.GetNetworkWirelessSsidsResponse:
        r"""List the MR SSIDs in a network
        List the MR SSIDs in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssids_200_application_json_object = out

        return res

    
    def get_network_wireless_usage_history(self, request: operations.GetNetworkWirelessUsageHistoryRequest) -> operations.GetNetworkWirelessUsageHistoryResponse:
        r"""Return AP usage over time for a device or network client
        Return AP usage over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_usage_history_200_application_json_object = out

        return res

    
    def update_device_wireless_bluetooth_settings(self, request: operations.UpdateDeviceWirelessBluetoothSettingsRequest) -> operations.UpdateDeviceWirelessBluetoothSettingsResponse:
        r"""Update the bluetooth settings for a wireless device
        Update the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_device_wireless_radio_settings(self, request: operations.UpdateDeviceWirelessRadioSettingsRequest) -> operations.UpdateDeviceWirelessRadioSettingsResponse:
        r"""Update the radio settings of a device
        Update the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_alternate_management_interface(self, request: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest) -> operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse:
        r"""Update alternate management interface and device static IP
        Update alternate management interface and device static IP
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/alternateManagementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_alternate_management_interface_200_application_json_object = out

        return res

    
    def update_network_wireless_billing(self, request: operations.UpdateNetworkWirelessBillingRequest) -> operations.UpdateNetworkWirelessBillingResponse:
        r"""Update the billing settings
        Update the billing settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/billing", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBillingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_billing_200_application_json_object = out

        return res

    
    def update_network_wireless_bluetooth_settings(self, request: operations.UpdateNetworkWirelessBluetoothSettingsRequest) -> operations.UpdateNetworkWirelessBluetoothSettingsResponse:
        r"""Update the Bluetooth settings for a network
        Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_rf_profile(self, request: operations.UpdateNetworkWirelessRfProfileRequest) -> operations.UpdateNetworkWirelessRfProfileResponse:
        r"""Updates specified RF profile for this network
        Updates specified RF profile for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/rfProfiles/{rfProfileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessRfProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_rf_profile_200_application_json_object = out

        return res

    
    def update_network_wireless_settings(self, request: operations.UpdateNetworkWirelessSettingsRequest) -> operations.UpdateNetworkWirelessSettingsResponse:
        r"""Update the wireless settings for a network
        Update the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid(self, request: operations.UpdateNetworkWirelessSsidRequest) -> operations.UpdateNetworkWirelessSsidResponse:
        r"""Update the attributes of an MR SSID
        Update the attributes of an MR SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_bonjour_forwarding(self, request: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest) -> operations.UpdateNetworkWirelessSsidBonjourForwardingResponse:
        r"""Update the bonjour forwarding setting and rules for the SSID
        Update the bonjour forwarding setting and rules for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidBonjourForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_bonjour_forwarding_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_device_type_group_policies(self, request: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest) -> operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
        r"""Update the device type group policies for the SSID
        Update the device type group policies for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_device_type_group_policies_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_eap_override(self, request: operations.UpdateNetworkWirelessSsidEapOverrideRequest) -> operations.UpdateNetworkWirelessSsidEapOverrideResponse:
        r"""Update the EAP overridden parameters for an SSID.
        Update the EAP overridden parameters for an SSID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidEapOverrideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_eap_override_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse:
        r"""Update the L3 firewall rules of an SSID on an MR network
        Update the L3 firewall rules of an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse:
        r"""Update the L7 firewall rules of an SSID on an MR network
        Update the L7 firewall rules of an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_hotspot20(self, request: operations.UpdateNetworkWirelessSsidHotspot20Request) -> operations.UpdateNetworkWirelessSsidHotspot20Response:
        r"""Update the Hotspot 2.0 settings of an SSID
        Update the Hotspot 2.0 settings of an SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidHotspot20Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_hotspot20_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_identity_psk(self, request: operations.UpdateNetworkWirelessSsidIdentityPskRequest) -> operations.UpdateNetworkWirelessSsidIdentityPskResponse:
        r"""Update an Identity PSK
        Update an Identity PSK
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidIdentityPskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_identity_psk_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_schedules(self, request: operations.UpdateNetworkWirelessSsidSchedulesRequest) -> operations.UpdateNetworkWirelessSsidSchedulesResponse:
        r"""Update the outage schedule for the SSID
        Update the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_splash_settings(self, request: operations.UpdateNetworkWirelessSsidSplashSettingsRequest) -> operations.UpdateNetworkWirelessSsidSplashSettingsResponse:
        r"""Modify the splash page settings for the given SSID
        Modify the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_traffic_shaping_rules(self, request: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest) -> operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings for an SSID on an MR network
        Update the traffic shaping settings for an SSID on an MR network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_vpn(self, request: operations.UpdateNetworkWirelessSsidVpnRequest) -> operations.UpdateNetworkWirelessSsidVpnResponse:
        r"""Update the VPN settings for the SSID
        Update the VPN settings for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_vpn_200_application_json_object = out

        return res

    