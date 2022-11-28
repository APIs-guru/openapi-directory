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
        access_token="necessitatibus",
        alt="proto",
        callback="inventore",
        fields="sapiente",
        key="reprehenderit",
        oauth_token="et",
        pretty_print=True,
        quota_user="expedita",
        upload_type="et",
        upload_protocol="omnis",
    ),
    request=shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest(
        parent="maxime",
        requests=[
            shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p2beta1Feature(
                        max_results=1213201996933488666,
                        model="voluptatibus",
                        type="PRODUCT_SEARCH",
                    ),
                    shared.GoogleCloudVisionV1p2beta1Feature(
                        max_results=3456238072829815161,
                        model="sed",
                        type="OBJECT_LOCALIZATION",
                    ),
                    shared.GoogleCloudVisionV1p2beta1Feature(
                        max_results=6642228921464980690,
                        model="sit",
                        type="DOCUMENT_TEXT_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p2beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p2beta1CropHintsParams(
                        aspect_ratios=[
                            90.199997,
                        ],
                    ),
                    language_hints=[
                        "fugit",
                        "aperiam",
                        "repudiandae",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p2beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=28.100000,
                            longitude=9.200000,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=21.100000,
                            longitude=23.200001,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p2beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p2beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p2beta1NormalizedVertex(
                                    x=12.100000,
                                    y=36.200001,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p2beta1Vertex(
                                    x=3381637034097052270,
                                    y=7257984784277687128,
                                ),
                            ],
                        ),
                        filter="voluptate",
                        product_categories=[
                            "inventore",
                        ],
                        product_set="ab",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p2beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "provident",
                            "doloremque",
                        ],
                        enable_text_detection_confidence_score=True,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p2beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p2beta1InputConfig(
                    content="voluptas",
                    gcs_source=shared.GoogleCloudVisionV1p2beta1GcsSource(
                        uri="optio",
                    ),
                    mime_type="veritatis",
                ),
                pages=[
                    8333952790492756531,
                ],
            ),
        ],
    ),
)
    
res = s.files.vision_files_annotate(req)

if res.google_cloud_vision_v1p2beta1_batch_annotate_files_response is not None:
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

### projects

* `vision_projects_locations_files_annotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `vision_projects_locations_files_async_batch_annotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `vision_projects_locations_images_annotate` - Run image detection and annotation for a batch of images.
* `vision_projects_locations_images_async_batch_annotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
