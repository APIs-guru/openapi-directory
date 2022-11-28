import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pii {
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
     * getNetworkPiiPiiKeys - List the keys required to access Personally Identifiable Information (PII) for a given identifier
     *
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/piiKeys
     * ```
    **/
    getNetworkPiiPiiKeys(req: operations.GetNetworkPiiPiiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiPiiKeysResponse>;
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
    /**
     * getNetworkPiiSmDevicesForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
     *
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smDevicesForKey
     * ```
    **/
    getNetworkPiiSmDevicesForKey(req: operations.GetNetworkPiiSmDevicesForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmDevicesForKeyResponse>;
    /**
     * getNetworkPiiSmOwnersForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
     *
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smOwnersForKey
     * ```
    **/
    getNetworkPiiSmOwnersForKey(req: operations.GetNetworkPiiSmOwnersForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmOwnersForKeyResponse>;
}
