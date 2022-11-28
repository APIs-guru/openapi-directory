# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VisionFilesAnnotateRequest(
    security=operations.VisionFilesAnnotateSecurity(
        option1=operations.VisionFilesAnnotateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.VisionFilesAnnotateQueryParams(
        dollar_xgafv="1",
        access_token="veritatis",
        alt="proto",
        callback="mollitia",
        fields="quaerat",
        key="modi",
        oauth_token="ut",
        pretty_print=True,
        quota_user="consectetur",
        upload_type="quis",
        upload_protocol="necessitatibus",
    ),
    request=shared.BatchAnnotateFilesRequest(
        parent="quo",
        requests=[
            shared.AnnotateFileRequest(
                features=[
                    shared.Feature(
                        max_results=8869013046101950281,
                        model="omnis",
                        type="SAFE_SEARCH_DETECTION",
                    ),
                    shared.Feature(
                        max_results=6311671662795349814,
                        model="ratione",
                        type="LOGO_DETECTION",
                    ),
                    shared.Feature(
                        max_results=1090197577340075915,
                        model="qui",
                        type="IMAGE_PROPERTIES",
                    ),
                ],
                image_context=shared.ImageContext(
                    crop_hints_params=shared.CropHintsParams(
                        aspect_ratios=[
                            98.199997,
                            37.099998,
                        ],
                    ),
                    language_hints=[
                        "fugit",
                        "ratione",
                        "voluptates",
                    ],
                    lat_long_rect=shared.LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=60.099998,
                            longitude=71.099998,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=0.200000,
                            longitude=63.200001,
                        ),
                    ),
                    product_search_params=shared.ProductSearchParams(
                        bounding_poly=shared.BoundingPoly(
                            normalized_vertices=[
                                shared.NormalizedVertex(
                                    x=14.200000,
                                    y=82.099998,
                                ),
                            ],
                            vertices=[
                                shared.Vertex(
                                    x=5305770063635698245,
                                    y=83902320275785397,
                                ),
                                shared.Vertex(
                                    x=2755742221483800918,
                                    y=6808620575458535490,
                                ),
                            ],
                        ),
                        filter="quidem",
                        product_categories=[
                            "esse",
                            "veritatis",
                            "autem",
                        ],
                        product_set="eaque",
                    ),
                    text_detection_params=shared.TextDetectionParams(
                        advanced_ocr_options=[
                            "nesciunt",
                        ],
                        enable_text_detection_confidence_score=True,
                    ),
                    web_detection_params=shared.WebDetectionParams(
                        include_geo_results=True,
                    ),
                ),
                input_config=shared.InputConfig(
                    content="tenetur",
                    gcs_source=shared.GcsSource(
                        uri="sequi",
                    ),
                    mime_type="ea",
                ),
                pages=[
                    593401825474819025,
                ],
            ),
            shared.AnnotateFileRequest(
                features=[
                    shared.Feature(
                        max_results=5606522350154344661,
                        model="dolor",
                        type="LANDMARK_DETECTION",
                    ),
                ],
                image_context=shared.ImageContext(
                    crop_hints_params=shared.CropHintsParams(
                        aspect_ratios=[
                            57.200001,
                            99.199997,
                            5.200000,
                        ],
                    ),
                    language_hints=[
                        "pariatur",
                        "voluptatem",
                        "temporibus",
                    ],
                    lat_long_rect=shared.LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=48.099998,
                            longitude=14.200000,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=11.100000,
                            longitude=40.200001,
                        ),
                    ),
                    product_search_params=shared.ProductSearchParams(
                        bounding_poly=shared.BoundingPoly(
                            normalized_vertices=[
                                shared.NormalizedVertex(
                                    x=60.200001,
                                    y=34.099998,
                                ),
                                shared.NormalizedVertex(
                                    x=89.199997,
                                    y=85.199997,
                                ),
                            ],
                            vertices=[
                                shared.Vertex(
                                    x=1102970828470127414,
                                    y=8430417978437606446,
                                ),
                            ],
                        ),
                        filter="omnis",
                        product_categories=[
                            "quo",
                        ],
                        product_set="aut",
                    ),
                    text_detection_params=shared.TextDetectionParams(
                        advanced_ocr_options=[
                            "quidem",
                            "et",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.WebDetectionParams(
                        include_geo_results=True,
                    ),
                ),
                input_config=shared.InputConfig(
                    content="amet",
                    gcs_source=shared.GcsSource(
                        uri="blanditiis",
                    ),
                    mime_type="aut",
                ),
                pages=[
                    4155155750071868548,
                    8133176726866506262,
                    6590392422528267869,
                ],
            ),
        ],
    ),
)
    
res = s.files.vision_files_annotate(req)

if res.batch_annotate_files_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `vision_files_annotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `vision_files_async_batch_annotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `vision_images_annotate` - Run image detection and annotation for a batch of images.
* `vision_images_async_batch_annotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### operations

* `vision_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### projects

* `vision_projects_locations_files_annotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `vision_projects_locations_files_async_batch_annotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `vision_projects_locations_images_annotate` - Run image detection and annotation for a batch of images.
* `vision_projects_locations_images_async_batch_annotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
* `vision_projects_locations_product_sets_add_product` - Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
* `vision_projects_locations_product_sets_create` - Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.
* `vision_projects_locations_product_sets_delete` - Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.
* `vision_projects_locations_product_sets_import` - Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.
* `vision_projects_locations_product_sets_list` - Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.
* `vision_projects_locations_product_sets_patch` - Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.
* `vision_projects_locations_product_sets_products_list` - Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `vision_projects_locations_product_sets_remove_product` - Removes a Product from the specified ProductSet.
* `vision_projects_locations_products_create` - Creates and returns a new product resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid.
* `vision_projects_locations_products_list` - Lists products in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `vision_projects_locations_products_purge` - Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)
* `vision_projects_locations_products_reference_images_create` - Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
* `vision_projects_locations_products_reference_images_list` - Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.
* `vision_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
