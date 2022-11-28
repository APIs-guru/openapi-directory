import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Clients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceClients - List the clients of a device, up to a maximum of a month ago
     *
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
    **/
    getDeviceClients(req: operations.GetDeviceClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceClientsResponse>;
    /**
     * getNetworkApplianceClientSecurityEvents - List the security events for a client
     *
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * getNetworkClient - Return the client associated with the given identifier
     *
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
    /**
     * getNetworkClientPolicy - Return the policy assigned to a client on the network
     *
     * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientPolicy(req: operations.GetNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientPolicyResponse>;
    /**
     * getNetworkClientSplashAuthorizationStatus - Return the splash authorization for a client, for each SSID they've associated with through splash
     *
     * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientSplashAuthorizationStatus(req: operations.GetNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * getNetworkClientTrafficHistory - Return the client's network traffic data over time
     *
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * getNetworkClientUsageHistory - Return the client's daily usage history
     *
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * getNetworkClients - List the clients that have used this network in the timespan
     *
     * List the clients that have used this network in the timespan
    **/
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * getNetworkClientsApplicationUsage - Return the application usage data for clients
     *
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * getNetworkClientsOverview - Return overview statistics for network clients
     *
     * Return overview statistics for network clients
    **/
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * getNetworkClientsUsageHistories - Return the usage histories for clients
     *
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * getNetworkWirelessClientConnectionStats - Aggregated connectivity info for a given client on this network
     *
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
    **/
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientConnectivityEvents - List the wireless connectivity events for a client within a network in the timespan.
     *
     * List the wireless connectivity events for a client within a network in the timespan.
    **/
    getNetworkWirelessClientConnectivityEvents(req: operations.GetNetworkWirelessClientConnectivityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectivityEventsResponse>;
    /**
     * getNetworkWirelessClientLatencyHistory - Return the latency history for a client
     *
     * Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
    **/
    getNetworkWirelessClientLatencyHistory(req: operations.GetNetworkWirelessClientLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyHistoryResponse>;
    /**
     * getNetworkWirelessClientLatencyStats - Aggregated latency info for a given client on this network
     *
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
    **/
    getNetworkWirelessClientLatencyStats(req: operations.GetNetworkWirelessClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyStatsResponse>;
    /**
     * getNetworkWirelessClientsConnectionStats - Aggregated connectivity info for this network, grouped by clients
     *
     * Aggregated connectivity info for this network, grouped by clients
    **/
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientsLatencyStats - Aggregated latency info for this network, grouped by clients
     *
     * Aggregated latency info for this network, grouped by clients
    **/
    getNetworkWirelessClientsLatencyStats(req: operations.GetNetworkWirelessClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsLatencyStatsResponse>;
    /**
     * provisionNetworkClients - Provisions a client with a name and policy
     *
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
    **/
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * updateNetworkClientPolicy - Update the policy assigned to a client on the network
     *
     * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientPolicy(req: operations.UpdateNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientPolicyResponse>;
    /**
     * updateNetworkClientSplashAuthorizationStatus - Update a client's splash authorization
     *
     * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientSplashAuthorizationStatus(req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse>;
}
