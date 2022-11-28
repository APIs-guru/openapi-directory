import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbuildLocationsRegionalWebhook - ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
    **/
    cloudbuildLocationsRegionalWebhook(req: operations.CloudbuildLocationsRegionalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildLocationsRegionalWebhookResponse>;
}
