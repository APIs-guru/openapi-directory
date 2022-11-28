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
    
req = operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest(
    security=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams(
        parent="sunt",
    ),
    query_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="odit",
        alt="proto",
        authorization_policy_id="et",
        callback="vel",
        fields="quae",
        key="aspernatur",
        oauth_token="error",
        pretty_print=False,
        quota_user="a",
        upload_type="omnis",
        upload_protocol="nostrum",
    ),
    request=shared.AuthorizationPolicyInput(
        action="DENY",
        description="et",
        labels={
            "aut": "animi",
            "dolores": "placeat",
            "occaecati": "doloribus",
        },
        name="adipisci",
        rules=[
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "accusantium",
                            "assumenda",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="amet",
                            regex_match="culpa",
                        ),
                        methods=[
                            "est",
                        ],
                        ports=[
                            3094887997718014353,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "rem",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="et",
                            regex_match="accusantium",
                        ),
                        methods=[
                            "reprehenderit",
                            "neque",
                        ],
                        ports=[
                            2947460363222143838,
                            8830944403013891383,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "dolorum",
                            "et",
                            "atque",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="iure",
                            regex_match="repudiandae",
                        ),
                        methods=[
                            "quae",
                            "eum",
                        ],
                        ports=[
                            5668318127090690829,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "vitae",
                            "repudiandae",
                            "facilis",
                        ],
                        principals=[
                            "aut",
                            "quibusdam",
                            "delectus",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "enim",
                        ],
                        principals=[
                            "voluptates",
                            "nam",
                            "aut",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "omnis",
                            "possimus",
                        ],
                        principals=[
                            "quasi",
                        ],
                    ),
                ],
            ),
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "praesentium",
                            "quas",
                            "consequatur",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="nulla",
                            regex_match="ut",
                        ),
                        methods=[
                            "voluptatem",
                            "ad",
                        ],
                        ports=[
                            1055283062987230859,
                            6260300121941604790,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "architecto",
                            "est",
                            "et",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="aliquam",
                            regex_match="praesentium",
                        ),
                        methods=[
                            "maxime",
                            "ut",
                        ],
                        ports=[
                            2764710142788548971,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "ipsa",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="rem",
                            regex_match="inventore",
                        ),
                        methods=[
                            "incidunt",
                        ],
                        ports=[
                            1236303082765211796,
                            1514040532654582993,
                            5574152755078767765,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "aut",
                            "unde",
                        ],
                        principals=[
                            "velit",
                            "voluptas",
                            "magnam",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "et",
                        ],
                        principals=[
                            "aperiam",
                            "iste",
                        ],
                    ),
                ],
            ),
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "sint",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="ratione",
                            regex_match="vero",
                        ),
                        methods=[
                            "odit",
                        ],
                        ports=[
                            3477566635643771654,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "eveniet",
                            "nam",
                            "minima",
                        ],
                        principals=[
                            "et",
                            "perferendis",
                            "ipsa",
                        ],
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.projects.networksecurity_projects_locations_authorization_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networksecurity_projects_locations_authorization_policies_create` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurity_projects_locations_authorization_policies_list` - Lists AuthorizationPolicies in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_create` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_list` - Lists ClientTlsPolicies in a given project and location.
* `networksecurity_projects_locations_list` - Lists information about the supported locations for this service.
* `networksecurity_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurity_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networksecurity_projects_locations_server_tls_policies_create` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_delete` - Deletes a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_get` - Gets details of a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurity_projects_locations_server_tls_policies_list` - Lists ServerTlsPolicies in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_patch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurity_projects_locations_server_tls_policies_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
