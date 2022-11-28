import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Token {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createToken - Create token
     *
     * Create token by 'tokenType' and additional token parameters
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * deleteToken - Delete token
     *
     * Delete a token by 'number'
    **/
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * getToken - Get token
     *
     * Return a token by 'tokenNumber'
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * listTokens - List Tokens
     *
     * Return a list of all tokens for the current Vendor
    **/
    listTokens(req: operations.ListTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListTokensResponse>;
}
