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
    
req = operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest(
    security=operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DocumentaiProjectsLocationsFetchProcessorTypesPathParams(
        parent="qui",
    ),
    query_params=operations.DocumentaiProjectsLocationsFetchProcessorTypesQueryParams(
        dollar_xgafv="1",
        access_token="illum",
        alt="json",
        callback="reprehenderit",
        fields="quae",
        key="beatae",
        oauth_token="unde",
        pretty_print=True,
        quota_user="labore",
        upload_type="error",
        upload_protocol="explicabo",
    ),
)
    
res = s.projects.documentai_projects_locations_fetch_processor_types(req)

if res.google_cloud_documentai_v1_fetch_processor_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `documentai_projects_locations_fetch_processor_types` - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
* `documentai_projects_locations_list` - Lists information about the supported locations for this service.
* `documentai_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `documentai_projects_locations_processor_types_list` - Lists the processor types that exist.
* `documentai_projects_locations_processors_create` - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
* `documentai_projects_locations_processors_disable` - Disables a processor
* `documentai_projects_locations_processors_enable` - Enables a processor
* `documentai_projects_locations_processors_human_review_config_review_document` - Send a document for Human Review. The input document should be processed by the specified processor.
* `documentai_projects_locations_processors_list` - Lists all processors which belong to this project.
* `documentai_projects_locations_processors_processor_versions_batch_process` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `documentai_projects_locations_processors_processor_versions_delete` - Deletes the processor version, all artifacts under the processor version will be deleted.
* `documentai_projects_locations_processors_processor_versions_deploy` - Deploys the processor version.
* `documentai_projects_locations_processors_processor_versions_list` - Lists all versions of a processor.
* `documentai_projects_locations_processors_processor_versions_process` - Processes a single document.
* `documentai_projects_locations_processors_processor_versions_undeploy` - Undeploys the processor version.
* `documentai_projects_locations_processors_set_default_processor_version` - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
* `documentai_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### uiv1beta3

* `documentai_uiv1beta3_projects_locations_list` - Lists information about the supported locations for this service.
* `documentai_uiv1beta3_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `documentai_uiv1beta3_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
