import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    postOauthV1TokenCreateToken(req: operations.PostOauthV1TokenCreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthV1TokenCreateTokenResponse>;
}
