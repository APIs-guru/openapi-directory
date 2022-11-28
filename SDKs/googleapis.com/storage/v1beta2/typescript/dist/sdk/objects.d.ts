import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Objects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageObjectsCompose - Concatenates a list of existing objects into a new object in the same bucket.
    **/
    storageObjectsCompose(req: operations.StorageObjectsComposeRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsComposeResponse>;
    /**
     * storageObjectsCopy - Copies an object to a destination in the same location. Optionally overrides metadata.
    **/
    storageObjectsCopy(req: operations.StorageObjectsCopyRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsCopyResponse>;
    /**
     * storageObjectsDelete - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
    **/
    storageObjectsDelete(req: operations.StorageObjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsDeleteResponse>;
    /**
     * storageObjectsGet - Retrieves objects or their associated metadata.
    **/
    storageObjectsGet(req: operations.StorageObjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetResponse>;
    /**
     * storageObjectsInsert - Stores new data blobs and associated metadata.
    **/
    storageObjectsInsert(req: operations.StorageObjectsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsInsertResponse>;
    /**
     * storageObjectsList - Retrieves a list of objects matching the criteria.
    **/
    storageObjectsList(req: operations.StorageObjectsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsListResponse>;
    /**
     * storageObjectsPatch - Updates a data blob's associated metadata. This method supports patch semantics.
    **/
    storageObjectsPatch(req: operations.StorageObjectsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsPatchResponse>;
    /**
     * storageObjectsUpdate - Updates a data blob's associated metadata.
    **/
    storageObjectsUpdate(req: operations.StorageObjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsUpdateResponse>;
    /**
     * storageObjectsWatchAll - Watch for changes on all objects in a bucket.
    **/
    storageObjectsWatchAll(req: operations.StorageObjectsWatchAllRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsWatchAllResponse>;
}
