import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DeleteOauthV1RefreshTokensTokenArchiveRefreshToken(req: operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOauthV1RefreshTokensTokenArchiveRefreshTokenResponse>;
    GetOauthV1AccessTokensTokenGetAccessToken(req: operations.GetOauthV1AccessTokensTokenGetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1AccessTokensTokenGetAccessTokenResponse>;
    GetOauthV1RefreshTokensTokenGetRefreshToken(req: operations.GetOauthV1RefreshTokensTokenGetRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthV1RefreshTokensTokenGetRefreshTokenResponse>;
    PostOauthV1TokenCreateToken(req: operations.PostOauthV1TokenCreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthV1TokenCreateTokenResponse>;
}
export {};
