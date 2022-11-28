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
    
req = operations.TranslateProjectsLocationsBatchTranslateDocumentRequest(
    security=operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams(
        parent="perferendis",
    ),
    query_params=operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams(
        dollar_xgafv="1",
        access_token="omnis",
        alt="media",
        callback="veniam",
        fields="officiis",
        key="aliquam",
        oauth_token="at",
        pretty_print=True,
        quota_user="qui",
        upload_type="quasi",
        upload_protocol="nulla",
    ),
    request=shared.BatchTranslateDocumentRequest(
        format_conversions={
            "minima": "aperiam",
            "quos": "quae",
        },
        glossaries={
            "dicta": shared.TranslateTextGlossaryConfig(
                glossary="voluptatem",
                ignore_case=False,
            ),
            "suscipit": shared.TranslateTextGlossaryConfig(
                glossary="et",
                ignore_case=False,
            ),
        },
        input_configs=[
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="dolorem",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="qui",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="sed",
                ),
            ),
        ],
        models={
            "rerum": "ut",
            "tempore": "eligendi",
            "possimus": "quos",
        },
        output_config=shared.BatchDocumentOutputConfig(
            gcs_destination=shared.GcsDestination(
                output_uri_prefix="eos",
            ),
        ),
        source_language_code="veniam",
        target_language_codes=[
            "beatae",
        ],
    ),
)
    
res = s.projects.translate_projects_locations_batch_translate_document(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `translate_projects_locations_batch_translate_document` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translate_projects_locations_batch_translate_text` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translate_projects_locations_detect_language` - Detects the language of text within a request.
* `translate_projects_locations_get_supported_languages` - Returns a list of supported languages for translation.
* `translate_projects_locations_glossaries_create` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `translate_projects_locations_glossaries_list` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `translate_projects_locations_list` - Lists information about the supported locations for this service.
* `translate_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `translate_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `translate_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `translate_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `translate_projects_locations_operations_wait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `translate_projects_locations_translate_document` - Translates documents in synchronous mode.
* `translate_projects_locations_translate_text` - Translates input text and returns translated text.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
