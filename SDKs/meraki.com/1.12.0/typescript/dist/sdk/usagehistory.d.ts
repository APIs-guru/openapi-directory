import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsageHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceUplinksUsageHistory - Get the sent and received bytes for each uplink of a network.
     *
     * Get the sent and received bytes for each uplink of a network.
    **/
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * getNetworkClientUsageHistory - Return the client's daily usage history
     *
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * getNetworkWirelessUsageHistory - Return AP usage over time for a device or network client
     *
     * Return AP usage over time for a device or network client
    **/
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
}
