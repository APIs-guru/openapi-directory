import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkAlertsSettings - Return the alert configuration for this network
     *
     * Return the alert configuration for this network
    **/
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * updateNetworkAlertsSettings - Update the alert configuration for this network
     *
     * Update the alert configuration for this network
    **/
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
}
