import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Snmp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSnmp - Return the SNMP settings for a network
     *
     * Return the SNMP settings for a network
    **/
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * getOrganizationSnmp - Return the SNMP settings for an organization
     *
     * Return the SNMP settings for an organization
    **/
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * updateNetworkSnmp - Update the SNMP settings for a network
     *
     * Update the SNMP settings for a network
    **/
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
    /**
     * updateOrganizationSnmp - Update the SNMP settings for an organization
     *
     * Update the SNMP settings for an organization
    **/
    updateOrganizationSnmp(req: operations.UpdateOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSnmpResponse>;
}
