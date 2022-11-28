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
            AccessToken: "veritatis",
            Alt: "proto",
            Callback: "mollitia",
            Fields: "quaerat",
            Key: "modi",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "consectetur",
            UploadType: "quis",
            UploadProtocol: "necessitatibus",
        },
        Request: &shared.BatchAnnotateFilesRequest{
            Parent: "quo",
            Requests: []shared.AnnotateFileRequest{
                shared.AnnotateFileRequest{
                    Features: []shared.Feature{
                        shared.Feature{
                            MaxResults: 8869013046101950281,
                            Model: "omnis",
                            Type: "SAFE_SEARCH_DETECTION",
                        },
                        shared.Feature{
                            MaxResults: 6311671662795349814,
                            Model: "ratione",
                            Type: "LOGO_DETECTION",
                        },
                        shared.Feature{
                            MaxResults: 1090197577340075915,
                            Model: "qui",
                            Type: "IMAGE_PROPERTIES",
                        },
                    },
                    ImageContext: &shared.ImageContext{
                        CropHintsParams: &shared.CropHintsParams{
                            AspectRatios: []float32{
                                98.199997,
                                37.099998,
                            },
                        },
                        LanguageHints: []string{
                            "fugit",
                            "ratione",
                            "voluptates",
                        },
                        LatLongRect: &shared.LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 60.099998,
                                Longitude: 71.099998,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 0.200000,
                                Longitude: 63.200001,
                            },
                        },
                        ProductSearchParams: &shared.ProductSearchParams{
                            BoundingPoly: &shared.BoundingPoly{
                                NormalizedVertices: []shared.NormalizedVertex{
                                    shared.NormalizedVertex{
                                        X: 14.200000,
                                        Y: 82.099998,
                                    },
                                },
                                Vertices: []shared.Vertex{
                                    shared.Vertex{
                                        X: 5305770063635698245,
                                        Y: 83902320275785397,
                                    },
                                    shared.Vertex{
                                        X: 2755742221483800918,
                                        Y: 6808620575458535490,
                                    },
                                },
                            },
                            Filter: "quidem",
                            ProductCategories: []string{
                                "esse",
                                "veritatis",
                                "autem",
                            },
                            ProductSet: "eaque",
                        },
                        TextDetectionParams: &shared.TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "nesciunt",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.InputConfig{
                        Content: "tenetur",
                        GcsSource: &shared.GcsSource{
                            URI: "sequi",
                        },
                        MimeType: "ea",
                    },
                    Pages: []int32{
                        593401825474819025,
                    },
                },
                shared.AnnotateFileRequest{
                    Features: []shared.Feature{
                        shared.Feature{
                            MaxResults: 5606522350154344661,
                            Model: "dolor",
                            Type: "LANDMARK_DETECTION",
                        },
                    },
                    ImageContext: &shared.ImageContext{
                        CropHintsParams: &shared.CropHintsParams{
                            AspectRatios: []float32{
                                57.200001,
                                99.199997,
                                5.200000,
                            },
                        },
                        LanguageHints: []string{
                            "pariatur",
                            "voluptatem",
                            "temporibus",
                        },
                        LatLongRect: &shared.LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 48.099998,
                                Longitude: 14.200000,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 11.100000,
                                Longitude: 40.200001,
                            },
                        },
                        ProductSearchParams: &shared.ProductSearchParams{
                            BoundingPoly: &shared.BoundingPoly{
                                NormalizedVertices: []shared.NormalizedVertex{
                                    shared.NormalizedVertex{
                                        X: 60.200001,
                                        Y: 34.099998,
                                    },
                                    shared.NormalizedVertex{
                                        X: 89.199997,
                                        Y: 85.199997,
                                    },
                                },
                                Vertices: []shared.Vertex{
                                    shared.Vertex{
                                        X: 1102970828470127414,
                                        Y: 8430417978437606446,
                                    },
                                },
                            },
                            Filter: "omnis",
                            ProductCategories: []string{
                                "quo",
                            },
                            ProductSet: "aut",
                        },
                        TextDetectionParams: &shared.TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "quidem",
                                "et",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.InputConfig{
                        Content: "amet",
                        GcsSource: &shared.GcsSource{
                            URI: "blanditiis",
                        },
                        MimeType: "aut",
                    },
                    Pages: []int32{
                        4155155750071868548,
                        8133176726866506262,
                        6590392422528267869,
                    },
                },
            },
        },
    }
    
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAnnotateFilesResponse != nil {
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

### operations

* `VisionOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### projects

* `VisionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `VisionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
* `VisionProjectsLocationsProductSetsAddProduct` - Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
* `VisionProjectsLocationsProductSetsCreate` - Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.
* `VisionProjectsLocationsProductSetsDelete` - Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.
* `VisionProjectsLocationsProductSetsImport` - Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.
* `VisionProjectsLocationsProductSetsList` - Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.
* `VisionProjectsLocationsProductSetsPatch` - Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.
* `VisionProjectsLocationsProductSetsProductsList` - Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `VisionProjectsLocationsProductSetsRemoveProduct` - Removes a Product from the specified ProductSet.
* `VisionProjectsLocationsProductsCreate` - Creates and returns a new product resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid.
* `VisionProjectsLocationsProductsList` - Lists products in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `VisionProjectsLocationsProductsPurge` - Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)
* `VisionProjectsLocationsProductsReferenceImagesCreate` - Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
* `VisionProjectsLocationsProductsReferenceImagesList` - Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.
* `VisionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
