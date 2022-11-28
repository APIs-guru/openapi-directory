import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Fields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * updateNetworkSmDevicesFields - Modify the fields of a device
     *
     * Modify the fields of a device
    **/
    updateNetworkSmDevicesFields(req: operations.UpdateNetworkSmDevicesFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmDevicesFieldsResponse>;
}
