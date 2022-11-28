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
    
    req := operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest{
        Security: operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessPathParams{
            Parent: "accusamus",
        },
        QueryParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams{
            DollarXgafv: "1",
            AccessToken: "aspernatur",
            Alt: "proto",
            Callback: "necessitatibus",
            Fields: "aut",
            Key: "in",
            OauthToken: "consectetur",
            PrettyPrint: false,
            QuotaUser: "odio",
            UploadType: "omnis",
            UploadProtocol: "dolore",
        },
        Request: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "deserunt",
                    },
                    DocumentType: "ducimus",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "corrupti",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: true,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "natus",
                                ValueTypes: []string{
                                    "officiis",
                                    "et",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "tempore",
                                ValueTypes: []string{
                                    "officia",
                                    "non",
                                    "illum",
                                },
                            },
                        },
                        ModelVersion: "esse",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "ut",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "consectetur",
                        },
                        MimeType: "temporibus",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "et",
                            "sit",
                            "non",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "libero",
                        },
                        PagesPerShard: 3977994518227181620,
                    },
                    Parent: "perspiciatis",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: true,
                        HeaderHints: []string{
                            "aliquam",
                            "expedita",
                        },
                        ModelVersion: "ipsam",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 3.200000,
                                            Y: 91.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 55.099998,
                                            Y: 79.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 93.199997,
                                            Y: 73.199997,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 9153202328428070724,
                                            Y: 212910970379447706,
                                        },
                                    },
                                },
                                PageNumber: 4484347696836556320,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "asperiores",
                    },
                    DocumentType: "aliquid",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "saepe",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "vero",
                                ValueTypes: []string{
                                    "facilis",
                                    "ipsa",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "animi",
                                ValueTypes: []string{
                                    "qui",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "excepturi",
                                ValueTypes: []string{
                                    "aut",
                                },
                            },
                        },
                        ModelVersion: "quia",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "nulla",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "laudantium",
                        },
                        MimeType: "in",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "necessitatibus",
                            "aut",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "neque",
                        },
                        PagesPerShard: 7205684613211767704,
                    },
                    Parent: "autem",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: true,
                        HeaderHints: []string{
                            "ut",
                            "id",
                        },
                        ModelVersion: "laudantium",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 90.099998,
                                            Y: 24.200001,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 5465762999401451180,
                                            Y: 2589978446189390501,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 3381153955800394242,
                                            Y: 6483977066524928530,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 4330030033128116391,
                                            Y: 6452109320694614544,
                                        },
                                    },
                                },
                                PageNumber: 3019085975435534377,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 35.099998,
                                            Y: 27.100000,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 44.099998,
                                            Y: 28.200001,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 84.199997,
                                            Y: 32.099998,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 8574942949169313192,
                                            Y: 5838608827208325630,
                                        },
                                    },
                                },
                                PageNumber: 821777092402364754,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 2.100000,
                                            Y: 60.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 72.199997,
                                            Y: 54.200001,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 25.200001,
                                            Y: 63.099998,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 4830852428165135925,
                                            Y: 5378367600433771130,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 7117192674649410582,
                                            Y: 3731705481196502876,
                                        },
                                    },
                                },
                                PageNumber: 2769778733425732679,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "beatae",
                    },
                    DocumentType: "dolores",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "deleniti",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "cupiditate",
                                ValueTypes: []string{
                                    "mollitia",
                                    "facilis",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "rerum",
                                ValueTypes: []string{
                                    "sunt",
                                    "delectus",
                                    "inventore",
                                },
                            },
                        },
                        ModelVersion: "nulla",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "sed",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "possimus",
                        },
                        MimeType: "nobis",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "voluptates",
                            "porro",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "et",
                        },
                        PagesPerShard: 8204265501301102548,
                    },
                    Parent: "velit",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: true,
                        HeaderHints: []string{
                            "enim",
                            "molestias",
                        },
                        ModelVersion: "exercitationem",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 64.199997,
                                            Y: 45.200001,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 91.099998,
                                            Y: 33.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 44.099998,
                                            Y: 68.099998,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 3325265499125798500,
                                            Y: 794630284764646271,
                                        },
                                    },
                                },
                                PageNumber: 5940557397638332803,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 45.200001,
                                            Y: 30.200001,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 95.099998,
                                            Y: 14.100000,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 85.099998,
                                            Y: 93.199997,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 934467367965716307,
                                            Y: 1734915949505464922,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 5980186292682469976,
                                            Y: 879397370658672803,
                                        },
                                    },
                                },
                                PageNumber: 2631243517115766127,
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, req)
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

* `DocumentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `DocumentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
