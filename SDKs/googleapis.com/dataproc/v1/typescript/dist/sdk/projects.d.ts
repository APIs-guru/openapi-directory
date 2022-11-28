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
     * dataprocProjectsLocationsBatchesCreate - Creates a batch workload that executes asynchronously.
    **/
    dataprocProjectsLocationsBatchesCreate(req: operations.DataprocProjectsLocationsBatchesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsLocationsBatchesCreateResponse>;
    /**
     * dataprocProjectsLocationsBatchesList - Lists batch workloads.
    **/
    dataprocProjectsLocationsBatchesList(req: operations.DataprocProjectsLocationsBatchesListRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsLocationsBatchesListResponse>;
    /**
     * dataprocProjectsRegionsAutoscalingPoliciesCreate - Creates new autoscaling policy.
    **/
    dataprocProjectsRegionsAutoscalingPoliciesCreate(req: operations.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsAutoscalingPoliciesCreateResponse>;
    /**
     * dataprocProjectsRegionsAutoscalingPoliciesList - Lists autoscaling policies in the project.
    **/
    dataprocProjectsRegionsAutoscalingPoliciesList(req: operations.DataprocProjectsRegionsAutoscalingPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsAutoscalingPoliciesListResponse>;
    /**
     * dataprocProjectsRegionsClustersCreate - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
    **/
    dataprocProjectsRegionsClustersCreate(req: operations.DataprocProjectsRegionsClustersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersCreateResponse>;
    /**
     * dataprocProjectsRegionsClustersDelete - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
    **/
    dataprocProjectsRegionsClustersDelete(req: operations.DataprocProjectsRegionsClustersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersDeleteResponse>;
    /**
     * dataprocProjectsRegionsClustersDiagnose - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
    **/
    dataprocProjectsRegionsClustersDiagnose(req: operations.DataprocProjectsRegionsClustersDiagnoseRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersDiagnoseResponse>;
    /**
     * dataprocProjectsRegionsClustersGet - Gets the resource representation for a cluster in a project.
    **/
    dataprocProjectsRegionsClustersGet(req: operations.DataprocProjectsRegionsClustersGetRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersGetResponse>;
    /**
     * dataprocProjectsRegionsClustersInjectCredentials - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
    **/
    dataprocProjectsRegionsClustersInjectCredentials(req: operations.DataprocProjectsRegionsClustersInjectCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersInjectCredentialsResponse>;
    /**
     * dataprocProjectsRegionsClustersList - Lists all regions/{region}/clusters in a project alphabetically.
    **/
    dataprocProjectsRegionsClustersList(req: operations.DataprocProjectsRegionsClustersListRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersListResponse>;
    /**
     * dataprocProjectsRegionsClustersPatch - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
    **/
    dataprocProjectsRegionsClustersPatch(req: operations.DataprocProjectsRegionsClustersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersPatchResponse>;
    /**
     * dataprocProjectsRegionsClustersRepair - Repairs a cluster.
    **/
    dataprocProjectsRegionsClustersRepair(req: operations.DataprocProjectsRegionsClustersRepairRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersRepairResponse>;
    /**
     * dataprocProjectsRegionsClustersStart - Starts a cluster in a project.
    **/
    dataprocProjectsRegionsClustersStart(req: operations.DataprocProjectsRegionsClustersStartRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersStartResponse>;
    /**
     * dataprocProjectsRegionsClustersStop - Stops a cluster in a project.
    **/
    dataprocProjectsRegionsClustersStop(req: operations.DataprocProjectsRegionsClustersStopRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersStopResponse>;
    /**
     * dataprocProjectsRegionsJobsCancel - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
    **/
    dataprocProjectsRegionsJobsCancel(req: operations.DataprocProjectsRegionsJobsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsCancelResponse>;
    /**
     * dataprocProjectsRegionsJobsDelete - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
    **/
    dataprocProjectsRegionsJobsDelete(req: operations.DataprocProjectsRegionsJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsDeleteResponse>;
    /**
     * dataprocProjectsRegionsJobsGet - Gets the resource representation for a job in a project.
    **/
    dataprocProjectsRegionsJobsGet(req: operations.DataprocProjectsRegionsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsGetResponse>;
    /**
     * dataprocProjectsRegionsJobsList - Lists regions/{region}/jobs in a project.
    **/
    dataprocProjectsRegionsJobsList(req: operations.DataprocProjectsRegionsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsListResponse>;
    /**
     * dataprocProjectsRegionsJobsPatch - Updates a job in a project.
    **/
    dataprocProjectsRegionsJobsPatch(req: operations.DataprocProjectsRegionsJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsPatchResponse>;
    /**
     * dataprocProjectsRegionsJobsSubmit - Submits a job to a cluster.
    **/
    dataprocProjectsRegionsJobsSubmit(req: operations.DataprocProjectsRegionsJobsSubmitRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsSubmitResponse>;
    /**
     * dataprocProjectsRegionsJobsSubmitAsOperation - Submits job to a cluster.
    **/
    dataprocProjectsRegionsJobsSubmitAsOperation(req: operations.DataprocProjectsRegionsJobsSubmitAsOperationRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsSubmitAsOperationResponse>;
    /**
     * dataprocProjectsRegionsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    **/
    dataprocProjectsRegionsOperationsCancel(req: operations.DataprocProjectsRegionsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsOperationsCancelResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesCreate - Creates new workflow template.
    **/
    dataprocProjectsRegionsWorkflowTemplatesCreate(req: operations.DataprocProjectsRegionsWorkflowTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesCreateResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesDelete - Deletes a workflow template. It does not cancel in-progress workflows.
    **/
    dataprocProjectsRegionsWorkflowTemplatesDelete(req: operations.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesDeleteResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesGet - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
    **/
    dataprocProjectsRegionsWorkflowTemplatesGet(req: operations.DataprocProjectsRegionsWorkflowTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesGetResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(req: operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesInstantiate - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    **/
    dataprocProjectsRegionsWorkflowTemplatesInstantiate(req: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesInstantiateInline - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    **/
    dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(req: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesList - Lists workflows that match the specified filter in the request.
    **/
    dataprocProjectsRegionsWorkflowTemplatesList(req: operations.DataprocProjectsRegionsWorkflowTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesListResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    **/
    dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(req: operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(req: operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse>;
    /**
     * dataprocProjectsRegionsWorkflowTemplatesUpdate - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
    **/
    dataprocProjectsRegionsWorkflowTemplatesUpdate(req: operations.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesUpdateResponse>;
}
