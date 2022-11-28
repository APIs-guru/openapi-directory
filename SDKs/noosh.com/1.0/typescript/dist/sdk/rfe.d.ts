import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rfe {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRfe - Get a specific Rfe
     *
     * Get a specific Rfe
    **/
    getRfe(req: operations.GetRfeRequest, config?: AxiosRequestConfig): Promise<operations.GetRfeResponse>;
    /**
     * getRfeList - List the RFES
     *
     * List the RFES
    **/
    getRfeList(req: operations.GetRfeListRequest, config?: AxiosRequestConfig): Promise<operations.GetRfeListResponse>;
    /**
     * postRfe - Create a RFE
     *
     * Create a RFE
    **/
    postRfe(req: operations.PostRfeRequest, config?: AxiosRequestConfig): Promise<operations.PostRfeResponse>;
}
