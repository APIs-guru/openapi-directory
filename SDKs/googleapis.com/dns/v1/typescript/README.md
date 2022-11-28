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
import { DnsChangesCreateRequest, DnsChangesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DnsChangesCreateRequest = {
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
    managedZone: "recusandae",
    project: "aut",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "reiciendis",
    alt: "json",
    callback: "aut",
    clientOperationId: "commodi",
    fields: "vel",
    key: "blanditiis",
    oauthToken: "aut",
    prettyPrint: false,
    quotaUser: "similique",
    uploadType: "ab",
    uploadProtocol: "soluta",
  },
  request: {
    additions: [
      {
        kind: "et",
        name: "omnis",
        routingPolicy: {
          geo: {
            enableFencing: true,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "est",
                      ipProtocol: "tcp",
                      kind: "qui",
                      loadBalancerType: "none",
                      networkUrl: "explicabo",
                      port: "autem",
                      project: "labore",
                      region: "iste",
                    },
                    {
                      ipAddress: "accusantium",
                      ipProtocol: "undefined",
                      kind: "corrupti",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "enim",
                      port: "numquam",
                      project: "omnis",
                      region: "ipsam",
                    },
                  ],
                },
                kind: "quis",
                location: "maiores",
                rrdatas: [
                  "ut",
                  "tenetur",
                ],
                signatureRrdatas: [
                  "sit",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quaerat",
                      ipProtocol: "udp",
                      kind: "non",
                      loadBalancerType: "none",
                      networkUrl: "ducimus",
                      port: "sed",
                      project: "ipsum",
                      region: "nobis",
                    },
                  ],
                },
                kind: "quibusdam",
                location: "quam",
                rrdatas: [
                  "ut",
                  "qui",
                ],
                signatureRrdatas: [
                  "dolores",
                  "nostrum",
                ],
              },
            ],
            kind: "est",
          },
          kind: "vitae",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: true,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "nulla",
                        ipProtocol: "udp",
                        kind: "quasi",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "expedita",
                        port: "enim",
                        project: "iure",
                        region: "a",
                      },
                      {
                        ipAddress: "enim",
                        ipProtocol: "undefined",
                        kind: "consequatur",
                        loadBalancerType: "none",
                        networkUrl: "ad",
                        port: "modi",
                        project: "temporibus",
                        region: "accusamus",
                      },
                      {
                        ipAddress: "in",
                        ipProtocol: "udp",
                        kind: "et",
                        loadBalancerType: "none",
                        networkUrl: "et",
                        port: "non",
                        project: "fugiat",
                        region: "ea",
                      },
                    ],
                  },
                  kind: "similique",
                  location: "optio",
                  rrdatas: [
                    "molestias",
                    "dolorem",
                  ],
                  signatureRrdatas: [
                    "neque",
                    "ea",
                    "at",
                  ],
                },
              ],
              kind: "aut",
            },
            kind: "dolores",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "minima",
                  ipProtocol: "tcp",
                  kind: "expedita",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "ex",
                  port: "dicta",
                  project: "minus",
                  region: "voluptas",
                },
                {
                  ipAddress: "ut",
                  ipProtocol: "tcp",
                  kind: "unde",
                  loadBalancerType: "none",
                  networkUrl: "vitae",
                  port: "sapiente",
                  project: "eos",
                  region: "omnis",
                },
                {
                  ipAddress: "sit",
                  ipProtocol: "undefined",
                  kind: "sequi",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "aut",
                  port: "voluptates",
                  project: "id",
                  region: "atque",
                },
              ],
            },
            trickleTraffic: 27.200001,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quis",
                      ipProtocol: "undefined",
                      kind: "fugit",
                      loadBalancerType: "none",
                      networkUrl: "alias",
                      port: "odio",
                      project: "delectus",
                      region: "fuga",
                    },
                  ],
                },
                kind: "est",
                rrdatas: [
                  "nostrum",
                ],
                signatureRrdatas: [
                  "itaque",
                ],
                weight: 60.099998,
              },
            ],
            kind: "beatae",
          },
        },
        rrdatas: [
          "et",
          "consequatur",
          "odit",
        ],
        signatureRrdatas: [
          "nam",
          "eligendi",
          "temporibus",
        ],
        ttl: 7428740828765031150,
        type: "laudantium",
      },
      {
        kind: "sunt",
        name: "nostrum",
        routingPolicy: {
          geo: {
            enableFencing: true,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "omnis",
                      ipProtocol: "undefined",
                      kind: "aperiam",
                      loadBalancerType: "none",
                      networkUrl: "alias",
                      port: "voluptas",
                      project: "earum",
                      region: "adipisci",
                    },
                  ],
                },
                kind: "cum",
                location: "qui",
                rrdatas: [
                  "consequatur",
                  "et",
                  "tempora",
                ],
                signatureRrdatas: [
                  "aliquam",
                  "quaerat",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ullam",
                      ipProtocol: "udp",
                      kind: "perferendis",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "et",
                      port: "ea",
                      project: "rerum",
                      region: "et",
                    },
                    {
                      ipAddress: "ut",
                      ipProtocol: "undefined",
                      kind: "non",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "et",
                      port: "deleniti",
                      project: "tenetur",
                      region: "sunt",
                    },
                    {
                      ipAddress: "aperiam",
                      ipProtocol: "udp",
                      kind: "consequatur",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "veniam",
                      port: "aliquid",
                      project: "amet",
                      region: "quaerat",
                    },
                  ],
                },
                kind: "sed",
                location: "sint",
                rrdatas: [
                  "aut",
                  "vel",
                  "debitis",
                ],
                signatureRrdatas: [
                  "inventore",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "labore",
                      ipProtocol: "undefined",
                      kind: "nobis",
                      loadBalancerType: "none",
                      networkUrl: "eaque",
                      port: "quia",
                      project: "id",
                      region: "cupiditate",
                    },
                    {
                      ipAddress: "iste",
                      ipProtocol: "udp",
                      kind: "eos",
                      loadBalancerType: "none",
                      networkUrl: "ipsam",
                      port: "atque",
                      project: "dolorem",
                      region: "dolorem",
                    },
                  ],
                },
                kind: "recusandae",
                location: "sit",
                rrdatas: [
                  "alias",
                ],
                signatureRrdatas: [
                  "quidem",
                  "est",
                ],
              },
            ],
            kind: "et",
          },
          kind: "esse",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "id",
                        ipProtocol: "tcp",
                        kind: "laborum",
                        loadBalancerType: "none",
                        networkUrl: "pariatur",
                        port: "qui",
                        project: "impedit",
                        region: "consequatur",
                      },
                      {
                        ipAddress: "voluptatem",
                        ipProtocol: "udp",
                        kind: "molestias",
                        loadBalancerType: "none",
                        networkUrl: "et",
                        port: "laboriosam",
                        project: "neque",
                        region: "voluptatibus",
                      },
                    ],
                  },
                  kind: "velit",
                  location: "magnam",
                  rrdatas: [
                    "provident",
                    "ipsum",
                  ],
                  signatureRrdatas: [
                    "vel",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "delectus",
                        ipProtocol: "tcp",
                        kind: "aliquid",
                        loadBalancerType: "none",
                        networkUrl: "sapiente",
                        port: "in",
                        project: "et",
                        region: "dolore",
                      },
                      {
                        ipAddress: "quia",
                        ipProtocol: "udp",
                        kind: "aspernatur",
                        loadBalancerType: "none",
                        networkUrl: "error",
                        port: "quas",
                        project: "quidem",
                        region: "eum",
                      },
                    ],
                  },
                  kind: "unde",
                  location: "dicta",
                  rrdatas: [
                    "omnis",
                    "non",
                  ],
                  signatureRrdatas: [
                    "at",
                    "suscipit",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "corporis",
                        ipProtocol: "undefined",
                        kind: "eum",
                        loadBalancerType: "none",
                        networkUrl: "totam",
                        port: "omnis",
                        project: "aut",
                        region: "distinctio",
                      },
                      {
                        ipAddress: "rerum",
                        ipProtocol: "tcp",
                        kind: "aut",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "unde",
                        port: "eos",
                        project: "labore",
                        region: "rem",
                      },
                      {
                        ipAddress: "quod",
                        ipProtocol: "udp",
                        kind: "voluptatem",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "impedit",
                        port: "ea",
                        project: "qui",
                        region: "dicta",
                      },
                    ],
                  },
                  kind: "cumque",
                  location: "ut",
                  rrdatas: [
                    "nihil",
                  ],
                  signatureRrdatas: [
                    "earum",
                    "ipsum",
                  ],
                },
              ],
              kind: "id",
            },
            kind: "repudiandae",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "alias",
                  ipProtocol: "tcp",
                  kind: "voluptates",
                  loadBalancerType: "none",
                  networkUrl: "doloribus",
                  port: "hic",
                  project: "aliquam",
                  region: "inventore",
                },
                {
                  ipAddress: "est",
                  ipProtocol: "udp",
                  kind: "unde",
                  loadBalancerType: "none",
                  networkUrl: "eos",
                  port: "tempora",
                  project: "ipsa",
                  region: "tenetur",
                },
                {
                  ipAddress: "ducimus",
                  ipProtocol: "tcp",
                  kind: "natus",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "deserunt",
                  port: "recusandae",
                  project: "sit",
                  region: "fuga",
                },
              ],
            },
            trickleTraffic: 31.200001,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "nostrum",
                      ipProtocol: "udp",
                      kind: "nostrum",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "molestiae",
                      port: "et",
                      project: "dolorem",
                      region: "enim",
                    },
                    {
                      ipAddress: "earum",
                      ipProtocol: "tcp",
                      kind: "ex",
                      loadBalancerType: "none",
                      networkUrl: "et",
                      port: "nihil",
                      project: "magni",
                      region: "tempore",
                    },
                    {
                      ipAddress: "veniam",
                      ipProtocol: "undefined",
                      kind: "et",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "modi",
                      port: "at",
                      project: "corrupti",
                      region: "ipsam",
                    },
                  ],
                },
                kind: "velit",
                rrdatas: [
                  "ab",
                  "natus",
                ],
                signatureRrdatas: [
                  "explicabo",
                ],
                weight: 2.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quia",
                      ipProtocol: "undefined",
                      kind: "perferendis",
                      loadBalancerType: "none",
                      networkUrl: "earum",
                      port: "et",
                      project: "magni",
                      region: "voluptatem",
                    },
                  ],
                },
                kind: "eos",
                rrdatas: [
                  "nisi",
                  "placeat",
                ],
                signatureRrdatas: [
                  "error",
                  "et",
                ],
                weight: 75.099998,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "hic",
                      ipProtocol: "tcp",
                      kind: "aut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "cupiditate",
                      port: "ut",
                      project: "explicabo",
                      region: "pariatur",
                    },
                    {
                      ipAddress: "corporis",
                      ipProtocol: "tcp",
                      kind: "laboriosam",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "blanditiis",
                      port: "et",
                      project: "voluptatum",
                      region: "exercitationem",
                    },
                    {
                      ipAddress: "inventore",
                      ipProtocol: "udp",
                      kind: "ut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "et",
                      port: "ipsum",
                      project: "consequatur",
                      region: "ut",
                    },
                  ],
                },
                kind: "quibusdam",
                rrdatas: [
                  "odio",
                ],
                signatureRrdatas: [
                  "nobis",
                  "quia",
                  "nihil",
                ],
                weight: 38.200001,
              },
            ],
            kind: "consequuntur",
          },
        },
        rrdatas: [
          "qui",
          "omnis",
        ],
        signatureRrdatas: [
          "voluptatem",
        ],
        ttl: 5363860680367506524,
        type: "dolorem",
      },
    ],
    deletions: [
      {
        kind: "qui",
        name: "dolores",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "rerum",
                      ipProtocol: "udp",
                      kind: "ut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "distinctio",
                      port: "fugiat",
                      project: "aperiam",
                      region: "est",
                    },
                    {
                      ipAddress: "aut",
                      ipProtocol: "udp",
                      kind: "sit",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "placeat",
                      port: "et",
                      project: "reiciendis",
                      region: "et",
                    },
                    {
                      ipAddress: "est",
                      ipProtocol: "undefined",
                      kind: "similique",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "ea",
                      port: "voluptate",
                      project: "dolor",
                      region: "minima",
                    },
                  ],
                },
                kind: "non",
                location: "nostrum",
                rrdatas: [
                  "exercitationem",
                  "libero",
                  "laborum",
                ],
                signatureRrdatas: [
                  "nisi",
                  "sunt",
                  "et",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ut",
                      ipProtocol: "udp",
                      kind: "velit",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "qui",
                      port: "architecto",
                      project: "odit",
                      region: "non",
                    },
                    {
                      ipAddress: "voluptas",
                      ipProtocol: "tcp",
                      kind: "eligendi",
                      loadBalancerType: "none",
                      networkUrl: "pariatur",
                      port: "praesentium",
                      project: "eius",
                      region: "laborum",
                    },
                    {
                      ipAddress: "temporibus",
                      ipProtocol: "undefined",
                      kind: "laborum",
                      loadBalancerType: "none",
                      networkUrl: "fugit",
                      port: "nulla",
                      project: "commodi",
                      region: "impedit",
                    },
                  ],
                },
                kind: "officiis",
                location: "labore",
                rrdatas: [
                  "et",
                  "aspernatur",
                  "qui",
                ],
                signatureRrdatas: [
                  "voluptates",
                ],
              },
            ],
            kind: "esse",
          },
          kind: "accusantium",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "odit",
                        ipProtocol: "tcp",
                        kind: "cupiditate",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "est",
                        port: "explicabo",
                        project: "recusandae",
                        region: "eius",
                      },
                      {
                        ipAddress: "incidunt",
                        ipProtocol: "udp",
                        kind: "eum",
                        loadBalancerType: "none",
                        networkUrl: "iusto",
                        port: "repellendus",
                        project: "voluptatem",
                        region: "in",
                      },
                    ],
                  },
                  kind: "rem",
                  location: "adipisci",
                  rrdatas: [
                    "in",
                    "qui",
                  ],
                  signatureRrdatas: [
                    "placeat",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "aut",
                        ipProtocol: "undefined",
                        kind: "hic",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "est",
                        port: "quia",
                        project: "ut",
                        region: "omnis",
                      },
                      {
                        ipAddress: "dolores",
                        ipProtocol: "undefined",
                        kind: "ratione",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "libero",
                        port: "eius",
                        project: "illo",
                        region: "sapiente",
                      },
                      {
                        ipAddress: "et",
                        ipProtocol: "undefined",
                        kind: "dolore",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "similique",
                        port: "tempore",
                        project: "sit",
                        region: "dolore",
                      },
                    ],
                  },
                  kind: "libero",
                  location: "et",
                  rrdatas: [
                    "aut",
                  ],
                  signatureRrdatas: [
                    "quisquam",
                    "cum",
                    "corrupti",
                  ],
                },
              ],
              kind: "autem",
            },
            kind: "id",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "totam",
                  ipProtocol: "tcp",
                  kind: "quas",
                  loadBalancerType: "none",
                  networkUrl: "aut",
                  port: "hic",
                  project: "rerum",
                  region: "occaecati",
                },
                {
                  ipAddress: "iure",
                  ipProtocol: "tcp",
                  kind: "voluptas",
                  loadBalancerType: "none",
                  networkUrl: "qui",
                  port: "ab",
                  project: "maxime",
                  region: "molestias",
                },
                {
                  ipAddress: "quia",
                  ipProtocol: "udp",
                  kind: "non",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "quisquam",
                  port: "nihil",
                  project: "illo",
                  region: "tempore",
                },
              ],
            },
            trickleTraffic: 98.199997,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "pariatur",
                      ipProtocol: "undefined",
                      kind: "reiciendis",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "ut",
                      port: "eum",
                      project: "quo",
                      region: "assumenda",
                    },
                    {
                      ipAddress: "quisquam",
                      ipProtocol: "udp",
                      kind: "placeat",
                      loadBalancerType: "none",
                      networkUrl: "necessitatibus",
                      port: "nulla",
                      project: "necessitatibus",
                      region: "iure",
                    },
                  ],
                },
                kind: "corporis",
                rrdatas: [
                  "quibusdam",
                  "fugit",
                ],
                signatureRrdatas: [
                  "praesentium",
                ],
                weight: 65.199997,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "consectetur",
                      ipProtocol: "undefined",
                      kind: "rerum",
                      loadBalancerType: "none",
                      networkUrl: "enim",
                      port: "distinctio",
                      project: "voluptatem",
                      region: "omnis",
                    },
                    {
                      ipAddress: "quis",
                      ipProtocol: "tcp",
                      kind: "quae",
                      loadBalancerType: "none",
                      networkUrl: "aperiam",
                      port: "dolor",
                      project: "hic",
                      region: "sed",
                    },
                  ],
                },
                kind: "quisquam",
                rrdatas: [
                  "deleniti",
                ],
                signatureRrdatas: [
                  "quo",
                  "voluptatem",
                ],
                weight: 58.200001,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "fugiat",
                      ipProtocol: "tcp",
                      kind: "voluptatibus",
                      loadBalancerType: "none",
                      networkUrl: "nobis",
                      port: "sit",
                      project: "ut",
                      region: "iusto",
                    },
                    {
                      ipAddress: "officia",
                      ipProtocol: "undefined",
                      kind: "veniam",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "dignissimos",
                      port: "impedit",
                      project: "et",
                      region: "sed",
                    },
                  ],
                },
                kind: "facere",
                rrdatas: [
                  "sequi",
                ],
                signatureRrdatas: [
                  "nemo",
                  "quos",
                ],
                weight: 65.199997,
              },
            ],
            kind: "ipsam",
          },
        },
        rrdatas: [
          "rerum",
          "architecto",
        ],
        signatureRrdatas: [
          "nulla",
          "beatae",
        ],
        ttl: 7965196274479804567,
        type: "cupiditate",
      },
    ],
    id: "voluptates",
    isServing: true,
    kind: "mollitia",
    startTime: "reprehenderit",
    status: "pending",
  },
};

