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
    
    req := operations.ServiceusageOperationsListRequest{
        Security: operations.ServiceusageOperationsListSecurity{
            Option1: &operations.ServiceusageOperationsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.ServiceusageOperationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "iure",
            Alt: "json",
            Callback: "dolorem",
            Fields: "dolor",
            Filter: "numquam",
            Key: "id",
            Name: "nemo",
            OauthToken: "quo",
            PageSize: 5700698267652515148,
            PageToken: "voluptatibus",
            PrettyPrint: false,
            QuotaUser: "enim",
            UploadType: "ea",
            UploadProtocol: "commodi",
        },
    }
    
    res, err := s.Operations.ServiceusageOperationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `ServiceusageOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### services

* `ServiceusageServicesBatchEnable` - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* `ServiceusageServicesConsumerQuotaMetricsImportAdminOverrides` - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `ServiceusageServicesConsumerQuotaMetricsImportConsumerOverrides` - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate` - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* `ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList` - Lists all admin overrides on this limit.
* `ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate` - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* `ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete` - Deletes a consumer override.
* `ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList` - Lists all consumer overrides on this limit.
* `ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch` - Updates a consumer override.
* `ServiceusageServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `ServiceusageServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* `ServiceusageServicesDisable` - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* `ServiceusageServicesEnable` - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* `ServiceusageServicesGenerateServiceIdentity` - Generates service identity for service.
* `ServiceusageServicesList` - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
