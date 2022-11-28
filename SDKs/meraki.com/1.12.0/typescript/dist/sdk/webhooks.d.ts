import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkWebhooksHttpServer - Add an HTTP server to a network
     *
     * Add an HTTP server to a network
    **/
    createNetworkWebhooksHttpServer(req: operations.CreateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksHttpServerResponse>;
    /**
     * createNetworkWebhooksWebhookTest - Send a test webhook for a network
     *
     * Send a test webhook for a network
    **/
    createNetworkWebhooksWebhookTest(req: operations.CreateNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksWebhookTestResponse>;
    /**
     * deleteNetworkWebhooksHttpServer - Delete an HTTP server from a network
     *
     * Delete an HTTP server from a network
    **/
    deleteNetworkWebhooksHttpServer(req: operations.DeleteNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksHttpServerResponse>;
    /**
     * getNetworkWebhooksHttpServer - Return an HTTP server for a network
     *
     * Return an HTTP server for a network
    **/
    getNetworkWebhooksHttpServer(req: operations.GetNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServerResponse>;
    /**
     * getNetworkWebhooksHttpServers - List the HTTP servers for a network
     *
     * List the HTTP servers for a network
    **/
    getNetworkWebhooksHttpServers(req: operations.GetNetworkWebhooksHttpServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServersResponse>;
    /**
     * getNetworkWebhooksWebhookTest - Return the status of a webhook test for a network
     *
     * Return the status of a webhook test for a network
    **/
    getNetworkWebhooksWebhookTest(req: operations.GetNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksWebhookTestResponse>;
    /**
     * getOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
     *
     * Return a list of alert types to be used with managing webhook alerts
    **/
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * getOrganizationWebhooksLogs - Return the log of webhook POSTs sent
     *
     * Return the log of webhook POSTs sent
    **/
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
    /**
     * updateNetworkWebhooksHttpServer - Update an HTTP server
     *
     * Update an HTTP server
    **/
    updateNetworkWebhooksHttpServer(req: operations.UpdateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksHttpServerResponse>;
}
