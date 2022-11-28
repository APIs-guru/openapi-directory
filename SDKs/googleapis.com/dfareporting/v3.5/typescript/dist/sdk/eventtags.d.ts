import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EventTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingEventTagsDelete - Deletes an existing event tag.
    **/
    dfareportingEventTagsDelete(req: operations.DfareportingEventTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsDeleteResponse>;
    /**
     * dfareportingEventTagsGet - Gets one event tag by ID.
    **/
    dfareportingEventTagsGet(req: operations.DfareportingEventTagsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsGetResponse>;
    /**
     * dfareportingEventTagsInsert - Inserts a new event tag.
    **/
    dfareportingEventTagsInsert(req: operations.DfareportingEventTagsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsInsertResponse>;
    /**
     * dfareportingEventTagsList - Retrieves a list of event tags, possibly filtered.
    **/
    dfareportingEventTagsList(req: operations.DfareportingEventTagsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsListResponse>;
    /**
     * dfareportingEventTagsPatch - Updates an existing event tag. This method supports patch semantics.
    **/
    dfareportingEventTagsPatch(req: operations.DfareportingEventTagsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsPatchResponse>;
    /**
     * dfareportingEventTagsUpdate - Updates an existing event tag.
    **/
    dfareportingEventTagsUpdate(req: operations.DfareportingEventTagsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingEventTagsUpdateResponse>;
}
