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
import { GenomicsPipelinesRunRequest, GenomicsPipelinesRunResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GenomicsPipelinesRunRequest = {
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
    dollarXgafv: "2",
    accessToken: "soluta",
    alt: "json",
    callback: "sit",
    fields: "omnis",
    key: "facilis",
    oauthToken: "distinctio",
    prettyPrint: false,
    quotaUser: "architecto",
    uploadType: "et",
    uploadProtocol: "assumenda",
  },
  request: {
    labels: {
      "odio": "doloribus",
    },
    pipeline: {
      actions: [
        {
          commands: [
            "ut",
            "hic",
          ],
          credentials: {
            cipherText: "aspernatur",
            keyName: "natus",
          },
          encryptedEnvironment: {
            cipherText: "nostrum",
            keyName: "nisi",
          },
          entrypoint: "molestiae",
          environment: {
            "et": "cumque",
          },
          flags: [
            "BLOCK_EXTERNAL_NETWORK",
          ],
          imageUri: "ut",
          labels: {
            "ut": "voluptatum",
            "ipsum": "quae",
          },
          mounts: [
            {
              disk: "quia",
              path: "non",
              readOnly: true,
            },
            {
              disk: "repellendus",
              path: "nemo",
              readOnly: false,
            },
          ],
          name: "qui",
          pidNamespace: "dicta",
          portMappings: {
            "est": 2896824219235230529,
          },
          timeout: "eveniet",
        },
      ],
      encryptedEnvironment: {
        cipherText: "et",
        keyName: "nostrum",
      },
      environment: {
        "non": "dolorem",
        "laboriosam": "ea",
        "omnis": "sunt",
      },
      resources: {
        projectId: "et",
        regions: [
          "et",
        ],
        virtualMachine: {
          accelerators: [
            {
              count: "nemo",
              type: "deserunt",
            },
          ],
          bootDiskSizeGb: 2076279485001306565,
          bootImage: "maiores",
          cpuPlatform: "quos",
          disks: [
            {
              name: "et",
              sizeGb: 2418626545759797140,
              sourceImage: "illum",
              type: "quis",
            },
          ],
          dockerCacheImages: [
            "numquam",
            "aliquam",
            "dignissimos",
          ],
          enableStackdriverMonitoring: true,
          labels: {
            "ut": "sequi",
          },
          machineType: "esse",
          network: {
            name: "non",
            subnetwork: "id",
            usePrivateAddress: false,
          },
          nvidiaDriverVersion: "ipsa",
          preemptible: false,
          reservation: "dolorem",
          serviceAccount: {
            email: "a",
            scopes: [
              "amet",
            ],
          },
          volumes: [
            {
              existingDisk: {
                disk: "natus",
              },
              nfsMount: {
                target: "velit",
              },
              persistentDisk: {
                sizeGb: 435428050689545107,
                sourceImage: "alias",
                type: "excepturi",
              },
              volume: "temporibus",
            },
            {
              existingDisk: {
                disk: "ut",
              },
              nfsMount: {
                target: "aliquam",
              },
              persistentDisk: {
                sizeGb: 8603608382322563670,
                sourceImage: "officiis",
                type: "voluptas",
              },
              volume: "aut",
            },
            {
              existingDisk: {
                disk: "voluptatibus",
              },
              nfsMount: {
                target: "rerum",
              },
              persistentDisk: {
                sizeGb: 6103563391960606643,
                sourceImage: "voluptatem",
                type: "in",
              },
              volume: "praesentium",
            },
          ],
        },
        zones: [
          "perspiciatis",
        ],
      },
      timeout: "consectetur",
    },
    pubSubTopic: "voluptatibus",
  },
};

sdk.pipelines.genomicsPipelinesRun(req).then((res: GenomicsPipelinesRunResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### pipelines

* `genomicsPipelinesRun` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `genomicsProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `genomicsProjectsOperationsList` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `genomicsProjectsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `genomicsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
