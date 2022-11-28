import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Redirects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRedirectTo - 302/3XX Redirects to the given URL.
    **/
    deleteRedirectTo(config?: AxiosRequestConfig): Promise<operations.DeleteRedirectToResponse>;
    /**
     * getAbsoluteRedirectN - Absolutely 302 Redirects n times.
    **/
    getAbsoluteRedirectN(req: operations.GetAbsoluteRedirectNRequest, config?: AxiosRequestConfig): Promise<operations.GetAbsoluteRedirectNResponse>;
    /**
     * getRedirectN - 302 Redirects n times.
    **/
    getRedirectN(req: operations.GetRedirectNRequest, config?: AxiosRequestConfig): Promise<operations.GetRedirectNResponse>;
    /**
     * getRedirectTo - 302/3XX Redirects to the given URL.
    **/
    getRedirectTo(req: operations.GetRedirectToRequest, config?: AxiosRequestConfig): Promise<operations.GetRedirectToResponse>;
    /**
     * getRelativeRedirectN - Relatively 302 Redirects n times.
    **/
    getRelativeRedirectN(req: operations.GetRelativeRedirectNRequest, config?: AxiosRequestConfig): Promise<operations.GetRelativeRedirectNResponse>;
    /**
     * patchRedirectTo - 302/3XX Redirects to the given URL.
    **/
    patchRedirectTo(config?: AxiosRequestConfig): Promise<operations.PatchRedirectToResponse>;
    /**
     * postRedirectTo - 302/3XX Redirects to the given URL.
    **/
    postRedirectTo(req: operations.PostRedirectToRequest, config?: AxiosRequestConfig): Promise<operations.PostRedirectToResponse>;
    /**
     * putRedirectTo - 302/3XX Redirects to the given URL.
    **/
    putRedirectTo(req: operations.PutRedirectToRequest, config?: AxiosRequestConfig): Promise<operations.PutRedirectToResponse>;
    /**
     * traceRedirectTo - 302/3XX Redirects to the given URL.
    **/
    traceRedirectTo(config?: AxiosRequestConfig): Promise<operations.TraceRedirectToResponse>;
}
