import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Packets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceSwitchPortsStatusesPackets - Return the packet counters for all the ports of a switch
     *
     * Return the packet counters for all the ports of a switch
    **/
    getDeviceSwitchPortsStatusesPackets(req: operations.GetDeviceSwitchPortsStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesPacketsResponse>;
}
