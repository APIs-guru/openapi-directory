import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SavedQueries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetSavedQueriesCreate - Creates a saved query in a parent project/folder/organization.
    **/
    cloudassetSavedQueriesCreate(req: operations.CloudassetSavedQueriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesCreateResponse>;
    /**
     * cloudassetSavedQueriesDelete - Deletes a saved query.
    **/
    cloudassetSavedQueriesDelete(req: operations.CloudassetSavedQueriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesDeleteResponse>;
    /**
     * cloudassetSavedQueriesGet - Gets details about a saved query.
    **/
    cloudassetSavedQueriesGet(req: operations.CloudassetSavedQueriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesGetResponse>;
    /**
     * cloudassetSavedQueriesList - Lists all saved queries in a parent project/folder/organization.
    **/
    cloudassetSavedQueriesList(req: operations.CloudassetSavedQueriesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesListResponse>;
    /**
     * cloudassetSavedQueriesPatch - Updates a saved query.
    **/
    cloudassetSavedQueriesPatch(req: operations.CloudassetSavedQueriesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesPatchResponse>;
}
