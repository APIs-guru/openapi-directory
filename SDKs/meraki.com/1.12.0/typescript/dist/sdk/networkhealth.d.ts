import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NetworkHealth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkNetworkHealthChannelUtilization - Get the channel utilization over each radio for all APs in a network.
     *
     * Get the channel utilization over each radio for all APs in a network.
    **/
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
}