sdk.changes.dnsChangesCreate(req).then((res: DnsChangesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### changes

* `dnsChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `dnsChangesGet` - Fetches the representation of an existing Change.
* `dnsChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `dnsDnsKeysGet` - Fetches the representation of an existing DnsKey.
* `dnsDnsKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `dnsManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `dnsManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `dnsManagedZonesCreate` - Creates a new ManagedZone.
* `dnsManagedZonesDelete` - Deletes a previously created ManagedZone.
* `dnsManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `dnsManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dnsManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `dnsManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `dnsManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `dnsManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dnsManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `dnsPoliciesCreate` - Creates a new Policy.
* `dnsPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `dnsPoliciesGet` - Fetches the representation of an existing Policy.
* `dnsPoliciesList` - Enumerates all Policies associated with a project.
* `dnsPoliciesPatch` - Applies a partial update to an existing Policy.
* `dnsPoliciesUpdate` - Updates an existing Policy.

### projects

* `dnsProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `dnsResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `dnsResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `dnsResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `dnsResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `dnsResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `dnsResponsePoliciesCreate` - Creates a new Response Policy
* `dnsResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `dnsResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `dnsResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `dnsResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `dnsResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `dnsResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `dnsResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `dnsResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `dnsResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `dnsResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `dnsResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
