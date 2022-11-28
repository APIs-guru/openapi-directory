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
    
    req := operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        Security: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams{
            Parent: "porro",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "json",
            Callback: "et",
            Fields: "totam",
            HubID: "non",
            Key: "sit",
            OauthToken: "non",
            PrettyPrint: false,
            QuotaUser: "est",
            RequestID: "ut",
            UploadType: "ducimus",
            UploadProtocol: "odio",
        },
        Request: &shared.HubInput{
            CreateTime: "quaerat",
            Description: "iure",
            Labels: map[string]string{
                "distinctio": "quia",
            },
            Name: "eveniet",
            UpdateTime: "id",
        },
    }
    
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `NetworkconnectivityProjectsLocationsGlobalHubsCreate` - Creates a new Network Connectivity Center hub in the specified project.
* `NetworkconnectivityProjectsLocationsGlobalHubsList` - Lists the Network Connectivity Center hubs associated with a given project.
* `NetworkconnectivityProjectsLocationsInternalRangesCreate` - Creates a new InternalRange in a given project and location.
* `NetworkconnectivityProjectsLocationsInternalRangesList` - Lists InternalRanges in a given project and location.
* `NetworkconnectivityProjectsLocationsList` - Lists information about the supported locations for this service.
* `NetworkconnectivityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworkconnectivityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `NetworkconnectivityProjectsLocationsSpokesCreate` - Creates a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesDelete` - Deletes a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesGet` - Gets details about a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworkconnectivityProjectsLocationsSpokesList` - Lists the Network Connectivity Center spokes in a specified project and location.
* `NetworkconnectivityProjectsLocationsSpokesPatch` - Updates the parameters of a Network Connectivity Center spoke.
* `NetworkconnectivityProjectsLocationsSpokesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworkconnectivityProjectsLocationsSpokesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
