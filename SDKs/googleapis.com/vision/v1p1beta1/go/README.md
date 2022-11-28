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
    
    req := operations.VisionFilesAnnotateRequest{
        Security: operations.VisionFilesAnnotateSecurity{
            Option1: &operations.VisionFilesAnnotateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.VisionFilesAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatem",
            Alt: "media",
            Callback: "corporis",
            Fields: "maiores",
            Key: "aperiam",
            OauthToken: "quas",
            PrettyPrint: false,
            QuotaUser: "voluptatum",
            UploadType: "soluta",
            UploadProtocol: "maiores",
        },
        Request: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: "possimus",
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 5896826554833194396,
                            Model: "nihil",
                            Type: "FACE_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 7248993876835426576,
                            Model: "suscipit",
                            Type: "IMAGE_PROPERTIES",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 314526818400339893,
                            Model: "exercitationem",
                            Type: "LOGO_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                51.200001,
                            },
                        },
                        LanguageHints: []string{
                            "ipsam",
                            "iusto",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 84.099998,
                                Longitude: 93.199997,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 34.099998,
                                Longitude: 23.200001,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 34.200001,
                                        Y: 35.099998,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 57.200001,
                                        Y: 37.200001,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 4295553034433656254,
                                        Y: 543742341649564673,
                                    },
                                },
                            },
                            Filter: "optio",
                            ProductCategories: []string{
                                "quidem",
                                "voluptatem",
                                "impedit",
                            },
                            ProductSet: "culpa",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "doloremque",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "sint",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "sunt",
                        },
                        MimeType: "ullam",
                    },
                    Pages: []int32{
                        4361129434334350075,
                        1292047795867759674,
                        3442255034707370051,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 3295330214997895760,
                            Model: "voluptatem",
                            Type: "DOCUMENT_TEXT_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 3887042589612565308,
                            Model: "ab",
                            Type: "OBJECT_LOCALIZATION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                18.200001,
                            },
                        },
                        LanguageHints: []string{
                            "inventore",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 72.199997,
                                Longitude: 93.099998,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 9.200000,
                                Longitude: 71.199997,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 65.199997,
                                        Y: 44.099998,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 1566196444678861136,
                                        Y: 6519674982809172394,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 8174216102918134867,
                                        Y: 4993673176719312168,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 71359592332364063,
                                        Y: 1087500975586189357,
                                    },
                                },
                            },
                            Filter: "asperiores",
                            ProductCategories: []string{
                                "et",
                            },
                            ProductSet: "rem",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "expedita",
                                "blanditiis",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "nam",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "voluptas",
                        },
                        MimeType: "laboriosam",
                    },
                    Pages: []int32{
                        8035824011792189689,
                        4377433803281378176,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 2532387682074555433,
                            Model: "aliquam",
                            Type: "WEB_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                18.100000,
                            },
                        },
                        LanguageHints: []string{
                            "voluptatibus",
                            "quia",
                            "veritatis",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 76.199997,
                                Longitude: 84.199997,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 78.099998,
                                Longitude: 2.100000,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 80.199997,
                                        Y: 1.200000,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 8097540637792439437,
                                        Y: 8912532118801387208,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 5814183168299745405,
                                        Y: 418237168085043231,
                                    },
                                },
                            },
                            Filter: "id",
                            ProductCategories: []string{
                                "nam",
                                "unde",
                            },
                            ProductSet: "aspernatur",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "aliquam",
                                "consequatur",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "expedita",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "veniam",
                        },
                        MimeType: "suscipit",
                    },
                    Pages: []int32{
                        5418602044466277311,
                        649453780568054870,
                        615136242637761605,
                    },
                },
            },
        },
    }
    
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `VisionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `VisionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `VisionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `VisionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
