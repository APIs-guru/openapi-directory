import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
    **/
    getBasicAuthUserPasswd(req: operations.GetBasicAuthUserPasswdRequest, config?: AxiosRequestConfig): Promise<operations.GetBasicAuthUserPasswdResponse>;
    /**
     * getBearer - Prompts the user for authorization using bearer authentication.
    **/
    getBearer(req: operations.GetBearerRequest, config?: AxiosRequestConfig): Promise<operations.GetBearerResponse>;
    /**
     * getDigestAuthQopUserPasswd - Prompts the user for authorization using Digest Auth.
    **/
    getDigestAuthQopUserPasswd(req: operations.GetDigestAuthQopUserPasswdRequest, config?: AxiosRequestConfig): Promise<operations.GetDigestAuthQopUserPasswdResponse>;
    /**
     * getDigestAuthQopUserPasswdAlgorithm - Prompts the user for authorization using Digest Auth + Algorithm.
    **/
    getDigestAuthQopUserPasswdAlgorithm(req: operations.GetDigestAuthQopUserPasswdAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.GetDigestAuthQopUserPasswdAlgorithmResponse>;
    /**
     * getDigestAuthQopUserPasswdAlgorithmStaleAfter - Prompts the user for authorization using Digest Auth + Algorithm.
     *
     * allow settings the stale_after argument.
     *
    **/
    getDigestAuthQopUserPasswdAlgorithmStaleAfter(req: operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest, config?: AxiosRequestConfig): Promise<operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse>;
    /**
     * getHiddenBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
    **/
    getHiddenBasicAuthUserPasswd(req: operations.GetHiddenBasicAuthUserPasswdRequest, config?: AxiosRequestConfig): Promise<operations.GetHiddenBasicAuthUserPasswdResponse>;
}
