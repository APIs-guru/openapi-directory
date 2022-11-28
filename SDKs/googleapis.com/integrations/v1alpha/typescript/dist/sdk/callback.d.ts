import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Callback {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * integrationsCallbackGenerateToken - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.
    **/
    integrationsCallbackGenerateToken(req: operations.IntegrationsCallbackGenerateTokenRequest, config?: AxiosRequestConfig): Promise<operations.IntegrationsCallbackGenerateTokenResponse>;
}
