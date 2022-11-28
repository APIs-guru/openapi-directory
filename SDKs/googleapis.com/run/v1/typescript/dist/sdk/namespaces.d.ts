import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * runNamespacesAuthorizeddomainsList - List authorized domains.
    **/
    runNamespacesAuthorizeddomainsList(req: operations.RunNamespacesAuthorizeddomainsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesAuthorizeddomainsListResponse>;
    /**
     * runNamespacesConfigurationsList - List configurations.
    **/
    runNamespacesConfigurationsList(req: operations.RunNamespacesConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesConfigurationsListResponse>;
    /**
     * runNamespacesDomainmappingsCreate - Create a new domain mapping.
    **/
    runNamespacesDomainmappingsCreate(req: operations.RunNamespacesDomainmappingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsCreateResponse>;
    /**
     * runNamespacesDomainmappingsDelete - Delete a domain mapping.
    **/
    runNamespacesDomainmappingsDelete(req: operations.RunNamespacesDomainmappingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsDeleteResponse>;
    /**
     * runNamespacesDomainmappingsGet - Get information about a domain mapping.
    **/
    runNamespacesDomainmappingsGet(req: operations.RunNamespacesDomainmappingsGetRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsGetResponse>;
    /**
     * runNamespacesDomainmappingsList - List all domain mappings.
    **/
    runNamespacesDomainmappingsList(req: operations.RunNamespacesDomainmappingsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsListResponse>;
    /**
     * runNamespacesExecutionsCancel - Cancel an execution.
    **/
    runNamespacesExecutionsCancel(req: operations.RunNamespacesExecutionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesExecutionsCancelResponse>;
    /**
     * runNamespacesExecutionsList - List executions.
    **/
    runNamespacesExecutionsList(req: operations.RunNamespacesExecutionsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesExecutionsListResponse>;
    /**
     * runNamespacesJobsCreate - Create a job.
    **/
    runNamespacesJobsCreate(req: operations.RunNamespacesJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsCreateResponse>;
    /**
     * runNamespacesJobsDelete - Delete a job.
    **/
    runNamespacesJobsDelete(req: operations.RunNamespacesJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsDeleteResponse>;
    /**
     * runNamespacesJobsList - List jobs.
    **/
    runNamespacesJobsList(req: operations.RunNamespacesJobsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsListResponse>;
    /**
     * runNamespacesJobsReplaceJob - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
    **/
    runNamespacesJobsReplaceJob(req: operations.RunNamespacesJobsReplaceJobRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsReplaceJobResponse>;
    /**
     * runNamespacesJobsRun - Trigger creation of a new execution of this job.
    **/
    runNamespacesJobsRun(req: operations.RunNamespacesJobsRunRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsRunResponse>;
    /**
     * runNamespacesRevisionsList - List revisions.
    **/
    runNamespacesRevisionsList(req: operations.RunNamespacesRevisionsListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesRevisionsListResponse>;
    /**
     * runNamespacesRoutesList - List routes.
    **/
    runNamespacesRoutesList(req: operations.RunNamespacesRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesRoutesListResponse>;
    /**
     * runNamespacesServicesCreate - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
    **/
    runNamespacesServicesCreate(req: operations.RunNamespacesServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesCreateResponse>;
    /**
     * runNamespacesServicesDelete - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
    **/
    runNamespacesServicesDelete(req: operations.RunNamespacesServicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesDeleteResponse>;
    /**
     * runNamespacesServicesGet - Gets information about a service.
    **/
    runNamespacesServicesGet(req: operations.RunNamespacesServicesGetRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesGetResponse>;
    /**
     * runNamespacesServicesList - Lists services for the given project and region.
    **/
    runNamespacesServicesList(req: operations.RunNamespacesServicesListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesListResponse>;
    /**
     * runNamespacesServicesReplaceService - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
    **/
    runNamespacesServicesReplaceService(req: operations.RunNamespacesServicesReplaceServiceRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesReplaceServiceResponse>;
    /**
     * runNamespacesTasksGet - Get information about a task.
    **/
    runNamespacesTasksGet(req: operations.RunNamespacesTasksGetRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesTasksGetResponse>;
    /**
     * runNamespacesTasksList - List tasks.
    **/
    runNamespacesTasksList(req: operations.RunNamespacesTasksListRequest, config?: AxiosRequestConfig): Promise<operations.RunNamespacesTasksListResponse>;
}
