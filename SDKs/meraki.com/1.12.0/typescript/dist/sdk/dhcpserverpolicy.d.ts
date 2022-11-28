import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DhcpServerPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchDhcpServerPolicy - Return the DHCP server policy
     *
     * Return the DHCP server policy
    **/
    getNetworkSwitchDhcpServerPolicy(req: operations.GetNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * updateNetworkSwitchDhcpServerPolicy - Update the DHCP server policy
     *
     * Update the DHCP server policy
    **/
    updateNetworkSwitchDhcpServerPolicy(req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse>;
}
