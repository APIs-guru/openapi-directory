import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Netflow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkNetflow - Return the NetFlow traffic reporting settings for a network
     *
     * Return the NetFlow traffic reporting settings for a network
    **/
    getNetworkNetflow(req: operations.GetNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetflowResponse>;
    /**
     * updateNetworkNetflow - Update the NetFlow traffic reporting settings for a network
     *
     * Update the NetFlow traffic reporting settings for a network
    **/
    updateNetworkNetflow(req: operations.UpdateNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkNetflowResponse>;
}
