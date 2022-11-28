import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BypassActivationLockAttempts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt
     *
     * Bypass activation lock attempt
    **/
    createNetworkSmBypassActivationLockAttempt(req: operations.CreateNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * getNetworkSmBypassActivationLockAttempt - Bypass activation lock attempt status
     *
     * Bypass activation lock attempt status
    **/
    getNetworkSmBypassActivationLockAttempt(req: operations.GetNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmBypassActivationLockAttemptResponse>;
}
