import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SplashLoginAttempts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSplashLoginAttempts - List the splash login attempts for a network
     *
     * List the splash login attempts for a network
    **/
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
}
