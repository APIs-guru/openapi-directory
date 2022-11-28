import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SplashAuthorizationStatus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkClientSplashAuthorizationStatus - Return the splash authorization for a client, for each SSID they've associated with through splash
     *
     * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientSplashAuthorizationStatus(req: operations.GetNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * updateNetworkClientSplashAuthorizationStatus - Update a client's splash authorization
     *
     * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientSplashAuthorizationStatus(req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse>;
}
