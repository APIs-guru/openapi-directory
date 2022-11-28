import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Radio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceWirelessRadioSettings - Return the radio settings of a device
     *
     * Return the radio settings of a device
    **/
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * updateDeviceWirelessRadioSettings - Update the radio settings of a device
     *
     * Update the radio settings of a device
    **/
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
}
