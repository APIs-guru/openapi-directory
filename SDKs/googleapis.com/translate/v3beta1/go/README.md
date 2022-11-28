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
    
    req := operations.TranslateProjectsLocationsBatchTranslateDocumentRequest{
        Security: operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams{
            Parent: "perferendis",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "1",
            AccessToken: "omnis",
            Alt: "media",
            Callback: "veniam",
            Fields: "officiis",
            Key: "aliquam",
            OauthToken: "at",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "quasi",
            UploadProtocol: "nulla",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "minima": "aperiam",
                "quos": "quae",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "dicta": shared.TranslateTextGlossaryConfig{
                    Glossary: "voluptatem",
                    IgnoreCase: false,
                },
                "suscipit": shared.TranslateTextGlossaryConfig{
                    Glossary: "et",
                    IgnoreCase: false,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "dolorem",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "qui",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "sed",
                    },
                },
            },
            Models: map[string]string{
                "rerum": "ut",
                "tempore": "eligendi",
                "possimus": "quos",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "eos",
                },
            },
            SourceLanguageCode: "veniam",
            TargetLanguageCodes: []string{
                "beatae",
            },
        },
    }
    
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, req)
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

* `TranslateProjectsLocationsBatchTranslateDocument` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `TranslateProjectsLocationsBatchTranslateText` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `TranslateProjectsLocationsDetectLanguage` - Detects the language of text within a request.
* `TranslateProjectsLocationsGetSupportedLanguages` - Returns a list of supported languages for translation.
* `TranslateProjectsLocationsGlossariesCreate` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `TranslateProjectsLocationsGlossariesList` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `TranslateProjectsLocationsList` - Lists information about the supported locations for this service.
* `TranslateProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `TranslateProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `TranslateProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `TranslateProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `TranslateProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `TranslateProjectsLocationsTranslateDocument` - Translates documents in synchronous mode.
* `TranslateProjectsLocationsTranslateText` - Translates input text and returns translated text.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
