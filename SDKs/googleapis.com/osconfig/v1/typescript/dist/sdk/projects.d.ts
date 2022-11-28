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
     * osconfigProjectsLocationsOsPolicyAssignmentsCreate - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsCreate(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsList - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsList(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse>;
    /**
     * osconfigProjectsLocationsOsPolicyAssignmentsListRevisions - List the OS policy assignment revisions for a given OS policy assignment.
    **/
    osconfigProjectsLocationsOsPolicyAssignmentsListRevisions(req: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse>;
    /**
     * osconfigProjectsPatchDeploymentsCreate - Create an OS Config patch deployment.
    **/
    osconfigProjectsPatchDeploymentsCreate(req: operations.OsconfigProjectsPatchDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsCreateResponse>;
    /**
     * osconfigProjectsPatchDeploymentsDelete - Delete an OS Config patch deployment.
    **/
    osconfigProjectsPatchDeploymentsDelete(req: operations.OsconfigProjectsPatchDeploymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsDeleteResponse>;
    /**
     * osconfigProjectsPatchDeploymentsList - Get a page of OS Config patch deployments.
    **/
    osconfigProjectsPatchDeploymentsList(req: operations.OsconfigProjectsPatchDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsListResponse>;
    /**
     * osconfigProjectsPatchDeploymentsPatch - Update an OS Config patch deployment.
    **/
    osconfigProjectsPatchDeploymentsPatch(req: operations.OsconfigProjectsPatchDeploymentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsPatchResponse>;
    /**
     * osconfigProjectsPatchDeploymentsPause - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
    **/
    osconfigProjectsPatchDeploymentsPause(req: operations.OsconfigProjectsPatchDeploymentsPauseRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsPauseResponse>;
    /**
     * osconfigProjectsPatchDeploymentsResume - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
    **/
    osconfigProjectsPatchDeploymentsResume(req: operations.OsconfigProjectsPatchDeploymentsResumeRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchDeploymentsResumeResponse>;
    /**
     * osconfigProjectsPatchJobsCancel - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
    **/
    osconfigProjectsPatchJobsCancel(req: operations.OsconfigProjectsPatchJobsCancelRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsCancelResponse>;
    /**
     * osconfigProjectsPatchJobsExecute - Patch VM instances by creating and running a patch job.
    **/
    osconfigProjectsPatchJobsExecute(req: operations.OsconfigProjectsPatchJobsExecuteRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsExecuteResponse>;
    /**
     * osconfigProjectsPatchJobsGet - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
    **/
    osconfigProjectsPatchJobsGet(req: operations.OsconfigProjectsPatchJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsGetResponse>;
    /**
     * osconfigProjectsPatchJobsInstanceDetailsList - Get a list of instance details for a given patch job.
    **/
    osconfigProjectsPatchJobsInstanceDetailsList(req: operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse>;
    /**
     * osconfigProjectsPatchJobsList - Get a list of patch jobs.
    **/
    osconfigProjectsPatchJobsList(req: operations.OsconfigProjectsPatchJobsListRequest, config?: AxiosRequestConfig): Promise<operations.OsconfigProjectsPatchJobsListResponse>;
}
