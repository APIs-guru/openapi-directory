import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firestoreProjectsDatabasesCollectionGroupsFieldsList - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
    **/
    firestoreProjectsDatabasesCollectionGroupsFieldsList(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsFieldsPatch - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
    **/
    firestoreProjectsDatabasesCollectionGroupsFieldsPatch(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesCreate - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesCreate(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesDelete - Deletes a composite index.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesDelete(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesGet - Gets a composite index.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesGet(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesList - Lists composite indexes.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesList(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse>;
    /**
     * firestoreProjectsDatabasesExportDocuments - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
    **/
    firestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesImportDocuments - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
    **/
    firestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
}
