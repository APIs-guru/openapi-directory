import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StormControl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchStormControl - Return the storm control configuration for a switch network
     *
     * Return the storm control configuration for a switch network
    **/
    getNetworkSwitchStormControl(req: operations.GetNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStormControlResponse>;
    /**
     * updateNetworkSwitchStormControl - Update the storm control configuration for a switch network
     *
     * Update the storm control configuration for a switch network
    **/
    updateNetworkSwitchStormControl(req: operations.UpdateNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStormControlResponse>;
}
