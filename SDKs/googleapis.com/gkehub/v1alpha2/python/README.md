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
    
req = operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest(
    security=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams(
        project="aut",
    ),
    query_params=operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams(
        dollar_xgafv="2",
        access_token="voluptas",
        alt="media",
        callback="cum",
        fields="sunt",
        key="officiis",
        oauth_token="doloremque",
        pretty_print=False,
        quota_user="a",
        upload_type="consequatur",
        upload_protocol="rerum",
    ),
    request={
        "dolores": "ut",
        "quasi": "ullam",
    },
)
    
res = s.projects.gkehub_projects_locations_global_memberships_initialize_hub(req)

if res.initialize_hub_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkehub_projects_locations_global_memberships_initialize_hub` - Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_patch` - Updates an existing Membership.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
