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
    
    req := operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest{
        Security: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams{
            Parent: "qui",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "placeat",
            Alt: "proto",
            AuthorizationPolicyID: "officia",
            Callback: "accusamus",
            Fields: "ut",
            Key: "id",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "at",
            UploadType: "excepturi",
            UploadProtocol: "et",
        },
        Request: &shared.AuthorizationPolicyInput{
            Action: "ALLOW",
            Description: "vero",
            Labels: map[string]string{
                "aut": "in",
                "fugiat": "cumque",
                "sint": "iste",
            },
            Name: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Hosts: []string{
                                "placeat",
                            },
                            HTTPHeaderMatch: &shared.HTTPHeaderMatch{
                                HeaderName: "est",
                                RegexMatch: "dolor",
                            },
                            Methods: []string{
                                "iste",
                                "qui",
                            },
                            Ports: []int64{
                                8958702389796972570,
                                640832359014892917,
                                3832344256514173857,
                            },
                        },
                    },
                    Sources: []shared.Source{
                        shared.Source{
                            IPBlocks: []string{
                                "et",
                            },
                            Principals: []string{
                                "est",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "molestias",
                            },
                            Principals: []string{
                                "qui",
                                "harum",
                                "laboriosam",
                            },
                        },
                        shared.Source{
                            IPBlocks: []string{
                                "laborum",
                                "maiores",
                                "iusto",
                            },
                            Principals: []string{
                                "repellat",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(ctx, req)
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

### projects

* `NetworksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `NetworksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsClientTLSPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `NetworksecurityProjectsLocationsServerTLSPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworksecurityProjectsLocationsServerTLSPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `NetworksecurityProjectsLocationsServerTLSPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `NetworksecurityProjectsLocationsServerTLSPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworksecurityProjectsLocationsServerTLSPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
