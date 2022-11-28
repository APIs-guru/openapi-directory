import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cookies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCookies - Returns cookie data.
    **/
    getCookies(config?: AxiosRequestConfig): Promise<operations.GetCookiesResponse>;
    /**
     * getCookiesDelete - Deletes cookie(s) as provided by the query string and redirects to cookie list.
    **/
    getCookiesDelete(req: operations.GetCookiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GetCookiesDeleteResponse>;
    /**
     * getCookiesSet - Sets cookie(s) as provided by the query string and redirects to cookie list.
    **/
    getCookiesSet(req: operations.GetCookiesSetRequest, config?: AxiosRequestConfig): Promise<operations.GetCookiesSetResponse>;
    /**
     * getCookiesSetNameValue - Sets a cookie and redirects to cookie list.
    **/
    getCookiesSetNameValue(req: operations.GetCookiesSetNameValueRequest, config?: AxiosRequestConfig): Promise<operations.GetCookiesSetNameValueResponse>;
}
