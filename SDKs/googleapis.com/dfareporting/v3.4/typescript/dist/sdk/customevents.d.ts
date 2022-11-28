import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCustomEventsBatchinsert - Inserts custom events.
    **/
    dfareportingCustomEventsBatchinsert(req: operations.DfareportingCustomEventsBatchinsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCustomEventsBatchinsertResponse>;
}
