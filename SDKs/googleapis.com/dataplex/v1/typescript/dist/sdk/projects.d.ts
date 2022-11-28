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
     * dataplexProjectsLocationsDataScansCreate - Creates a dataScan resource.
    **/
    dataplexProjectsLocationsDataScansCreate(req: operations.DataplexProjectsLocationsDataScansCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataScansCreateResponse>;
    /**
     * dataplexProjectsLocationsDataScansList - Lists dataScans.
    **/
    dataplexProjectsLocationsDataScansList(req: operations.DataplexProjectsLocationsDataScansListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataScansListResponse>;
    /**
     * dataplexProjectsLocationsDataScansRun - Run an on demand execution of a DataScan.
    **/
    dataplexProjectsLocationsDataScansRun(req: operations.DataplexProjectsLocationsDataScansRunRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsDataScansRunResponse>;
    /**
     * dataplexProjectsLocationsLakesContentCreate - Create a content.
    **/
    dataplexProjectsLocationsLakesContentCreate(req: operations.DataplexProjectsLocationsLakesContentCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesContentList - List content.
    **/
    dataplexProjectsLocationsLakesContentList(req: operations.DataplexProjectsLocationsLakesContentListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentListResponse>;
    /**
     * dataplexProjectsLocationsLakesContentitemsCreate - Create a content.
    **/
    dataplexProjectsLocationsLakesContentitemsCreate(req: operations.DataplexProjectsLocationsLakesContentitemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentitemsCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesContentitemsList - List content.
    **/
    dataplexProjectsLocationsLakesContentitemsList(req: operations.DataplexProjectsLocationsLakesContentitemsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesContentitemsListResponse>;
    /**
     * dataplexProjectsLocationsLakesCreate - Creates a lake resource.
    **/
    dataplexProjectsLocationsLakesCreate(req: operations.DataplexProjectsLocationsLakesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesEnvironmentsCreate - Create an environment resource.
    **/
    dataplexProjectsLocationsLakesEnvironmentsCreate(req: operations.DataplexProjectsLocationsLakesEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesEnvironmentsList - Lists environments under the given lake.
    **/
    dataplexProjectsLocationsLakesEnvironmentsList(req: operations.DataplexProjectsLocationsLakesEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsListResponse>;
    /**
     * dataplexProjectsLocationsLakesEnvironmentsSessionsList - Lists session resources in an environment.
    **/
    dataplexProjectsLocationsLakesEnvironmentsSessionsList(req: operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse>;
    /**
     * dataplexProjectsLocationsLakesList - Lists lake resources in a project and location.
    **/
    dataplexProjectsLocationsLakesList(req: operations.DataplexProjectsLocationsLakesListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesListResponse>;
    /**
     * dataplexProjectsLocationsLakesTasksCreate - Creates a task resource within a lake.
    **/
    dataplexProjectsLocationsLakesTasksCreate(req: operations.DataplexProjectsLocationsLakesTasksCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesTasksJobsList - Lists Jobs under the given task.
    **/
    dataplexProjectsLocationsLakesTasksJobsList(req: operations.DataplexProjectsLocationsLakesTasksJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksJobsListResponse>;
    /**
     * dataplexProjectsLocationsLakesTasksList - Lists tasks under the given lake.
    **/
    dataplexProjectsLocationsLakesTasksList(req: operations.DataplexProjectsLocationsLakesTasksListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesTasksListResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsActionsList - Lists action resources in an asset.
    **/
    dataplexProjectsLocationsLakesZonesAssetsActionsList(req: operations.DataplexProjectsLocationsLakesZonesAssetsActionsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsActionsListResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsCreate - Creates an asset resource.
    **/
    dataplexProjectsLocationsLakesZonesAssetsCreate(req: operations.DataplexProjectsLocationsLakesZonesAssetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy(req: operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsList - Lists asset resources in a zone.
    **/
    dataplexProjectsLocationsLakesZonesAssetsList(req: operations.DataplexProjectsLocationsLakesZonesAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsListResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsPatch - Updates an asset resource.
    **/
    dataplexProjectsLocationsLakesZonesAssetsPatch(req: operations.DataplexProjectsLocationsLakesZonesAssetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsPatchResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    **/
    dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy(req: operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions(req: operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesCreate - Creates a zone resource within a lake.
    **/
    dataplexProjectsLocationsLakesZonesCreate(req: operations.DataplexProjectsLocationsLakesZonesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesEntitiesCreate - Create a metadata entity.
    **/
    dataplexProjectsLocationsLakesZonesEntitiesCreate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesEntitiesList - List metadata entities in a zone.
    **/
    dataplexProjectsLocationsLakesZonesEntitiesList(req: operations.DataplexProjectsLocationsLakesZonesEntitiesListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesListResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate - Create a metadata partition.
    **/
    dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesEntitiesPartitionsList - List metadata partitions of an entity.
    **/
    dataplexProjectsLocationsLakesZonesEntitiesPartitionsList(req: operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesEntitiesUpdate - Update a metadata entity. Only supports full resource update.
    **/
    dataplexProjectsLocationsLakesZonesEntitiesUpdate(req: operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse>;
    /**
     * dataplexProjectsLocationsLakesZonesList - Lists zone resources in a lake.
    **/
    dataplexProjectsLocationsLakesZonesList(req: operations.DataplexProjectsLocationsLakesZonesListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsLakesZonesListResponse>;
    /**
     * dataplexProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    dataplexProjectsLocationsList(req: operations.DataplexProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsListResponse>;
    /**
     * dataplexProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    **/
    dataplexProjectsLocationsOperationsCancel(req: operations.DataplexProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsCancelResponse>;
    /**
     * dataplexProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
    **/
    dataplexProjectsLocationsOperationsDelete(req: operations.DataplexProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsDeleteResponse>;
    /**
     * dataplexProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    dataplexProjectsLocationsOperationsGet(req: operations.DataplexProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsGetResponse>;
    /**
     * dataplexProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    dataplexProjectsLocationsOperationsList(req: operations.DataplexProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DataplexProjectsLocationsOperationsListResponse>;
}
