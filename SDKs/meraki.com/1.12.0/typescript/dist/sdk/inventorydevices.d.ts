import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InventoryDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationInventoryDevice - Return a single device from the inventory of an organization
     *
     * Return a single device from the inventory of an organization
    **/
    getOrganizationInventoryDevice(req: operations.GetOrganizationInventoryDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDeviceResponse>;
    /**
     * getOrganizationInventoryDevices - Return the device inventory for an organization
     *
     * Return the device inventory for an organization
    **/
    getOrganizationInventoryDevices(req: operations.GetOrganizationInventoryDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDevicesResponse>;
}
