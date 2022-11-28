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
     * storageObjectsCopy - Copies a source object to a destination object. Optionally overrides metadata.
    **/
    storageObjectsCopy(req: operations.StorageObjectsCopyRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsCopyResponse>;
    /**
     * storageObjectsDelete - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
    **/
    storageObjectsDelete(req: operations.StorageObjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsDeleteResponse>;
    /**
     * storageObjectsGet - Retrieves an object or its metadata.
    **/
    storageObjectsGet(req: operations.StorageObjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetResponse>;
    /**
     * storageObjectsGetIamPolicy - Returns an IAM policy for the specified object.
    **/
    storageObjectsGetIamPolicy(req: operations.StorageObjectsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetIamPolicyResponse>;
    /**
     * storageObjectsInsert - Stores a new object and metadata.
    **/
    storageObjectsInsert(req: operations.StorageObjectsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsInsertResponse>;
    /**
     * storageObjectsList - Retrieves a list of objects matching the criteria.
    **/
    storageObjectsList(req: operations.StorageObjectsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsListResponse>;
    /**
     * storageObjectsPatch - Patches an object's metadata.
    **/
    storageObjectsPatch(req: operations.StorageObjectsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsPatchResponse>;
    /**
     * storageObjectsRewrite - Rewrites a source object to a destination object. Optionally overrides metadata.
    **/
    storageObjectsRewrite(req: operations.StorageObjectsRewriteRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsRewriteResponse>;
    /**
     * storageObjectsSetIamPolicy - Updates an IAM policy for the specified object.
    **/
    storageObjectsSetIamPolicy(req: operations.StorageObjectsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsSetIamPolicyResponse>;
    /**
     * storageObjectsTestIamPermissions - Tests a set of permissions on the given object to see which, if any, are held by the caller.
    **/
    storageObjectsTestIamPermissions(req: operations.StorageObjectsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsTestIamPermissionsResponse>;
    /**
     * storageObjectsUpdate - Updates an object's metadata.
    **/
    storageObjectsUpdate(req: operations.StorageObjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsUpdateResponse>;
    /**
     * storageObjectsWatchAll - Watch for changes on all objects in a bucket.
    **/
    storageObjectsWatchAll(req: operations.StorageObjectsWatchAllRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectsWatchAllResponse>;
}
