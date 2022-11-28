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
     * vmmigrationProjectsLocationsGroupsAddGroupMigration - Adds a MigratingVm to a Group.
    **/
    vmmigrationProjectsLocationsGroupsAddGroupMigration(req: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsGroupsCreate - Creates a new Group in a given project and location.
    **/
    vmmigrationProjectsLocationsGroupsCreate(req: operations.VmmigrationProjectsLocationsGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsGroupsList - Lists Groups in a given project and location.
    **/
    vmmigrationProjectsLocationsGroupsList(req: operations.VmmigrationProjectsLocationsGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsListResponse>;
    /**
     * vmmigrationProjectsLocationsGroupsRemoveGroupMigration - Removes a MigratingVm from a Group.
    **/
    vmmigrationProjectsLocationsGroupsRemoveGroupMigration(req: operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    vmmigrationProjectsLocationsList(req: operations.VmmigrationProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsListResponse>;
    /**
     * vmmigrationProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    vmmigrationProjectsLocationsOperationsList(req: operations.VmmigrationProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsOperationsListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesCreate - Creates a new Source in a given project and location.
    **/
    vmmigrationProjectsLocationsSourcesCreate(req: operations.VmmigrationProjectsLocationsSourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate - Creates a new DatacenterConnector in a given Source.
    **/
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesDatacenterConnectorsList - Lists DatacenterConnectors in a given Source.
    **/
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsList(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
    **/
    vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance(req: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesFetchInventory - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
    **/
    vmmigrationProjectsLocationsSourcesFetchInventory(req: operations.VmmigrationProjectsLocationsSourcesFetchInventoryRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesFetchInventoryResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesList - Lists Sources in a given project and location.
    **/
    vmmigrationProjectsLocationsSourcesList(req: operations.VmmigrationProjectsLocationsSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate - Initiates a Clone of a specific migrating VM.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList - Lists CloneJobs of a given migrating VM.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCreate - Creates a new MigratingVm in a given Source.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel - Initiates the cancellation of a running cutover job.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList - Lists CutoverJobs of a given migrating VM.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsList - Lists MigratingVms in a given Source.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList - Lists ReplicationCycles in a given MigratingVM.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
    **/
    vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration(req: operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesUtilizationReportsCreate - Creates a new UtilizationReport.
    **/
    vmmigrationProjectsLocationsSourcesUtilizationReportsCreate(req: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsSourcesUtilizationReportsList - Lists Utilization Reports of the given Source.
    **/
    vmmigrationProjectsLocationsSourcesUtilizationReportsList(req: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse>;
    /**
     * vmmigrationProjectsLocationsTargetProjectsCreate - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
    **/
    vmmigrationProjectsLocationsTargetProjectsCreate(req: operations.VmmigrationProjectsLocationsTargetProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsCreateResponse>;
    /**
     * vmmigrationProjectsLocationsTargetProjectsDelete - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
    **/
    vmmigrationProjectsLocationsTargetProjectsDelete(req: operations.VmmigrationProjectsLocationsTargetProjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsDeleteResponse>;
    /**
     * vmmigrationProjectsLocationsTargetProjectsGet - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
    **/
    vmmigrationProjectsLocationsTargetProjectsGet(req: operations.VmmigrationProjectsLocationsTargetProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsGetResponse>;
    /**
     * vmmigrationProjectsLocationsTargetProjectsList - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
    **/
    vmmigrationProjectsLocationsTargetProjectsList(req: operations.VmmigrationProjectsLocationsTargetProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsListResponse>;
    /**
     * vmmigrationProjectsLocationsTargetProjectsPatch - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
    **/
    vmmigrationProjectsLocationsTargetProjectsPatch(req: operations.VmmigrationProjectsLocationsTargetProjectsPatchRequest, config?: AxiosRequestConfig): Promise<operations.VmmigrationProjectsLocationsTargetProjectsPatchResponse>;
}
