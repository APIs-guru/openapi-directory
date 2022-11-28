import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeactivationReason {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeactivationReasonList - List all deactivation reasons
     *
     * List all deactivation reasons
    **/
    getDeactivationReasonList(req: operations.GetDeactivationReasonListRequest, config?: AxiosRequestConfig): Promise<operations.GetDeactivationReasonListResponse>;
}
