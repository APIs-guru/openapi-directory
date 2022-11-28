import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RequestInspection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHeaders - Return the incoming request's HTTP headers.
    **/
    getHeaders(config?: AxiosRequestConfig): Promise<operations.GetHeadersResponse>;
    /**
     * getIp - Returns the requester's IP Address.
    **/
    getIp(config?: AxiosRequestConfig): Promise<operations.GetIpResponse>;
    /**
     * getUserAgent - Return the incoming requests's User-Agent header.
    **/
    getUserAgent(config?: AxiosRequestConfig): Promise<operations.GetUserAgentResponse>;
}
