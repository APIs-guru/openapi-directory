import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WebhookTests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkWebhooksWebhookTest - Send a test webhook for a network
     *
     * Send a test webhook for a network
    **/
    createNetworkWebhooksWebhookTest(req: operations.CreateNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksWebhookTestResponse>;
    /**
     * getNetworkWebhooksWebhookTest - Return the status of a webhook test for a network
     *
     * Return the status of a webhook test for a network
    **/
    getNetworkWebhooksWebhookTest(req: operations.GetNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksWebhookTestResponse>;
}
