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
import { ToolresultsProjectsGetSettingsRequest, ToolresultsProjectsGetSettingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ToolresultsProjectsGetSettingsRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    projectId: "dolorem",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "in",
    alt: "proto",
    callback: "sequi",
    fields: "ut",
    key: "cumque",
    oauthToken: "animi",
    prettyPrint: false,
    quotaUser: "quo",
    uploadType: "et",
    uploadProtocol: "esse",
  },
};

sdk.projects.toolresultsProjectsGetSettings(req).then((res: ToolresultsProjectsGetSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `toolresultsProjectsGetSettings` - Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
* `toolresultsProjectsHistoriesCreate` - Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
* `toolresultsProjectsHistoriesExecutionsClustersGet` - Retrieves a single screenshot cluster by its ID
* `toolresultsProjectsHistoriesExecutionsClustersList` - Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
* `toolresultsProjectsHistoriesExecutionsCreate` - Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* `toolresultsProjectsHistoriesExecutionsEnvironmentsGet` - Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
* `toolresultsProjectsHistoriesExecutionsEnvironmentsList` - Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
* `toolresultsProjectsHistoriesExecutionsGet` - Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
* `toolresultsProjectsHistoriesExecutionsList` - Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
* `toolresultsProjectsHistoriesExecutionsPatch` - Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
* `toolresultsProjectsHistoriesExecutionsStepsAccessibilityClusters` - Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsCreate` - Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* `toolresultsProjectsHistoriesExecutionsStepsGet` - Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummary` - Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
* `toolresultsProjectsHistoriesExecutionsStepsList` - Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPatch` - Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreate` - Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreate` - Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGet` - Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesList` - Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreate` - Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesList` - Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
* `toolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFiles` - Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
* `toolresultsProjectsHistoriesExecutionsStepsTestCasesGet` - Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
* `toolresultsProjectsHistoriesExecutionsStepsTestCasesList` - Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
* `toolresultsProjectsHistoriesExecutionsStepsThumbnailsList` - Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
* `toolresultsProjectsHistoriesGet` - Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* `toolresultsProjectsHistoriesList` - Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
* `toolresultsProjectsInitializeSettings` - Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
