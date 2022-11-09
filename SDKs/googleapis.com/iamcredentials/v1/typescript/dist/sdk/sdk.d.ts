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
    IamcredentialsProjectsServiceAccountsGenerateAccessToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse>;
    IamcredentialsProjectsServiceAccountsGenerateIdToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse>;
    IamcredentialsProjectsServiceAccountsSignBlob(req: operations.IamcredentialsProjectsServiceAccountsSignBlobRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignBlobResponse>;
    IamcredentialsProjectsServiceAccountsSignJwt(req: operations.IamcredentialsProjectsServiceAccountsSignJwtRequest, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignJwtResponse>;
}
export {};
