import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RefreshTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    deleteOauthV1RefreshTokensTokenArchiveRefreshToken(req: operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse>;
    getOauthV1RefreshTokensTokenGetRefreshToken(req: operations.GetOauthV1RefreshTokensTokenGetRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1RefreshTokensTokenGetRefreshTokenResponse>;
}
