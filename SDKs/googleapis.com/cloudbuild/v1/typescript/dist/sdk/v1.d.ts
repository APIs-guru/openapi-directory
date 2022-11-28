import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbuildWebhook - ReceiveWebhook is called when the API receives a GitHub webhook.
    **/
    cloudbuildWebhook(req: operations.CloudbuildWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildWebhookResponse>;
}
