import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelUtilizationHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessChannelUtilizationHistory - Return AP channel utilization over time for a device or network client
     *
     * Return AP channel utilization over time for a device or network client
    **/
    getNetworkWirelessChannelUtilizationHistory(req: operations.GetNetworkWirelessChannelUtilizationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessChannelUtilizationHistoryResponse>;
}
