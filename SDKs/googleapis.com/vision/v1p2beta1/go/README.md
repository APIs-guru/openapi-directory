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
            DollarXgafv: "1",
            AccessToken: "necessitatibus",
            Alt: "proto",
            Callback: "inventore",
            Fields: "sapiente",
            Key: "reprehenderit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "expedita",
            UploadType: "et",
            UploadProtocol: "omnis",
        },
        Request: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: "maxime",
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 1213201996933488666,
                            Model: "voluptatibus",
                            Type: "PRODUCT_SEARCH",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 3456238072829815161,
                            Model: "sed",
                            Type: "OBJECT_LOCALIZATION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 6642228921464980690,
                            Model: "sit",
                            Type: "DOCUMENT_TEXT_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                90.199997,
                            },
                        },
                        LanguageHints: []string{
                            "fugit",
                            "aperiam",
                            "repudiandae",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 28.100000,
                                Longitude: 9.200000,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 21.100000,
                                Longitude: 23.200001,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 12.100000,
                                        Y: 36.200001,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 3381637034097052270,
                                        Y: 7257984784277687128,
                                    },
                                },
                            },
                            Filter: "voluptate",
                            ProductCategories: []string{
                                "inventore",
                            },
                            ProductSet: "ab",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "provident",
                                "doloremque",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "voluptas",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "optio",
                        },
                        MimeType: "veritatis",
                    },
                    Pages: []int32{
                        8333952790492756531,
                    },
                },
            },
        },
    }
    
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse != nil {
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
