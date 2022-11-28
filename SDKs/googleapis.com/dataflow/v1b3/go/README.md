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
    
    req := operations.DataflowProjectsDeleteSnapshotsRequest{
        Security: operations.DataflowProjectsDeleteSnapshotsSecurity{
            Option1: &operations.DataflowProjectsDeleteSnapshotsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DataflowProjectsDeleteSnapshotsPathParams{
            ProjectID: "deserunt",
        },
        QueryParams: operations.DataflowProjectsDeleteSnapshotsQueryParams{
            DollarXgafv: "2",
            AccessToken: "exercitationem",
            Alt: "media",
            Callback: "neque",
            Fields: "deleniti",
            Key: "vel",
            Location: "commodi",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "nam",
            SnapshotID: "eius",
            UploadType: "et",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DataflowProjectsDeleteSnapshots` - Deletes a snapshot.
* `DataflowProjectsJobsAggregated` - List the jobs of a project across all regions.
* `DataflowProjectsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `DataflowProjectsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `DataflowProjectsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `DataflowProjectsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `DataflowProjectsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsJobsSnapshot` - Snapshot the state of a streaming job.
* `DataflowProjectsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `DataflowProjectsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `DataflowProjectsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `DataflowProjectsLocationsFlexTemplatesLaunch` - Launch a job with a FlexTemplate.
* `DataflowProjectsLocationsJobsCreate` - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsLocationsJobsDebugGetConfig` - Get encoded debug configuration for component. Not cacheable.
* `DataflowProjectsLocationsJobsDebugSendCapture` - Send encoded debug capture data for component.
* `DataflowProjectsLocationsJobsGet` - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsGetExecutionDetails` - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `DataflowProjectsLocationsJobsGetMetrics` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsList` - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsMessagesList` - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsSnapshot` - Snapshot the state of a streaming job.
* `DataflowProjectsLocationsJobsSnapshotsList` - Lists snapshots.
* `DataflowProjectsLocationsJobsStagesGetExecutionDetails` - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
* `DataflowProjectsLocationsJobsUpdate` - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
* `DataflowProjectsLocationsJobsWorkItemsLease` - Leases a dataflow WorkItem to run.
* `DataflowProjectsLocationsJobsWorkItemsReportStatus` - Reports the status of dataflow WorkItems leased by a worker.
* `DataflowProjectsLocationsSnapshotsDelete` - Deletes a snapshot.
* `DataflowProjectsLocationsSnapshotsGet` - Gets information about a snapshot.
* `DataflowProjectsLocationsSnapshotsList` - Lists snapshots.
* `DataflowProjectsLocationsSQLValidate` - Validates a GoogleSQL query for Cloud Dataflow syntax. Will always confirm the given query parses correctly, and if able to look up schema information from DataCatalog, will validate that the query analyzes properly as well.
* `DataflowProjectsLocationsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsLocationsTemplatesGet` - Get the template associated with a template.
* `DataflowProjectsLocationsTemplatesLaunch` - Launch a template.
* `DataflowProjectsLocationsWorkerMessages` - Send a worker_message to the service.
* `DataflowProjectsSnapshotsGet` - Gets information about a snapshot.
* `DataflowProjectsSnapshotsList` - Lists snapshots.
* `DataflowProjectsTemplatesCreate` - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
* `DataflowProjectsTemplatesGet` - Get the template associated with a template.
* `DataflowProjectsTemplatesLaunch` - Launch a template.
* `DataflowProjectsWorkerMessages` - Send a worker_message to the service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
