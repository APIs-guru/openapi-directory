import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Splash {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
}
