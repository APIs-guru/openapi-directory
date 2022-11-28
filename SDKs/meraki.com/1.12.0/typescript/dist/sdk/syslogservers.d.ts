import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SyslogServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSyslogServers - List the syslog servers for a network
     *
     * List the syslog servers for a network
    **/
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * updateNetworkSyslogServers - Update the syslog servers for a network
     *
     * Update the syslog servers for a network
    **/
    updateNetworkSyslogServers(req: operations.UpdateNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSyslogServersResponse>;
}
