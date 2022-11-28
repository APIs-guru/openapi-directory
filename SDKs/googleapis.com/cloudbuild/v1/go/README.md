# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudbuildGithubDotComWebhookReceiveRequest{
        QueryParams: operations.CloudbuildGithubDotComWebhookReceiveQueryParams{
            DollarXgafv: "1",
            AccessToken: "veniam",
            Alt: "proto",
            Callback: "a",
            Fields: "aut",
            Key: "aut",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "quidem",
            UploadType: "ad",
            UploadProtocol: "aliquam",
            WebhookKey: "voluptates",
        },
        Request: &shared.HTTPBody{
            ContentType: "rerum",
            Data: "magni",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "ex": "non",
                    "et": "rerum",
                },
            },
        },
    }
    
    res, err := s.GithubDotComWebhook.CloudbuildGithubDotComWebhookReceive(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### githubDotComWebhook

* `CloudbuildGithubDotComWebhookReceive` - ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.

### locations

* `CloudbuildLocationsRegionalWebhook` - ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.

### projects

* `CloudbuildProjectsBuildsCancel` - Cancels a build in progress.
* `CloudbuildProjectsBuildsCreate` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `CloudbuildProjectsBuildsGet` - Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
* `CloudbuildProjectsBuildsList` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `CloudbuildProjectsBuildsRetry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `CloudbuildProjectsLocationsBitbucketServerConfigsCreate` - Creates a new `BitbucketServerConfig`. This API is experimental.
* `CloudbuildProjectsLocationsBitbucketServerConfigsList` - List all `BitbucketServerConfigs` for a given project. This API is experimental.
* `CloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository` - Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
* `CloudbuildProjectsLocationsBuildsApprove` - Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
* `CloudbuildProjectsLocationsBuildsCreate` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `CloudbuildProjectsLocationsBuildsList` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `CloudbuildProjectsLocationsBuildsRetry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `CloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate` - Batch connecting GitLab repositories to Cloud Build. This API is experimental.
* `CloudbuildProjectsLocationsGitLabConfigsCreate` - Creates a new `GitLabConfig`. This API is experimental
* `CloudbuildProjectsLocationsGitLabConfigsList` - List all `GitLabConfigs` for a given project. This API is experimental
* `CloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository` - Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
* `CloudbuildProjectsLocationsGitLabConfigsReposList` - List all repositories for a given `GitLabConfig`. This API is experimental
* `CloudbuildProjectsLocationsGithubEnterpriseConfigsCreate` - Create an association between a GCP project and a GitHub Enterprise server.
* `CloudbuildProjectsLocationsGithubEnterpriseConfigsList` - List all GitHubEnterpriseConfigs for a given project.
* `CloudbuildProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `CloudbuildProjectsLocationsTriggersCreate` - Creates a new `BuildTrigger`. This API is experimental.
* `CloudbuildProjectsLocationsTriggersList` - Lists existing `BuildTrigger`s. This API is experimental.
* `CloudbuildProjectsLocationsTriggersPatch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `CloudbuildProjectsLocationsTriggersRun` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `CloudbuildProjectsLocationsTriggersWebhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
* `CloudbuildProjectsLocationsWorkerPoolsCreate` - Creates a `WorkerPool`.
* `CloudbuildProjectsLocationsWorkerPoolsDelete` - Deletes a `WorkerPool`.
* `CloudbuildProjectsLocationsWorkerPoolsGet` - Returns details of a `WorkerPool`.
* `CloudbuildProjectsLocationsWorkerPoolsList` - Lists `WorkerPool`s.
* `CloudbuildProjectsLocationsWorkerPoolsPatch` - Updates a `WorkerPool`.
* `CloudbuildProjectsTriggersCreate` - Creates a new `BuildTrigger`. This API is experimental.
* `CloudbuildProjectsTriggersDelete` - Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `CloudbuildProjectsTriggersGet` - Returns information about a `BuildTrigger`. This API is experimental.
* `CloudbuildProjectsTriggersList` - Lists existing `BuildTrigger`s. This API is experimental.
* `CloudbuildProjectsTriggersPatch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `CloudbuildProjectsTriggersRun` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `CloudbuildProjectsTriggersWebhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

### v1

* `CloudbuildWebhook` - ReceiveWebhook is called when the API receives a GitHub webhook.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
