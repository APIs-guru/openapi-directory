import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SmDevicesForKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
}
