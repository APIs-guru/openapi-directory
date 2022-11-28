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
    
    req := operations.ServiceusageOperationsCancelRequest{
        Security: operations.ServiceusageOperationsCancelSecurity{
            Option1: &operations.ServiceusageOperationsCancelSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ServiceusageOperationsCancelPathParams{
            Name: "iusto",
        },
        QueryParams: operations.ServiceusageOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "sed",
            Alt: "proto",
            Callback: "sit",
            Fields: "distinctio",
            Key: "qui",
            OauthToken: "ab",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "accusantium",
            UploadProtocol: "a",
        },
        Request: map[string]interface{}{
            "laborum": "et",
            "odio": "reiciendis",
        },
    }
    
    res, err := s.Operations.ServiceusageOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `ServiceusageOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ServiceusageOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ServiceusageOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### services

* `ServiceusageServicesBatchEnable` - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
* `ServiceusageServicesBatchGet` - Returns the service configurations and enabled states for a given list of services.
* `ServiceusageServicesDisable` - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
* `ServiceusageServicesEnable` - Enable a service so that it can be used with a project.
* `ServiceusageServicesGet` - Returns the service configuration and enabled state for a given service.
* `ServiceusageServicesList` - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
