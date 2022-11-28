import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ManagementInterface {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceManagementInterface - Return the management interface settings for a device
     *
     * Return the management interface settings for a device
    **/
    getDeviceManagementInterface(req: operations.GetDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceManagementInterfaceResponse>;
    /**
     * updateDeviceManagementInterface - Update the management interface settings for a device
     *
     * Update the management interface settings for a device
    **/
    updateDeviceManagementInterface(req: operations.UpdateDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceManagementInterfaceResponse>;
}
