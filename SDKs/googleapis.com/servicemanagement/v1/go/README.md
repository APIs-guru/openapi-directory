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
    
    req := operations.ServicemanagementOperationsGetRequest{
        Security: operations.ServicemanagementOperationsGetSecurity{
            Option1: &operations.ServicemanagementOperationsGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ServicemanagementOperationsGetPathParams{
            Name: "neque",
        },
        QueryParams: operations.ServicemanagementOperationsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "json",
            Callback: "expedita",
            Fields: "nobis",
            Key: "illo",
            OauthToken: "laborum",
            PrettyPrint: true,
            QuotaUser: "non",
            UploadType: "quis",
            UploadProtocol: "sint",
        },
    }
    
    res, err := s.Operations.ServicemanagementOperationsGet(ctx, req)
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

### operations

* `ServicemanagementOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ServicemanagementOperationsList` - Lists service operations that match the specified filter in the request.

### services

* `ServicemanagementServicesConfigsCreate` - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* `ServicemanagementServicesConfigsGet` - Gets a service configuration (version) for a managed service.
* `ServicemanagementServicesConfigsList` - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* `ServicemanagementServicesConfigsSubmit` - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* `ServicemanagementServicesConsumersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ServicemanagementServicesConsumersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ServicemanagementServicesConsumersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `ServicemanagementServicesCreate` - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* `ServicemanagementServicesDelete` - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* `ServicemanagementServicesGenerateConfigReport` - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* `ServicemanagementServicesGet` - Gets a managed service. Authentication is required unless the service is public.
* `ServicemanagementServicesGetConfig` - Gets a service configuration (version) for a managed service.
* `ServicemanagementServicesList` - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* `ServicemanagementServicesRolloutsCreate` - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* `ServicemanagementServicesRolloutsGet` - Gets a service configuration rollout.
* `ServicemanagementServicesRolloutsList` - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* `ServicemanagementServicesUndelete` - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
