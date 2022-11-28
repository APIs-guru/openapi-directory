import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceWirelessStatus - Return the SSID statuses of an access point
     *
     * Return the SSID statuses of an access point
    **/
    getDeviceWirelessStatus(req: operations.GetDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessStatusResponse>;
}
