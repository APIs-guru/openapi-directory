import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreativeFieldValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCreativeFieldValuesDelete - Deletes an existing creative field value.
    **/
    dfareportingCreativeFieldValuesDelete(req: operations.DfareportingCreativeFieldValuesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesDeleteResponse>;
    /**
     * dfareportingCreativeFieldValuesGet - Gets one creative field value by ID.
    **/
    dfareportingCreativeFieldValuesGet(req: operations.DfareportingCreativeFieldValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesGetResponse>;
    /**
     * dfareportingCreativeFieldValuesInsert - Inserts a new creative field value.
    **/
    dfareportingCreativeFieldValuesInsert(req: operations.DfareportingCreativeFieldValuesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesInsertResponse>;
    /**
     * dfareportingCreativeFieldValuesList - Retrieves a list of creative field values, possibly filtered. This method supports paging.
    **/
    dfareportingCreativeFieldValuesList(req: operations.DfareportingCreativeFieldValuesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesListResponse>;
    /**
     * dfareportingCreativeFieldValuesPatch - Updates an existing creative field value. This method supports patch semantics.
    **/
    dfareportingCreativeFieldValuesPatch(req: operations.DfareportingCreativeFieldValuesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesPatchResponse>;
    /**
     * dfareportingCreativeFieldValuesUpdate - Updates an existing creative field value.
    **/
    dfareportingCreativeFieldValuesUpdate(req: operations.DfareportingCreativeFieldValuesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeFieldValuesUpdateResponse>;
}
