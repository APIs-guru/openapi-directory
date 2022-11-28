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
     * cloudbuildProjectsBuildsCancel - Cancels a build in progress.
    **/
    cloudbuildProjectsBuildsCancel(req: operations.CloudbuildProjectsBuildsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsBuildsCancelResponse>;
    /**
     * cloudbuildProjectsBuildsCreate - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
    **/
    cloudbuildProjectsBuildsCreate(req: operations.CloudbuildProjectsBuildsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsBuildsCreateResponse>;
    /**
     * cloudbuildProjectsBuildsGet - Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
    **/
    cloudbuildProjectsBuildsGet(req: operations.CloudbuildProjectsBuildsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsBuildsGetResponse>;
    /**
     * cloudbuildProjectsBuildsList - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
    **/
    cloudbuildProjectsBuildsList(req: operations.CloudbuildProjectsBuildsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsBuildsListResponse>;
    /**
     * cloudbuildProjectsBuildsRetry - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
    **/
    cloudbuildProjectsBuildsRetry(req: operations.CloudbuildProjectsBuildsRetryRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsBuildsRetryResponse>;
    /**
     * cloudbuildProjectsLocationsBitbucketServerConfigsCreate - Creates a new `BitbucketServerConfig`. This API is experimental.
    **/
    cloudbuildProjectsLocationsBitbucketServerConfigsCreate(req: operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBitbucketServerConfigsCreateResponse>;
    /**
     * cloudbuildProjectsLocationsBitbucketServerConfigsList - List all `BitbucketServerConfigs` for a given project. This API is experimental.
    **/
    cloudbuildProjectsLocationsBitbucketServerConfigsList(req: operations.CloudbuildProjectsLocationsBitbucketServerConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBitbucketServerConfigsListResponse>;
    /**
     * cloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository - Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
    **/
    cloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository(req: operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepositoryResponse>;
    /**
     * cloudbuildProjectsLocationsBuildsApprove - Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
    **/
    cloudbuildProjectsLocationsBuildsApprove(req: operations.CloudbuildProjectsLocationsBuildsApproveRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBuildsApproveResponse>;
    /**
     * cloudbuildProjectsLocationsBuildsCreate - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
    **/
    cloudbuildProjectsLocationsBuildsCreate(req: operations.CloudbuildProjectsLocationsBuildsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBuildsCreateResponse>;
    /**
     * cloudbuildProjectsLocationsBuildsList - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
    **/
    cloudbuildProjectsLocationsBuildsList(req: operations.CloudbuildProjectsLocationsBuildsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBuildsListResponse>;
    /**
     * cloudbuildProjectsLocationsBuildsRetry - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
    **/
    cloudbuildProjectsLocationsBuildsRetry(req: operations.CloudbuildProjectsLocationsBuildsRetryRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsBuildsRetryResponse>;
    /**
     * cloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate - Batch connecting GitLab repositories to Cloud Build. This API is experimental.
    **/
    cloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate(req: operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreateResponse>;
    /**
     * cloudbuildProjectsLocationsGitLabConfigsCreate - Creates a new `GitLabConfig`. This API is experimental
    **/
    cloudbuildProjectsLocationsGitLabConfigsCreate(req: operations.CloudbuildProjectsLocationsGitLabConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGitLabConfigsCreateResponse>;
    /**
     * cloudbuildProjectsLocationsGitLabConfigsList - List all `GitLabConfigs` for a given project. This API is experimental
    **/
    cloudbuildProjectsLocationsGitLabConfigsList(req: operations.CloudbuildProjectsLocationsGitLabConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGitLabConfigsListResponse>;
    /**
     * cloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository - Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
    **/
    cloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository(req: operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepositoryResponse>;
    /**
     * cloudbuildProjectsLocationsGitLabConfigsReposList - List all repositories for a given `GitLabConfig`. This API is experimental
    **/
    cloudbuildProjectsLocationsGitLabConfigsReposList(req: operations.CloudbuildProjectsLocationsGitLabConfigsReposListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGitLabConfigsReposListResponse>;
    /**
     * cloudbuildProjectsLocationsGithubEnterpriseConfigsCreate - Create an association between a GCP project and a GitHub Enterprise server.
    **/
    cloudbuildProjectsLocationsGithubEnterpriseConfigsCreate(req: operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsCreateResponse>;
    /**
     * cloudbuildProjectsLocationsGithubEnterpriseConfigsList - List all GitHubEnterpriseConfigs for a given project.
    **/
    cloudbuildProjectsLocationsGithubEnterpriseConfigsList(req: operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsGithubEnterpriseConfigsListResponse>;
    /**
     * cloudbuildProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    cloudbuildProjectsLocationsOperationsCancel(req: operations.CloudbuildProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsOperationsCancelResponse>;
    /**
     * cloudbuildProjectsLocationsTriggersCreate - Creates a new `BuildTrigger`. This API is experimental.
    **/
    cloudbuildProjectsLocationsTriggersCreate(req: operations.CloudbuildProjectsLocationsTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsTriggersCreateResponse>;
    /**
     * cloudbuildProjectsLocationsTriggersList - Lists existing `BuildTrigger`s. This API is experimental.
    **/
    cloudbuildProjectsLocationsTriggersList(req: operations.CloudbuildProjectsLocationsTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsTriggersListResponse>;
    /**
     * cloudbuildProjectsLocationsTriggersPatch - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
    **/
    cloudbuildProjectsLocationsTriggersPatch(req: operations.CloudbuildProjectsLocationsTriggersPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsTriggersPatchResponse>;
    /**
     * cloudbuildProjectsLocationsTriggersRun - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
    **/
    cloudbuildProjectsLocationsTriggersRun(req: operations.CloudbuildProjectsLocationsTriggersRunRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsTriggersRunResponse>;
    /**
     * cloudbuildProjectsLocationsTriggersWebhook - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
    **/
    cloudbuildProjectsLocationsTriggersWebhook(req: operations.CloudbuildProjectsLocationsTriggersWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsTriggersWebhookResponse>;
    /**
     * cloudbuildProjectsLocationsWorkerPoolsCreate - Creates a `WorkerPool`.
    **/
    cloudbuildProjectsLocationsWorkerPoolsCreate(req: operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse>;
    /**
     * cloudbuildProjectsLocationsWorkerPoolsDelete - Deletes a `WorkerPool`.
    **/
    cloudbuildProjectsLocationsWorkerPoolsDelete(req: operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse>;
    /**
     * cloudbuildProjectsLocationsWorkerPoolsGet - Returns details of a `WorkerPool`.
    **/
    cloudbuildProjectsLocationsWorkerPoolsGet(req: operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse>;
    /**
     * cloudbuildProjectsLocationsWorkerPoolsList - Lists `WorkerPool`s.
    **/
    cloudbuildProjectsLocationsWorkerPoolsList(req: operations.CloudbuildProjectsLocationsWorkerPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsListResponse>;
    /**
     * cloudbuildProjectsLocationsWorkerPoolsPatch - Updates a `WorkerPool`.
    **/
    cloudbuildProjectsLocationsWorkerPoolsPatch(req: operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse>;
    /**
     * cloudbuildProjectsTriggersCreate - Creates a new `BuildTrigger`. This API is experimental.
    **/
    cloudbuildProjectsTriggersCreate(req: operations.CloudbuildProjectsTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersCreateResponse>;
    /**
     * cloudbuildProjectsTriggersDelete - Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
    **/
    cloudbuildProjectsTriggersDelete(req: operations.CloudbuildProjectsTriggersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersDeleteResponse>;
    /**
     * cloudbuildProjectsTriggersGet - Returns information about a `BuildTrigger`. This API is experimental.
    **/
    cloudbuildProjectsTriggersGet(req: operations.CloudbuildProjectsTriggersGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersGetResponse>;
    /**
     * cloudbuildProjectsTriggersList - Lists existing `BuildTrigger`s. This API is experimental.
    **/
    cloudbuildProjectsTriggersList(req: operations.CloudbuildProjectsTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersListResponse>;
    /**
     * cloudbuildProjectsTriggersPatch - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
    **/
    cloudbuildProjectsTriggersPatch(req: operations.CloudbuildProjectsTriggersPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersPatchResponse>;
    /**
     * cloudbuildProjectsTriggersRun - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
    **/
    cloudbuildProjectsTriggersRun(req: operations.CloudbuildProjectsTriggersRunRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersRunResponse>;
    /**
     * cloudbuildProjectsTriggersWebhook - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
    **/
    cloudbuildProjectsTriggersWebhook(req: operations.CloudbuildProjectsTriggersWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsTriggersWebhookResponse>;
}
