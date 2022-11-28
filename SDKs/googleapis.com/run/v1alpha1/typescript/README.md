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
import { RunNamespacesJobsCreateRequest, RunNamespacesJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RunNamespacesJobsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "molestias",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "qui",
    alt: "json",
    callback: "occaecati",
    fields: "quasi",
    key: "fugiat",
    oauthToken: "perspiciatis",
    prettyPrint: false,
    quotaUser: "sed",
    uploadType: "rerum",
    uploadProtocol: "ea",
  },
  request: {
    apiVersion: "at",
    kind: "vel",
    metadata: {
      annotations: {
        "voluptatem": "soluta",
        "doloremque": "aliquid",
        "rem": "tenetur",
      },
      clusterName: "ea",
      creationTimestamp: "amet",
      deletionGracePeriodSeconds: 4539324799356275713,
      deletionTimestamp: "minima",
      finalizers: [
        "maiores",
        "aut",
      ],
      generateName: "et",
      generation: 8595555590632221388,
      labels: {
        "et": "sint",
        "consequatur": "reiciendis",
      },
      name: "ducimus",
      namespace: "et",
      ownerReferences: [
        {
          apiVersion: "quasi",
          blockOwnerDeletion: false,
          controller: false,
          kind: "in",
          name: "minus",
          uid: "et",
        },
      ],
      resourceVersion: "nostrum",
      selfLink: "officiis",
      uid: "voluptas",
    },
    spec: {
      activeDeadlineSeconds: "doloremque",
      backoffLimit: 942367122057403,
      completions: 8461239543359939786,
      parallelism: 3446250605363017021,
      template: {
        spec: {
          activeDeadlineSeconds: "corrupti",
          containers: [
            {
              args: [
                "quas",
                "reiciendis",
              ],
              command: [
                "iusto",
                "impedit",
              ],
              env: [
                {
                  name: "est",
                  value: "labore",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "soluta",
                      localObjectReference: {
                        name: "et",
                      },
                      name: "explicabo",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "rerum",
                      localObjectReference: {
                        name: "numquam",
                      },
                      name: "sapiente",
                      optional: true,
                    },
                  },
                },
                {
                  name: "provident",
                  value: "ut",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "pariatur",
                      localObjectReference: {
                        name: "dolorem",
                      },
                      name: "vero",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "ducimus",
                      localObjectReference: {
                        name: "facilis",
                      },
                      name: "omnis",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "id",
                    },
                    name: "asperiores",
                    optional: true,
                  },
                  prefix: "eum",
                  secretRef: {
                    localObjectReference: {
                      name: "voluptas",
                    },
                    name: "quasi",
                    optional: false,
                  },
                },
              ],
              image: "aliquam",
              imagePullPolicy: "numquam",
              livenessProbe: {
                exec: {
                  command: [
                    "non",
                  ],
                },
                failureThreshold: 4970867461748090633,
                grpc: {
                  port: 1541933179374661096,
                  service: "ad",
                },
                httpGet: {
                  host: "vitae",
                  httpHeaders: [
                    {
                      name: "ex",
                      value: "ex",
                    },
                    {
                      name: "vero",
                      value: "omnis",
                    },
                  ],
                  path: "et",
                  scheme: "sit",
                },
                initialDelaySeconds: 6119577771300060840,
                periodSeconds: 1474905606053625402,
                successThreshold: 2031747616737710686,
                tcpSocket: {
                  host: "molestiae",
                  port: 3169507003314032990,
                },
                timeoutSeconds: 5296021733860897283,
              },
              name: "sapiente",
              ports: [
                {
                  containerPort: 3603567268369737312,
                  name: "modi",
                  protocol: "harum",
                },
                {
                  containerPort: 1654461404085660015,
                  name: "voluptatem",
                  protocol: "dolor",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "est",
                  ],
                },
                failureThreshold: 5003982745527687064,
                grpc: {
                  port: 8945323413450432401,
                  service: "rerum",
                },
                httpGet: {
                  host: "doloremque",
                  httpHeaders: [
                    {
                      name: "voluptatibus",
                      value: "voluptas",
                    },
                    {
                      name: "est",
                      value: "animi",
                    },
                  ],
                  path: "vel",
                  scheme: "occaecati",
                },
                initialDelaySeconds: 3633982601414020853,
                periodSeconds: 8350814459227397961,
                successThreshold: 8245620777129958790,
                tcpSocket: {
                  host: "et",
                  port: 5509147761421278477,
                },
                timeoutSeconds: 4688590533129750891,
              },
              resources: {
                limits: {
                  "reprehenderit": "voluptatum",
                },
                requests: {
                  "ut": "labore",
                  "doloremque": "delectus",
                  "aspernatur": "dignissimos",
                },
              },
              securityContext: {
                runAsUser: 1141555431372790379,
              },
              startupProbe: {
                exec: {
                  command: [
                    "in",
                  ],
                },
                failureThreshold: 2816689105639094560,
                grpc: {
                  port: 2099878156621168149,
                  service: "repudiandae",
                },
                httpGet: {
                  host: "molestias",
                  httpHeaders: [
                    {
                      name: "consequatur",
                      value: "quis",
                    },
                    {
                      name: "sequi",
                      value: "qui",
                    },
                    {
                      name: "maiores",
                      value: "quod",
                    },
                  ],
                  path: "itaque",
                  scheme: "architecto",
                },
                initialDelaySeconds: 8249191943147746679,
                periodSeconds: 3380658039127992182,
                successThreshold: 8521442371609802618,
                tcpSocket: {
                  host: "quam",
                  port: 3613051751460190901,
                },
                timeoutSeconds: 3883089145808347607,
              },
              terminationMessagePath: "ut",
              terminationMessagePolicy: "illum",
              volumeMounts: [
                {
                  mountPath: "aliquam",
                  name: "inventore",
                  readOnly: true,
                  subPath: "earum",
                },
              ],
              workingDir: "soluta",
            },
            {
              args: [
                "excepturi",
                "totam",
                "veniam",
              ],
              command: [
                "aspernatur",
                "vitae",
                "eum",
              ],
              env: [
                {
                  name: "sint",
                  value: "voluptate",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "sit",
                      localObjectReference: {
                        name: "repellendus",
                      },
                      name: "corporis",
                      optional: true,
                    },
                    secretKeyRef: {
                      key: "ullam",
                      localObjectReference: {
                        name: "sint",
                      },
                      name: "ut",
                      optional: true,
                    },
                  },
                },
                {
                  name: "culpa",
                  value: "sunt",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "sit",
                      localObjectReference: {
                        name: "voluptatem",
                      },
                      name: "nihil",
                      optional: true,
                    },
                    secretKeyRef: {
                      key: "iusto",
                      localObjectReference: {
                        name: "earum",
                      },
                      name: "quibusdam",
                      optional: false,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "perspiciatis",
                    },
                    name: "perspiciatis",
                    optional: true,
                  },
                  prefix: "necessitatibus",
                  secretRef: {
                    localObjectReference: {
                      name: "nihil",
                    },
                    name: "expedita",
                    optional: true,
                  },
                },
              ],
              image: "consequatur",
              imagePullPolicy: "eligendi",
              livenessProbe: {
                exec: {
                  command: [
                    "voluptatibus",
                    "tempore",
                  ],
                },
                failureThreshold: 1461486700439304296,
                grpc: {
                  port: 6958801857898114319,
                  service: "qui",
                },
                httpGet: {
                  host: "et",
                  httpHeaders: [
                    {
                      name: "culpa",
                      value: "id",
                    },
                    {
                      name: "ullam",
                      value: "et",
                    },
                  ],
                  path: "sed",
                  scheme: "odit",
                },
                initialDelaySeconds: 2661025999394640566,
                periodSeconds: 1701879520399258058,
                successThreshold: 4916112897995536856,
                tcpSocket: {
                  host: "id",
                  port: 4436621812713643402,
                },
                timeoutSeconds: 2470775265374970111,
              },
              name: "iusto",
              ports: [
                {
                  containerPort: 7138677114797828728,
                  name: "eius",
                  protocol: "explicabo",
                },
                {
                  containerPort: 2915513205126756781,
                  name: "quia",
                  protocol: "delectus",
                },
                {
                  containerPort: 3925548684810317827,
                  name: "consequuntur",
                  protocol: "velit",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "et",
                    "corporis",
                    "voluptates",
                  ],
                },
                failureThreshold: 7679575152548104904,
                grpc: {
                  port: 2963919923495112752,
                  service: "provident",
                },
                httpGet: {
                  host: "neque",
                  httpHeaders: [
                    {
                      name: "qui",
                      value: "molestiae",
                    },
                    {
                      name: "deleniti",
                      value: "quisquam",
                    },
                  ],
                  path: "error",
                  scheme: "est",
                },
                initialDelaySeconds: 1835622084557857830,
                periodSeconds: 5175803226816502902,
                successThreshold: 953808308230057915,
                tcpSocket: {
                  host: "doloremque",
                  port: 1604078686119253067,
                },
                timeoutSeconds: 4963803875998146955,
              },
              resources: {
                limits: {
                  "aut": "quae",
                  "voluptate": "quo",
                  "sint": "quis",
                },
                requests: {
                  "doloremque": "debitis",
                  "unde": "facilis",
                  "nobis": "cum",
                },
              },
              securityContext: {
                runAsUser: 2125335013438967309,
              },
              startupProbe: {
                exec: {
                  command: [
                    "dolor",
                    "ipsa",
                  ],
                },
                failureThreshold: 4095803601140624775,
                grpc: {
                  port: 7746310136882242666,
                  service: "enim",
                },
                httpGet: {
                  host: "labore",
                  httpHeaders: [
                    {
                      name: "et",
                      value: "sit",
                    },
                    {
                      name: "est",
                      value: "est",
                    },
                    {
                      name: "veritatis",
                      value: "accusamus",
                    },
                  ],
                  path: "enim",
                  scheme: "provident",
                },
                initialDelaySeconds: 5111392661543865458,
                periodSeconds: 5483887904699893031,
                successThreshold: 8839602701310775874,
                tcpSocket: {
                  host: "nulla",
                  port: 7981277484967011385,
                },
                timeoutSeconds: 5949296481211853636,
              },
              terminationMessagePath: "delectus",
              terminationMessagePolicy: "at",
              volumeMounts: [
                {
                  mountPath: "et",
                  name: "impedit",
                  readOnly: true,
                  subPath: "sequi",
                },
              ],
              workingDir: "dolorum",
            },
            {
              args: [
                "minima",
              ],
              command: [
                "officiis",
                "et",
              ],
              env: [
                {
                  name: "non",
                  value: "quae",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "beatae",
                      localObjectReference: {
                        name: "et",
                      },
                      name: "rerum",
                      optional: true,
                    },
                    secretKeyRef: {
                      key: "deleniti",
                      localObjectReference: {
                        name: "esse",
                      },
                      name: "ratione",
                      optional: false,
                    },
                  },
                },
                {
                  name: "corrupti",
                  value: "quod",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "qui",
                      localObjectReference: {
                        name: "et",
                      },
                      name: "sed",
                      optional: true,
                    },
                    secretKeyRef: {
                      key: "sapiente",
                      localObjectReference: {
                        name: "optio",
                      },
                      name: "omnis",
                      optional: false,
                    },
                  },
                },
                {
                  name: "inventore",
                  value: "id",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "adipisci",
                      localObjectReference: {
                        name: "error",
                      },
                      name: "laudantium",
                      optional: false,
                    },
                    secretKeyRef: {
                      key: "recusandae",
                      localObjectReference: {
                        name: "doloribus",
                      },
                      name: "sed",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "perferendis",
                    },
                    name: "officiis",
                    optional: false,
                  },
                  prefix: "et",
                  secretRef: {
                    localObjectReference: {
                      name: "rerum",
                    },
                    name: "qui",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "aliquam",
                    },
                    name: "molestiae",
                    optional: true,
                  },
                  prefix: "ipsa",
                  secretRef: {
                    localObjectReference: {
                      name: "rerum",
                    },
                    name: "eaque",
                    optional: false,
                  },
                },
                {
                  configMapRef: {
                    localObjectReference: {
                      name: "enim",
                    },
                    name: "vel",
                    optional: true,
                  },
                  prefix: "omnis",
                  secretRef: {
                    localObjectReference: {
                      name: "alias",
                    },
                    name: "ea",
                    optional: false,
                  },
                },
              ],
              image: "tempora",
              imagePullPolicy: "quis",
              livenessProbe: {
                exec: {
                  command: [
                    "sequi",
                  ],
                },
                failureThreshold: 6193917981153452844,
                grpc: {
                  port: 9042431048538597238,
                  service: "ab",
                },
                httpGet: {
                  host: "in",
                  httpHeaders: [
                    {
                      name: "possimus",
                      value: "aspernatur",
                    },
                    {
                      name: "dolores",
                      value: "et",
                    },
                    {
                      name: "libero",
                      value: "inventore",
                    },
                  ],
                  path: "quo",
                  scheme: "et",
                },
                initialDelaySeconds: 451882523317497902,
                periodSeconds: 802477546956231620,
                successThreshold: 6395140472053453916,
                tcpSocket: {
                  host: "tempora",
                  port: 3235054434341092000,
                },
                timeoutSeconds: 3872944090730013512,
              },
              name: "consequatur",
              ports: [
                {
                  containerPort: 6401695703117165297,
                  name: "error",
                  protocol: "sint",
                },
                {
                  containerPort: 4500759802704413865,
                  name: "autem",
                  protocol: "mollitia",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "quia",
                    "mollitia",
                  ],
                },
                failureThreshold: 2236116965037051564,
                grpc: {
                  port: 1270205750598399805,
                  service: "in",
                },
                httpGet: {
                  host: "sequi",
                  httpHeaders: [
                    {
                      name: "quos",
                      value: "rerum",
                    },
                    {
                      name: "dolores",
                      value: "deserunt",
                    },
                    {
                      name: "et",
                      value: "vel",
                    },
                  ],
                  path: "consectetur",
                  scheme: "officiis",
                },
                initialDelaySeconds: 8504633154075854499,
                periodSeconds: 45114391743458575,
                successThreshold: 4138072877811335702,
                tcpSocket: {
                  host: "corrupti",
                  port: 3077075037648512654,
                },
                timeoutSeconds: 2574533273618454795,
              },
              resources: {
                limits: {
                  "provident": "ducimus",
                  "voluptas": "quis",
                  "impedit": "expedita",
                },
                requests: {
                  "est": "alias",
                  "sit": "tenetur",
                  "qui": "cum",
                },
              },
              securityContext: {
                runAsUser: 8666132570895663240,
              },
              startupProbe: {
                exec: {
                  command: [
                    "voluptas",
                  ],
                },
                failureThreshold: 59115062145819579,
                grpc: {
                  port: 3475444160614041575,
                  service: "perferendis",
                },
                httpGet: {
                  host: "fuga",
                  httpHeaders: [
                    {
                      name: "omnis",
                      value: "quisquam",
                    },
                  ],
                  path: "commodi",
                  scheme: "et",
                },
                initialDelaySeconds: 2026448774353975791,
                periodSeconds: 1768585792787595592,
                successThreshold: 8313689477081018518,
                tcpSocket: {
                  host: "eum",
                  port: 5921247025217931772,
                },
                timeoutSeconds: 2471335381233560891,
              },
              terminationMessagePath: "minus",
              terminationMessagePolicy: "voluptatem",
              volumeMounts: [
                {
                  mountPath: "hic",
                  name: "rerum",
                  readOnly: true,
                  subPath: "excepturi",
                },
                {
                  mountPath: "porro",
                  name: "eos",
                  readOnly: true,
                  subPath: "consequatur",
                },
              ],
              workingDir: "velit",
            },
          ],
          restartPolicy: "aut",
          serviceAccountName: "occaecati",
          terminationGracePeriodSeconds: "ea",
          volumes: [
            {
              configMap: {
                defaultMode: 3660212655194556557,
                items: [
                  {
                    key: "dignissimos",
                    mode: 1680128215728570212,
                    path: "consequatur",
                  },
                ],
                name: "iste",
                optional: true,
              },
              name: "assumenda",
              secret: {
                defaultMode: 3872433627045221826,
                items: [
                  {
                    key: "repellendus",
                    mode: 3650592891090512270,
                    path: "culpa",
                  },
                  {
                    key: "modi",
                    mode: 7302297139680177634,
                    path: "ut",
                  },
                ],
                optional: false,
                secretName: "et",
              },
            },
            {
              configMap: {
                defaultMode: 1238046897637974504,
                items: [
                  {
                    key: "voluptatem",
                    mode: 6941856187733852070,
                    path: "provident",
                  },
                  {
                    key: "tempora",
                    mode: 1944378778775186525,
                    path: "quidem",
                  },
                  {
                    key: "quod",
                    mode: 2639965261717590887,
                    path: "dolor",
                  },
                ],
                name: "tenetur",
                optional: true,
              },
              name: "quia",
              secret: {
                defaultMode: 7672768974913202693,
                items: [
                  {
                    key: "debitis",
                    mode: 9073988974644715550,
                    path: "a",
                  },
                ],
                optional: false,
                secretName: "eaque",
              },
            },
            {
              configMap: {
                defaultMode: 2568905343333563592,
                items: [
                  {
                    key: "vel",
                    mode: 9065771119699927634,
                    path: "est",
                  },
                  {
                    key: "officiis",
                    mode: 3170573384197884262,
                    path: "explicabo",
                  },
                ],
                name: "ab",
                optional: false,
              },
              name: "dicta",
              secret: {
                defaultMode: 8296632093730615736,
                items: [
                  {
                    key: "fugit",
                    mode: 3943467218367361173,
                    path: "nihil",
                  },
                  {
                    key: "quod",
                    mode: 9045397982087863512,
                    path: "sint",
                  },
                ],
                optional: true,
                secretName: "ut",
              },
            },
          ],
        },
      },
      ttlSecondsAfterFinished: 8534978223868451056,
    },
    status: {
      active: 8356579073957532003,
      completionTime: "velit",
      conditions: [
        {
          lastTransitionTime: "necessitatibus",
          message: "aut",
          reason: "enim",
          severity: "sit",
          status: "exercitationem",
          type: "voluptate",
        },
        {
          lastTransitionTime: "explicabo",
          message: "esse",
          reason: "explicabo",
          severity: "aliquid",
          status: "voluptatum",
          type: "ea",
        },
        {
          lastTransitionTime: "aut",
          message: "delectus",
          reason: "et",
          severity: "ullam",
          status: "quia",
          type: "est",
        },
      ],
      failed: 5723222395514882552,
      imageDigest: "saepe",
      instances: [
        {
          completionTime: "omnis",
          failed: 8482094748759209037,
          index: 5452769157446981348,
          lastAttemptResult: {
            exitCode: 8845654876728268557,
            status: {
              code: 5338315572355245529,
              details: [
                {
                  "laudantium": "ea",
                  "labore": "nisi",
                },
                {
                  "facere": "omnis",
                  "perferendis": "sint",
                  "et": "est",
                },
              ],
              message: "harum",
            },
          },
          lastExitCode: 4549685695499071311,
          restarted: 677107794368448037,
          startTime: "et",
          succeeded: 4409209313945003028,
        },
      ],
      observedGeneration: 7958560307140725875,
      startTime: "accusantium",
      succeeded: 263959742780581007,
    },
  },
};

sdk.namespaces.runNamespacesJobsCreate(req).then((res: RunNamespacesJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsGet` - Get information about a job.
* `runNamespacesJobsList` - List jobs.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
