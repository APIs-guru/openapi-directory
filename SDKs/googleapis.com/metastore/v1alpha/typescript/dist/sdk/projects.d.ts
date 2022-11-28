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
     * metastoreProjectsLocationsFederationsCreate - Creates a metastore federation in a project and location.
    **/
    metastoreProjectsLocationsFederationsCreate(req: operations.MetastoreProjectsLocationsFederationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsFederationsCreateResponse>;
    /**
     * metastoreProjectsLocationsFederationsList - Lists federations in a project and location.
    **/
    metastoreProjectsLocationsFederationsList(req: operations.MetastoreProjectsLocationsFederationsListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsFederationsListResponse>;
    /**
     * metastoreProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    metastoreProjectsLocationsList(req: operations.MetastoreProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsListResponse>;
    /**
     * metastoreProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    metastoreProjectsLocationsOperationsList(req: operations.MetastoreProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsOperationsListResponse>;
    /**
     * metastoreProjectsLocationsServicesBackupsCreate - Creates a new backup in a given project and location.
    **/
    metastoreProjectsLocationsServicesBackupsCreate(req: operations.MetastoreProjectsLocationsServicesBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsCreateResponse>;
    /**
     * metastoreProjectsLocationsServicesBackupsDelete - Deletes a single backup.
    **/
    metastoreProjectsLocationsServicesBackupsDelete(req: operations.MetastoreProjectsLocationsServicesBackupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsDeleteResponse>;
    /**
     * metastoreProjectsLocationsServicesBackupsList - Lists backups in a service.
    **/
    metastoreProjectsLocationsServicesBackupsList(req: operations.MetastoreProjectsLocationsServicesBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesBackupsListResponse>;
    /**
     * metastoreProjectsLocationsServicesCreate - Creates a metastore service in a project and location.
    **/
    metastoreProjectsLocationsServicesCreate(req: operations.MetastoreProjectsLocationsServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesCreateResponse>;
    /**
     * metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse>;
    /**
     * metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    **/
    metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse>;
    /**
     * metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions(req: operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse>;
    /**
     * metastoreProjectsLocationsServicesExportMetadata - Exports metadata from a service.
    **/
    metastoreProjectsLocationsServicesExportMetadata(req: operations.MetastoreProjectsLocationsServicesExportMetadataRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesExportMetadataResponse>;
    /**
     * metastoreProjectsLocationsServicesList - Lists services in a project and location.
    **/
    metastoreProjectsLocationsServicesList(req: operations.MetastoreProjectsLocationsServicesListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesListResponse>;
    /**
     * metastoreProjectsLocationsServicesMetadataImportsCreate - Creates a new MetadataImport in a given project and location.
    **/
    metastoreProjectsLocationsServicesMetadataImportsCreate(req: operations.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsCreateResponse>;
    /**
     * metastoreProjectsLocationsServicesMetadataImportsGet - Gets details of a single import.
    **/
    metastoreProjectsLocationsServicesMetadataImportsGet(req: operations.MetastoreProjectsLocationsServicesMetadataImportsGetRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsGetResponse>;
    /**
     * metastoreProjectsLocationsServicesMetadataImportsList - Lists imports in a service.
    **/
    metastoreProjectsLocationsServicesMetadataImportsList(req: operations.MetastoreProjectsLocationsServicesMetadataImportsListRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsListResponse>;
    /**
     * metastoreProjectsLocationsServicesMetadataImportsPatch - Updates a single import. Only the description field of MetadataImport is supported to be updated.
    **/
    metastoreProjectsLocationsServicesMetadataImportsPatch(req: operations.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesMetadataImportsPatchResponse>;
    /**
     * metastoreProjectsLocationsServicesRemoveIamPolicy - Removes the attached IAM policies for a resource
    **/
    metastoreProjectsLocationsServicesRemoveIamPolicy(req: operations.MetastoreProjectsLocationsServicesRemoveIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesRemoveIamPolicyResponse>;
    /**
     * metastoreProjectsLocationsServicesRestore - Restores a service from a backup.
    **/
    metastoreProjectsLocationsServicesRestore(req: operations.MetastoreProjectsLocationsServicesRestoreRequest, config?: AxiosRequestConfig): Promise<operations.MetastoreProjectsLocationsServicesRestoreResponse>;
}
