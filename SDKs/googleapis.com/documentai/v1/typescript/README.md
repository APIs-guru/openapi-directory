# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DocumentaiProjectsLocationsFetchProcessorTypesRequest, DocumentaiProjectsLocationsFetchProcessorTypesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DocumentaiProjectsLocationsFetchProcessorTypesRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "qui",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "illum",
    alt: "json",
    callback: "reprehenderit",
    fields: "quae",
    key: "beatae",
    oauthToken: "unde",
    prettyPrint: true,
    quotaUser: "labore",
    uploadType: "error",
    uploadProtocol: "explicabo",
  },
};

sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req).then((res: DocumentaiProjectsLocationsFetchProcessorTypesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `documentaiProjectsLocationsFetchProcessorTypes` - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
* `documentaiProjectsLocationsList` - Lists information about the supported locations for this service.
* `documentaiProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `documentaiProjectsLocationsProcessorTypesList` - Lists the processor types that exist.
* `documentaiProjectsLocationsProcessorsCreate` - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
* `documentaiProjectsLocationsProcessorsDisable` - Disables a processor
* `documentaiProjectsLocationsProcessorsEnable` - Enables a processor
* `documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument` - Send a document for Human Review. The input document should be processed by the specified processor.
* `documentaiProjectsLocationsProcessorsList` - Lists all processors which belong to this project.
* `documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `documentaiProjectsLocationsProcessorsProcessorVersionsDelete` - Deletes the processor version, all artifacts under the processor version will be deleted.
* `documentaiProjectsLocationsProcessorsProcessorVersionsDeploy` - Deploys the processor version.
* `documentaiProjectsLocationsProcessorsProcessorVersionsList` - Lists all versions of a processor.
* `documentaiProjectsLocationsProcessorsProcessorVersionsProcess` - Processes a single document.
* `documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy` - Undeploys the processor version.
* `documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion` - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
* `documentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### uiv1beta3

* `documentaiUiv1beta3ProjectsLocationsList` - Lists information about the supported locations for this service.
* `documentaiUiv1beta3ProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `documentaiUiv1beta3ProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
