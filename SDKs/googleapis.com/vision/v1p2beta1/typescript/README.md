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
    dollarXgafv: "1",
    accessToken: "necessitatibus",
    alt: "proto",
    callback: "inventore",
    fields: "sapiente",
    key: "reprehenderit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "expedita",
    uploadType: "et",
    uploadProtocol: "omnis",
  },
  request: {
    parent: "maxime",
    requests: [
      {
        features: [
          {
            maxResults: 1213201996933488666,
            model: "voluptatibus",
            type: "PRODUCT_SEARCH",
          },
          {
            maxResults: 3456238072829815161,
            model: "sed",
            type: "OBJECT_LOCALIZATION",
          },
          {
            maxResults: 6642228921464980690,
            model: "sit",
            type: "DOCUMENT_TEXT_DETECTION",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              90.199997,
            ],
          },
          languageHints: [
            "fugit",
            "aperiam",
            "repudiandae",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 28.100000,
              longitude: 9.200000,
            },
            minLatLng: {
              latitude: 21.100000,
              longitude: 23.200001,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 12.100000,
                  y: 36.200001,
                },
              ],
              vertices: [
                {
                  x: 3381637034097052270,
                  y: 7257984784277687128,
                },
              ],
            },
            filter: "voluptate",
            productCategories: [
              "inventore",
            ],
            productSet: "ab",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "provident",
              "doloremque",
            ],
            enableTextDetectionConfidenceScore: true,
          },
          webDetectionParams: {
            includeGeoResults: false,
          },
        },
        inputConfig: {
          content: "voluptas",
          gcsSource: {
            uri: "optio",
          },
          mimeType: "veritatis",
        },
        pages: [
          8333952790492756531,
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
