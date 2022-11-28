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
import { DatalabelingProjectsAnnotationSpecSetsCreateRequest, DatalabelingProjectsAnnotationSpecSetsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatalabelingProjectsAnnotationSpecSetsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "saepe",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "eligendi",
    alt: "proto",
    callback: "consectetur",
    fields: "omnis",
    key: "fugit",
    oauthToken: "sed",
    prettyPrint: true,
    quotaUser: "at",
    uploadType: "officia",
    uploadProtocol: "pariatur",
  },
  request: {
    annotationSpecSet: {
      annotationSpecs: [
        {
          description: "error",
          displayName: "aut",
          index: 4482802569009989763,
        },
      ],
      blockingResources: [
        "id",
        "enim",
      ],
      description: "molestiae",
      displayName: "repudiandae",
      name: "facere",
    },
  },
};

sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req).then((res: DatalabelingProjectsAnnotationSpecSetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datalabelingProjectsAnnotationSpecSetsCreate` - Creates an annotation spec set by providing a set of labels.
* `datalabelingProjectsAnnotationSpecSetsList` - Lists annotation spec sets for a project. Pagination is supported.
* `datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList` - Lists examples in an annotated dataset. Pagination is supported.
* `datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate` - Create a FeedbackMessage object.
* `datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList` - List FeedbackMessages with pagination.
* `datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList` - List FeedbackThreads with pagination.
* `datalabelingProjectsDatasetsAnnotatedDatasetsList` - Lists annotated datasets for a dataset. Pagination is supported.
* `datalabelingProjectsDatasetsCreate` - Creates dataset. If success return a Dataset resource.
* `datalabelingProjectsDatasetsDataItemsList` - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* `datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch` - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* `datalabelingProjectsDatasetsExportData` - Exports data and annotations from dataset.
* `datalabelingProjectsDatasetsImageLabel` - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* `datalabelingProjectsDatasetsImportData` - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* `datalabelingProjectsDatasetsList` - Lists datasets under a project. Pagination is supported.
* `datalabelingProjectsDatasetsTextLabel` - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* `datalabelingProjectsDatasetsVideoLabel` - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* `datalabelingProjectsEvaluationJobsCreate` - Creates an evaluation job.
* `datalabelingProjectsEvaluationJobsList` - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* `datalabelingProjectsEvaluationJobsPatch` - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* `datalabelingProjectsEvaluationJobsPause` - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* `datalabelingProjectsEvaluationJobsResume` - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* `datalabelingProjectsEvaluationsSearch` - Searches evaluations within a project.
* `datalabelingProjectsInstructionsCreate` - Creates an instruction for how data should be labeled.
* `datalabelingProjectsInstructionsList` - Lists instructions for a project. Pagination is supported.
* `datalabelingProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datalabelingProjectsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datalabelingProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datalabelingProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
