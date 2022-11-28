import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Subnets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceApplianceDhcpSubnets - Return the DHCP subnet information for an appliance
     *
     * Return the DHCP subnet information for an appliance
    **/
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
}
