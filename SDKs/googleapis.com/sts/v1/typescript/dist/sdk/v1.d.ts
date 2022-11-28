import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * stsIntrospect - Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
    **/
    stsIntrospect(req: operations.StsIntrospectRequest, config?: AxiosRequestConfig): Promise<operations.StsIntrospectResponse>;
    /**
     * stsToken - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundary at the moment. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.
    **/
    stsToken(req: operations.StsTokenRequest, config?: AxiosRequestConfig): Promise<operations.StsTokenResponse>;
}
