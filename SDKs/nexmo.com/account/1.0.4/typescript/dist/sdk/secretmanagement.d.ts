import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SecretManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createApiSecret - Create API Secret
    **/
    createApiSecret(req: operations.CreateApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiSecretResponse>;
    /**
     * retrieveApiSecret - Retrieve one API Secret
    **/
    retrieveApiSecret(req: operations.RetrieveApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApiSecretResponse>;
    /**
     * retrieveApiSecrets - Retrieve API Secrets
    **/
    retrieveApiSecrets(req: operations.RetrieveApiSecretsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApiSecretsResponse>;
    /**
     * revokeApiSecret - Revoke an API Secret
    **/
    revokeApiSecret(req: operations.RevokeApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.RevokeApiSecretResponse>;
}
