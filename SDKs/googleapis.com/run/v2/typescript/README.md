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
import { RunProjectsLocationsJobsCreateRequest, RunProjectsLocationsJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RunProjectsLocationsJobsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "nihil",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "recusandae",
    alt: "proto",
    callback: "illum",
    fields: "non",
    jobId: "aliquam",
    key: "amet",
    oauthToken: "repellat",
    prettyPrint: false,
    quotaUser: "id",
    uploadType: "saepe",
    uploadProtocol: "ducimus",
    validateOnly: false,
  },
  request: {
    annotations: {
      "rerum": "et",
    },
    binaryAuthorization: {
      breakglassJustification: "fugit",
      useDefault: false,
    },
    client: "non",
    clientVersion: "voluptatem",
    labels: {
      "recusandae": "nam",
      "et": "quas",
      "illo": "sequi",
    },
    latestCreatedExecution: {
      completionTime: "aliquid",
      createTime: "quia",
      name: "soluta",
    },
    launchStage: "EARLY_ACCESS",
    name: "non",
    template: {
      annotations: {
        "fugit": "unde",
        "rerum": "assumenda",
      },
      labels: {
        "in": "asperiores",
      },
      parallelism: 8133177959774302768,
      taskCount: 2088010228750697258,
      template: {
        containers: [
          {
            args: [
              "assumenda",
              "iusto",
              "ut",
            ],
            command: [
              "cum",
              "voluptatum",
              "assumenda",
            ],
            env: [
              {
                name: "incidunt",
                value: "alias",
                valueSource: {
                  secretKeyRef: {
                    secret: "repellat",
                    version: "laudantium",
                  },
                },
              },
            ],
            image: "error",
            livenessProbe: {
              failureThreshold: 2688713530206355012,
              grpc: {
                port: 7797975416061594680,
                service: "quo",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "atque",
                    value: "autem",
                  },
                  {
                    name: "quia",
                    value: "repellendus",
                  },
                ],
                path: "doloribus",
              },
              initialDelaySeconds: 4443577522108449003,
              periodSeconds: 6012277344778440788,
              tcpSocket: {
                port: 4340614223364639070,
              },
              timeoutSeconds: 4866929186078153440,
            },
            name: "ratione",
            ports: [
              {
                containerPort: 6419353881739319704,
                name: "officiis",
              },
            ],
            resources: {
              cpuIdle: true,
              limits: {
                "autem": "explicabo",
                "sit": "exercitationem",
              },
            },
            startupProbe: {
              failureThreshold: 7776858227574719823,
              grpc: {
                port: 8461745410967704242,
                service: "expedita",
              },
              httpGet: {
                httpHeaders: [
                  {
                    name: "aut",
                    value: "consequatur",
                  },
                  {
                    name: "id",
                    value: "esse",
                  },
                ],
                path: "ad",
              },
              initialDelaySeconds: 5318683032343837309,
              periodSeconds: 7329191305231516644,
              tcpSocket: {
                port: 8816393691003044773,
              },
              timeoutSeconds: 4234836057574666443,
            },
            volumeMounts: [
              {
                mountPath: "nisi",
                name: "consequatur",
              },
              {
                mountPath: "voluptas",
                name: "excepturi",
              },
            ],
            workingDir: "laboriosam",
          },
        ],
        encryptionKey: "commodi",
        executionEnvironment: "EXECUTION_ENVIRONMENT_GEN2",
        maxRetries: 2263638279881521272,
        serviceAccount: "ut",
        timeout: "ad",
        volumes: [
          {
            cloudSqlInstance: {
              instances: [
                "quam",
                "ut",
                "ut",
              ],
            },
            name: "maxime",
            secret: {
              defaultMode: 2779996097369498188,
              items: [
                {
                  mode: 1296355341537513384,
                  path: "corrupti",
                  version: "odio",
                },
                {
                  mode: 7715066473898005523,
                  path: "veritatis",
                  version: "dolores",
                },
              ],
              secret: "omnis",
            },
          },
          {
            cloudSqlInstance: {
              instances: [
                "eum",
              ],
            },
            name: "voluptatem",
            secret: {
              defaultMode: 8608591140297173030,
              items: [
                {
                  mode: 4560515961557779437,
                  path: "voluptate",
                  version: "esse",
                },
                {
                  mode: 5562338305340948272,
                  path: "velit",
                  version: "nihil",
                },
              ],
              secret: "cum",
            },
          },
          {
            cloudSqlInstance: {
              instances: [
                "tempora",
                "repellat",
              ],
            },
            name: "corrupti",
            secret: {
              defaultMode: 757858087760365431,
              items: [
                {
                  mode: 976024132249045875,
                  path: "ut",
                  version: "atque",
                },
                {
                  mode: 589641567226220685,
                  path: "et",
                  version: "quia",
                },
              ],
              secret: "laboriosam",
            },
          },
        ],
        vpcAccess: {
          connector: "voluptatem",
          egress: "VPC_EGRESS_UNSPECIFIED",
        },
      },
    },
    terminalCondition: {
      executionReason: "NON_ZERO_EXIT_CODE",
      lastTransitionTime: "quidem",
      message: "sed",
      reason: "CONTAINER_IMAGE_UNAUTHORIZED",
      revisionReason: "MIN_INSTANCES_NOT_PROVISIONED",
      severity: "WARNING",
      state: "CONDITION_SUCCEEDED",
      type: "debitis",
    },
  },
};

sdk.projects.runProjectsLocationsJobsCreate(req).then((res: RunProjectsLocationsJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `runProjectsLocationsJobsCreate` - Creates a Job.
* `runProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `runProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `runProjectsLocationsJobsList` - Lists Jobs.
* `runProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `runProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `runProjectsLocationsServicesCreate` - Creates a new Service in a given project and location.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists Services.
* `runProjectsLocationsServicesPatch` - Updates a Service.
* `runProjectsLocationsServicesRevisionsDelete` - Deletes a Revision.
* `runProjectsLocationsServicesRevisionsGet` - Gets information about a Revision.
* `runProjectsLocationsServicesRevisionsList` - Lists Revisions from a given Service, or from a given location.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
