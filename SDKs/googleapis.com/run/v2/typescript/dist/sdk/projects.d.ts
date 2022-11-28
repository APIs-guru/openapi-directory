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
     * runProjectsLocationsJobsCreate - Creates a Job.
    **/
    runProjectsLocationsJobsCreate(req: operations.RunProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsCreateResponse>;
    /**
     * runProjectsLocationsJobsExecutionsList - Lists Executions from a Job.
    **/
    runProjectsLocationsJobsExecutionsList(req: operations.RunProjectsLocationsJobsExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsExecutionsListResponse>;
    /**
     * runProjectsLocationsJobsExecutionsTasksList - Lists Tasks from an Execution of a Job.
    **/
    runProjectsLocationsJobsExecutionsTasksList(req: operations.RunProjectsLocationsJobsExecutionsTasksListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsExecutionsTasksListResponse>;
    /**
     * runProjectsLocationsJobsList - Lists Jobs.
    **/
    runProjectsLocationsJobsList(req: operations.RunProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsListResponse>;
    /**
     * runProjectsLocationsJobsRun - Triggers creation of a new Execution of this Job.
    **/
    runProjectsLocationsJobsRun(req: operations.RunProjectsLocationsJobsRunRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsJobsRunResponse>;
    /**
     * runProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    runProjectsLocationsOperationsList(req: operations.RunProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsOperationsListResponse>;
    /**
     * runProjectsLocationsServicesCreate - Creates a new Service in a given project and location.
    **/
    runProjectsLocationsServicesCreate(req: operations.RunProjectsLocationsServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesCreateResponse>;
    /**
     * runProjectsLocationsServicesGetIamPolicy - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
    **/
    runProjectsLocationsServicesGetIamPolicy(req: operations.RunProjectsLocationsServicesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetIamPolicyResponse>;
    /**
     * runProjectsLocationsServicesList - Lists Services.
    **/
    runProjectsLocationsServicesList(req: operations.RunProjectsLocationsServicesListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesListResponse>;
    /**
     * runProjectsLocationsServicesPatch - Updates a Service.
    **/
    runProjectsLocationsServicesPatch(req: operations.RunProjectsLocationsServicesPatchRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesPatchResponse>;
    /**
     * runProjectsLocationsServicesRevisionsDelete - Deletes a Revision.
    **/
    runProjectsLocationsServicesRevisionsDelete(req: operations.RunProjectsLocationsServicesRevisionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsDeleteResponse>;
    /**
     * runProjectsLocationsServicesRevisionsGet - Gets information about a Revision.
    **/
    runProjectsLocationsServicesRevisionsGet(req: operations.RunProjectsLocationsServicesRevisionsGetRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsGetResponse>;
    /**
     * runProjectsLocationsServicesRevisionsList - Lists Revisions from a given Service, or from a given location.
    **/
    runProjectsLocationsServicesRevisionsList(req: operations.RunProjectsLocationsServicesRevisionsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesRevisionsListResponse>;
    /**
     * runProjectsLocationsServicesSetIamPolicy - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
    **/
    runProjectsLocationsServicesSetIamPolicy(req: operations.RunProjectsLocationsServicesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesSetIamPolicyResponse>;
    /**
     * runProjectsLocationsServicesTestIamPermissions - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
    **/
    runProjectsLocationsServicesTestIamPermissions(req: operations.RunProjectsLocationsServicesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesTestIamPermissionsResponse>;
}
