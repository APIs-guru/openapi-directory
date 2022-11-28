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
    
    req := operations.LoggingEntriesCopyRequest{
        Security: operations.LoggingEntriesCopySecurity{
            Option1: &operations.LoggingEntriesCopySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.LoggingEntriesCopyQueryParams{
            DollarXgafv: "2",
            AccessToken: "nostrum",
            Alt: "media",
            Callback: "quis",
            Fields: "occaecati",
            Key: "omnis",
            OauthToken: "totam",
            PrettyPrint: true,
            QuotaUser: "nostrum",
            UploadType: "aut",
            UploadProtocol: "accusamus",
        },
        Request: &shared.CopyLogEntriesRequest{
            Destination: "sit",
            Filter: "accusamus",
            Name: "voluptas",
        },
    }
    
    res, err := s.Entries.LoggingEntriesCopy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### entries

* `LoggingEntriesCopy` - Copies a set of log entries from a log bucket to a Cloud Storage bucket.
* `LoggingEntriesList` - Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
* `LoggingEntriesTail` - Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.
* `LoggingEntriesWrite` - Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

### monitoredResourceDescriptors

* `LoggingMonitoredResourceDescriptorsList` - Lists the descriptors for monitored resource types used by Logging.

### projects

* `LoggingProjectsExclusionsCreate` - Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
* `LoggingProjectsExclusionsList` - Lists all the exclusions on the _Default sink in a parent resource.
* `LoggingProjectsLocationsBucketsCreate` - Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
* `LoggingProjectsLocationsBucketsList` - Lists log buckets.
* `LoggingProjectsLocationsBucketsUndelete` - Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
* `LoggingProjectsLocationsBucketsViewsCreate` - Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
* `LoggingProjectsLocationsBucketsViewsDelete` - Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
* `LoggingProjectsLocationsBucketsViewsList` - Lists views on a log bucket.
* `LoggingProjectsLocationsBucketsViewsPatch` - Updates a view on a log bucket. This method replaces the following fields in the existing view with values from the new view: filter. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
* `LoggingProjectsLocationsList` - Lists information about the supported locations for this service.
* `LoggingProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `LoggingProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `LoggingProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `LoggingProjectsLogsDelete` - Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
* `LoggingProjectsLogsList` - Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
* `LoggingProjectsMetricsCreate` - Creates a logs-based metric.
* `LoggingProjectsMetricsDelete` - Deletes a logs-based metric.
* `LoggingProjectsMetricsGet` - Gets a logs-based metric.
* `LoggingProjectsMetricsList` - Lists logs-based metrics.
* `LoggingProjectsMetricsUpdate` - Creates or updates a logs-based metric.
* `LoggingProjectsSinksPatch` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### sinks

* `LoggingSinksCreate` - Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
* `LoggingSinksDelete` - Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
* `LoggingSinksGet` - Gets a sink.
* `LoggingSinksList` - Lists sinks.
* `LoggingSinksUpdate` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### v2

* `LoggingGetCmekSettings` - Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `LoggingGetSettings` - Gets the Log Router settings for the given resource.Note: Settings for the Log Router can be get for Google Cloud projects, folders, organizations and billing accounts. Currently it can only be configured for organizations. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `LoggingUpdateCmekSettings` - Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `LoggingUpdateSettings` - Updates the Log Router settings for the given resource.Note: Settings for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled. 4) location_id is not supported by Logging. 5) location_id violate OrgPolicy.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
