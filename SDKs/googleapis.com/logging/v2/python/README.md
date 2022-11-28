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
    
req = operations.LoggingEntriesCopyRequest(
    security=operations.LoggingEntriesCopySecurity(
        option1=operations.LoggingEntriesCopySecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.LoggingEntriesCopyQueryParams(
        dollar_xgafv="2",
        access_token="nostrum",
        alt="media",
        callback="quis",
        fields="occaecati",
        key="omnis",
        oauth_token="totam",
        pretty_print=True,
        quota_user="nostrum",
        upload_type="aut",
        upload_protocol="accusamus",
    ),
    request=shared.CopyLogEntriesRequest(
        destination="sit",
        filter="accusamus",
        name="voluptas",
    ),
)
    
res = s.entries.logging_entries_copy(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### entries

* `logging_entries_copy` - Copies a set of log entries from a log bucket to a Cloud Storage bucket.
* `logging_entries_list` - Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
* `logging_entries_tail` - Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.
* `logging_entries_write` - Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

### monitoredResourceDescriptors

* `logging_monitored_resource_descriptors_list` - Lists the descriptors for monitored resource types used by Logging.

### projects

* `logging_projects_exclusions_create` - Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
* `logging_projects_exclusions_list` - Lists all the exclusions on the _Default sink in a parent resource.
* `logging_projects_locations_buckets_create` - Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
* `logging_projects_locations_buckets_list` - Lists log buckets.
* `logging_projects_locations_buckets_undelete` - Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
* `logging_projects_locations_buckets_views_create` - Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
* `logging_projects_locations_buckets_views_delete` - Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
* `logging_projects_locations_buckets_views_list` - Lists views on a log bucket.
* `logging_projects_locations_buckets_views_patch` - Updates a view on a log bucket. This method replaces the following fields in the existing view with values from the new view: filter. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
* `logging_projects_locations_list` - Lists information about the supported locations for this service.
* `logging_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `logging_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `logging_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `logging_projects_logs_delete` - Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
* `logging_projects_logs_list` - Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
* `logging_projects_metrics_create` - Creates a logs-based metric.
* `logging_projects_metrics_delete` - Deletes a logs-based metric.
* `logging_projects_metrics_get` - Gets a logs-based metric.
* `logging_projects_metrics_list` - Lists logs-based metrics.
* `logging_projects_metrics_update` - Creates or updates a logs-based metric.
* `logging_projects_sinks_patch` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### sinks

* `logging_sinks_create` - Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
* `logging_sinks_delete` - Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
* `logging_sinks_get` - Gets a sink.
* `logging_sinks_list` - Lists sinks.
* `logging_sinks_update` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### v2

* `logging_get_cmek_settings` - Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `logging_get_settings` - Gets the Log Router settings for the given resource.Note: Settings for the Log Router can be get for Google Cloud projects, folders, organizations and billing accounts. Currently it can only be configured for organizations. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `logging_update_cmek_settings` - Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `logging_update_settings` - Updates the Log Router settings for the given resource.Note: Settings for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled. 4) location_id is not supported by Logging. 5) location_id violate OrgPolicy.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
