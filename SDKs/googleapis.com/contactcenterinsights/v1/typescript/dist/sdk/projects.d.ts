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
     * contactcenterinsightsProjectsLocationsConversationsAnalysesCreate - Creates an analysis. The long running operation is done when the analysis has completed.
    **/
    contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsAnalysesList - Lists analyses.
    **/
    contactcenterinsightsProjectsLocationsConversationsAnalysesList(req: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsBulkAnalyze - Analyzes multiple conversations in a single request.
    **/
    contactcenterinsightsProjectsLocationsConversationsBulkAnalyze(req: operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsCalculateStats - Gets conversation statistics.
    **/
    contactcenterinsightsProjectsLocationsConversationsCalculateStats(req: operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsCreate - Creates a conversation.
    **/
    contactcenterinsightsProjectsLocationsConversationsCreate(req: operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsIngest - Imports conversations and processes them according to the user's configuration.
    **/
    contactcenterinsightsProjectsLocationsConversationsIngest(req: operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse>;
    /**
     * contactcenterinsightsProjectsLocationsConversationsList - Lists conversations.
    **/
    contactcenterinsightsProjectsLocationsConversationsList(req: operations.ContactcenterinsightsProjectsLocationsConversationsListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsInsightsdataExport - Export insights data to a destination defined in the request body.
    **/
    contactcenterinsightsProjectsLocationsInsightsdataExport(req: operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats - Gets an issue model's statistics.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsCreate - Creates an issue model.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsCreate(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsDeploy - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsDeploy(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsIssuesList - Lists issues.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsIssuesList(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsList - Lists issue models.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsList(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsIssueModelsUndeploy - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
    **/
    contactcenterinsightsProjectsLocationsIssueModelsUndeploy(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse>;
    /**
     * contactcenterinsightsProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    contactcenterinsightsProjectsLocationsOperationsCancel(req: operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse>;
    /**
     * contactcenterinsightsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    contactcenterinsightsProjectsLocationsOperationsList(req: operations.ContactcenterinsightsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsOperationsListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsPhraseMatchersCreate - Creates a phrase matcher.
    **/
    contactcenterinsightsProjectsLocationsPhraseMatchersCreate(req: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse>;
    /**
     * contactcenterinsightsProjectsLocationsPhraseMatchersList - Lists phrase matchers.
    **/
    contactcenterinsightsProjectsLocationsPhraseMatchersList(req: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsViewsCreate - Creates a view.
    **/
    contactcenterinsightsProjectsLocationsViewsCreate(req: operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse>;
    /**
     * contactcenterinsightsProjectsLocationsViewsDelete - Deletes a view.
    **/
    contactcenterinsightsProjectsLocationsViewsDelete(req: operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse>;
    /**
     * contactcenterinsightsProjectsLocationsViewsGet - Gets a view.
    **/
    contactcenterinsightsProjectsLocationsViewsGet(req: operations.ContactcenterinsightsProjectsLocationsViewsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsGetResponse>;
    /**
     * contactcenterinsightsProjectsLocationsViewsList - Lists views.
    **/
    contactcenterinsightsProjectsLocationsViewsList(req: operations.ContactcenterinsightsProjectsLocationsViewsListRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsListResponse>;
    /**
     * contactcenterinsightsProjectsLocationsViewsPatch - Updates a view.
    **/
    contactcenterinsightsProjectsLocationsViewsPatch(req: operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse>;
}
