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
    
req = operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest(
    security=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams(
        parent="voluptatem",
    ),
    query_params=operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams(
        dollar_xgafv="2",
        access_token="impedit",
        alt="json",
        callback="modi",
        endpoint_policy_id="error",
        fields="voluptate",
        key="est",
        oauth_token="inventore",
        pretty_print=False,
        quota_user="voluptatibus",
        upload_type="ut",
        upload_protocol="consequuntur",
    ),
    request=shared.EndpointPolicyInput(
        authorization_policy="similique",
        client_tls_policy="praesentium",
        description="assumenda",
        endpoint_matcher=shared.EndpointMatcher(
            metadata_label_matcher=shared.EndpointMatcherMetadataLabelMatcher(
                metadata_label_match_criteria="MATCH_ANY",
                metadata_labels=[
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="repellat",
                        label_value="ut",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="maiores",
                        label_value="odit",
                    ),
                    shared.EndpointMatcherMetadataLabelMatcherMetadataLabels(
                        label_name="alias",
                        label_value="voluptatum",
                    ),
                ],
            ),
        ),
        labels={
            "voluptas": "ducimus",
            "modi": "ducimus",
            "voluptatem": "laborum",
        },
        name="omnis",
        server_tls_policy="tempore",
        traffic_port_selector=shared.TrafficPortSelector(
            ports=[
                "qui",
                "ut",
                "odio",
            ],
        ),
        type="GRPC_SERVER",
    ),
)
    
res = s.projects.networkservices_projects_locations_endpoint_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networkservices_projects_locations_endpoint_policies_create` - Creates a new EndpointPolicy in a given project and location.
* `networkservices_projects_locations_endpoint_policies_list` - Lists EndpointPolicies in a given project and location.
* `networkservices_projects_locations_gateways_create` - Creates a new Gateway in a given project and location.
* `networkservices_projects_locations_gateways_list` - Lists Gateways in a given project and location.
* `networkservices_projects_locations_grpc_routes_create` - Creates a new GrpcRoute in a given project and location.
* `networkservices_projects_locations_grpc_routes_list` - Lists GrpcRoutes in a given project and location.
* `networkservices_projects_locations_http_routes_create` - Creates a new HttpRoute in a given project and location.
* `networkservices_projects_locations_http_routes_list` - Lists HttpRoute in a given project and location.
* `networkservices_projects_locations_list` - Lists information about the supported locations for this service.
* `networkservices_projects_locations_meshes_create` - Creates a new Mesh in a given project and location.
* `networkservices_projects_locations_meshes_list` - Lists Meshes in a given project and location.
* `networkservices_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkservices_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkservices_projects_locations_service_bindings_create` - Creates a new ServiceBinding in a given project and location.
* `networkservices_projects_locations_service_bindings_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkservices_projects_locations_service_bindings_list` - Lists ServiceBinding in a given project and location.
* `networkservices_projects_locations_service_bindings_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkservices_projects_locations_service_bindings_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networkservices_projects_locations_tcp_routes_create` - Creates a new TcpRoute in a given project and location.
* `networkservices_projects_locations_tcp_routes_list` - Lists TcpRoute in a given project and location.
* `networkservices_projects_locations_tls_routes_create` - Creates a new TlsRoute in a given project and location.
* `networkservices_projects_locations_tls_routes_delete` - Deletes a single TlsRoute.
* `networkservices_projects_locations_tls_routes_get` - Gets details of a single TlsRoute.
* `networkservices_projects_locations_tls_routes_list` - Lists TlsRoute in a given project and location.
* `networkservices_projects_locations_tls_routes_patch` - Updates the parameters of a single TlsRoute.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
