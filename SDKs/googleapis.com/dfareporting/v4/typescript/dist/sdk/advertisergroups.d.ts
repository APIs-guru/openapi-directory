import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdvertiserGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAdvertiserGroupsDelete - Deletes an existing advertiser group.
    **/
    dfareportingAdvertiserGroupsDelete(req: operations.DfareportingAdvertiserGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsDeleteResponse>;
    /**
     * dfareportingAdvertiserGroupsGet - Gets one advertiser group by ID.
    **/
    dfareportingAdvertiserGroupsGet(req: operations.DfareportingAdvertiserGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsGetResponse>;
    /**
     * dfareportingAdvertiserGroupsInsert - Inserts a new advertiser group.
    **/
    dfareportingAdvertiserGroupsInsert(req: operations.DfareportingAdvertiserGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsInsertResponse>;
    /**
     * dfareportingAdvertiserGroupsList - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
    **/
    dfareportingAdvertiserGroupsList(req: operations.DfareportingAdvertiserGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsListResponse>;
    /**
     * dfareportingAdvertiserGroupsPatch - Updates an existing advertiser group. This method supports patch semantics.
    **/
    dfareportingAdvertiserGroupsPatch(req: operations.DfareportingAdvertiserGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsPatchResponse>;
    /**
     * dfareportingAdvertiserGroupsUpdate - Updates an existing advertiser group.
    **/
    dfareportingAdvertiserGroupsUpdate(req: operations.DfareportingAdvertiserGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsUpdateResponse>;
}
