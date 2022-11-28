import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchStp - Returns STP settings
     *
     * Returns STP settings
    **/
    getNetworkSwitchStp(req: operations.GetNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStpResponse>;
    /**
     * updateNetworkSwitchStp - Updates STP settings
     *
     * Updates STP settings
    **/
    updateNetworkSwitchStp(req: operations.UpdateNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStpResponse>;
}
