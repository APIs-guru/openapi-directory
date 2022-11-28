import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Indexing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchIndexingDatasourcesDeleteSchema - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
    **/
    cloudsearchIndexingDatasourcesDeleteSchema(req: operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse>;
    /**
     * cloudsearchIndexingDatasourcesGetSchema - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
    **/
    cloudsearchIndexingDatasourcesGetSchema(req: operations.CloudsearchIndexingDatasourcesGetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesGetSchemaResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsDelete - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsDelete(req: operations.CloudsearchIndexingDatasourcesItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsDeleteResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsDeleteQueueItems - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsDeleteQueueItems(req: operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsGet - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsGet(req: operations.CloudsearchIndexingDatasourcesItemsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsGetResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsIndex - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsIndex(req: operations.CloudsearchIndexingDatasourcesItemsIndexRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsIndexResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsList - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsList(req: operations.CloudsearchIndexingDatasourcesItemsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsListResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsPoll - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsPoll(req: operations.CloudsearchIndexingDatasourcesItemsPollRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsPollResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsPush - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsPush(req: operations.CloudsearchIndexingDatasourcesItemsPushRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsPushResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsUnreserve - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsUnreserve(req: operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse>;
    /**
     * cloudsearchIndexingDatasourcesItemsUpload - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
    **/
    cloudsearchIndexingDatasourcesItemsUpload(req: operations.CloudsearchIndexingDatasourcesItemsUploadRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesItemsUploadResponse>;
    /**
     * cloudsearchIndexingDatasourcesUpdateSchema - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
    **/
    cloudsearchIndexingDatasourcesUpdateSchema(req: operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse>;
}
