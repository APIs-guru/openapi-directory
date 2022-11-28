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
        dollar_xgafv="2",
        access_token="voluptatem",
        alt="media",
        callback="corporis",
        fields="maiores",
        key="aperiam",
        oauth_token="quas",
        pretty_print=False,
        quota_user="voluptatum",
        upload_type="soluta",
        upload_protocol="maiores",
    ),
    request=shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest(
        parent="possimus",
        requests=[
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=5896826554833194396,
                        model="nihil",
                        type="FACE_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=7248993876835426576,
                        model="suscipit",
                        type="IMAGE_PROPERTIES",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=314526818400339893,
                        model="exercitationem",
                        type="LOGO_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            51.200001,
                        ],
                    ),
                    language_hints=[
                        "ipsam",
                        "iusto",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=84.099998,
                            longitude=93.199997,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=34.099998,
                            longitude=23.200001,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=34.200001,
                                    y=35.099998,
                                ),
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=57.200001,
                                    y=37.200001,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=4295553034433656254,
                                    y=543742341649564673,
                                ),
                            ],
                        ),
                        filter="optio",
                        product_categories=[
                            "quidem",
                            "voluptatem",
                            "impedit",
                        ],
                        product_set="culpa",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "doloremque",
                        ],
                        enable_text_detection_confidence_score=True,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="sint",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="sunt",
                    ),
                    mime_type="ullam",
                ),
                pages=[
                    4361129434334350075,
                    1292047795867759674,
                    3442255034707370051,
                ],
            ),
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=3295330214997895760,
                        model="voluptatem",
                        type="DOCUMENT_TEXT_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=3887042589612565308,
                        model="ab",
                        type="OBJECT_LOCALIZATION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            18.200001,
                        ],
                    ),
                    language_hints=[
                        "inventore",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=72.199997,
                            longitude=93.099998,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=9.200000,
                            longitude=71.199997,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=65.199997,
                                    y=44.099998,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=1566196444678861136,
                                    y=6519674982809172394,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=8174216102918134867,
                                    y=4993673176719312168,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=71359592332364063,
                                    y=1087500975586189357,
                                ),
                            ],
                        ),
                        filter="asperiores",
                        product_categories=[
                            "et",
                        ],
                        product_set="rem",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "expedita",
                            "blanditiis",
                        ],
                        enable_text_detection_confidence_score=True,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=True,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="nam",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="voluptas",
                    ),
                    mime_type="laboriosam",
                ),
                pages=[
                    8035824011792189689,
                    4377433803281378176,
                ],
            ),
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=2532387682074555433,
                        model="aliquam",
                        type="WEB_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            18.100000,
                        ],
                    ),
                    language_hints=[
                        "voluptatibus",
                        "quia",
                        "veritatis",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=76.199997,
                            longitude=84.199997,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=78.099998,
                            longitude=2.100000,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=80.199997,
                                    y=1.200000,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=8097540637792439437,
                                    y=8912532118801387208,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=5814183168299745405,
                                    y=418237168085043231,
                                ),
                            ],
                        ),
                        filter="id",
                        product_categories=[
                            "nam",
                            "unde",
                        ],
                        product_set="aspernatur",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "aliquam",
                            "consequatur",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="expedita",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="veniam",
                    ),
                    mime_type="suscipit",
                ),
                pages=[
                    5418602044466277311,
                    649453780568054870,
                    615136242637761605,
                ],
            ),
        ],
    ),
)
    
res = s.files.vision_files_annotate(req)

if res.google_cloud_vision_v1p1beta1_batch_annotate_files_response is not None:
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
