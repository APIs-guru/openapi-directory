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
    
req = operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest(
    security=operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatalabelingProjectsAnnotationSpecSetsCreatePathParams(
        parent="saepe",
    ),
    query_params=operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams(
        dollar_xgafv="1",
        access_token="eligendi",
        alt="proto",
        callback="consectetur",
        fields="omnis",
        key="fugit",
        oauth_token="sed",
        pretty_print=True,
        quota_user="at",
        upload_type="officia",
        upload_protocol="pariatur",
    ),
    request=shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest(
        annotation_spec_set=shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet(
            annotation_specs=[
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="error",
                    display_name="aut",
                    index=4482802569009989763,
                ),
            ],
            blocking_resources=[
                "id",
                "enim",
            ],
            description="molestiae",
            display_name="repudiandae",
            name="facere",
        ),
    ),
)
    
res = s.projects.datalabeling_projects_annotation_spec_sets_create(req)

if res.google_cloud_datalabeling_v1beta1_annotation_spec_set is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datalabeling_projects_annotation_spec_sets_create` - Creates an annotation spec set by providing a set of labels.
* `datalabeling_projects_annotation_spec_sets_list` - Lists annotation spec sets for a project. Pagination is supported.
* `datalabeling_projects_datasets_annotated_datasets_examples_list` - Lists examples in an annotated dataset. Pagination is supported.
* `datalabeling_projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create` - Create a FeedbackMessage object.
* `datalabeling_projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list` - List FeedbackMessages with pagination.
* `datalabeling_projects_datasets_annotated_datasets_feedback_threads_list` - List FeedbackThreads with pagination.
* `datalabeling_projects_datasets_annotated_datasets_list` - Lists annotated datasets for a dataset. Pagination is supported.
* `datalabeling_projects_datasets_create` - Creates dataset. If success return a Dataset resource.
* `datalabeling_projects_datasets_data_items_list` - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* `datalabeling_projects_datasets_evaluations_example_comparisons_search` - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* `datalabeling_projects_datasets_export_data` - Exports data and annotations from dataset.
* `datalabeling_projects_datasets_image_label` - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* `datalabeling_projects_datasets_import_data` - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* `datalabeling_projects_datasets_list` - Lists datasets under a project. Pagination is supported.
* `datalabeling_projects_datasets_text_label` - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* `datalabeling_projects_datasets_video_label` - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* `datalabeling_projects_evaluation_jobs_create` - Creates an evaluation job.
* `datalabeling_projects_evaluation_jobs_list` - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* `datalabeling_projects_evaluation_jobs_patch` - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* `datalabeling_projects_evaluation_jobs_pause` - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* `datalabeling_projects_evaluation_jobs_resume` - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* `datalabeling_projects_evaluations_search` - Searches evaluations within a project.
* `datalabeling_projects_instructions_create` - Creates an instruction for how data should be labeled.
* `datalabeling_projects_instructions_list` - Lists instructions for a project. Pagination is supported.
* `datalabeling_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datalabeling_projects_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datalabeling_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datalabeling_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
