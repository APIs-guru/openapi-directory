import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bgp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceVpnBgp - Return a Hub BGP Configuration
     *
     * Return a Hub BGP Configuration
    **/
    getNetworkApplianceVpnBgp(req: operations.GetNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnBgpResponse>;
    /**
     * updateNetworkApplianceVpnBgp - Update a Hub BGP Configuration
     *
     * Update a Hub BGP Configuration
    **/
    updateNetworkApplianceVpnBgp(req: operations.UpdateNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnBgpResponse>;
}
