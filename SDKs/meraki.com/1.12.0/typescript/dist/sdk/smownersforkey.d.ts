import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SmOwnersForKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
