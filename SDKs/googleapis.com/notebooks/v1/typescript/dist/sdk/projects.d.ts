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
     * notebooksProjectsLocationsEnvironmentsCreate - Creates a new Environment.
    **/
    notebooksProjectsLocationsEnvironmentsCreate(req: operations.NotebooksProjectsLocationsEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsEnvironmentsCreateResponse>;
    /**
     * notebooksProjectsLocationsEnvironmentsList - Lists environments in a project.
    **/
    notebooksProjectsLocationsEnvironmentsList(req: operations.NotebooksProjectsLocationsEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsEnvironmentsListResponse>;
    /**
     * notebooksProjectsLocationsExecutionsCreate - Creates a new Execution in a given project and location.
    **/
    notebooksProjectsLocationsExecutionsCreate(req: operations.NotebooksProjectsLocationsExecutionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsExecutionsCreateResponse>;
    /**
     * notebooksProjectsLocationsExecutionsList - Lists executions in a given project and location
    **/
    notebooksProjectsLocationsExecutionsList(req: operations.NotebooksProjectsLocationsExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsExecutionsListResponse>;
    /**
     * notebooksProjectsLocationsInstancesCreate - Creates a new Instance in a given project and location.
    **/
    notebooksProjectsLocationsInstancesCreate(req: operations.NotebooksProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesCreateResponse>;
    /**
     * notebooksProjectsLocationsInstancesGetInstanceHealth - Check if a notebook instance is healthy.
    **/
    notebooksProjectsLocationsInstancesGetInstanceHealth(req: operations.NotebooksProjectsLocationsInstancesGetInstanceHealthRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesGetInstanceHealthResponse>;
    /**
     * notebooksProjectsLocationsInstancesIsUpgradeable - Check if a notebook instance is upgradable.
    **/
    notebooksProjectsLocationsInstancesIsUpgradeable(req: operations.NotebooksProjectsLocationsInstancesIsUpgradeableRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesIsUpgradeableResponse>;
    /**
     * notebooksProjectsLocationsInstancesList - Lists instances in a given project and location.
    **/
    notebooksProjectsLocationsInstancesList(req: operations.NotebooksProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesListResponse>;
    /**
     * notebooksProjectsLocationsInstancesRegister - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
    **/
    notebooksProjectsLocationsInstancesRegister(req: operations.NotebooksProjectsLocationsInstancesRegisterRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesRegisterResponse>;
    /**
     * notebooksProjectsLocationsInstancesReport - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
    **/
    notebooksProjectsLocationsInstancesReport(req: operations.NotebooksProjectsLocationsInstancesReportRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesReportResponse>;
    /**
     * notebooksProjectsLocationsInstancesRollback - Rollbacks a notebook instance to the previous version.
    **/
    notebooksProjectsLocationsInstancesRollback(req: operations.NotebooksProjectsLocationsInstancesRollbackRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesRollbackResponse>;
    /**
     * notebooksProjectsLocationsInstancesSetAccelerator - Updates the guest accelerators of a single Instance.
    **/
    notebooksProjectsLocationsInstancesSetAccelerator(req: operations.NotebooksProjectsLocationsInstancesSetAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetAcceleratorResponse>;
    /**
     * notebooksProjectsLocationsInstancesSetLabels - Replaces all the labels of an Instance.
    **/
    notebooksProjectsLocationsInstancesSetLabels(req: operations.NotebooksProjectsLocationsInstancesSetLabelsRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetLabelsResponse>;
    /**
     * notebooksProjectsLocationsInstancesSetMachineType - Updates the machine type of a single Instance.
    **/
    notebooksProjectsLocationsInstancesSetMachineType(req: operations.NotebooksProjectsLocationsInstancesSetMachineTypeRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetMachineTypeResponse>;
    /**
     * notebooksProjectsLocationsInstancesUpdateConfig - Update Notebook Instance configurations.
    **/
    notebooksProjectsLocationsInstancesUpdateConfig(req: operations.NotebooksProjectsLocationsInstancesUpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateConfigResponse>;
    /**
     * notebooksProjectsLocationsInstancesUpdateMetadataItems - Add/update metadata items for an instance.
    **/
    notebooksProjectsLocationsInstancesUpdateMetadataItems(req: operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse>;
    /**
     * notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig - Updates the Shielded instance configuration of a single Instance.
    **/
    notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig(req: operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigResponse>;
    /**
     * notebooksProjectsLocationsInstancesUpgradeInternal - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
    **/
    notebooksProjectsLocationsInstancesUpgradeInternal(req: operations.NotebooksProjectsLocationsInstancesUpgradeInternalRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpgradeInternalResponse>;
    /**
     * notebooksProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    notebooksProjectsLocationsList(req: operations.NotebooksProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsListResponse>;
    /**
     * notebooksProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    notebooksProjectsLocationsOperationsCancel(req: operations.NotebooksProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsCancelResponse>;
    /**
     * notebooksProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    notebooksProjectsLocationsOperationsList(req: operations.NotebooksProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsListResponse>;
    /**
     * notebooksProjectsLocationsRuntimesCreate - Creates a new Runtime in a given project and location.
    **/
    notebooksProjectsLocationsRuntimesCreate(req: operations.NotebooksProjectsLocationsRuntimesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesCreateResponse>;
    /**
     * notebooksProjectsLocationsRuntimesDiagnose - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
    **/
    notebooksProjectsLocationsRuntimesDiagnose(req: operations.NotebooksProjectsLocationsRuntimesDiagnoseRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesDiagnoseResponse>;
    /**
     * notebooksProjectsLocationsRuntimesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    notebooksProjectsLocationsRuntimesGetIamPolicy(req: operations.NotebooksProjectsLocationsRuntimesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesGetIamPolicyResponse>;
    /**
     * notebooksProjectsLocationsRuntimesList - Lists Runtimes in a given project and location.
    **/
    notebooksProjectsLocationsRuntimesList(req: operations.NotebooksProjectsLocationsRuntimesListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesListResponse>;
    /**
     * notebooksProjectsLocationsRuntimesPatch - Update Notebook Runtime configuration.
    **/
    notebooksProjectsLocationsRuntimesPatch(req: operations.NotebooksProjectsLocationsRuntimesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesPatchResponse>;
    /**
     * notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
    **/
    notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal(req: operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse>;
    /**
     * notebooksProjectsLocationsRuntimesReportEvent - Report and process a runtime event.
    **/
    notebooksProjectsLocationsRuntimesReportEvent(req: operations.NotebooksProjectsLocationsRuntimesReportEventRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesReportEventResponse>;
    /**
     * notebooksProjectsLocationsRuntimesReset - Resets a Managed Notebook Runtime.
    **/
    notebooksProjectsLocationsRuntimesReset(req: operations.NotebooksProjectsLocationsRuntimesResetRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesResetResponse>;
    /**
     * notebooksProjectsLocationsRuntimesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    notebooksProjectsLocationsRuntimesSetIamPolicy(req: operations.NotebooksProjectsLocationsRuntimesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesSetIamPolicyResponse>;
    /**
     * notebooksProjectsLocationsRuntimesStart - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
    **/
    notebooksProjectsLocationsRuntimesStart(req: operations.NotebooksProjectsLocationsRuntimesStartRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesStartResponse>;
    /**
     * notebooksProjectsLocationsRuntimesStop - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
    **/
    notebooksProjectsLocationsRuntimesStop(req: operations.NotebooksProjectsLocationsRuntimesStopRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesStopResponse>;
    /**
     * notebooksProjectsLocationsRuntimesSwitch - Switch a Managed Notebook Runtime.
    **/
    notebooksProjectsLocationsRuntimesSwitch(req: operations.NotebooksProjectsLocationsRuntimesSwitchRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesSwitchResponse>;
    /**
     * notebooksProjectsLocationsRuntimesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    notebooksProjectsLocationsRuntimesTestIamPermissions(req: operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse>;
    /**
     * notebooksProjectsLocationsRuntimesUpgrade - Upgrades a Managed Notebook Runtime to the latest version.
    **/
    notebooksProjectsLocationsRuntimesUpgrade(req: operations.NotebooksProjectsLocationsRuntimesUpgradeRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesUpgradeResponse>;
    /**
     * notebooksProjectsLocationsSchedulesCreate - Creates a new Scheduled Notebook in a given project and location.
    **/
    notebooksProjectsLocationsSchedulesCreate(req: operations.NotebooksProjectsLocationsSchedulesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesCreateResponse>;
    /**
     * notebooksProjectsLocationsSchedulesDelete - Deletes schedule and all underlying jobs
    **/
    notebooksProjectsLocationsSchedulesDelete(req: operations.NotebooksProjectsLocationsSchedulesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesDeleteResponse>;
    /**
     * notebooksProjectsLocationsSchedulesGet - Gets details of schedule
    **/
    notebooksProjectsLocationsSchedulesGet(req: operations.NotebooksProjectsLocationsSchedulesGetRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesGetResponse>;
    /**
     * notebooksProjectsLocationsSchedulesList - Lists schedules in a given project and location.
    **/
    notebooksProjectsLocationsSchedulesList(req: operations.NotebooksProjectsLocationsSchedulesListRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesListResponse>;
    /**
     * notebooksProjectsLocationsSchedulesTrigger - Triggers execution of an existing schedule.
    **/
    notebooksProjectsLocationsSchedulesTrigger(req: operations.NotebooksProjectsLocationsSchedulesTriggerRequest, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesTriggerResponse>;
}
