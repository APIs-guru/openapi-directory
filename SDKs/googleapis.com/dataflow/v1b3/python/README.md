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
    
req = operations.DataflowProjectsDeleteSnapshotsRequest(
    security=operations.DataflowProjectsDeleteSnapshotsSecurity(
        option1=operations.DataflowProjectsDeleteSnapshotsSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.DataflowProjectsDeleteSnapshotsPathParams(
        project_id="deserunt",
    ),
    query_params=operations.DataflowProjectsDeleteSnapshotsQueryParams(
        dollar_xgafv="2",
        access_token="exercitationem",
        alt="media",
        callback="neque",
        fields="deleniti",
        key="vel",
        location="commodi",
        oauth_token="ut",
        pretty_print=True,
        quota_user="nam",
        snapshot_id="eius",
        upload_type="et",
        upload_protocol="et",
    ),
)
    
res = s.projects.dataflow_projects_delete_snapshots(req)

if res.delete_snapshot_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dataflow_projects_delete_snapshots` - Deletes a snapshot.
* `dataflow_projects_jobs_aggregated` - List the jobs of a project across all regions.
* `dataflow_projects_jobs_create` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `dataflow_projects_jobs_debug_get_config` - Get encoded debug configuration for component. Not cacheable.
* `dataflow_projects_jobs_debug_send_capture` - Send encoded debug capture data for component.
* `dataflow_projects_jobs_get` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `dataflow_projects_jobs_get_metrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflow_projects_jobs_list` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `dataflow_projects_jobs_messages_list` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflow_projects_jobs_snapshot` - Snapshot the state of a streaming job.
* `dataflow_projects_jobs_update` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `dataflow_projects_jobs_work_items_lease` - Leases a dataflow WorkItem to run.
* `dataflow_projects_jobs_work_items_report_status` - Reports the status of dataflow WorkItems leased by a worker.
* `dataflow_projects_locations_flex_templates_launch` - Launch a job with a FlexTemplate.
* `dataflow_projects_locations_jobs_create` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `dataflow_projects_locations_jobs_debug_get_config` - Get encoded debug configuration for component. Not cacheable.
* `dataflow_projects_locations_jobs_debug_send_capture` - Send encoded debug capture data for component.
* `dataflow_projects_locations_jobs_get` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `dataflow_projects_locations_jobs_get_execution_details` - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `dataflow_projects_locations_jobs_get_metrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflow_projects_locations_jobs_list` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `dataflow_projects_locations_jobs_messages_list` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `dataflow_projects_locations_jobs_snapshot` - Snapshot the state of a streaming job.
* `dataflow_projects_locations_jobs_snapshots_list` - Lists snapshots.
* `dataflow_projects_locations_jobs_stages_get_execution_details` - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `dataflow_projects_locations_jobs_update` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `dataflow_projects_locations_jobs_work_items_lease` - Leases a dataflow WorkItem to run.
* `dataflow_projects_locations_jobs_work_items_report_status` - Reports the status of dataflow WorkItems leased by a worker.
* `dataflow_projects_locations_snapshots_delete` - Deletes a snapshot.
* `dataflow_projects_locations_snapshots_get` - Gets information about a snapshot.
* `dataflow_projects_locations_snapshots_list` - Lists snapshots.
* `dataflow_projects_locations_sql_validate` - Validates a GoogleSQL query for Cloud Dataflow syntax. Will always confirm the given query parses correctly, and if able to look up schema information from DataCatalog, will validate that the query analyzes properly as well.
* `dataflow_projects_locations_templates_create` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `dataflow_projects_locations_templates_get` - Get the template associated with a template.
* `dataflow_projects_locations_templates_launch` - Launch a template.
* `dataflow_projects_locations_worker_messages` - Send a worker_message to the service.
* `dataflow_projects_snapshots_get` - Gets information about a snapshot.
* `dataflow_projects_snapshots_list` - Lists snapshots.
* `dataflow_projects_templates_create` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `dataflow_projects_templates_get` - Get the template associated with a template.
* `dataflow_projects_templates_launch` - Launch a template.
* `dataflow_projects_worker_messages` - Send a worker_message to the service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
