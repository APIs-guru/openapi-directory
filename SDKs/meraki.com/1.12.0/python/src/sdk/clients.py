import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Clients:
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

    
    def get_device_clients(self, request: operations.GetDeviceClientsRequest) -> operations.GetDeviceClientsResponse:
        r"""List the clients of a device, up to a maximum of a month ago
        List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_clients_200_application_json_object = out

        return res

    
    def get_network_appliance_client_security_events(self, request: operations.GetNetworkApplianceClientSecurityEventsRequest) -> operations.GetNetworkApplianceClientSecurityEventsResponse:
        r"""List the security events for a client
        List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/clients/{clientId}/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceClientSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_client_security_events_200_application_json_object = out

        return res

    
    def get_network_client(self, request: operations.GetNetworkClientRequest) -> operations.GetNetworkClientResponse:
        r"""Return the client associated with the given identifier
        Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_200_application_json_object = out

        return res

    
    def get_network_client_policy(self, request: operations.GetNetworkClientPolicyRequest) -> operations.GetNetworkClientPolicyResponse:
        r"""Return the policy assigned to a client on the network
        Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_policy_200_application_json_object = out

        return res

    
    def get_network_client_splash_authorization_status(self, request: operations.GetNetworkClientSplashAuthorizationStatusRequest) -> operations.GetNetworkClientSplashAuthorizationStatusResponse:
        r"""Return the splash authorization for a client, for each SSID they've associated with through splash
        Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def get_network_client_traffic_history(self, request: operations.GetNetworkClientTrafficHistoryRequest) -> operations.GetNetworkClientTrafficHistoryResponse:
        r"""Return the client's network traffic data over time
        Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/trafficHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientTrafficHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_traffic_history_200_application_json_object = out

        return res

    
    def get_network_client_usage_history(self, request: operations.GetNetworkClientUsageHistoryRequest) -> operations.GetNetworkClientUsageHistoryResponse:
        r"""Return the client's daily usage history
        Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/usageHistory", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_usage_history_200_application_json_object = out

        return res

    
    def get_network_clients(self, request: operations.GetNetworkClientsRequest) -> operations.GetNetworkClientsResponse:
        r"""List the clients that have used this network in the timespan
        List the clients that have used this network in the timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_200_application_json_object = out

        return res

    
    def get_network_clients_application_usage(self, request: operations.GetNetworkClientsApplicationUsageRequest) -> operations.GetNetworkClientsApplicationUsageResponse:
        r"""Return the application usage data for clients
        Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/applicationUsage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsApplicationUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_application_usage_200_application_json_object = out

        return res

    
    def get_network_clients_overview(self, request: operations.GetNetworkClientsOverviewRequest) -> operations.GetNetworkClientsOverviewResponse:
        r"""Return overview statistics for network clients
        Return overview statistics for network clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_overview_200_application_json_object = out

        return res

    
    def get_network_clients_usage_histories(self, request: operations.GetNetworkClientsUsageHistoriesRequest) -> operations.GetNetworkClientsUsageHistoriesResponse:
        r"""Return the usage histories for clients
        Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/usageHistories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsUsageHistoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_usage_histories_200_application_json_object = out

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

    
    def provision_network_clients(self, request: operations.ProvisionNetworkClientsRequest) -> operations.ProvisionNetworkClientsResponse:
        r"""Provisions a client with a name and policy
        Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/provision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvisionNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.provision_network_clients_201_application_json_object = out

        return res

    
    def update_network_client_policy(self, request: operations.UpdateNetworkClientPolicyRequest) -> operations.UpdateNetworkClientPolicyResponse:
        r"""Update the policy assigned to a client on the network
        Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_policy_200_application_json_object = out

        return res

    
    def update_network_client_splash_authorization_status(self, request: operations.UpdateNetworkClientSplashAuthorizationStatusRequest) -> operations.UpdateNetworkClientSplashAuthorizationStatusResponse:
        r"""Update a client's splash authorization
        Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_splash_authorization_status_200_application_json_object = out

        return res

    