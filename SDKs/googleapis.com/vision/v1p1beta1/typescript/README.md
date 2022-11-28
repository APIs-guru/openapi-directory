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
import { VisionFilesAnnotateRequest, VisionFilesAnnotateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VisionFilesAnnotateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "voluptatem",
    alt: "media",
    callback: "corporis",
    fields: "maiores",
    key: "aperiam",
    oauthToken: "quas",
    prettyPrint: false,
    quotaUser: "voluptatum",
    uploadType: "soluta",
    uploadProtocol: "maiores",
  },
  request: {
    parent: "possimus",
    requests: [
      {
        features: [
          {
            maxResults: 5896826554833194396,
            model: "nihil",
            type: "FACE_DETECTION",
          },
          {
            maxResults: 7248993876835426576,
            model: "suscipit",
            type: "IMAGE_PROPERTIES",
          },
          {
            maxResults: 314526818400339893,
            model: "exercitationem",
            type: "LOGO_DETECTION",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              51.200001,
            ],
          },
          languageHints: [
            "ipsam",
            "iusto",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 84.099998,
              longitude: 93.199997,
            },
            minLatLng: {
              latitude: 34.099998,
              longitude: 23.200001,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 34.200001,
                  y: 35.099998,
                },
                {
                  x: 57.200001,
                  y: 37.200001,
                },
              ],
              vertices: [
                {
                  x: 4295553034433656254,
                  y: 543742341649564673,
                },
              ],
            },
            filter: "optio",
            productCategories: [
              "quidem",
              "voluptatem",
              "impedit",
            ],
            productSet: "culpa",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "doloremque",
            ],
            enableTextDetectionConfidenceScore: true,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "sint",
          gcsSource: {
            uri: "sunt",
          },
          mimeType: "ullam",
        },
        pages: [
          4361129434334350075,
          1292047795867759674,
          3442255034707370051,
        ],
      },
      {
        features: [
          {
            maxResults: 3295330214997895760,
            model: "voluptatem",
            type: "DOCUMENT_TEXT_DETECTION",
          },
          {
            maxResults: 3887042589612565308,
            model: "ab",
            type: "OBJECT_LOCALIZATION",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              18.200001,
            ],
          },
          languageHints: [
            "inventore",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 72.199997,
              longitude: 93.099998,
            },
            minLatLng: {
              latitude: 9.200000,
              longitude: 71.199997,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 65.199997,
                  y: 44.099998,
                },
              ],
              vertices: [
                {
                  x: 1566196444678861136,
                  y: 6519674982809172394,
                },
                {
                  x: 8174216102918134867,
                  y: 4993673176719312168,
                },
                {
                  x: 71359592332364063,
                  y: 1087500975586189357,
                },
              ],
            },
            filter: "asperiores",
            productCategories: [
              "et",
            ],
            productSet: "rem",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "expedita",
              "blanditiis",
            ],
            enableTextDetectionConfidenceScore: true,
          },
          webDetectionParams: {
            includeGeoResults: true,
          },
        },
        inputConfig: {
          content: "nam",
          gcsSource: {
            uri: "voluptas",
          },
          mimeType: "laboriosam",
        },
        pages: [
          8035824011792189689,
          4377433803281378176,
        ],
      },
      {
        features: [
          {
            maxResults: 2532387682074555433,
            model: "aliquam",
            type: "WEB_DETECTION",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              18.100000,
            ],
          },
          languageHints: [
            "voluptatibus",
            "quia",
            "veritatis",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 76.199997,
              longitude: 84.199997,
            },
            minLatLng: {
              latitude: 78.099998,
              longitude: 2.100000,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 80.199997,
                  y: 1.200000,
                },
              ],
              vertices: [
                {
                  x: 8097540637792439437,
                  y: 8912532118801387208,
                },
                {
                  x: 5814183168299745405,
                  y: 418237168085043231,
                },
              ],
            },
            filter: "id",
            productCategories: [
              "nam",
              "unde",
            ],
            productSet: "aspernatur",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "aliquam",
              "consequatur",
            ],
            enableTextDetectionConfidenceScore: false,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "expedita",
          gcsSource: {
            uri: "veniam",
          },
          mimeType: "suscipit",
        },
        pages: [
          5418602044466277311,
          649453780568054870,
          615136242637761605,
        ],
      },
    ],
  },
};

sdk.files.visionFilesAnnotate(req).then((res: VisionFilesAnnotateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `visionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `visionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `visionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `visionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
