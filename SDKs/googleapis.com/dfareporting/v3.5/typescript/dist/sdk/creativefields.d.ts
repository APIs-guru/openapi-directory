import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreativeFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCreativeFieldsDelete - Deletes an existing creative field.
    **/
    dfareportingCreativeFieldsDelete(req: operations.DfareportingCreativeFieldsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsDeleteResponse>;
    /**
     * dfareportingCreativeFieldsGet - Gets one creative field by ID.
    **/
    dfareportingCreativeFieldsGet(req: operations.DfareportingCreativeFieldsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsGetResponse>;
    /**
     * dfareportingCreativeFieldsInsert - Inserts a new creative field.
    **/
    dfareportingCreativeFieldsInsert(req: operations.DfareportingCreativeFieldsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsInsertResponse>;
    /**
     * dfareportingCreativeFieldsList - Retrieves a list of creative fields, possibly filtered. This method supports paging.
    **/
    dfareportingCreativeFieldsList(req: operations.DfareportingCreativeFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsListResponse>;
    /**
     * dfareportingCreativeFieldsPatch - Updates an existing creative field. This method supports patch semantics.
    **/
    dfareportingCreativeFieldsPatch(req: operations.DfareportingCreativeFieldsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsPatchResponse>;
    /**
     * dfareportingCreativeFieldsUpdate - Updates an existing creative field.
    **/
    dfareportingCreativeFieldsUpdate(req: operations.DfareportingCreativeFieldsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldsUpdateResponse>;
}
