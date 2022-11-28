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
import { CloudtraceProjectsTracesBatchWriteRequest, CloudtraceProjectsTracesBatchWriteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudtraceProjectsTracesBatchWriteRequest = {
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
  pathParams: {
    name: "fuga",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "facilis",
    alt: "media",
    callback: "cupiditate",
    fields: "esse",
    key: "magni",
    oauthToken: "sit",
    prettyPrint: false,
    quotaUser: "repudiandae",
    uploadType: "similique",
    uploadProtocol: "esse",
  },
  request: {
    spans: [
      {
        attributes: {
          attributeMap: {
            "rem": {
              boolValue: true,
              intValue: "iure",
              stringValue: {
                truncatedByteCount: 7412154669292656382,
                value: "provident",
              },
            },
          },
          droppedAttributesCount: 1882013532627511909,
        },
        childSpanCount: 5159362991102182092,
        displayName: {
          truncatedByteCount: 2631232728389147934,
          value: "dolore",
        },
        endTime: "recusandae",
        links: {
          droppedLinksCount: 900608263848019373,
          link: [
            {
              attributes: {
                attributeMap: {
                  "laborum": {
                    boolValue: true,
                    intValue: "et",
                    stringValue: {
                      truncatedByteCount: 4107694427994788216,
                      value: "et",
                    },
                  },
                  "voluptatem": {
                    boolValue: false,
                    intValue: "eaque",
                    stringValue: {
                      truncatedByteCount: 5719352211019357973,
                      value: "perferendis",
                    },
                  },
                },
                droppedAttributesCount: 7120345347815777111,
              },
              spanId: "labore",
              traceId: "qui",
              type: "PARENT_LINKED_SPAN",
            },
            {
              attributes: {
                attributeMap: {
                  "ut": {
                    boolValue: true,
                    intValue: "consectetur",
                    stringValue: {
                      truncatedByteCount: 8154880525151637120,
                      value: "doloribus",
                    },
                  },
                  "pariatur": {
                    boolValue: true,
                    intValue: "incidunt",
                    stringValue: {
                      truncatedByteCount: 372072971954873086,
                      value: "iste",
                    },
                  },
                  "sit": {
                    boolValue: false,
                    intValue: "molestiae",
                    stringValue: {
                      truncatedByteCount: 2043847166453853718,
                      value: "et",
                    },
                  },
                },
                droppedAttributesCount: 6542411700234841629,
              },
              spanId: "quo",
              traceId: "voluptas",
              type: "PARENT_LINKED_SPAN",
            },
          ],
        },
        name: "ipsam",
        parentSpanId: "quod",
        sameProcessAsParentSpan: true,
        spanId: "hic",
        spanKind: "CLIENT",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 8625985804930332770,
            frame: [
              {
                columnNumber: "et",
                fileName: {
                  truncatedByteCount: 93791829547420238,
                  value: "itaque",
                },
                functionName: {
                  truncatedByteCount: 7316543229150888277,
                  value: "rem",
                },
                lineNumber: "et",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 4871526677843426098,
                    value: "repellat",
                  },
                  module: {
                    truncatedByteCount: 192662194052221150,
                    value: "neque",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 6145378819146129817,
                  value: "laboriosam",
                },
                sourceVersion: {
                  truncatedByteCount: 4325617781642148088,
                  value: "magnam",
                },
              },
              {
                columnNumber: "reiciendis",
                fileName: {
                  truncatedByteCount: 418373007686355712,
                  value: "voluptatum",
                },
                functionName: {
                  truncatedByteCount: 3191746064594094765,
                  value: "soluta",
                },
                lineNumber: "quo",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 7581585206308525222,
                    value: "eos",
                  },
                  module: {
                    truncatedByteCount: 5411230817567836379,
                    value: "magnam",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 1349466626456106616,
                  value: "ut",
                },
                sourceVersion: {
                  truncatedByteCount: 3153009224665982389,
                  value: "cupiditate",
                },
              },
            ],
          },
          stackTraceHashId: "corrupti",
        },
        startTime: "dolor",
        status: {
          code: 2238569681300579679,
          details: [
            {
              "debitis": "ex",
              "nam": "ex",
            },
            {
              "vero": "repellendus",
              "qui": "veniam",
            },
            {
              "totam": "eius",
              "nisi": "aliquid",
              "fugiat": "sit",
            },
          ],
          message: "dignissimos",
        },
        timeEvents: {
          droppedAnnotationsCount: 8376081643456033423,
          droppedMessageEventsCount: 3300264040377190200,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "aliquid": {
                      boolValue: true,
                      intValue: "veritatis",
                      stringValue: {
                        truncatedByteCount: 5823308888678265137,
                        value: "sed",
                      },
                    },
                    "aliquam": {
                      boolValue: true,
                      intValue: "ex",
                      stringValue: {
                        truncatedByteCount: 8057906358955275330,
                        value: "ex",
                      },
                    },
                    "vitae": {
                      boolValue: true,
                      intValue: "veniam",
                      stringValue: {
                        truncatedByteCount: 6963093291005377551,
                        value: "est",
                      },
                    },
                  },
                  droppedAttributesCount: 7670742053654497762,
                },
                description: {
                  truncatedByteCount: 9069299569638429191,
                  value: "omnis",
                },
              },
              messageEvent: {
                compressedSizeBytes: "provident",
                id: "commodi",
                type: "TYPE_UNSPECIFIED",
                uncompressedSizeBytes: "sed",
              },
              time: "fugiat",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "molestiae": {
              boolValue: true,
              intValue: "eum",
              stringValue: {
                truncatedByteCount: 3162591810075885038,
                value: "recusandae",
              },
            },
            "distinctio": {
              boolValue: true,
              intValue: "quia",
              stringValue: {
                truncatedByteCount: 3113692847381544996,
                value: "quis",
              },
            },
          },
          droppedAttributesCount: 1711403167402294839,
        },
        childSpanCount: 658028883953665887,
        displayName: {
          truncatedByteCount: 2708742425483043233,
          value: "qui",
        },
        endTime: "blanditiis",
        links: {
          droppedLinksCount: 1124888169288528810,
          link: [
            {
              attributes: {
                attributeMap: {
                  "consequatur": {
                    boolValue: true,
                    intValue: "illum",
                    stringValue: {
                      truncatedByteCount: 4440095872882271002,
                      value: "saepe",
                    },
                  },
                  "culpa": {
                    boolValue: true,
                    intValue: "dolor",
                    stringValue: {
                      truncatedByteCount: 2720658529666853584,
                      value: "nihil",
                    },
                  },
                },
                droppedAttributesCount: 4291946209512453872,
              },
              spanId: "exercitationem",
              traceId: "deserunt",
              type: "TYPE_UNSPECIFIED",
            },
            {
              attributes: {
                attributeMap: {
                  "aspernatur": {
                    boolValue: true,
                    intValue: "ut",
                    stringValue: {
                      truncatedByteCount: 5050253948894144695,
                      value: "iste",
                    },
                  },
                  "quod": {
                    boolValue: true,
                    intValue: "officiis",
                    stringValue: {
                      truncatedByteCount: 8054518398797532132,
                      value: "esse",
                    },
                  },
                },
                droppedAttributesCount: 1691434432587593857,
              },
              spanId: "adipisci",
              traceId: "aspernatur",
              type: "CHILD_LINKED_SPAN",
            },
          ],
        },
        name: "sapiente",
        parentSpanId: "at",
        sameProcessAsParentSpan: true,
        spanId: "dolor",
        spanKind: "SERVER",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 4318552592500431206,
            frame: [
              {
                columnNumber: "voluptatibus",
                fileName: {
                  truncatedByteCount: 2057425696130468793,
                  value: "aut",
                },
                functionName: {
                  truncatedByteCount: 5472948715167207246,
                  value: "ea",
                },
                lineNumber: "necessitatibus",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 8504318534870582666,
                    value: "aut",
                  },
                  module: {
                    truncatedByteCount: 1449417248362810995,
                    value: "voluptatem",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 4375476757655588205,
                  value: "maxime",
                },
                sourceVersion: {
                  truncatedByteCount: 6317859072742515473,
                  value: "quod",
                },
              },
              {
                columnNumber: "voluptatum",
                fileName: {
                  truncatedByteCount: 6580143705113543846,
                  value: "aut",
                },
                functionName: {
                  truncatedByteCount: 394045682720935338,
                  value: "iusto",
                },
                lineNumber: "in",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 3460064967972003242,
                    value: "cum",
                  },
                  module: {
                    truncatedByteCount: 668873899885723210,
                    value: "nostrum",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 7466532413770905939,
                  value: "perspiciatis",
                },
                sourceVersion: {
                  truncatedByteCount: 8685251208025816075,
                  value: "ut",
                },
              },
              {
                columnNumber: "veniam",
                fileName: {
                  truncatedByteCount: 8412716791473707099,
                  value: "officia",
                },
                functionName: {
                  truncatedByteCount: 7605692820699002696,
                  value: "ipsum",
                },
                lineNumber: "adipisci",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 3020508955706901651,
                    value: "molestiae",
                  },
                  module: {
                    truncatedByteCount: 7372117690145769185,
                    value: "ut",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 7895065323425861377,
                  value: "facere",
                },
                sourceVersion: {
                  truncatedByteCount: 2607881367854918601,
                  value: "similique",
                },
              },
            ],
          },
          stackTraceHashId: "odio",
        },
        startTime: "adipisci",
        status: {
          code: 2554508371746394260,
          details: [
            {
              "et": "doloribus",
            },
            {
              "nam": "sint",
            },
          ],
          message: "repudiandae",
        },
        timeEvents: {
          droppedAnnotationsCount: 3057003022441306605,
          droppedMessageEventsCount: 4567130275734661693,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "qui": {
                      boolValue: false,
                      intValue: "qui",
                      stringValue: {
                        truncatedByteCount: 3220956862257110409,
                        value: "laboriosam",
                      },
                    },
                    "similique": {
                      boolValue: false,
                      intValue: "et",
                      stringValue: {
                        truncatedByteCount: 8772352799208422705,
                        value: "qui",
                      },
                    },
                  },
                  droppedAttributesCount: 2254885794860710070,
                },
                description: {
                  truncatedByteCount: 6423926587202505410,
                  value: "error",
                },
              },
              messageEvent: {
                compressedSizeBytes: "deserunt",
                id: "recusandae",
                type: "RECEIVED",
                uncompressedSizeBytes: "ut",
              },
              time: "culpa",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "est": {
                      boolValue: false,
                      intValue: "et",
                      stringValue: {
                        truncatedByteCount: 5912980749044626026,
                        value: "veritatis",
                      },
                    },
                    "ut": {
                      boolValue: true,
                      intValue: "minus",
                      stringValue: {
                        truncatedByteCount: 8176708107005068801,
                        value: "minima",
                      },
                    },
                    "consequatur": {
                      boolValue: false,
                      intValue: "voluptate",
                      stringValue: {
                        truncatedByteCount: 1180761073515899667,
                        value: "laudantium",
                      },
                    },
                  },
                  droppedAttributesCount: 534137970119690627,
                },
                description: {
                  truncatedByteCount: 3152267740478274112,
                  value: "libero",
                },
              },
              messageEvent: {
                compressedSizeBytes: "ut",
                id: "est",
                type: "SENT",
                uncompressedSizeBytes: "quae",
              },
              time: "sint",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "magni": {
              boolValue: false,
              intValue: "eveniet",
              stringValue: {
                truncatedByteCount: 1872124498889570851,
                value: "qui",
              },
            },
            "fugit": {
              boolValue: false,
              intValue: "ducimus",
              stringValue: {
                truncatedByteCount: 4611970130455200035,
                value: "quia",
              },
            },
          },
          droppedAttributesCount: 5837814512825710107,
        },
        childSpanCount: 3689584114546443757,
        displayName: {
          truncatedByteCount: 8253050329645548112,
          value: "dolorum",
        },
        endTime: "in",
        links: {
          droppedLinksCount: 745925676084747689,
          link: [
            {
              attributes: {
                attributeMap: {
                  "explicabo": {
                    boolValue: true,
                    intValue: "consequatur",
                    stringValue: {
                      truncatedByteCount: 714048778457649626,
                      value: "blanditiis",
                    },
                  },
                },
                droppedAttributesCount: 3382536036547342098,
              },
              spanId: "nemo",
              traceId: "ad",
              type: "PARENT_LINKED_SPAN",
            },
            {
              attributes: {
                attributeMap: {
                  "velit": {
                    boolValue: true,
                    intValue: "eum",
                    stringValue: {
                      truncatedByteCount: 5387308147037031214,
                      value: "atque",
                    },
                  },
                  "et": {
                    boolValue: true,
                    intValue: "saepe",
                    stringValue: {
                      truncatedByteCount: 6765931371440523951,
                      value: "amet",
                    },
                  },
                },
                droppedAttributesCount: 647415043653186772,
              },
              spanId: "consectetur",
              traceId: "quo",
              type: "PARENT_LINKED_SPAN",
            },
          ],
        },
        name: "vel",
        parentSpanId: "molestiae",
        sameProcessAsParentSpan: true,
        spanId: "dolor",
        spanKind: "PRODUCER",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 7497798725426883901,
            frame: [
              {
                columnNumber: "debitis",
                fileName: {
                  truncatedByteCount: 8357011285286565884,
                  value: "et",
                },
                functionName: {
                  truncatedByteCount: 5074184114943908484,
                  value: "consequuntur",
                },
                lineNumber: "ea",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 5548937277649397644,
                    value: "voluptas",
                  },
                  module: {
                    truncatedByteCount: 2306189342091941383,
                    value: "temporibus",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 7990343170107771072,
                  value: "eius",
                },
                sourceVersion: {
                  truncatedByteCount: 2757753363505179891,
                  value: "illo",
                },
              },
              {
                columnNumber: "debitis",
                fileName: {
                  truncatedByteCount: 4816527767106693013,
                  value: "ut",
                },
                functionName: {
                  truncatedByteCount: 7541775597248545568,
                  value: "mollitia",
                },
                lineNumber: "voluptas",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 6890724580885051093,
                    value: "libero",
                  },
                  module: {
                    truncatedByteCount: 1130388397918876596,
                    value: "optio",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 2522083041826811291,
                  value: "dicta",
                },
                sourceVersion: {
                  truncatedByteCount: 4568021486366470855,
                  value: "quis",
                },
              },
              {
                columnNumber: "aut",
                fileName: {
                  truncatedByteCount: 1443724628196768607,
                  value: "officiis",
                },
                functionName: {
                  truncatedByteCount: 8446368677072091442,
                  value: "non",
                },
                lineNumber: "sit",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 5120365771785343002,
                    value: "sapiente",
                  },
                  module: {
                    truncatedByteCount: 4567861104280258440,
                    value: "facilis",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 1006122998850990026,
                  value: "dolor",
                },
                sourceVersion: {
                  truncatedByteCount: 2459444971568688245,
                  value: "ut",
                },
              },
            ],
          },
          stackTraceHashId: "quisquam",
        },
        startTime: "incidunt",
        status: {
          code: 4922047298306025132,
          details: [
            {
              "quae": "distinctio",
            },
            {
              "omnis": "dolores",
              "architecto": "labore",
              "sit": "placeat",
            },
          ],
          message: "aut",
        },
        timeEvents: {
          droppedAnnotationsCount: 1305834826686730245,
          droppedMessageEventsCount: 6068238350177432791,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "excepturi": {
                      boolValue: true,
                      intValue: "recusandae",
                      stringValue: {
                        truncatedByteCount: 31602809576134454,
                        value: "cumque",
                      },
                    },
                  },
                  droppedAttributesCount: 7895267545288934660,
                },
                description: {
                  truncatedByteCount: 6791283100892614221,
                  value: "ipsa",
                },
              },
              messageEvent: {
                compressedSizeBytes: "quaerat",
                id: "voluptates",
                type: "TYPE_UNSPECIFIED",
                uncompressedSizeBytes: "quis",
              },
              time: "qui",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "nesciunt": {
                      boolValue: false,
                      intValue: "deserunt",
                      stringValue: {
                        truncatedByteCount: 5287675374053131560,
                        value: "sit",
                      },
                    },
                    "consequatur": {
                      boolValue: true,
                      intValue: "nihil",
                      stringValue: {
                        truncatedByteCount: 8928422274497150829,
                        value: "ipsum",
                      },
                    },
                    "illum": {
                      boolValue: false,
                      intValue: "provident",
                      stringValue: {
                        truncatedByteCount: 3137147292797088911,
                        value: "temporibus",
                      },
                    },
                  },
                  droppedAttributesCount: 4375435975116264586,
                },
                description: {
                  truncatedByteCount: 8731453672231866571,
                  value: "fugit",
                },
              },
              messageEvent: {
                compressedSizeBytes: "velit",
                id: "repellat",
                type: "SENT",
                uncompressedSizeBytes: "nesciunt",
              },
              time: "ab",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "ut": {
                      boolValue: false,
                      intValue: "libero",
                      stringValue: {
                        truncatedByteCount: 1561017435673571789,
                        value: "dolorum",
                      },
                    },
                    "qui": {
                      boolValue: true,
                      intValue: "ea",
                      stringValue: {
                        truncatedByteCount: 8362301776994056438,
                        value: "aut",
                      },
                    },
                  },
                  droppedAttributesCount: 376069413832377877,
                },
                description: {
                  truncatedByteCount: 1228101723310582998,
                  value: "dignissimos",
                },
              },
              messageEvent: {
                compressedSizeBytes: "et",
                id: "perferendis",
                type: "SENT",
                uncompressedSizeBytes: "quos",
              },
              time: "voluptates",
            },
          ],
        },
      },
    ],
  },
};

sdk.projects.cloudtraceProjectsTracesBatchWrite(req).then((res: CloudtraceProjectsTracesBatchWriteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `cloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
