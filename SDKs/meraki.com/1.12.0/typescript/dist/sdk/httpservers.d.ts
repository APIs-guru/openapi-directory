import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HttpServers {
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
     * updateNetworkWebhooksHttpServer - Update an HTTP server
     *
     * Update an HTTP server
    **/
    updateNetworkWebhooksHttpServer(req: operations.UpdateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksHttpServerResponse>;
}
