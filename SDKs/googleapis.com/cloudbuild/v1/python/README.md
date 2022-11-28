# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudbuildGithubDotComWebhookReceiveRequest(
    query_params=operations.CloudbuildGithubDotComWebhookReceiveQueryParams(
        dollar_xgafv="1",
        access_token="veniam",
        alt="proto",
        callback="a",
        fields="aut",
        key="aut",
        oauth_token="illum",
        pretty_print=False,
        quota_user="quidem",
        upload_type="ad",
        upload_protocol="aliquam",
        webhook_key="voluptates",
    ),
    request=shared.HTTPBody(
        content_type="rerum",
        data="magni",
        extensions=[
            {
                "ex": "non",
                "et": "rerum",
            },
        ],
    ),
)
    
res = s.github_dot_com_webhook.cloudbuild_github_dot_com_webhook_receive(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### githubDotComWebhook

* `cloudbuild_github_dot_com_webhook_receive` - ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.

### locations

* `cloudbuild_locations_regional_webhook` - ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.

### projects

* `cloudbuild_projects_builds_cancel` - Cancels a build in progress.
* `cloudbuild_projects_builds_create` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `cloudbuild_projects_builds_get` - Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
* `cloudbuild_projects_builds_list` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `cloudbuild_projects_builds_retry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `cloudbuild_projects_locations_bitbucket_server_configs_create` - Creates a new `BitbucketServerConfig`. This API is experimental.
* `cloudbuild_projects_locations_bitbucket_server_configs_list` - List all `BitbucketServerConfigs` for a given project. This API is experimental.
* `cloudbuild_projects_locations_bitbucket_server_configs_remove_bitbucket_server_connected_repository` - Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
* `cloudbuild_projects_locations_builds_approve` - Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
* `cloudbuild_projects_locations_builds_create` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `cloudbuild_projects_locations_builds_list` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `cloudbuild_projects_locations_builds_retry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `cloudbuild_projects_locations_git_lab_configs_connected_repositories_batch_create` - Batch connecting GitLab repositories to Cloud Build. This API is experimental.
* `cloudbuild_projects_locations_git_lab_configs_create` - Creates a new `GitLabConfig`. This API is experimental
* `cloudbuild_projects_locations_git_lab_configs_list` - List all `GitLabConfigs` for a given project. This API is experimental
* `cloudbuild_projects_locations_git_lab_configs_remove_git_lab_connected_repository` - Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
* `cloudbuild_projects_locations_git_lab_configs_repos_list` - List all repositories for a given `GitLabConfig`. This API is experimental
* `cloudbuild_projects_locations_github_enterprise_configs_create` - Create an association between a GCP project and a GitHub Enterprise server.
* `cloudbuild_projects_locations_github_enterprise_configs_list` - List all GitHubEnterpriseConfigs for a given project.
* `cloudbuild_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `cloudbuild_projects_locations_triggers_create` - Creates a new `BuildTrigger`. This API is experimental.
* `cloudbuild_projects_locations_triggers_list` - Lists existing `BuildTrigger`s. This API is experimental.
* `cloudbuild_projects_locations_triggers_patch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuild_projects_locations_triggers_run` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `cloudbuild_projects_locations_triggers_webhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
* `cloudbuild_projects_locations_worker_pools_create` - Creates a `WorkerPool`.
* `cloudbuild_projects_locations_worker_pools_delete` - Deletes a `WorkerPool`.
* `cloudbuild_projects_locations_worker_pools_get` - Returns details of a `WorkerPool`.
* `cloudbuild_projects_locations_worker_pools_list` - Lists `WorkerPool`s.
* `cloudbuild_projects_locations_worker_pools_patch` - Updates a `WorkerPool`.
* `cloudbuild_projects_triggers_create` - Creates a new `BuildTrigger`. This API is experimental.
* `cloudbuild_projects_triggers_delete` - Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuild_projects_triggers_get` - Returns information about a `BuildTrigger`. This API is experimental.
* `cloudbuild_projects_triggers_list` - Lists existing `BuildTrigger`s. This API is experimental.
* `cloudbuild_projects_triggers_patch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuild_projects_triggers_run` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `cloudbuild_projects_triggers_webhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

### v1

* `cloudbuild_webhook` - ReceiveWebhook is called when the API receives a GitHub webhook.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
