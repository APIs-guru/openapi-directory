import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConnectionStats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceWirelessConnectionStats - Aggregated connectivity info for a given AP on this network
     *
     * Aggregated connectivity info for a given AP on this network
    **/
    getDeviceWirelessConnectionStats(req: operations.GetDeviceWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientConnectionStats - Aggregated connectivity info for a given client on this network
     *
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
    **/
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientsConnectionStats - Aggregated connectivity info for this network, grouped by clients
     *
     * Aggregated connectivity info for this network, grouped by clients
    **/
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * getNetworkWirelessConnectionStats - Aggregated connectivity info for this network
     *
     * Aggregated connectivity info for this network
    **/
    getNetworkWirelessConnectionStats(req: operations.GetNetworkWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessConnectionStatsResponse>;
    /**
     * getNetworkWirelessDevicesConnectionStats - Aggregated connectivity info for this network, grouped by node
     *
     * Aggregated connectivity info for this network, grouped by node
    **/
    getNetworkWirelessDevicesConnectionStats(req: operations.GetNetworkWirelessDevicesConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesConnectionStatsResponse>;
}
