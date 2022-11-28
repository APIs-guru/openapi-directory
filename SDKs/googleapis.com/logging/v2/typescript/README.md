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
import { LoggingEntriesCopyRequest, LoggingEntriesCopyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: LoggingEntriesCopyRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nostrum",
    alt: "media",
    callback: "quis",
    fields: "occaecati",
    key: "omnis",
    oauthToken: "totam",
    prettyPrint: true,
    quotaUser: "nostrum",
    uploadType: "aut",
    uploadProtocol: "accusamus",
  },
  request: {
    destination: "sit",
    filter: "accusamus",
    name: "voluptas",
  },
};

sdk.entries.loggingEntriesCopy(req).then((res: LoggingEntriesCopyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### entries

* `loggingEntriesCopy` - Copies a set of log entries from a log bucket to a Cloud Storage bucket.
* `loggingEntriesList` - Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
* `loggingEntriesTail` - Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs.
* `loggingEntriesWrite` - Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)

### monitoredResourceDescriptors

* `loggingMonitoredResourceDescriptorsList` - Lists the descriptors for monitored resource types used by Logging.

### projects

* `loggingProjectsExclusionsCreate` - Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
* `loggingProjectsExclusionsList` - Lists all the exclusions on the _Default sink in a parent resource.
* `loggingProjectsLocationsBucketsCreate` - Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
* `loggingProjectsLocationsBucketsList` - Lists log buckets.
* `loggingProjectsLocationsBucketsUndelete` - Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
* `loggingProjectsLocationsBucketsViewsCreate` - Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
* `loggingProjectsLocationsBucketsViewsDelete` - Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
* `loggingProjectsLocationsBucketsViewsList` - Lists views on a log bucket.
* `loggingProjectsLocationsBucketsViewsPatch` - Updates a view on a log bucket. This method replaces the following fields in the existing view with values from the new view: filter. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
* `loggingProjectsLocationsList` - Lists information about the supported locations for this service.
* `loggingProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `loggingProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `loggingProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `loggingProjectsLogsDelete` - Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
* `loggingProjectsLogsList` - Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
* `loggingProjectsMetricsCreate` - Creates a logs-based metric.
* `loggingProjectsMetricsDelete` - Deletes a logs-based metric.
* `loggingProjectsMetricsGet` - Gets a logs-based metric.
* `loggingProjectsMetricsList` - Lists logs-based metrics.
* `loggingProjectsMetricsUpdate` - Creates or updates a logs-based metric.
* `loggingProjectsSinksPatch` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### sinks

* `loggingSinksCreate` - Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
* `loggingSinksDelete` - Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
* `loggingSinksGet` - Gets a sink.
* `loggingSinksList` - Lists sinks.
* `loggingSinksUpdate` - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

### v2

* `loggingGetCmekSettings` - Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `loggingGetSettings` - Gets the Log Router settings for the given resource.Note: Settings for the Log Router can be get for Google Cloud projects, folders, organizations and billing accounts. Currently it can only be configured for organizations. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `loggingUpdateCmekSettings` - Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
* `loggingUpdateSettings` - Updates the Log Router settings for the given resource.Note: Settings for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled. 4) location_id is not supported by Logging. 5) location_id violate OrgPolicy.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
