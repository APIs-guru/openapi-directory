import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreativeGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCreativeGroupsGet - Gets one creative group by ID.
    **/
    dfareportingCreativeGroupsGet(req: operations.DfareportingCreativeGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsGetResponse>;
    /**
     * dfareportingCreativeGroupsInsert - Inserts a new creative group.
    **/
    dfareportingCreativeGroupsInsert(req: operations.DfareportingCreativeGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsInsertResponse>;
    /**
     * dfareportingCreativeGroupsList - Retrieves a list of creative groups, possibly filtered. This method supports paging.
    **/
    dfareportingCreativeGroupsList(req: operations.DfareportingCreativeGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsListResponse>;
    /**
     * dfareportingCreativeGroupsPatch - Updates an existing creative group. This method supports patch semantics.
    **/
    dfareportingCreativeGroupsPatch(req: operations.DfareportingCreativeGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsPatchResponse>;
    /**
     * dfareportingCreativeGroupsUpdate - Updates an existing creative group.
    **/
    dfareportingCreativeGroupsUpdate(req: operations.DfareportingCreativeGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsUpdateResponse>;
}
