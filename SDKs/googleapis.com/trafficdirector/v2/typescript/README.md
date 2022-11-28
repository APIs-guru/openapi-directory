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
import { TrafficdirectorDiscoveryClientStatusRequest, TrafficdirectorDiscoveryClientStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TrafficdirectorDiscoveryClientStatusRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "error",
    alt: "media",
    callback: "quos",
    fields: "repellat",
    key: "beatae",
    oauthToken: "iusto",
    prettyPrint: false,
    quotaUser: "similique",
    uploadType: "qui",
    uploadProtocol: "architecto",
  },
  request: {
    nodeMatchers: [
      {
        nodeId: {
          exact: "aut",
          ignoreCase: false,
          prefix: "dolores",
          regex: "consequuntur",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 7453439902694599752,
            },
            regex: "id",
          },
          suffix: "esse",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "quaerat",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 47.200001,
                range: {
                  end: 13.100000,
                  start: 50.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "vitae": "laborum",
                "vitae": "nihil",
                "excepturi": "dolores",
              },
              presentMatch: false,
              stringMatch: {
                exact: "ut",
                ignoreCase: true,
                prefix: "ullam",
                regex: "voluptas",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 8920998268577836284,
                  },
                  regex: "sequi",
                },
                suffix: "eum",
              },
            },
          },
          {
            path: [
              {
                key: "animi",
              },
              {
                key: "veritatis",
              },
              {
                key: "quas",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 68.199997,
                range: {
                  end: 31.100000,
                  start: 78.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "et": "temporibus",
                "reiciendis": "totam",
                "sed": "labore",
              },
              presentMatch: true,
              stringMatch: {
                exact: "voluptatem",
                ignoreCase: false,
                prefix: "qui",
                regex: "iusto",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 4519647800677519930,
                  },
                  regex: "quae",
                },
                suffix: "nisi",
              },
            },
          },
          {
            path: [
              {
                key: "recusandae",
              },
              {
                key: "veritatis",
              },
            ],
            value: {
              boolMatch: true,
              doubleMatch: {
                exact: 81.099998,
                range: {
                  end: 10.100000,
                  start: 36.200001,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "similique": "ut",
              },
              presentMatch: true,
              stringMatch: {
                exact: "earum",
                ignoreCase: false,
                prefix: "voluptatem",
                regex: "hic",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 1213782071673588914,
                  },
                  regex: "fugiat",
                },
                suffix: "cum",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "vel",
          ignoreCase: false,
          prefix: "explicabo",
          regex: "aut",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 7874805523998436429,
            },
            regex: "sint",
          },
          suffix: "repellat",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "non",
              },
              {
                key: "unde",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 83.199997,
                range: {
                  end: 71.099998,
                  start: 90.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "natus": "aut",
                "qui": "facilis",
              },
              presentMatch: false,
              stringMatch: {
                exact: "excepturi",
                ignoreCase: true,
                prefix: "eligendi",
                regex: "praesentium",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 5827889564704785700,
                  },
                  regex: "tenetur",
                },
                suffix: "est",
              },
            },
          },
          {
            path: [
              {
                key: "et",
              },
              {
                key: "magni",
              },
            ],
            value: {
              boolMatch: true,
              doubleMatch: {
                exact: 22.200001,
                range: {
                  end: 19.200001,
                  start: 54.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "qui": "quas",
              },
              presentMatch: true,
              stringMatch: {
                exact: "sunt",
                ignoreCase: true,
                prefix: "cupiditate",
                regex: "cumque",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 4086921742091866397,
                  },
                  regex: "voluptatem",
                },
                suffix: "in",
              },
            },
          },
        ],
      },
      {
        nodeId: {
          exact: "et",
          ignoreCase: false,
          prefix: "laborum",
          regex: "adipisci",
          safeRegex: {
            googleRe2: {
              maxProgramSize: 550283095766738378,
            },
            regex: "autem",
          },
          suffix: "ut",
        },
        nodeMetadatas: [
          {
            path: [
              {
                key: "voluptas",
              },
              {
                key: "dolore",
              },
            ],
            value: {
              boolMatch: false,
              doubleMatch: {
                exact: 56.200001,
                range: {
                  end: 10.100000,
                  start: 59.099998,
                },
              },
              listMatch: {
                oneOf: {
                
                },
              },
              nullMatch: {
                "corrupti": "et",
              },
              presentMatch: false,
              stringMatch: {
                exact: "deserunt",
                ignoreCase: true,
                prefix: "at",
                regex: "tempora",
                safeRegex: {
                  googleRe2: {
                    maxProgramSize: 4032087116125045137,
                  },
                  regex: "debitis",
                },
                suffix: "culpa",
              },
            },
          },
        ],
      },
    ],
  },
};

sdk.discovery.trafficdirectorDiscoveryClientStatus(req).then((res: TrafficdirectorDiscoveryClientStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `trafficdirectorDiscoveryClientStatus`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
