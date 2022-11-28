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
    
req = operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest(
    security=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams(
        parent="porro",
    ),
    query_params=operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams(
        dollar_xgafv="2",
        access_token="expedita",
        alt="json",
        callback="et",
        fields="totam",
        hub_id="non",
        key="sit",
        oauth_token="non",
        pretty_print=False,
        quota_user="est",
        request_id="ut",
        upload_type="ducimus",
        upload_protocol="odio",
    ),
    request=shared.HubInput(
        create_time="quaerat",
        description="iure",
        labels={
            "distinctio": "quia",
        },
        name="eveniet",
        update_time="id",
    ),
)
    
res = s.projects.networkconnectivity_projects_locations_global_hubs_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networkconnectivity_projects_locations_global_hubs_create` - Creates a new Network Connectivity Center hub in the specified project.
* `networkconnectivity_projects_locations_global_hubs_list` - Lists the Network Connectivity Center hubs associated with a given project.
* `networkconnectivity_projects_locations_internal_ranges_create` - Creates a new InternalRange in a given project and location.
* `networkconnectivity_projects_locations_internal_ranges_list` - Lists InternalRanges in a given project and location.
* `networkconnectivity_projects_locations_list` - Lists information about the supported locations for this service.
* `networkconnectivity_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkconnectivity_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkconnectivity_projects_locations_spokes_create` - Creates a Network Connectivity Center spoke.
* `networkconnectivity_projects_locations_spokes_delete` - Deletes a Network Connectivity Center spoke.
* `networkconnectivity_projects_locations_spokes_get` - Gets details about a Network Connectivity Center spoke.
* `networkconnectivity_projects_locations_spokes_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkconnectivity_projects_locations_spokes_list` - Lists the Network Connectivity Center spokes in a specified project and location.
* `networkconnectivity_projects_locations_spokes_patch` - Updates the parameters of a Network Connectivity Center spoke.
* `networkconnectivity_projects_locations_spokes_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkconnectivity_projects_locations_spokes_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
