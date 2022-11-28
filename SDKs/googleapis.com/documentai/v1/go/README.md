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
    
    req := operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest{
        Security: operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DocumentaiProjectsLocationsFetchProcessorTypesPathParams{
            Parent: "qui",
        },
        QueryParams: operations.DocumentaiProjectsLocationsFetchProcessorTypesQueryParams{
            DollarXgafv: "1",
            AccessToken: "illum",
            Alt: "json",
            Callback: "reprehenderit",
            Fields: "quae",
            Key: "beatae",
            OauthToken: "unde",
            PrettyPrint: true,
            QuotaUser: "labore",
            UploadType: "error",
            UploadProtocol: "explicabo",
        },
    }
    
    res, err := s.Projects.DocumentaiProjectsLocationsFetchProcessorTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDocumentaiV1FetchProcessorTypesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DocumentaiProjectsLocationsFetchProcessorTypes` - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
* `DocumentaiProjectsLocationsList` - Lists information about the supported locations for this service.
* `DocumentaiProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DocumentaiProjectsLocationsProcessorTypesList` - Lists the processor types that exist.
* `DocumentaiProjectsLocationsProcessorsCreate` - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
* `DocumentaiProjectsLocationsProcessorsDisable` - Disables a processor
* `DocumentaiProjectsLocationsProcessorsEnable` - Enables a processor
* `DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument` - Send a document for Human Review. The input document should be processed by the specified processor.
* `DocumentaiProjectsLocationsProcessorsList` - Lists all processors which belong to this project.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsDelete` - Deletes the processor version, all artifacts under the processor version will be deleted.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploy` - Deploys the processor version.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsList` - Lists all versions of a processor.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsProcess` - Processes a single document.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploy` - Undeploys the processor version.
* `DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersion` - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
* `DocumentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### uiv1beta3

* `DocumentaiUiv1beta3ProjectsLocationsList` - Lists information about the supported locations for this service.
* `DocumentaiUiv1beta3ProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DocumentaiUiv1beta3ProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
