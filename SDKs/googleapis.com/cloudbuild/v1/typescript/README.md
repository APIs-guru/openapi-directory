# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CloudbuildGithubDotComWebhookReceiveRequest, CloudbuildGithubDotComWebhookReceiveResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudbuildGithubDotComWebhookReceiveRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "veniam",
    alt: "proto",
    callback: "a",
    fields: "aut",
    key: "aut",
    oauthToken: "illum",
    prettyPrint: false,
    quotaUser: "quidem",
    uploadType: "ad",
    uploadProtocol: "aliquam",
    webhookKey: "voluptates",
  },
  request: {
    contentType: "rerum",
    data: "magni",
    extensions: [
      {
        "ex": "non",
        "et": "rerum",
      },
    ],
  },
};

sdk.githubDotComWebhook.cloudbuildGithubDotComWebhookReceive(req).then((res: CloudbuildGithubDotComWebhookReceiveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### githubDotComWebhook

* `cloudbuildGithubDotComWebhookReceive` - ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.

### locations

* `cloudbuildLocationsRegionalWebhook` - ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.

### projects

* `cloudbuildProjectsBuildsCancel` - Cancels a build in progress.
* `cloudbuildProjectsBuildsCreate` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `cloudbuildProjectsBuildsGet` - Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
* `cloudbuildProjectsBuildsList` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `cloudbuildProjectsBuildsRetry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `cloudbuildProjectsLocationsBitbucketServerConfigsCreate` - Creates a new `BitbucketServerConfig`. This API is experimental.
* `cloudbuildProjectsLocationsBitbucketServerConfigsList` - List all `BitbucketServerConfigs` for a given project. This API is experimental.
* `cloudbuildProjectsLocationsBitbucketServerConfigsRemoveBitbucketServerConnectedRepository` - Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
* `cloudbuildProjectsLocationsBuildsApprove` - Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
* `cloudbuildProjectsLocationsBuildsCreate` - Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
* `cloudbuildProjectsLocationsBuildsList` - Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
* `cloudbuildProjectsLocationsBuildsRetry` - Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Google Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
* `cloudbuildProjectsLocationsGitLabConfigsConnectedRepositoriesBatchCreate` - Batch connecting GitLab repositories to Cloud Build. This API is experimental.
* `cloudbuildProjectsLocationsGitLabConfigsCreate` - Creates a new `GitLabConfig`. This API is experimental
* `cloudbuildProjectsLocationsGitLabConfigsList` - List all `GitLabConfigs` for a given project. This API is experimental
* `cloudbuildProjectsLocationsGitLabConfigsRemoveGitLabConnectedRepository` - Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
* `cloudbuildProjectsLocationsGitLabConfigsReposList` - List all repositories for a given `GitLabConfig`. This API is experimental
* `cloudbuildProjectsLocationsGithubEnterpriseConfigsCreate` - Create an association between a GCP project and a GitHub Enterprise server.
* `cloudbuildProjectsLocationsGithubEnterpriseConfigsList` - List all GitHubEnterpriseConfigs for a given project.
* `cloudbuildProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `cloudbuildProjectsLocationsTriggersCreate` - Creates a new `BuildTrigger`. This API is experimental.
* `cloudbuildProjectsLocationsTriggersList` - Lists existing `BuildTrigger`s. This API is experimental.
* `cloudbuildProjectsLocationsTriggersPatch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuildProjectsLocationsTriggersRun` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `cloudbuildProjectsLocationsTriggersWebhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
* `cloudbuildProjectsLocationsWorkerPoolsCreate` - Creates a `WorkerPool`.
* `cloudbuildProjectsLocationsWorkerPoolsDelete` - Deletes a `WorkerPool`.
* `cloudbuildProjectsLocationsWorkerPoolsGet` - Returns details of a `WorkerPool`.
* `cloudbuildProjectsLocationsWorkerPoolsList` - Lists `WorkerPool`s.
* `cloudbuildProjectsLocationsWorkerPoolsPatch` - Updates a `WorkerPool`.
* `cloudbuildProjectsTriggersCreate` - Creates a new `BuildTrigger`. This API is experimental.
* `cloudbuildProjectsTriggersDelete` - Deletes a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuildProjectsTriggersGet` - Returns information about a `BuildTrigger`. This API is experimental.
* `cloudbuildProjectsTriggersList` - Lists existing `BuildTrigger`s. This API is experimental.
* `cloudbuildProjectsTriggersPatch` - Updates a `BuildTrigger` by its project ID and trigger ID. This API is experimental.
* `cloudbuildProjectsTriggersRun` - Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path. The POST request that does not include the location endpoint in the path can only be used when running global triggers.
* `cloudbuildProjectsTriggersWebhook` - ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

### v1

* `cloudbuildWebhook` - ReceiveWebhook is called when the API receives a GitHub webhook.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
