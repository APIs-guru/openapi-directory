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
import { DocumentaiProjectsLocationsDocumentsBatchProcessRequest, DocumentaiProjectsLocationsDocumentsBatchProcessResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DocumentaiProjectsLocationsDocumentsBatchProcessRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "accusamus",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "aspernatur",
    alt: "proto",
    callback: "necessitatibus",
    fields: "aut",
    key: "in",
    oauthToken: "consectetur",
    prettyPrint: false,
    quotaUser: "odio",
    uploadType: "omnis",
    uploadProtocol: "dolore",
  },
  request: {
    requests: [
      {
        automlParams: {
          model: "deserunt",
        },
        documentType: "ducimus",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "corrupti",
        },
        formExtractionParams: {
          enabled: true,
          keyValuePairHints: [
            {
              key: "natus",
              valueTypes: [
                "officiis",
                "et",
              ],
            },
            {
              key: "tempore",
              valueTypes: [
                "officia",
                "non",
                "illum",
              ],
            },
          ],
          modelVersion: "esse",
        },
        inputConfig: {
          contents: "ut",
          gcsSource: {
            uri: "consectetur",
          },
          mimeType: "temporibus",
        },
        ocrParams: {
          languageHints: [
            "et",
            "sit",
            "non",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "libero",
          },
          pagesPerShard: 3977994518227181620,
        },
        parent: "perspiciatis",
        tableExtractionParams: {
          enabled: true,
          headerHints: [
            "aliquam",
            "expedita",
          ],
          modelVersion: "ipsam",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 3.200000,
                    y: 91.099998,
                  },
                  {
                    x: 55.099998,
                    y: 79.099998,
                  },
                  {
                    x: 93.199997,
                    y: 73.199997,
                  },
                ],
                vertices: [
                  {
                    x: 9153202328428070724,
                    y: 212910970379447706,
                  },
                ],
              },
              pageNumber: 4484347696836556320,
            },
          ],
        },
      },
      {
        automlParams: {
          model: "asperiores",
        },
        documentType: "aliquid",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "saepe",
        },
        formExtractionParams: {
          enabled: false,
          keyValuePairHints: [
            {
              key: "vero",
              valueTypes: [
                "facilis",
                "ipsa",
              ],
            },
            {
              key: "animi",
              valueTypes: [
                "qui",
              ],
            },
            {
              key: "excepturi",
              valueTypes: [
                "aut",
              ],
            },
          ],
          modelVersion: "quia",
        },
        inputConfig: {
          contents: "nulla",
          gcsSource: {
            uri: "laudantium",
          },
          mimeType: "in",
        },
        ocrParams: {
          languageHints: [
            "necessitatibus",
            "aut",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "neque",
          },
          pagesPerShard: 7205684613211767704,
        },
        parent: "autem",
        tableExtractionParams: {
          enabled: true,
          headerHints: [
            "ut",
            "id",
          ],
          modelVersion: "laudantium",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 90.099998,
                    y: 24.200001,
                  },
                ],
                vertices: [
                  {
                    x: 5465762999401451180,
                    y: 2589978446189390501,
                  },
                  {
                    x: 3381153955800394242,
                    y: 6483977066524928530,
                  },
                  {
                    x: 4330030033128116391,
                    y: 6452109320694614544,
                  },
                ],
              },
              pageNumber: 3019085975435534377,
            },
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 35.099998,
                    y: 27.100000,
                  },
                  {
                    x: 44.099998,
                    y: 28.200001,
                  },
                  {
                    x: 84.199997,
                    y: 32.099998,
                  },
                ],
                vertices: [
                  {
                    x: 8574942949169313192,
                    y: 5838608827208325630,
                  },
                ],
              },
              pageNumber: 821777092402364754,
            },
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 2.100000,
                    y: 60.099998,
                  },
                  {
                    x: 72.199997,
                    y: 54.200001,
                  },
                  {
                    x: 25.200001,
                    y: 63.099998,
                  },
                ],
                vertices: [
                  {
                    x: 4830852428165135925,
                    y: 5378367600433771130,
                  },
                  {
                    x: 7117192674649410582,
                    y: 3731705481196502876,
                  },
                ],
              },
              pageNumber: 2769778733425732679,
            },
          ],
        },
      },
      {
        automlParams: {
          model: "beatae",
        },
        documentType: "dolores",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "deleniti",
        },
        formExtractionParams: {
          enabled: false,
          keyValuePairHints: [
            {
              key: "cupiditate",
              valueTypes: [
                "mollitia",
                "facilis",
              ],
            },
            {
              key: "rerum",
              valueTypes: [
                "sunt",
                "delectus",
                "inventore",
              ],
            },
          ],
          modelVersion: "nulla",
        },
        inputConfig: {
          contents: "sed",
          gcsSource: {
            uri: "possimus",
          },
          mimeType: "nobis",
        },
        ocrParams: {
          languageHints: [
            "voluptates",
            "porro",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "et",
          },
          pagesPerShard: 8204265501301102548,
        },
        parent: "velit",
        tableExtractionParams: {
          enabled: true,
          headerHints: [
            "enim",
            "molestias",
          ],
          modelVersion: "exercitationem",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 64.199997,
                    y: 45.200001,
                  },
                  {
                    x: 91.099998,
                    y: 33.099998,
                  },
                  {
                    x: 44.099998,
                    y: 68.099998,
                  },
                ],
                vertices: [
                  {
                    x: 3325265499125798500,
                    y: 794630284764646271,
                  },
                ],
              },
              pageNumber: 5940557397638332803,
            },
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 45.200001,
                    y: 30.200001,
                  },
                  {
                    x: 95.099998,
                    y: 14.100000,
                  },
                  {
                    x: 85.099998,
                    y: 93.199997,
                  },
                ],
                vertices: [
                  {
                    x: 934467367965716307,
                    y: 1734915949505464922,
                  },
                  {
                    x: 5980186292682469976,
                    y: 879397370658672803,
                  },
                ],
              },
              pageNumber: 2631243517115766127,
            },
          ],
        },
      },
    ],
  },
};

sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req).then((res: DocumentaiProjectsLocationsDocumentsBatchProcessResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `documentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `documentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `documentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
