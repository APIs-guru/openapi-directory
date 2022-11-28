import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SingleLan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceSingleLan - Return single LAN configuration
     *
     * Return single LAN configuration
    **/
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
    /**
     * updateNetworkApplianceSingleLan - Update single LAN configuration
     *
     * Update single LAN configuration
    **/
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
}
