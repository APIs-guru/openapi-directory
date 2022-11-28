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
    accessToken: "veritatis",
    alt: "proto",
    callback: "mollitia",
    fields: "quaerat",
    key: "modi",
    oauthToken: "ut",
    prettyPrint: true,
    quotaUser: "consectetur",
    uploadType: "quis",
    uploadProtocol: "necessitatibus",
  },
  request: {
    parent: "quo",
    requests: [
      {
        features: [
          {
            maxResults: 8869013046101950281,
            model: "omnis",
            type: "SAFE_SEARCH_DETECTION",
          },
          {
            maxResults: 6311671662795349814,
            model: "ratione",
            type: "LOGO_DETECTION",
          },
          {
            maxResults: 1090197577340075915,
            model: "qui",
            type: "IMAGE_PROPERTIES",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              98.199997,
              37.099998,
            ],
          },
          languageHints: [
            "fugit",
            "ratione",
            "voluptates",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 60.099998,
              longitude: 71.099998,
            },
            minLatLng: {
              latitude: 0.200000,
              longitude: 63.200001,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 14.200000,
                  y: 82.099998,
                },
              ],
              vertices: [
                {
                  x: 5305770063635698245,
                  y: 83902320275785397,
                },
                {
                  x: 2755742221483800918,
                  y: 6808620575458535490,
                },
              ],
            },
            filter: "quidem",
            productCategories: [
              "esse",
              "veritatis",
              "autem",
            ],
            productSet: "eaque",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "nesciunt",
            ],
            enableTextDetectionConfidenceScore: true,
          },
          webDetectionParams: {
            includeGeoResults: true,
          },
        },
        inputConfig: {
          content: "tenetur",
          gcsSource: {
            uri: "sequi",
          },
          mimeType: "ea",
        },
        pages: [
          593401825474819025,
        ],
      },
      {
        features: [
          {
            maxResults: 5606522350154344661,
            model: "dolor",
            type: "LANDMARK_DETECTION",
          },
        ],
        imageContext: {
          cropHintsParams: {
            aspectRatios: [
              57.200001,
              99.199997,
              5.200000,
            ],
          },
          languageHints: [
            "pariatur",
            "voluptatem",
            "temporibus",
          ],
          latLongRect: {
            maxLatLng: {
              latitude: 48.099998,
              longitude: 14.200000,
            },
            minLatLng: {
              latitude: 11.100000,
              longitude: 40.200001,
            },
          },
          productSearchParams: {
            boundingPoly: {
              normalizedVertices: [
                {
                  x: 60.200001,
                  y: 34.099998,
                },
                {
                  x: 89.199997,
                  y: 85.199997,
                },
              ],
              vertices: [
                {
                  x: 1102970828470127414,
                  y: 8430417978437606446,
                },
              ],
            },
            filter: "omnis",
            productCategories: [
              "quo",
            ],
            productSet: "aut",
          },
          textDetectionParams: {
            advancedOcrOptions: [
              "quidem",
              "et",
            ],
            enableTextDetectionConfidenceScore: false,
          },
          webDetectionParams: {
            includeGeoResults: true,
          },
        },
        inputConfig: {
          content: "amet",
          gcsSource: {
            uri: "blanditiis",
          },
          mimeType: "aut",
        },
        pages: [
          4155155750071868548,
          8133176726866506262,
          6590392422528267869,
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

### operations

* `visionOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### projects

* `visionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `visionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
* `visionProjectsLocationsProductSetsAddProduct` - Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
* `visionProjectsLocationsProductSetsCreate` - Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.
* `visionProjectsLocationsProductSetsDelete` - Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.
* `visionProjectsLocationsProductSetsImport` - Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.
* `visionProjectsLocationsProductSetsList` - Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.
* `visionProjectsLocationsProductSetsPatch` - Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.
* `visionProjectsLocationsProductSetsProductsList` - Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `visionProjectsLocationsProductSetsRemoveProduct` - Removes a Product from the specified ProductSet.
* `visionProjectsLocationsProductsCreate` - Creates and returns a new product resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid.
* `visionProjectsLocationsProductsList` - Lists products in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
* `visionProjectsLocationsProductsPurge` - Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)
* `visionProjectsLocationsProductsReferenceImagesCreate` - Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
* `visionProjectsLocationsProductsReferenceImagesList` - Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.
* `visionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
