import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResponseInspection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCache - Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
    **/
    getCache(req: operations.GetCacheRequest, config?: AxiosRequestConfig): Promise<operations.GetCacheResponse>;
    /**
     * getCacheValue - Sets a Cache-Control header for n seconds.
    **/
    getCacheValue(req: operations.GetCacheValueRequest, config?: AxiosRequestConfig): Promise<operations.GetCacheValueResponse>;
    /**
     * getEtagEtag - Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
    **/
    getEtagEtag(req: operations.GetEtagEtagRequest, config?: AxiosRequestConfig): Promise<operations.GetEtagEtagResponse>;
    /**
     * getResponseHeaders - Returns a set of response headers from the query string.
    **/
    getResponseHeaders(req: operations.GetResponseHeadersRequest, config?: AxiosRequestConfig): Promise<operations.GetResponseHeadersResponse>;
    /**
     * postResponseHeaders - Returns a set of response headers from the query string.
    **/
    postResponseHeaders(req: operations.PostResponseHeadersRequest, config?: AxiosRequestConfig): Promise<operations.PostResponseHeadersResponse>;
}
