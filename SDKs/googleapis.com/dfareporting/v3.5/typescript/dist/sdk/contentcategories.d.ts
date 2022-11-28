import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContentCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingContentCategoriesDelete - Deletes an existing content category.
    **/
    dfareportingContentCategoriesDelete(req: operations.DfareportingContentCategoriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesDeleteResponse>;
    /**
     * dfareportingContentCategoriesGet - Gets one content category by ID.
    **/
    dfareportingContentCategoriesGet(req: operations.DfareportingContentCategoriesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesGetResponse>;
    /**
     * dfareportingContentCategoriesInsert - Inserts a new content category.
    **/
    dfareportingContentCategoriesInsert(req: operations.DfareportingContentCategoriesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesInsertResponse>;
    /**
     * dfareportingContentCategoriesList - Retrieves a list of content categories, possibly filtered. This method supports paging.
    **/
    dfareportingContentCategoriesList(req: operations.DfareportingContentCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesListResponse>;
    /**
     * dfareportingContentCategoriesPatch - Updates an existing content category. This method supports patch semantics.
    **/
    dfareportingContentCategoriesPatch(req: operations.DfareportingContentCategoriesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesPatchResponse>;
    /**
     * dfareportingContentCategoriesUpdate - Updates an existing content category.
    **/
    dfareportingContentCategoriesUpdate(req: operations.DfareportingContentCategoriesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesUpdateResponse>;
}
