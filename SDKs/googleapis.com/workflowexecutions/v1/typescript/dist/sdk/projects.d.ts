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
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel - Cancels an execution of the given name.
    **/
    workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse>;
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate - Creates a new execution using the latest revision of the given workflow.
    **/
    workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse>;
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsGet - Returns an execution of the given name.
    **/
    workflowexecutionsProjectsLocationsWorkflowsExecutionsGet(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse>;
    /**
     * workflowexecutionsProjectsLocationsWorkflowsExecutionsList - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
    **/
    workflowexecutionsProjectsLocationsWorkflowsExecutionsList(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse>;
    /**
     * workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution - Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
    **/
    workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse>;
}
