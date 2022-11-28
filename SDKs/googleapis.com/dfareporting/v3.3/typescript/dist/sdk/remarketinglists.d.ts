import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RemarketingLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingRemarketingListsGet - Gets one remarketing list by ID.
    **/
    dfareportingRemarketingListsGet(req: operations.DfareportingRemarketingListsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsGetResponse>;
    /**
     * dfareportingRemarketingListsInsert - Inserts a new remarketing list.
    **/
    dfareportingRemarketingListsInsert(req: operations.DfareportingRemarketingListsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsInsertResponse>;
    /**
     * dfareportingRemarketingListsList - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
    **/
    dfareportingRemarketingListsList(req: operations.DfareportingRemarketingListsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsListResponse>;
    /**
     * dfareportingRemarketingListsPatch - Updates an existing remarketing list. This method supports patch semantics.
    **/
    dfareportingRemarketingListsPatch(req: operations.DfareportingRemarketingListsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsPatchResponse>;
    /**
     * dfareportingRemarketingListsUpdate - Updates an existing remarketing list.
    **/
    dfareportingRemarketingListsUpdate(req: operations.DfareportingRemarketingListsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsUpdateResponse>;
}
