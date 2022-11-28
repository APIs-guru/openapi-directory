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
     * bigtableadminProjectsInstancesAppProfilesCreate - Creates an app profile within an instance.
    **/
    bigtableadminProjectsInstancesAppProfilesCreate(req: operations.BigtableadminProjectsInstancesAppProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesAppProfilesCreateResponse>;
    /**
     * bigtableadminProjectsInstancesAppProfilesList - Lists information about app profiles in an instance.
    **/
    bigtableadminProjectsInstancesAppProfilesList(req: operations.BigtableadminProjectsInstancesAppProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesAppProfilesListResponse>;
    /**
     * bigtableadminProjectsInstancesClustersBackupsCreate - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
    **/
    bigtableadminProjectsInstancesClustersBackupsCreate(req: operations.BigtableadminProjectsInstancesClustersBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsCreateResponse>;
    /**
     * bigtableadminProjectsInstancesClustersBackupsList - Lists Cloud Bigtable backups. Returns both completed and pending backups.
    **/
    bigtableadminProjectsInstancesClustersBackupsList(req: operations.BigtableadminProjectsInstancesClustersBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsListResponse>;
    /**
     * bigtableadminProjectsInstancesClustersBackupsPatch - Updates a pending or completed Cloud Bigtable Backup.
    **/
    bigtableadminProjectsInstancesClustersBackupsPatch(req: operations.BigtableadminProjectsInstancesClustersBackupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersBackupsPatchResponse>;
    /**
     * bigtableadminProjectsInstancesClustersCreate - Creates a cluster within an instance.
    **/
    bigtableadminProjectsInstancesClustersCreate(req: operations.BigtableadminProjectsInstancesClustersCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersCreateResponse>;
    /**
     * bigtableadminProjectsInstancesClustersList - Lists information about clusters in an instance.
    **/
    bigtableadminProjectsInstancesClustersList(req: operations.BigtableadminProjectsInstancesClustersListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersListResponse>;
    /**
     * bigtableadminProjectsInstancesClustersUpdate - Updates a cluster within an instance. UpdateCluster is deprecated. Please use PartialUpdateCluster instead.
    **/
    bigtableadminProjectsInstancesClustersUpdate(req: operations.BigtableadminProjectsInstancesClustersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesClustersUpdateResponse>;
    /**
     * bigtableadminProjectsInstancesCreate - Create an instance within a project.
    **/
    bigtableadminProjectsInstancesCreate(req: operations.BigtableadminProjectsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesCreateResponse>;
    /**
     * bigtableadminProjectsInstancesList - Lists information about instances in a project.
    **/
    bigtableadminProjectsInstancesList(req: operations.BigtableadminProjectsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesListResponse>;
    /**
     * bigtableadminProjectsInstancesTablesCheckConsistency - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
    **/
    bigtableadminProjectsInstancesTablesCheckConsistency(req: operations.BigtableadminProjectsInstancesTablesCheckConsistencyRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesCheckConsistencyResponse>;
    /**
     * bigtableadminProjectsInstancesTablesCreate - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
    **/
    bigtableadminProjectsInstancesTablesCreate(req: operations.BigtableadminProjectsInstancesTablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesCreateResponse>;
    /**
     * bigtableadminProjectsInstancesTablesDelete - Permanently deletes a specified table and all of its data.
    **/
    bigtableadminProjectsInstancesTablesDelete(req: operations.BigtableadminProjectsInstancesTablesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesDeleteResponse>;
    /**
     * bigtableadminProjectsInstancesTablesDropRowRange - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
    **/
    bigtableadminProjectsInstancesTablesDropRowRange(req: operations.BigtableadminProjectsInstancesTablesDropRowRangeRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesDropRowRangeResponse>;
    /**
     * bigtableadminProjectsInstancesTablesGenerateConsistencyToken - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
    **/
    bigtableadminProjectsInstancesTablesGenerateConsistencyToken(req: operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse>;
    /**
     * bigtableadminProjectsInstancesTablesGetIamPolicy - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
    **/
    bigtableadminProjectsInstancesTablesGetIamPolicy(req: operations.BigtableadminProjectsInstancesTablesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesGetIamPolicyResponse>;
    /**
     * bigtableadminProjectsInstancesTablesList - Lists all tables served from a specified instance.
    **/
    bigtableadminProjectsInstancesTablesList(req: operations.BigtableadminProjectsInstancesTablesListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesListResponse>;
    /**
     * bigtableadminProjectsInstancesTablesModifyColumnFamilies - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
    **/
    bigtableadminProjectsInstancesTablesModifyColumnFamilies(req: operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse>;
    /**
     * bigtableadminProjectsInstancesTablesRestore - Create a new table by restoring from a completed backup. The new table must be in the same project as the instance containing the backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
    **/
    bigtableadminProjectsInstancesTablesRestore(req: operations.BigtableadminProjectsInstancesTablesRestoreRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesRestoreResponse>;
    /**
     * bigtableadminProjectsInstancesTablesSetIamPolicy - Sets the access control policy on a Table resource. Replaces any existing policy.
    **/
    bigtableadminProjectsInstancesTablesSetIamPolicy(req: operations.BigtableadminProjectsInstancesTablesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesSetIamPolicyResponse>;
    /**
     * bigtableadminProjectsInstancesTablesTestIamPermissions - Returns permissions that the caller has on the specified table resource.
    **/
    bigtableadminProjectsInstancesTablesTestIamPermissions(req: operations.BigtableadminProjectsInstancesTablesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsInstancesTablesTestIamPermissionsResponse>;
    /**
     * bigtableadminProjectsLocationsGet - Gets information about a location.
    **/
    bigtableadminProjectsLocationsGet(req: operations.BigtableadminProjectsLocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsLocationsGetResponse>;
    /**
     * bigtableadminProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    bigtableadminProjectsLocationsList(req: operations.BigtableadminProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BigtableadminProjectsLocationsListResponse>;
}
