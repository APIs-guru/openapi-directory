import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GithubDotComWebhook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbuildGithubDotComWebhookReceive - ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
    **/
    cloudbuildGithubDotComWebhookReceive(req: operations.CloudbuildGithubDotComWebhookReceiveRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildGithubDotComWebhookReceiveResponse>;
}
