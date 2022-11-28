import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TargetingTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingTargetingTemplatesGet - Gets one targeting template by ID.
    **/
    dfareportingTargetingTemplatesGet(req: operations.DfareportingTargetingTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesGetResponse>;
    /**
     * dfareportingTargetingTemplatesInsert - Inserts a new targeting template.
    **/
    dfareportingTargetingTemplatesInsert(req: operations.DfareportingTargetingTemplatesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesInsertResponse>;
    /**
     * dfareportingTargetingTemplatesList - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
    **/
    dfareportingTargetingTemplatesList(req: operations.DfareportingTargetingTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesListResponse>;
    /**
     * dfareportingTargetingTemplatesPatch - Updates an existing targeting template. This method supports patch semantics.
    **/
    dfareportingTargetingTemplatesPatch(req: operations.DfareportingTargetingTemplatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesPatchResponse>;
    /**
     * dfareportingTargetingTemplatesUpdate - Updates an existing targeting template.
    **/
    dfareportingTargetingTemplatesUpdate(req: operations.DfareportingTargetingTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetingTemplatesUpdateResponse>;
}
