import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkPiiRequest - Submit a new delete or restrict processing PII request
     *
     * Submit a new delete or restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
    **/
    createNetworkPiiRequest(req: operations.CreateNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkPiiRequestResponse>;
    /**
     * deleteNetworkPiiRequest - Delete a restrict processing PII request
     *
     * Delete a restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
    **/
    deleteNetworkPiiRequest(req: operations.DeleteNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkPiiRequestResponse>;
    /**
     * getNetworkPiiRequest - Return a PII request
     *
     * Return a PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
    **/
    getNetworkPiiRequest(req: operations.GetNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestResponse>;
    /**
     * getNetworkPiiRequests - List the PII requests for this network or organization
     *
     * List the PII requests for this network or organization
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
    **/
    getNetworkPiiRequests(req: operations.GetNetworkPiiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestsResponse>;
}
