import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BillingProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingBillingProfilesGet - Gets one billing profile by ID.
    **/
    dfareportingBillingProfilesGet(req: operations.DfareportingBillingProfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesGetResponse>;
    /**
     * dfareportingBillingProfilesList - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
    **/
    dfareportingBillingProfilesList(req: operations.DfareportingBillingProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesListResponse>;
    /**
     * dfareportingBillingProfilesUpdate - Updates an existing billing profile.
    **/
    dfareportingBillingProfilesUpdate(req: operations.DfareportingBillingProfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesUpdateResponse>;
}
