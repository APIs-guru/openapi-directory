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
    managedZone: "autem",
    project: "sapiente",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "tempora",
    alt: "media",
    callback: "temporibus",
    clientOperationId: "delectus",
    fields: "adipisci",
    key: "cum",
    oauthToken: "ipsam",
    prettyPrint: false,
    quotaUser: "quaerat",
    uploadType: "et",
    uploadProtocol: "ex",
  },
  request: {
    additions: [
      {
        kind: "exercitationem",
        name: "debitis",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "enim",
                      ipProtocol: "udp",
                      kind: "eligendi",
                      loadBalancerType: "none",
                      networkUrl: "sit",
                      port: "vitae",
                      project: "unde",
                      region: "facilis",
                    },
                    {
                      ipAddress: "labore",
                      ipProtocol: "udp",
                      kind: "aut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "harum",
                      port: "quo",
                      project: "aut",
                      region: "consequatur",
                    },
                    {
                      ipAddress: "iste",
                      ipProtocol: "undefined",
                      kind: "consequatur",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "a",
                      port: "ut",
                      project: "doloremque",
                      region: "maxime",
                    },
                  ],
                },
                kind: "odio",
                location: "temporibus",
                rrdatas: [
                  "dolorem",
                  "autem",
                  "occaecati",
                ],
                signatureRrdatas: [
                  "aut",
                ],
              },
            ],
            kind: "nisi",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "esse",
                      ipProtocol: "tcp",
                      kind: "et",
                      loadBalancerType: "none",
                      networkUrl: "atque",
                      port: "et",
                      project: "minus",
                      region: "qui",
                    },
                  ],
                },
                kind: "neque",
                location: "sit",
                rrdatas: [
                  "sunt",
                  "similique",
                  "quibusdam",
                ],
                signatureRrdatas: [
                  "assumenda",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "earum",
                      ipProtocol: "undefined",
                      kind: "illo",
                      loadBalancerType: "none",
                      networkUrl: "quam",
                      port: "modi",
                      project: "at",
                      region: "illum",
                    },
                  ],
                },
                kind: "unde",
                location: "et",
                rrdatas: [
                  "ipsam",
                  "vel",
                ],
                signatureRrdatas: [
                  "eum",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "provident",
                      ipProtocol: "tcp",
                      kind: "fuga",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "aut",
                      port: "at",
                      project: "eum",
                      region: "et",
                    },
                    {
                      ipAddress: "assumenda",
                      ipProtocol: "tcp",
                      kind: "est",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "eos",
                      port: "quas",
                      project: "beatae",
                      region: "cumque",
                    },
                  ],
                },
                kind: "aliquid",
                location: "culpa",
                rrdatas: [
                  "qui",
                  "est",
                  "et",
                ],
                signatureRrdatas: [
                  "consectetur",
                  "amet",
                  "consequuntur",
                ],
              },
            ],
            kind: "ad",
          },
          kind: "qui",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "accusantium",
                        ipProtocol: "udp",
                        kind: "voluptas",
                        loadBalancerType: "none",
                        networkUrl: "facere",
                        port: "ut",
                        project: "quod",
                        region: "molestias",
                      },
                      {
                        ipAddress: "illum",
                        ipProtocol: "tcp",
                        kind: "quis",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "est",
                        port: "et",
                        project: "temporibus",
                        region: "occaecati",
                      },
                    ],
                  },
                  kind: "expedita",
                  location: "et",
                  rrdatas: [
                    "soluta",
                    "nobis",
                  ],
                  signatureRrdatas: [
                    "blanditiis",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "accusamus",
                        ipProtocol: "tcp",
                        kind: "beatae",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "corporis",
                        port: "sit",
                        project: "animi",
                        region: "possimus",
                      },
                      {
                        ipAddress: "ut",
                        ipProtocol: "udp",
                        kind: "nostrum",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "aspernatur",
                        port: "recusandae",
                        project: "fugiat",
                        region: "non",
                      },
                    ],
                  },
                  kind: "odit",
                  location: "et",
                  rrdatas: [
                    "qui",
                  ],
                  signatureRrdatas: [
                    "laborum",
                  ],
                },
              ],
              kind: "molestiae",
            },
            kind: "eum",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "alias",
                  ipProtocol: "udp",
                  kind: "aliquid",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "maxime",
                  port: "at",
                  project: "accusantium",
                  region: "voluptatibus",
                },
                {
                  ipAddress: "ut",
                  ipProtocol: "udp",
                  kind: "nesciunt",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "et",
                  port: "tempore",
                  project: "dolorum",
                  region: "quasi",
                },
              ],
            },
            trickleTraffic: 50.099998,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "veniam",
                      ipProtocol: "tcp",
                      kind: "rerum",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "sint",
                      port: "non",
                      project: "rerum",
                      region: "eius",
                    },
                  ],
                },
                kind: "ducimus",
                rrdatas: [
                  "nisi",
                ],
                signatureRrdatas: [
                  "ipsa",
                ],
                weight: 61.099998,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptatum",
                      ipProtocol: "udp",
                      kind: "iure",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "porro",
                      port: "est",
                      project: "nobis",
                      region: "quibusdam",
                    },
                    {
                      ipAddress: "assumenda",
                      ipProtocol: "udp",
                      kind: "voluptas",
                      loadBalancerType: "none",
                      networkUrl: "in",
                      port: "explicabo",
                      project: "aliquid",
                      region: "delectus",
                    },
                    {
                      ipAddress: "sunt",
                      ipProtocol: "undefined",
                      kind: "fugiat",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "veritatis",
                      port: "natus",
                      project: "quae",
                      region: "perferendis",
                    },
                  ],
                },
                kind: "sequi",
                rrdatas: [
                  "accusantium",
                ],
                signatureRrdatas: [
                  "maxime",
                  "quaerat",
                  "maxime",
                ],
                weight: 41.200001,
              },
            ],
            kind: "quod",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "neque",
                      ipProtocol: "undefined",
                      kind: "culpa",
                      loadBalancerType: "none",
                      networkUrl: "blanditiis",
                      port: "sunt",
                      project: "officia",
                      region: "corporis",
                    },
                  ],
                },
                kind: "autem",
                rrdatas: [
                  "rerum",
                ],
                signatureRrdatas: [
                  "quibusdam",
                  "tenetur",
                ],
                weight: 77.099998,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "pariatur",
                      ipProtocol: "udp",
                      kind: "debitis",
                      loadBalancerType: "none",
                      networkUrl: "quo",
                      port: "dolorem",
                      project: "est",
                      region: "cum",
                    },
                  ],
                },
                kind: "dolor",
                rrdatas: [
                  "sit",
                  "omnis",
                ],
                signatureRrdatas: [
                  "porro",
                  "corrupti",
                  "debitis",
                ],
                weight: 36.200001,
              },
            ],
            kind: "occaecati",
          },
        },
        rrdatas: [
          "qui",
          "dolor",
        ],
        signatureRrdatas: [
          "quam",
        ],
        ttl: 2847369613302132848,
        type: "quo",
      },
      {
        kind: "minus",
        name: "eum",
        routingPolicy: {
          geo: {
            enableFencing: true,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "aspernatur",
                      ipProtocol: "tcp",
                      kind: "delectus",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "odit",
                      port: "dignissimos",
                      project: "sapiente",
                      region: "sapiente",
                    },
                  ],
                },
                kind: "non",
                location: "in",
                rrdatas: [
                  "quam",
                  "impedit",
                ],
                signatureRrdatas: [
                  "quod",
                  "accusamus",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "numquam",
                      ipProtocol: "udp",
                      kind: "atque",
                      loadBalancerType: "none",
                      networkUrl: "in",
                      port: "maiores",
                      project: "quae",
                      region: "aspernatur",
                    },
                  ],
                },
                kind: "inventore",
                location: "ea",
                rrdatas: [
                  "qui",
                  "aperiam",
                ],
                signatureRrdatas: [
                  "quam",
                  "laboriosam",
                  "et",
                ],
              },
            ],
            kind: "consequuntur",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "sit",
                      ipProtocol: "udp",
                      kind: "laudantium",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "et",
                      port: "similique",
                      project: "sit",
                      region: "velit",
                    },
                  ],
                },
                kind: "quod",
                location: "repellendus",
                rrdatas: [
                  "dolorum",
                  "eligendi",
                ],
                signatureRrdatas: [
                  "fuga",
                  "voluptatem",
                ],
              },
            ],
            kind: "animi",
          },
          kind: "voluptatem",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: true,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "dolor",
                        ipProtocol: "tcp",
                        kind: "rerum",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "possimus",
                        port: "nesciunt",
                        project: "incidunt",
                        region: "molestiae",
                      },
                      {
                        ipAddress: "at",
                        ipProtocol: "tcp",
                        kind: "soluta",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "corporis",
                        port: "voluptatem",
                        project: "natus",
                        region: "quae",
                      },
                    ],
                  },
                  kind: "laboriosam",
                  location: "qui",
                  rrdatas: [
                    "non",
                  ],
                  signatureRrdatas: [
                    "quo",
                    "commodi",
                    "voluptas",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "mollitia",
                        ipProtocol: "udp",
                        kind: "enim",
                        loadBalancerType: "none",
                        networkUrl: "dolores",
                        port: "cum",
                        project: "excepturi",
                        region: "in",
                      },
                    ],
                  },
                  kind: "in",
                  location: "odio",
                  rrdatas: [
                    "ipsam",
                    "facere",
                  ],
                  signatureRrdatas: [
                    "aliquid",
                  ],
                },
              ],
              kind: "quo",
            },
            kind: "nihil",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "velit",
                  ipProtocol: "tcp",
                  kind: "numquam",
                  loadBalancerType: "none",
                  networkUrl: "dolor",
                  port: "et",
                  project: "necessitatibus",
                  region: "sapiente",
                },
              ],
            },
            trickleTraffic: 67.099998,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "at",
                      ipProtocol: "udp",
                      kind: "asperiores",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "dolorem",
                      port: "totam",
                      project: "suscipit",
                      region: "ipsum",
                    },
                    {
                      ipAddress: "facere",
                      ipProtocol: "udp",
                      kind: "voluptas",
                      loadBalancerType: "none",
                      networkUrl: "et",
                      port: "quis",
                      project: "nulla",
                      region: "qui",
                    },
                    {
                      ipAddress: "ea",
                      ipProtocol: "udp",
                      kind: "ipsa",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "saepe",
                      port: "beatae",
                      project: "ipsum",
                      region: "eveniet",
                    },
                  ],
                },
                kind: "necessitatibus",
                rrdatas: [
                  "et",
                  "iure",
                  "quia",
                ],
                signatureRrdatas: [
                  "nostrum",
                  "itaque",
                ],
                weight: 6.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ipsam",
                      ipProtocol: "tcp",
                      kind: "dolorem",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "quia",
                      port: "non",
                      project: "suscipit",
                      region: "similique",
                    },
                  ],
                },
                kind: "vel",
                rrdatas: [
                  "provident",
                  "ducimus",
                ],
                signatureRrdatas: [
                  "quaerat",
                  "rerum",
                ],
                weight: 10.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptates",
                      ipProtocol: "undefined",
                      kind: "earum",
                      loadBalancerType: "none",
                      networkUrl: "praesentium",
                      port: "maxime",
                      project: "dolorem",
                      region: "fugiat",
                    },
                    {
                      ipAddress: "voluptatem",
                      ipProtocol: "undefined",
                      kind: "dolores",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "ex",
                      port: "aliquid",
                      project: "aliquid",
                      region: "nesciunt",
                    },
                    {
                      ipAddress: "culpa",
                      ipProtocol: "udp",
                      kind: "maiores",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "voluptatem",
                      port: "itaque",
                      project: "est",
                      region: "optio",
                    },
                  ],
                },
                kind: "consectetur",
                rrdatas: [
                  "ab",
                  "ab",
                ],
                signatureRrdatas: [
                  "eum",
                ],
                weight: 35.200001,
              },
            ],
            kind: "aut",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "modi",
                      ipProtocol: "tcp",
                      kind: "et",
                      loadBalancerType: "none",
                      networkUrl: "aperiam",
                      port: "inventore",
                      project: "soluta",
                      region: "quia",
                    },
                    {
                      ipAddress: "fugiat",
                      ipProtocol: "tcp",
                      kind: "repellat",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "quasi",
                      port: "dolores",
                      project: "minima",
                      region: "saepe",
                    },
                    {
                      ipAddress: "praesentium",
                      ipProtocol: "udp",
                      kind: "quo",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "ex",
                      port: "quibusdam",
                      project: "corrupti",
                      region: "voluptates",
                    },
                  ],
                },
                kind: "sunt",
                rrdatas: [
                  "aut",
                  "vel",
                  "et",
                ],
                signatureRrdatas: [
                  "maiores",
                ],
                weight: 78.199997,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "voluptatum",
                      ipProtocol: "undefined",
                      kind: "ut",
                      loadBalancerType: "none",
                      networkUrl: "minima",
                      port: "laudantium",
                      project: "rerum",
                      region: "aut",
                    },
                    {
                      ipAddress: "amet",
                      ipProtocol: "udp",
                      kind: "reprehenderit",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "repudiandae",
                      port: "dolorem",
                      project: "occaecati",
                      region: "officia",
                    },
                    {
                      ipAddress: "ducimus",
                      ipProtocol: "tcp",
                      kind: "et",
                      loadBalancerType: "none",
                      networkUrl: "ipsam",
                      port: "aut",
                      project: "qui",
                      region: "necessitatibus",
                    },
                  ],
                },
                kind: "voluptas",
                rrdatas: [
                  "quisquam",
                  "esse",
                ],
                signatureRrdatas: [
                  "rerum",
                  "repellat",
                  "voluptatem",
                ],
                weight: 47.099998,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "earum",
                      ipProtocol: "tcp",
                      kind: "maiores",
                      loadBalancerType: "none",
                      networkUrl: "id",
                      port: "eligendi",
                      project: "tenetur",
                      region: "et",
                    },
                  ],
                },
                kind: "consectetur",
                rrdatas: [
                  "quas",
                  "consequuntur",
                ],
                signatureRrdatas: [
                  "molestiae",
                ],
                weight: 26.200001,
              },
            ],
            kind: "quibusdam",
          },
        },
        rrdatas: [
          "rerum",
          "blanditiis",
        ],
        signatureRrdatas: [
          "et",
          "accusamus",
        ],
        ttl: 1085505481150236459,
        type: "accusamus",
      },
      {
        kind: "maiores",
        name: "iste",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "eos",
                      ipProtocol: "udp",
                      kind: "quaerat",
                      loadBalancerType: "none",
                      networkUrl: "perspiciatis",
                      port: "atque",
                      project: "quidem",
                      region: "qui",
                    },
                    {
                      ipAddress: "suscipit",
                      ipProtocol: "undefined",
                      kind: "sed",
                      loadBalancerType: "none",
                      networkUrl: "mollitia",
                      port: "nulla",
                      project: "voluptatem",
                      region: "dolor",
                    },
                    {
                      ipAddress: "labore",
                      ipProtocol: "tcp",
                      kind: "veritatis",
                      loadBalancerType: "none",
                      networkUrl: "possimus",
                      port: "laborum",
                      project: "maiores",
                      region: "nobis",
                    },
                  ],
                },
                kind: "id",
                location: "at",
                rrdatas: [
                  "et",
                  "quasi",
                  "sint",
                ],
                signatureRrdatas: [
                  "culpa",
                  "fuga",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "cumque",
                      ipProtocol: "undefined",
                      kind: "optio",
                      loadBalancerType: "none",
                      networkUrl: "placeat",
                      port: "nihil",
                      project: "quia",
                      region: "saepe",
                    },
                    {
                      ipAddress: "voluptas",
                      ipProtocol: "tcp",
                      kind: "earum",
                      loadBalancerType: "none",
                      networkUrl: "quia",
                      port: "nam",
                      project: "in",
                      region: "ut",
                    },
                    {
                      ipAddress: "et",
                      ipProtocol: "tcp",
                      kind: "aspernatur",
                      loadBalancerType: "none",
                      networkUrl: "beatae",
                      port: "nobis",
                      project: "ex",
                      region: "repellat",
                    },
                  ],
                },
                kind: "in",
                location: "voluptatibus",
                rrdatas: [
                  "et",
                  "nihil",
                ],
                signatureRrdatas: [
                  "dolorum",
                  "adipisci",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "maxime",
                      ipProtocol: "undefined",
                      kind: "sunt",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "omnis",
                      port: "et",
                      project: "sed",
                      region: "dolorum",
                    },
                    {
                      ipAddress: "numquam",
                      ipProtocol: "undefined",
                      kind: "aut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "harum",
                      port: "veritatis",
                      project: "in",
                      region: "totam",
                    },
                    {
                      ipAddress: "aut",
                      ipProtocol: "undefined",
                      kind: "temporibus",
                      loadBalancerType: "none",
                      networkUrl: "fugit",
                      port: "quae",
                      project: "sed",
                      region: "voluptate",
                    },
                  ],
                },
                kind: "autem",
                location: "pariatur",
                rrdatas: [
                  "itaque",
                  "quos",
                  "assumenda",
                ],
                signatureRrdatas: [
                  "id",
                  "et",
                ],
              },
            ],
            kind: "voluptate",
          },
          geoPolicy: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "magnam",
                      ipProtocol: "udp",
                      kind: "doloremque",
                      loadBalancerType: "none",
                      networkUrl: "ratione",
                      port: "sequi",
                      project: "distinctio",
                      region: "ut",
                    },
                    {
                      ipAddress: "et",
                      ipProtocol: "undefined",
                      kind: "voluptate",
                      loadBalancerType: "none",
                      networkUrl: "corporis",
                      port: "quod",
                      project: "et",
                      region: "nisi",
                    },
                  ],
                },
                kind: "vel",
                location: "incidunt",
                rrdatas: [
                  "incidunt",
                ],
                signatureRrdatas: [
                  "aut",
                  "odio",
                ],
              },
            ],
            kind: "ipsam",
          },
          kind: "id",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: false,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "dolor",
                        ipProtocol: "undefined",
                        kind: "dolore",
                        loadBalancerType: "none",
                        networkUrl: "hic",
                        port: "velit",
                        project: "ad",
                        region: "esse",
                      },
                      {
                        ipAddress: "sit",
                        ipProtocol: "undefined",
                        kind: "reprehenderit",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "saepe",
                        port: "tempora",
                        project: "harum",
                        region: "aut",
                      },
                      {
                        ipAddress: "dignissimos",
                        ipProtocol: "tcp",
                        kind: "et",
                        loadBalancerType: "none",
                        networkUrl: "qui",
                        port: "ut",
                        project: "occaecati",
                        region: "deserunt",
                      },
                    ],
                  },
                  kind: "ut",
                  location: "provident",
                  rrdatas: [
                    "animi",
                  ],
                  signatureRrdatas: [
                    "dolore",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "est",
                        ipProtocol: "undefined",
                        kind: "ipsam",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "tempora",
                        port: "voluptatibus",
                        project: "corporis",
                        region: "ex",
                      },
                      {
                        ipAddress: "voluptatem",
                        ipProtocol: "tcp",
                        kind: "dolorem",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "maxime",
                        port: "consequatur",
                        project: "quaerat",
                        region: "amet",
                      },
                    ],
                  },
                  kind: "ullam",
                  location: "adipisci",
                  rrdatas: [
                    "sit",
                    "suscipit",
                  ],
                  signatureRrdatas: [
                    "nobis",
                  ],
                },
              ],
              kind: "dolorum",
            },
            kind: "eum",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "perspiciatis",
                  ipProtocol: "udp",
                  kind: "facilis",
                  loadBalancerType: "regionalL4ilb",
                  networkUrl: "et",
                  port: "molestiae",
                  project: "culpa",
                  region: "error",
                },
                {
                  ipAddress: "nostrum",
                  ipProtocol: "tcp",
                  kind: "voluptate",
                  loadBalancerType: "none",
                  networkUrl: "nihil",
                  port: "quia",
                  project: "saepe",
                  region: "illum",
                },
              ],
            },
            trickleTraffic: 5.100000,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ut",
                      ipProtocol: "udp",
                      kind: "ut",
                      loadBalancerType: "none",
                      networkUrl: "non",
                      port: "mollitia",
                      project: "sed",
                      region: "ducimus",
                    },
                  ],
                },
                kind: "quo",
                rrdatas: [
                  "enim",
                  "quia",
                  "sit",
                ],
                signatureRrdatas: [
                  "error",
                  "et",
                ],
                weight: 43.200001,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "dolorum",
                      ipProtocol: "udp",
                      kind: "tenetur",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "animi",
                      port: "non",
                      project: "rerum",
                      region: "non",
                    },
                    {
                      ipAddress: "porro",
                      ipProtocol: "undefined",
                      kind: "eligendi",
                      loadBalancerType: "none",
                      networkUrl: "sed",
                      port: "maiores",
                      project: "non",
                      region: "expedita",
                    },
                    {
                      ipAddress: "quia",
                      ipProtocol: "undefined",
                      kind: "quia",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "quia",
                      port: "pariatur",
                      project: "aliquam",
                      region: "quidem",
                    },
                  ],
                },
                kind: "officia",
                rrdatas: [
                  "cum",
                ],
                signatureRrdatas: [
                  "aut",
                  "pariatur",
                  "voluptas",
                ],
                weight: 0.200000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "rerum",
                      ipProtocol: "tcp",
                      kind: "velit",
                      loadBalancerType: "none",
                      networkUrl: "enim",
                      port: "dolores",
                      project: "eos",
                      region: "sunt",
                    },
                    {
                      ipAddress: "voluptatem",
                      ipProtocol: "udp",
                      kind: "dolores",
                      loadBalancerType: "none",
                      networkUrl: "earum",
                      port: "in",
                      project: "facere",
                      region: "tempore",
                    },
                  ],
                },
                kind: "non",
                rrdatas: [
                  "voluptas",
                ],
                signatureRrdatas: [
                  "totam",
                  "unde",
                  "sed",
                ],
                weight: 21.200001,
              },
            ],
            kind: "temporibus",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "facere",
                      ipProtocol: "udp",
                      kind: "aut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "dignissimos",
                      port: "ipsam",
                      project: "voluptatem",
                      region: "error",
                    },
                  ],
                },
                kind: "et",
                rrdatas: [
                  "voluptatibus",
                ],
                signatureRrdatas: [
                  "hic",
                ],
                weight: 96.199997,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "a",
                      ipProtocol: "undefined",
                      kind: "nihil",
                      loadBalancerType: "none",
                      networkUrl: "ut",
                      port: "sunt",
                      project: "sit",
                      region: "ut",
                    },
                    {
                      ipAddress: "quo",
                      ipProtocol: "tcp",
                      kind: "est",
                      loadBalancerType: "none",
                      networkUrl: "animi",
                      port: "quibusdam",
                      project: "earum",
                      region: "doloribus",
                    },
                  ],
                },
                kind: "consequatur",
                rrdatas: [
                  "minus",
                  "et",
                  "est",
                ],
                signatureRrdatas: [
                  "doloribus",
                  "qui",
                  "aliquam",
                ],
                weight: 93.199997,
              },
            ],
            kind: "officia",
          },
        },
        rrdatas: [
          "et",
        ],
        signatureRrdatas: [
          "commodi",
        ],
        ttl: 4625874526789808411,
        type: "temporibus",
      },
    ],
    deletions: [
      {
        kind: "beatae",
        name: "aut",
        routingPolicy: {
          geo: {
            enableFencing: false,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "a",
                      ipProtocol: "tcp",
                      kind: "omnis",
                      loadBalancerType: "none",
                      networkUrl: "vel",
                      port: "beatae",
                      project: "laboriosam",
                      region: "autem",
                    },
                  ],
                },
                kind: "nemo",
                location: "similique",
                rrdatas: [
                  "ipsum",
                  "asperiores",
                  "deleniti",
                ],
                signatureRrdatas: [
                  "cupiditate",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ea",
                      ipProtocol: "tcp",
                      kind: "eos",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "ut",
                      port: "reiciendis",
                      project: "odio",
                      region: "quia",
                    },
                    {
                      ipAddress: "voluptas",
                      ipProtocol: "tcp",
                      kind: "reiciendis",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "dolor",
                      port: "nulla",
                      project: "quia",
                      region: "enim",
                    },
                    {
                      ipAddress: "cum",
                      ipProtocol: "udp",
                      kind: "veniam",
                      loadBalancerType: "none",
                      networkUrl: "harum",
                      port: "aut",
                      project: "qui",
                      region: "ipsum",
                    },
                  ],
                },
                kind: "est",
                location: "dolorem",
                rrdatas: [
                  "molestiae",
                  "nam",
                ],
                signatureRrdatas: [
                  "earum",
                  "ex",
                ],
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "veniam",
                      ipProtocol: "tcp",
                      kind: "fuga",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "doloribus",
                      port: "maxime",
                      project: "quod",
                      region: "ea",
                    },
                    {
                      ipAddress: "occaecati",
                      ipProtocol: "tcp",
                      kind: "amet",
                      loadBalancerType: "none",
                      networkUrl: "ducimus",
                      port: "ipsam",
                      project: "et",
                      region: "voluptas",
                    },
                    {
                      ipAddress: "animi",
                      ipProtocol: "undefined",
                      kind: "optio",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "labore",
                      port: "voluptatem",
                      project: "id",
                      region: "labore",
                    },
                  ],
                },
                kind: "eos",
                location: "iste",
                rrdatas: [
                  "fugiat",
                  "perspiciatis",
                  "modi",
                ],
                signatureRrdatas: [
                  "eum",
                ],
              },
            ],
            kind: "esse",
          },
          geoPolicy: {
            enableFencing: true,
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "fugiat",
                      ipProtocol: "undefined",
                      kind: "suscipit",
                      loadBalancerType: "none",
                      networkUrl: "aut",
                      port: "praesentium",
                      project: "molestias",
                      region: "doloremque",
                    },
                  ],
                },
                kind: "accusamus",
                location: "quo",
                rrdatas: [
                  "mollitia",
                  "rerum",
                ],
                signatureRrdatas: [
                  "dolor",
                  "sit",
                ],
              },
            ],
            kind: "veniam",
          },
          kind: "vel",
          primaryBackup: {
            backupGeoTargets: {
              enableFencing: true,
              items: [
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "delectus",
                        ipProtocol: "tcp",
                        kind: "dolor",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "fuga",
                        port: "recusandae",
                        project: "in",
                        region: "quae",
                      },
                      {
                        ipAddress: "ipsum",
                        ipProtocol: "tcp",
                        kind: "et",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "vero",
                        port: "autem",
                        project: "laboriosam",
                        region: "adipisci",
                      },
                    ],
                  },
                  kind: "incidunt",
                  location: "distinctio",
                  rrdatas: [
                    "magnam",
                  ],
                  signatureRrdatas: [
                    "voluptatum",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "odit",
                        ipProtocol: "undefined",
                        kind: "aspernatur",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "vitae",
                        port: "accusantium",
                        project: "atque",
                        region: "possimus",
                      },
                      {
                        ipAddress: "ex",
                        ipProtocol: "undefined",
                        kind: "asperiores",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "cupiditate",
                        port: "voluptas",
                        project: "corporis",
                        region: "vero",
                      },
                      {
                        ipAddress: "sed",
                        ipProtocol: "udp",
                        kind: "molestiae",
                        loadBalancerType: "none",
                        networkUrl: "exercitationem",
                        port: "nesciunt",
                        project: "omnis",
                        region: "odio",
                      },
                    ],
                  },
                  kind: "blanditiis",
                  location: "veritatis",
                  rrdatas: [
                    "ipsa",
                  ],
                  signatureRrdatas: [
                    "magni",
                    "quibusdam",
                    "assumenda",
                  ],
                },
                {
                  healthCheckedTargets: {
                    internalLoadBalancers: [
                      {
                        ipAddress: "minus",
                        ipProtocol: "tcp",
                        kind: "quod",
                        loadBalancerType: "regionalL4ilb",
                        networkUrl: "quaerat",
                        port: "non",
                        project: "qui",
                        region: "ab",
                      },
                    ],
                  },
                  kind: "quo",
                  location: "et",
                  rrdatas: [
                    "enim",
                  ],
                  signatureRrdatas: [
                    "ut",
                    "expedita",
                    "quo",
                  ],
                },
              ],
              kind: "beatae",
            },
            kind: "maxime",
            primaryTargets: {
              internalLoadBalancers: [
                {
                  ipAddress: "eum",
                  ipProtocol: "udp",
                  kind: "sed",
                  loadBalancerType: "none",
                  networkUrl: "veritatis",
                  port: "et",
                  project: "in",
                  region: "voluptas",
                },
                {
                  ipAddress: "quis",
                  ipProtocol: "tcp",
                  kind: "voluptatem",
                  loadBalancerType: "none",
                  networkUrl: "aut",
                  port: "maiores",
                  project: "sit",
                  region: "quo",
                },
              ],
            },
            trickleTraffic: 65.099998,
          },
          wrr: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "omnis",
                      ipProtocol: "undefined",
                      kind: "id",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "similique",
                      port: "consectetur",
                      project: "earum",
                      region: "expedita",
                    },
                  ],
                },
                kind: "delectus",
                rrdatas: [
                  "velit",
                  "eaque",
                  "perferendis",
                ],
                signatureRrdatas: [
                  "neque",
                ],
                weight: 74.199997,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "a",
                      ipProtocol: "undefined",
                      kind: "temporibus",
                      loadBalancerType: "none",
                      networkUrl: "enim",
                      port: "nam",
                      project: "architecto",
                      region: "reiciendis",
                    },
                    {
                      ipAddress: "dolor",
                      ipProtocol: "tcp",
                      kind: "corporis",
                      loadBalancerType: "none",
                      networkUrl: "necessitatibus",
                      port: "quia",
                      project: "minus",
                      region: "non",
                    },
                    {
                      ipAddress: "eligendi",
                      ipProtocol: "udp",
                      kind: "ipsum",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "explicabo",
                      port: "aut",
                      project: "id",
                      region: "sint",
                    },
                  ],
                },
                kind: "nihil",
                rrdatas: [
                  "quis",
                  "ab",
                ],
                signatureRrdatas: [
                  "nam",
                ],
                weight: 29.200001,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "doloremque",
                      ipProtocol: "undefined",
                      kind: "quas",
                      loadBalancerType: "none",
                      networkUrl: "dolores",
                      port: "officia",
                      project: "eligendi",
                      region: "et",
                    },
                    {
                      ipAddress: "aut",
                      ipProtocol: "undefined",
                      kind: "aut",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "quis",
                      port: "ab",
                      project: "inventore",
                      region: "deleniti",
                    },
                    {
                      ipAddress: "ratione",
                      ipProtocol: "undefined",
                      kind: "vitae",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "totam",
                      port: "omnis",
                      project: "consequatur",
                      region: "labore",
                    },
                  ],
                },
                kind: "sapiente",
                rrdatas: [
                  "voluptas",
                  "perspiciatis",
                ],
                signatureRrdatas: [
                  "iusto",
                ],
                weight: 82.199997,
              },
            ],
            kind: "laboriosam",
          },
          wrrPolicy: {
            items: [
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "exercitationem",
                      ipProtocol: "undefined",
                      kind: "et",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "quo",
                      port: "magni",
                      project: "est",
                      region: "omnis",
                    },
                    {
                      ipAddress: "consectetur",
                      ipProtocol: "udp",
                      kind: "non",
                      loadBalancerType: "none",
                      networkUrl: "quia",
                      port: "rerum",
                      project: "facere",
                      region: "architecto",
                    },
                    {
                      ipAddress: "delectus",
                      ipProtocol: "udp",
                      kind: "repudiandae",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "saepe",
                      port: "rerum",
                      project: "quas",
                      region: "et",
                    },
                  ],
                },
                kind: "quasi",
                rrdatas: [
                  "blanditiis",
                  "hic",
                ],
                signatureRrdatas: [
                  "perferendis",
                  "voluptatem",
                  "quia",
                ],
                weight: 16.200001,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "ratione",
                      ipProtocol: "udp",
                      kind: "dolorem",
                      loadBalancerType: "none",
                      networkUrl: "enim",
                      port: "veritatis",
                      project: "quidem",
                      region: "ut",
                    },
                    {
                      ipAddress: "porro",
                      ipProtocol: "tcp",
                      kind: "saepe",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "esse",
                      port: "quibusdam",
                      project: "dolor",
                      region: "deleniti",
                    },
                  ],
                },
                kind: "debitis",
                rrdatas: [
                  "quos",
                  "magni",
                  "voluptas",
                ],
                signatureRrdatas: [
                  "sapiente",
                ],
                weight: 23.100000,
              },
              {
                healthCheckedTargets: {
                  internalLoadBalancers: [
                    {
                      ipAddress: "quod",
                      ipProtocol: "udp",
                      kind: "quibusdam",
                      loadBalancerType: "regionalL4ilb",
                      networkUrl: "itaque",
                      port: "quae",
                      project: "aliquid",
                      region: "ut",
                    },
                  ],
                },
                kind: "magni",
                rrdatas: [
                  "facilis",
                  "fugiat",
                ],
                signatureRrdatas: [
                  "quas",
                  "sed",
                ],
                weight: 62.200001,
              },
            ],
            kind: "perspiciatis",
          },
        },
        rrdatas: [
          "omnis",
          "sit",
        ],
        signatureRrdatas: [
          "totam",
        ],
        ttl: 2911300226704644765,
        type: "culpa",
      },
    ],
    id: "commodi",
    isServing: true,
    kind: "et",
    startTime: "ratione",
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
