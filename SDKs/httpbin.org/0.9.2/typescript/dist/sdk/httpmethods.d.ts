import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HttpMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDelete - The request's DELETE parameters.
    **/
    deleteDelete(config?: AxiosRequestConfig): Promise<operations.DeleteDeleteResponse>;
    /**
     * getGet - The request's query parameters.
    **/
    getGet(config?: AxiosRequestConfig): Promise<operations.GetGetResponse>;
    /**
     * patchPatch - The request's PATCH parameters.
    **/
    patchPatch(config?: AxiosRequestConfig): Promise<operations.PatchPatchResponse>;
    /**
     * postPost - The request's POST parameters.
    **/
    postPost(config?: AxiosRequestConfig): Promise<operations.PostPostResponse>;
    /**
     * putPut - The request's PUT parameters.
    **/
    putPut(config?: AxiosRequestConfig): Promise<operations.PutPutResponse>;
}
