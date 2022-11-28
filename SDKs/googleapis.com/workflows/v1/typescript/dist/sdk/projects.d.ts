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
     * workflowsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    workflowsProjectsLocationsList(req: operations.WorkflowsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsListResponse>;
    /**
     * workflowsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    workflowsProjectsLocationsOperationsList(req: operations.WorkflowsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsOperationsListResponse>;
    /**
     * workflowsProjectsLocationsWorkflowsCreate - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.
    **/
    workflowsProjectsLocationsWorkflowsCreate(req: operations.WorkflowsProjectsLocationsWorkflowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsCreateResponse>;
    /**
     * workflowsProjectsLocationsWorkflowsDelete - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
    **/
    workflowsProjectsLocationsWorkflowsDelete(req: operations.WorkflowsProjectsLocationsWorkflowsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsDeleteResponse>;
    /**
     * workflowsProjectsLocationsWorkflowsGet - Gets details of a single Workflow.
    **/
    workflowsProjectsLocationsWorkflowsGet(req: operations.WorkflowsProjectsLocationsWorkflowsGetRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsGetResponse>;
    /**
     * workflowsProjectsLocationsWorkflowsList - Lists Workflows in a given project and location. The default order is not specified.
    **/
    workflowsProjectsLocationsWorkflowsList(req: operations.WorkflowsProjectsLocationsWorkflowsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsListResponse>;
    /**
     * workflowsProjectsLocationsWorkflowsPatch - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.
    **/
    workflowsProjectsLocationsWorkflowsPatch(req: operations.WorkflowsProjectsLocationsWorkflowsPatchRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsPatchResponse>;
}
