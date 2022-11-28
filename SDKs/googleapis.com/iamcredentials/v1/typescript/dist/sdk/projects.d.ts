import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * iamcredentialsProjectsServiceAccountsGenerateAccessToken - Generates an OAuth 2.0 access token for a service account.
    **/
    iamcredentialsProjectsServiceAccountsGenerateAccessToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse>;
    /**
     * iamcredentialsProjectsServiceAccountsGenerateIdToken - Generates an OpenID Connect ID token for a service account.
    **/
    iamcredentialsProjectsServiceAccountsGenerateIdToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse>;
    /**
     * iamcredentialsProjectsServiceAccountsSignBlob - Signs a blob using a service account's system-managed private key.
    **/
    iamcredentialsProjectsServiceAccountsSignBlob(req: operations.IamcredentialsProjectsServiceAccountsSignBlobRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignBlobResponse>;
    /**
     * iamcredentialsProjectsServiceAccountsSignJwt - Signs a JWT using a service account's system-managed private key.
    **/
    iamcredentialsProjectsServiceAccountsSignJwt(req: operations.IamcredentialsProjectsServiceAccountsSignJwtRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignJwtResponse>;
}
