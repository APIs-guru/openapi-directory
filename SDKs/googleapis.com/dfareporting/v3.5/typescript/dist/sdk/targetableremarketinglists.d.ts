import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TargetableRemarketingLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingTargetableRemarketingListsGet - Gets one remarketing list by ID.
    **/
    dfareportingTargetableRemarketingListsGet(req: operations.DfareportingTargetableRemarketingListsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetableRemarketingListsGetResponse>;
    /**
     * dfareportingTargetableRemarketingListsList - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
    **/
    dfareportingTargetableRemarketingListsList(req: operations.DfareportingTargetableRemarketingListsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetableRemarketingListsListResponse>;
}
