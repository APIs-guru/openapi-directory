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
    location: "non",
    managedZone: "corrupti",
    project: "rerum",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "veritatis",
    alt: "json",
    callback: "recusandae",
    clientOperationId: "modi",
    fields: "odit",
    key: "voluptatum",
    oauthToken: "neque",
    prettyPrint: false,
    quotaUser: "eos",
    uploadType: "harum",
    uploadProtocol: "molestiae",
  },
  request: {
    additions: [
      {
        kind: "a",
        name: "amet",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "omnis",
                      ipProtocol: "TCP",
                      kind: "id",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "illum",
                      port: "ut",
                      project: "optio",
                      region: "quisquam",
                    },
                  ],
                },
                kind: "mollitia",
                location: "et",
                rrdatas: [
                  "assumenda",
                  "quas",
                  "tenetur",
                ],
                signatureRrdatas: [
                  "repellat",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "recusandae",
                      ipProtocol: "UNDEFINED",
                      kind: "aut",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "et",
                      port: "ut",
                      project: "voluptatem",
                      region: "doloremque",
                    },
                    {
                      ipAddress: "voluptas",
                      ipProtocol: "UNDEFINED",
                      kind: "voluptatem",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "laborum",
                      port: "accusamus",
                      project: "quia",
                      region: "exercitationem",
                    },
                  ],
                },
                kind: "repellendus",
                location: "optio",
                rrdatas: [
                  "et",
                  "voluptatum",
                  "ducimus",
                ],
                signatureRrdatas: [
                  "aut",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quidem",
                      ipProtocol: "UDP",
                      kind: "impedit",
                      loadBalancerType: "NONE",
                      networkUrl: "pariatur",
                      port: "blanditiis",
                      project: "repudiandae",
                      region: "consequatur",
                    },
                  ],
                },
                kind: "incidunt",
                location: "autem",
                rrdatas: [
                  "qui",
                  "quia",
                ],
                signatureRrdatas: [
                  "molestiae",
                  "ipsum",
                ],
              },
            ],
            kind: "quos",
          },
          kind: "dignissimos",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: true,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "iste",
                        ipProtocol: "UNDEFINED",
                        kind: "sunt",
                        loadBalancerType: "NONE",
                        networkUrl: "nesciunt",
                        port: "libero",
                        project: "sint",
                        region: "architecto",
                      },
                      {
                        ipAddress: "facere",
                        ipProtocol: "UDP",
                        kind: "eaque",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "aut",
                        port: "tenetur",
                        project: "culpa",
                        region: "nobis",
                      },
                      {
                        ipAddress: "animi",
                        ipProtocol: "UDP",
                        kind: "minima",
                        loadBalancerType: "NONE",
                        networkUrl: "autem",
                        port: "ipsa",
                        project: "sit",
                        region: "voluptatibus",
                      },
                    ],
                  },
                  kind: "sit",
                  location: "aspernatur",
                  rrdatas: [
                    "vel",
                    "itaque",
                  ],
                  signatureRrdatas: [
                    "animi",
                    "praesentium",
                  ],
                },
              ],
              kind: "voluptatibus",
            },
            kind: "non",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "eius",
                  ipProtocol: "TCP",
                  kind: "perferendis",
                  loadBalancerType: "NONE",
                  networkUrl: "placeat",
                  port: "dolore",
                  project: "voluptatem",
                  region: "sunt",
                },
                {
                  ipAddress: "itaque",
                  ipProtocol: "UNDEFINED",
                  kind: "quo",
                  loadBalancerType: "NONE",
                  networkUrl: "porro",
                  port: "ea",
                  project: "porro",
                  region: "dolor",
                },
              ],
            },
            trickleTraffic: 35.200001,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "harum",
                      ipProtocol: "TCP",
                      kind: "laudantium",
                      loadBalancerType: "NONE",
                      networkUrl: "repellendus",
                      port: "voluptatem",
                      project: "reiciendis",
                      region: "maxime",
                    },
                  ],
                },
                kind: "vel",
                rrdatas: [
                  "numquam",
                ],
                signatureRrdatas: [
                  "a",
                  "est",
                  "cum",
                ],
                weight: 21.200001,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "sed",
                      ipProtocol: "UDP",
                      kind: "maiores",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "aliquam",
                      port: "qui",
                      project: "quis",
                      region: "aut",
                    },
                    {
                      ipAddress: "atque",
                      ipProtocol: "TCP",
                      kind: "vel",
                      loadBalancerType: "NONE",
                      networkUrl: "molestiae",
                      port: "est",
                      project: "non",
                      region: "deleniti",
                    },
                  ],
                },
                kind: "expedita",
                rrdatas: [
                  "dolor",
                ],
                signatureRrdatas: [
                  "nulla",
                  "corrupti",
                  "ut",
                ],
                weight: 32.099998,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "minima",
                      ipProtocol: "UNDEFINED",
                      kind: "praesentium",
                      loadBalancerType: "NONE",
                      networkUrl: "non",
                      port: "corrupti",
                      project: "voluptas",
                      region: "et",
                    },
                  ],
                },
                kind: "atque",
                rrdatas: [
                  "maiores",
                  "eum",
                  "eos",
                ],
                signatureRrdatas: [
                  "iste",
                  "reprehenderit",
                ],
                weight: 77.199997,
              },
            ],
            kind: "ut",
          },
        },
        rrdatas: [
          "eum",
        ],
        signatureRrdatas: [
          "totam",
        ],
        ttl: 6275568315369541702,
        type: "quae",
      },
    ],
    deletions: [
      {
        kind: "dicta",
        name: "enim",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quo",
                      ipProtocol: "TCP",
                      kind: "rerum",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "quasi",
                      port: "quia",
                      project: "vel",
                      region: "sed",
                    },
                    {
                      ipAddress: "et",
                      ipProtocol: "UDP",
                      kind: "aut",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "modi",
                      port: "ex",
                      project: "cum",
                      region: "quis",
                    },
                    {
                      ipAddress: "aut",
                      ipProtocol: "TCP",
                      kind: "voluptates",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "pariatur",
                      port: "omnis",
                      project: "rerum",
                      region: "omnis",
                    },
                  ],
                },
                kind: "veritatis",
                location: "voluptate",
                rrdatas: [
                  "autem",
                  "vel",
                ],
                signatureRrdatas: [
                  "dolore",
                ],
              },
            ],
            kind: "sequi",
          },
          kind: "esse",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: true,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "perspiciatis",
                        ipProtocol: "UNDEFINED",
                        kind: "beatae",
                        loadBalancerType: "NONE",
                        networkUrl: "non",
                        port: "vel",
                        project: "in",
                        region: "facilis",
                      },
                    ],
                  },
                  kind: "magni",
                  location: "est",
                  rrdatas: [
                    "libero",
                  ],
                  signatureRrdatas: [
                    "nulla",
                    "minus",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "neque",
                        ipProtocol: "UNDEFINED",
                        kind: "et",
                        loadBalancerType: "NONE",
                        networkUrl: "pariatur",
                        port: "perspiciatis",
                        project: "laboriosam",
                        region: "fuga",
                      },
                      {
                        ipAddress: "est",
                        ipProtocol: "TCP",
                        kind: "dignissimos",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "quia",
                        port: "omnis",
                        project: "sint",
                        region: "molestias",
                      },
                    ],
                  },
                  kind: "nemo",
                  location: "provident",
                  rrdatas: [
                    "vel",
                  ],
                  signatureRrdatas: [
                    "voluptatem",
                    "inventore",
                    "at",
                  ],
                },
              ],
              kind: "et",
            },
            kind: "quos",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "corrupti",
                  ipProtocol: "TCP",
                  kind: "magni",
                  loadBalancerType: "REGIONAL_L4ILB",
                  networkUrl: "repellat",
                  port: "reprehenderit",
                  project: "laboriosam",
                  region: "soluta",
                },
              ],
            },
            trickleTraffic: 43.099998,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "velit",
                      ipProtocol: "UNDEFINED",
                      kind: "ut",
                      loadBalancerType: "NONE",
                      networkUrl: "dolorem",
                      port: "quaerat",
                      project: "consequatur",
                      region: "nihil",
                    },
                    {
                      ipAddress: "voluptatum",
                      ipProtocol: "UDP",
                      kind: "earum",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "cumque",
                      port: "eos",
                      project: "minus",
                      region: "sint",
                    },
                  ],
                },
                kind: "nobis",
                rrdatas: [
                  "excepturi",
                  "maiores",
                ],
                signatureRrdatas: [
                  "earum",
                  "omnis",
                  "libero",
                ],
                weight: 25.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "praesentium",
                      ipProtocol: "UNDEFINED",
                      kind: "est",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "dolore",
                      port: "quis",
                      project: "id",
                      region: "tempore",
                    },
                  ],
                },
                kind: "veniam",
                rrdatas: [
                  "et",
                  "ipsa",
                ],
                signatureRrdatas: [
                  "natus",
                  "quas",
                  "dolor",
                ],
                weight: 12.200000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "qui",
                      ipProtocol: "UDP",
                      kind: "dicta",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "quibusdam",
                      port: "inventore",
                      project: "laborum",
                      region: "modi",
                    },
                  ],
                },
                kind: "facilis",
                rrdatas: [
                  "rem",
                  "delectus",
                  "cupiditate",
                ],
                signatureRrdatas: [
                  "ad",
                ],
                weight: 9.200000,
              },
            ],
            kind: "sit",
          },
        },
        rrdatas: [
          "quos",
          "est",
        ],
        signatureRrdatas: [
          "reiciendis",
          "ad",
        ],
        ttl: 7871550843386053795,
        type: "dicta",
      },
      {
        kind: "dolores",
        name: "ut",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "explicabo",
                      ipProtocol: "UDP",
                      kind: "temporibus",
                      loadBalancerType: "NONE",
                      networkUrl: "eveniet",
                      port: "perferendis",
                      project: "mollitia",
                      region: "accusamus",
                    },
                    {
                      ipAddress: "at",
                      ipProtocol: "UNDEFINED",
                      kind: "quo",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "adipisci",
                      port: "hic",
                      project: "veniam",
                      region: "expedita",
                    },
                  ],
                },
                kind: "praesentium",
                location: "odio",
                rrdatas: [
                  "exercitationem",
                  "non",
                ],
                signatureRrdatas: [
                  "nam",
                  "nobis",
                ],
              },
            ],
            kind: "debitis",
          },
          kind: "adipisci",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "ex",
                        ipProtocol: "UNDEFINED",
                        kind: "eaque",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "ipsam",
                        port: "consequuntur",
                        project: "quod",
                        region: "sed",
                      },
                    ],
                  },
                  kind: "eos",
                  location: "et",
                  rrdatas: [
                    "voluptatem",
                    "enim",
                    "voluptatem",
                  ],
                  signatureRrdatas: [
                    "aliquam",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "cupiditate",
                        ipProtocol: "UNDEFINED",
                        kind: "eius",
                        loadBalancerType: "NONE",
                        networkUrl: "tempore",
                        port: "nulla",
                        project: "qui",
                        region: "nam",
                      },
                      {
                        ipAddress: "assumenda",
                        ipProtocol: "UDP",
                        kind: "aut",
                        loadBalancerType: "NONE",
                        networkUrl: "facere",
                        port: "quam",
                        project: "rerum",
                        region: "quo",
                      },
                    ],
                  },
                  kind: "iure",
                  location: "aut",
                  rrdatas: [
                    "qui",
                  ],
                  signatureRrdatas: [
                    "ullam",
                    "quod",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "velit",
                        ipProtocol: "UNDEFINED",
                        kind: "cum",
                        loadBalancerType: "NONE",
                        networkUrl: "et",
                        port: "quia",
                        project: "rerum",
                        region: "fuga",
                      },
                      {
                        ipAddress: "cum",
                        ipProtocol: "UNDEFINED",
                        kind: "voluptatem",
                        loadBalancerType: "NONE",
                        networkUrl: "distinctio",
                        port: "voluptatem",
                        project: "quisquam",
                        region: "qui",
                      },
                    ],
                  },
                  kind: "at",
                  location: "expedita",
                  rrdatas: [
                    "illo",
                    "qui",
                  ],
                  signatureRrdatas: [
                    "non",
                    "at",
                    "non",
                  ],
                },
              ],
              kind: "id",
            },
            kind: "inventore",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "eum",
                  ipProtocol: "TCP",
                  kind: "dolorem",
                  loadBalancerType: "NONE",
                  networkUrl: "magnam",
                  port: "voluptates",
                  project: "eum",
                  region: "ut",
                },
                {
                  ipAddress: "magni",
                  ipProtocol: "UDP",
                  kind: "ducimus",
                  loadBalancerType: "NONE",
                  networkUrl: "rerum",
                  port: "est",
                  project: "blanditiis",
                  region: "voluptatem",
                },
              ],
            },
            trickleTraffic: 45.200001,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "a",
                      ipProtocol: "TCP",
                      kind: "iure",
                      loadBalancerType: "NONE",
                      networkUrl: "corrupti",
                      port: "dolores",
                      project: "voluptas",
                      region: "nam",
                    },
                    {
                      ipAddress: "iusto",
                      ipProtocol: "UNDEFINED",
                      kind: "consequuntur",
                      loadBalancerType: "NONE",
                      networkUrl: "voluptas",
                      port: "dignissimos",
                      project: "facere",
                      region: "hic",
                    },
                    {
                      ipAddress: "quos",
                      ipProtocol: "TCP",
                      kind: "odio",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "quia",
                      port: "quaerat",
                      project: "fugit",
                      region: "est",
                    },
                  ],
                },
                kind: "nisi",
                rrdatas: [
                  "aut",
                  "sed",
                  "qui",
                ],
                signatureRrdatas: [
                  "aspernatur",
                  "ipsa",
                  "voluptatibus",
                ],
                weight: 20.100000,
              },
            ],
            kind: "eveniet",
          },
        },
        rrdatas: [
          "eaque",
          "repudiandae",
        ],
        signatureRrdatas: [
          "rerum",
        ],
        ttl: 1275075907353863185,
        type: "unde",
      },
      {
        kind: "officia",
        name: "sed",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "doloremque",
                      ipProtocol: "TCP",
                      kind: "fuga",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "sequi",
                      port: "magnam",
                      project: "fugit",
                      region: "commodi",
                    },
                    {
                      ipAddress: "numquam",
                      ipProtocol: "TCP",
                      kind: "odio",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "nihil",
                      port: "repellendus",
                      project: "non",
                      region: "minus",
                    },
                  ],
                },
                kind: "provident",
                location: "temporibus",
                rrdatas: [
                  "magni",
                  "accusantium",
                  "libero",
                ],
                signatureRrdatas: [
                  "rerum",
                  "nesciunt",
                  "ut",
                ],
              },
            ],
            kind: "voluptas",
          },
          kind: "quia",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "deserunt",
                        ipProtocol: "UNDEFINED",
                        kind: "nesciunt",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "sint",
                        port: "possimus",
                        project: "voluptates",
                        region: "cum",
                      },
                    ],
                  },
                  kind: "saepe",
                  location: "assumenda",
                  rrdatas: [
                    "rerum",
                    "vero",
                    "debitis",
                  ],
                  signatureRrdatas: [
                    "dolor",
                    "iusto",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "quasi",
                        ipProtocol: "TCP",
                        kind: "et",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "perspiciatis",
                        port: "aliquam",
                        project: "pariatur",
                        region: "inventore",
                      },
                      {
                        ipAddress: "nisi",
                        ipProtocol: "UDP",
                        kind: "amet",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "deserunt",
                        port: "qui",
                        project: "voluptatem",
                        region: "illum",
                      },
                      {
                        ipAddress: "cum",
                        ipProtocol: "TCP",
                        kind: "sunt",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "sapiente",
                        port: "minus",
                        project: "ipsam",
                        region: "reprehenderit",
                      },
                    ],
                  },
                  kind: "a",
                  location: "aut",
                  rrdatas: [
                    "nulla",
                    "culpa",
                  ],
                  signatureRrdatas: [
                    "aut",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "officia",
                        ipProtocol: "UNDEFINED",
                        kind: "quas",
                        loadBalancerType: "REGIONAL_L4ILB",
                        networkUrl: "aperiam",
                        port: "dolorum",
                        project: "nobis",
                        region: "impedit",
                      },
                      {
                        ipAddress: "rem",
                        ipProtocol: "TCP",
                        kind: "in",
                        loadBalancerType: "NONE",
                        networkUrl: "cumque",
                        port: "cupiditate",
                        project: "et",
                        region: "officiis",
                      },
                    ],
                  },
                  kind: "officiis",
                  location: "nesciunt",
                  rrdatas: [
                    "eligendi",
                    "quasi",
                    "autem",
                  ],
                  signatureRrdatas: [
                    "veritatis",
                  ],
                },
              ],
              kind: "reprehenderit",
            },
            kind: "non",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "enim",
                  ipProtocol: "UDP",
                  kind: "autem",
                  loadBalancerType: "REGIONAL_L4ILB",
                  networkUrl: "praesentium",
                  port: "velit",
                  project: "praesentium",
                  region: "possimus",
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
                      ipAddress: "et",
                      ipProtocol: "UDP",
                      kind: "at",
                      loadBalancerType: "NONE",
                      networkUrl: "consequuntur",
                      port: "ducimus",
                      project: "pariatur",
                      region: "est",
                    },
                  ],
                },
                kind: "sit",
                rrdatas: [
                  "aut",
                  "cum",
                ],
                signatureRrdatas: [
                  "sint",
                ],
                weight: 0.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "est",
                      ipProtocol: "TCP",
                      kind: "quia",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "modi",
                      port: "eius",
                      project: "eos",
                      region: "accusamus",
                    },
                    {
                      ipAddress: "nisi",
                      ipProtocol: "TCP",
                      kind: "quas",
                      loadBalancerType: "REGIONAL_L4ILB",
                      networkUrl: "voluptatem",
                      port: "in",
                      project: "distinctio",
                      region: "sit",
                    },
                  ],
                },
                kind: "velit",
                rrdatas: [
                  "aut",
                ],
                signatureRrdatas: [
                  "ea",
                ],
                weight: 61.200001,
              },
            ],
            kind: "ea",
          },
        },
        rrdatas: [
          "illo",
          "nihil",
        ],
        signatureRrdatas: [
          "magni",
        ],
        ttl: 1258140067766798810,
        type: "commodi",
      },
    ],
    id: "provident",
    isServing: false,
    kind: "sed",
    startTime: "illo",
    status: "DONE",
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
