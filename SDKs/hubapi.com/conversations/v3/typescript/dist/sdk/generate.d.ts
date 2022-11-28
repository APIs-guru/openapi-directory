import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Generate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postVisitorIdentificationV3TokensCreateGenerateToken - Generate a token
     *
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
    **/
    postVisitorIdentificationV3TokensCreateGenerateToken(req: operations.PostVisitorIdentificationV3TokensCreateGenerateTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse>;
}
