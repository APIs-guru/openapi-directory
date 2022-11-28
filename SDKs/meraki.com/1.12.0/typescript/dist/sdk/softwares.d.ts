import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Softwares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceSoftwares - Get a list of softwares associated with a device
     *
     * Get a list of softwares associated with a device
    **/
    getNetworkSmDeviceSoftwares(req: operations.GetNetworkSmDeviceSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSoftwaresResponse>;
    /**
     * getNetworkSmUserSoftwares - Get a list of softwares associated with a user
     *
     * Get a list of softwares associated with a user
    **/
    getNetworkSmUserSoftwares(req: operations.GetNetworkSmUserSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserSoftwaresResponse>;
}
