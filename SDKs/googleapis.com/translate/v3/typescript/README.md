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
import { TranslateProjectsLocationsBatchTranslateDocumentRequest, TranslateProjectsLocationsBatchTranslateDocumentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranslateProjectsLocationsBatchTranslateDocumentRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "nihil",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "sequi",
    alt: "media",
    callback: "et",
    fields: "eveniet",
    key: "molestiae",
    oauthToken: "velit",
    prettyPrint: false,
    quotaUser: "corrupti",
    uploadType: "molestiae",
    uploadProtocol: "molestias",
  },
  request: {
    formatConversions: {
      "saepe": "omnis",
      "quos": "sunt",
      "aut": "sit",
    },
    glossaries: {
      "adipisci": {
        glossary: "repudiandae",
        ignoreCase: false,
      },
    },
    inputConfigs: [
      {
        gcsSource: {
          inputUri: "totam",
        },
      },
    ],
    models: {
      "nesciunt": "fuga",
    },
    outputConfig: {
      gcsDestination: {
        outputUriPrefix: "dolor",
      },
    },
    sourceLanguageCode: "voluptatem",
    targetLanguageCodes: [
      "vel",
      "ut",
    ],
  },
};

sdk.projects.translateProjectsLocationsBatchTranslateDocument(req).then((res: TranslateProjectsLocationsBatchTranslateDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `translateProjectsLocationsBatchTranslateDocument` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsBatchTranslateText` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsDetectLanguage` - Detects the language of text within a request.
* `translateProjectsLocationsGetSupportedLanguages` - Returns a list of supported languages for translation.
* `translateProjectsLocationsGlossariesCreate` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsGlossariesGlossaryEntriesCreate` - Creates a glossary entry.
* `translateProjectsLocationsGlossariesGlossaryEntriesList` - List the entries for the glossary.
* `translateProjectsLocationsGlossariesGlossaryEntriesPatch` - Updates a glossary entry.
* `translateProjectsLocationsGlossariesList` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsList` - Lists information about the supported locations for this service.
* `translateProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `translateProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `translateProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `translateProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `translateProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `translateProjectsLocationsTranslateDocument` - Translates documents in synchronous mode.
* `translateProjectsLocationsTranslateText` - Translates input text and returns translated text.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
