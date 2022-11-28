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
    
    req := operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest{
        Security: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListPathParams{
            Parent: "expedita",
        },
        QueryParams: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "explicabo",
            Alt: "proto",
            Callback: "commodi",
            Fields: "laboriosam",
            Key: "qui",
            OauthToken: "quis",
            PageSize: 1243094826196334851,
            PageToken: "sed",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "placeat",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Projects.ServicebrokerProjectsBrokersInstancesServiceBindingsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ServicebrokerProjectsBrokersInstancesServiceBindingsList` - Lists all the bindings in the instance
* `ServicebrokerProjectsBrokersServiceInstancesList` - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* `ServicebrokerProjectsBrokersV2CatalogList` - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* `ServicebrokerProjectsBrokersV2ServiceInstancesCreate` - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* `ServicebrokerProjectsBrokersV2ServiceInstancesDelete` - Deprovisions a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If service instance does not exist HTTP 410 status will be returned.
* `ServicebrokerProjectsBrokersV2ServiceInstancesGet` - Gets the given service instance from the system.
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* `ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation` - Returns the state of the last operation for the service instance.
Only last (or current) operation can be polled.
* `ServicebrokerProjectsBrokersV2ServiceInstancesPatch` - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate` - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet` - GetBinding returns the binding information.
* `ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation` - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### v1alpha1

* `ServicebrokerGetIamPolicy` - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* `ServicebrokerSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* `ServicebrokerTestIamPermissions` - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
