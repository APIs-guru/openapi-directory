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
    
    req := operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest{
        Security: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreatePathParams{
            Parent: "sapiente",
        },
        QueryParams: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolorem",
            Alt: "proto",
            Callback: "consectetur",
            EndpointPolicyID: "dicta",
            Fields: "ut",
            Key: "est",
            OauthToken: "quisquam",
            PrettyPrint: true,
            QuotaUser: "consequatur",
            UploadType: "dolorem",
            UploadProtocol: "sint",
        },
        Request: &shared.EndpointPolicyInput{
            AuthorizationPolicy: "cupiditate",
            ClientTLSPolicy: "aut",
            Description: "maiores",
            EndpointMatcher: &shared.EndpointMatcher{
                MetadataLabelMatcher: &shared.MetadataLabelMatcher{
                    MetadataLabelMatchCriteria: "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
                    MetadataLabels: []shared.MetadataLabels{
                        shared.MetadataLabels{
                            LabelName: "rem",
                            LabelValue: "nesciunt",
                        },
                        shared.MetadataLabels{
                            LabelName: "voluptatem",
                            LabelValue: "veritatis",
                        },
                        shared.MetadataLabels{
                            LabelName: "nihil",
                            LabelValue: "quis",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "consectetur": "qui",
                "non": "dolorem",
            },
            Name: "repellendus",
            ServerTLSPolicy: "sint",
            TrafficPortSelector: &shared.TrafficPortSelector{
                Ports: []string{
                    "aut",
                },
            },
            Type: "SIDECAR_PROXY",
        },
    }
    
    res, err := s.Projects.NetworkservicesProjectsLocationsEndpointPoliciesCreate(ctx, req)
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

* `NetworkservicesProjectsLocationsEndpointPoliciesCreate` - Creates a new EndpointPolicy in a given project and location.
* `NetworkservicesProjectsLocationsEndpointPoliciesList` - Lists EndpointPolicies in a given project and location.
* `NetworkservicesProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `NetworkservicesProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `NetworkservicesProjectsLocationsGrpcRoutesCreate` - Creates a new GrpcRoute in a given project and location.
* `NetworkservicesProjectsLocationsGrpcRoutesList` - Lists GrpcRoutes in a given project and location.
* `NetworkservicesProjectsLocationsHTTPRoutesCreate` - Creates a new HttpRoute in a given project and location.
* `NetworkservicesProjectsLocationsHTTPRoutesList` - Lists HttpRoute in a given project and location.
* `NetworkservicesProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworkservicesProjectsLocationsMeshesCreate` - Creates a new Mesh in a given project and location.
* `NetworkservicesProjectsLocationsMeshesList` - Lists Meshes in a given project and location.
* `NetworkservicesProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworkservicesProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `NetworkservicesProjectsLocationsServiceBindingsCreate` - Creates a new ServiceBinding in a given project and location.
* `NetworkservicesProjectsLocationsServiceBindingsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworkservicesProjectsLocationsServiceBindingsList` - Lists ServiceBinding in a given project and location.
* `NetworkservicesProjectsLocationsServiceBindingsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworkservicesProjectsLocationsServiceBindingsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `NetworkservicesProjectsLocationsTCPRoutesCreate` - Creates a new TcpRoute in a given project and location.
* `NetworkservicesProjectsLocationsTCPRoutesList` - Lists TcpRoute in a given project and location.
* `NetworkservicesProjectsLocationsTLSRoutesCreate` - Creates a new TlsRoute in a given project and location.
* `NetworkservicesProjectsLocationsTLSRoutesDelete` - Deletes a single TlsRoute.
* `NetworkservicesProjectsLocationsTLSRoutesGet` - Gets details of a single TlsRoute.
* `NetworkservicesProjectsLocationsTLSRoutesList` - Lists TlsRoute in a given project and location.
* `NetworkservicesProjectsLocationsTLSRoutesPatch` - Updates the parameters of a single TlsRoute.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
