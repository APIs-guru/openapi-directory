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
    
req = operations.CloudfunctionsOperationsListRequest(
    security=operations.CloudfunctionsOperationsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.CloudfunctionsOperationsListQueryParams(
        dollar_xgafv="2",
        access_token="quia",
        alt="proto",
        callback="doloremque",
        fields="culpa",
        filter="asperiores",
        key="ratione",
        name="magni",
        oauth_token="sunt",
        page_size=7922268105250499989,
        page_token="in",
        pretty_print=True,
        quota_user="minus",
        upload_type="sint",
        upload_protocol="beatae",
    ),
)
    
res = s.operations.cloudfunctions_operations_list(req)

if res.list_operations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `cloudfunctions_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `cloudfunctions_projects_locations_functions_call` - Synchronously invokes a deployed Cloud Function. To be used for testing purposes as very limited traffic is allowed. For more information on the actual limits, refer to [Rate Limits](https://cloud.google.com/functions/quotas#rate_limits).
* `cloudfunctions_projects_locations_functions_create` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctions_projects_locations_functions_delete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctions_projects_locations_functions_generate_download_url` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within minutes after generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctions_projects_locations_functions_generate_upload_url` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 100MB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,104857600` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctions_projects_locations_functions_get` - Returns a function with the given name from the requested project.
* `cloudfunctions_projects_locations_functions_get_iam_policy` - Gets the IAM access control policy for a function. Returns an empty policy if the function exists and does not have a policy set.
* `cloudfunctions_projects_locations_functions_list` - Returns a list of functions that belong to the requested project.
* `cloudfunctions_projects_locations_functions_patch` - Updates existing function.
* `cloudfunctions_projects_locations_functions_set_iam_policy` - Sets the IAM access control policy on the specified function. Replaces any existing policy.
* `cloudfunctions_projects_locations_functions_test_iam_permissions` - Tests the specified permissions against the IAM access control policy for a function. If the function does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* `cloudfunctions_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
