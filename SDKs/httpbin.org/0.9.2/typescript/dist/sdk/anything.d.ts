import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Anything {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAnything - Returns anything passed in request data.
    **/
    deleteAnything(config?: AxiosRequestConfig): Promise<operations.DeleteAnythingResponse>;
    /**
     * deleteAnythingAnything - Returns anything passed in request data.
    **/
    deleteAnythingAnything(req: operations.DeleteAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnythingAnythingResponse>;
    /**
     * getAnything - Returns anything passed in request data.
    **/
    getAnything(config?: AxiosRequestConfig): Promise<operations.GetAnythingResponse>;
    /**
     * getAnythingAnything - Returns anything passed in request data.
    **/
    getAnythingAnything(req: operations.GetAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.GetAnythingAnythingResponse>;
    /**
     * patchAnything - Returns anything passed in request data.
    **/
    patchAnything(config?: AxiosRequestConfig): Promise<operations.PatchAnythingResponse>;
    /**
     * patchAnythingAnything - Returns anything passed in request data.
    **/
    patchAnythingAnything(req: operations.PatchAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.PatchAnythingAnythingResponse>;
    /**
     * postAnything - Returns anything passed in request data.
    **/
    postAnything(config?: AxiosRequestConfig): Promise<operations.PostAnythingResponse>;
    /**
     * postAnythingAnything - Returns anything passed in request data.
    **/
    postAnythingAnything(req: operations.PostAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.PostAnythingAnythingResponse>;
    /**
     * putAnything - Returns anything passed in request data.
    **/
    putAnything(config?: AxiosRequestConfig): Promise<operations.PutAnythingResponse>;
    /**
     * putAnythingAnything - Returns anything passed in request data.
    **/
    putAnythingAnything(req: operations.PutAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.PutAnythingAnythingResponse>;
    /**
     * traceAnything - Returns anything passed in request data.
    **/
    traceAnything(config?: AxiosRequestConfig): Promise<operations.TraceAnythingResponse>;
    /**
     * traceAnythingAnything - Returns anything passed in request data.
    **/
    traceAnythingAnything(req: operations.TraceAnythingAnythingRequest, config?: AxiosRequestConfig): Promise<operations.TraceAnythingAnythingResponse>;
}
