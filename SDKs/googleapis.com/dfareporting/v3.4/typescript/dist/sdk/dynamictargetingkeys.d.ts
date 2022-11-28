import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DynamicTargetingKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingDynamicTargetingKeysDelete - Deletes an existing dynamic targeting key.
    **/
    dfareportingDynamicTargetingKeysDelete(req: operations.DfareportingDynamicTargetingKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDynamicTargetingKeysDeleteResponse>;
    /**
     * dfareportingDynamicTargetingKeysInsert - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
    **/
    dfareportingDynamicTargetingKeysInsert(req: operations.DfareportingDynamicTargetingKeysInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDynamicTargetingKeysInsertResponse>;
    /**
     * dfareportingDynamicTargetingKeysList - Retrieves a list of dynamic targeting keys.
    **/
    dfareportingDynamicTargetingKeysList(req: operations.DfareportingDynamicTargetingKeysListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDynamicTargetingKeysListResponse>;
}
