import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NetworkAdapters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceNetworkAdapters - List the network adapters of a device
     *
     * List the network adapters of a device
    **/
    getNetworkSmDeviceNetworkAdapters(req: operations.GetNetworkSmDeviceNetworkAdaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse>;
}
