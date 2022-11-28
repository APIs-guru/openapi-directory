import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WarmSpare {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceSwitchWarmSpare - Return warm spare configuration for a switch
     *
     * Return warm spare configuration for a switch
    **/
    getDeviceSwitchWarmSpare(req: operations.GetDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchWarmSpareResponse>;
    /**
     * getNetworkApplianceWarmSpare - Return MX warm spare settings
     *
     * Return MX warm spare settings
    **/
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * swapNetworkApplianceWarmSpare - Swap MX primary and warm spare appliances
     *
     * Swap MX primary and warm spare appliances
    **/
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * updateDeviceSwitchWarmSpare - Update warm spare configuration for a switch
     *
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
    **/
    updateDeviceSwitchWarmSpare(req: operations.UpdateDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchWarmSpareResponse>;
    /**
     * updateNetworkApplianceWarmSpare - Update MX warm spare settings
     *
     * Update MX warm spare settings
    **/
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
}
