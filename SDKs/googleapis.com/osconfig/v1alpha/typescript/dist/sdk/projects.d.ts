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
     * osconfigProjectsLocationsInstanceOsPoliciesCompliancesList - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
    **/
    osconfigProjectsLocationsInstanceOsPoliciesCompliancesList(req: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse>;
    /**
     * osconfigProjectsLocationsInstancesInventoriesList - List inventory data for all VM instances in the specified zone.
    **/
    osconfigProjectsLocationsInstancesInventoriesList(req: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesInventoriesListResponse>;
    /**
     * osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
    **/
    osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(req: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse>;
    /**
     * osconfigProjectsLocationsInstancesVulnerabilityReportsList - List vulnerability reports for all VM instances in the specified zone.
    **/
    osconfigProjectsLocationsInstancesVulnerabilityReportsList(req: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsCreate - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsCreate(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsDelete - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsDelete(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsList - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsList(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsListRevisions - List the OS policy assignment revisions for a given OS policy assignment.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsPatch - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsPatch(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse>;
}
