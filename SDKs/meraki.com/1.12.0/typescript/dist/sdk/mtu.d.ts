import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mtu {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchMtu - Return the MTU configuration
     *
     * Return the MTU configuration
    **/
    getNetworkSwitchMtu(req: operations.GetNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchMtuResponse>;
    /**
     * updateNetworkSwitchMtu - Update the MTU configuration
     *
     * Update the MTU configuration
    **/
    updateNetworkSwitchMtu(req: operations.UpdateNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchMtuResponse>;
}
