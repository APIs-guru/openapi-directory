import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserAccessDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteNetworkSmUserAccessDevice - Delete a User Access Device
     *
     * Delete a User Access Device
    **/
    deleteNetworkSmUserAccessDevice(req: operations.DeleteNetworkSmUserAccessDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmUserAccessDeviceResponse>;
    /**
     * getNetworkSmUserAccessDevices - List User Access Devices and its Trusted Access Connections
     *
     * List User Access Devices and its Trusted Access Connections
    **/
    getNetworkSmUserAccessDevices(req: operations.GetNetworkSmUserAccessDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserAccessDevicesResponse>;
}
