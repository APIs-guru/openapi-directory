import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StatusCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteStatusCodes - Return status code or random status code if more than one are given
    **/
    deleteStatusCodes(req: operations.DeleteStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStatusCodesResponse>;
    /**
     * getStatusCodes - Return status code or random status code if more than one are given
    **/
    getStatusCodes(req: operations.GetStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusCodesResponse>;
    /**
     * patchStatusCodes - Return status code or random status code if more than one are given
    **/
    patchStatusCodes(req: operations.PatchStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.PatchStatusCodesResponse>;
    /**
     * postStatusCodes - Return status code or random status code if more than one are given
    **/
    postStatusCodes(req: operations.PostStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.PostStatusCodesResponse>;
    /**
     * putStatusCodes - Return status code or random status code if more than one are given
    **/
    putStatusCodes(req: operations.PutStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.PutStatusCodesResponse>;
    /**
     * traceStatusCodes - Return status code or random status code if more than one are given
    **/
    traceStatusCodes(req: operations.TraceStatusCodesRequest, config?: AxiosRequestConfig): Promise<operations.TraceStatusCodesResponse>;
}
