import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccessTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getOauthV1AccessTokensTokenGetAccessToken(req: operations.GetOauthV1AccessTokensTokenGetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1AccessTokensTokenGetAccessTokenResponse>;
}
