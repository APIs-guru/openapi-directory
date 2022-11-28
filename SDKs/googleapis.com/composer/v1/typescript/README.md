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
import { ComposerProjectsLocationsEnvironmentsCreateRequest, ComposerProjectsLocationsEnvironmentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ComposerProjectsLocationsEnvironmentsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "corporis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "consequatur",
    alt: "media",
    callback: "tempora",
    fields: "in",
    key: "sed",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "assumenda",
    uploadType: "est",
    uploadProtocol: "consequatur",
  },
  request: {
    config: {
      airflowUri: "ipsa",
      dagGcsPrefix: "ut",
      databaseConfig: {
        machineType: "iure",
      },
      encryptionConfig: {
        kmsKeyName: "dicta",
      },
      environmentSize: "ENVIRONMENT_SIZE_UNSPECIFIED",
      gkeCluster: "voluptatem",
      maintenanceWindow: {
        endTime: "sit",
        recurrence: "qui",
        startTime: "autem",
      },
      masterAuthorizedNetworksConfig: {
        cidrBlocks: [
          {
            cidrBlock: "fugiat",
            displayName: "eligendi",
          },
          {
            cidrBlock: "quia",
            displayName: "neque",
          },
        ],
        enabled: true,
      },
      nodeConfig: {
        diskSizeGb: 4168920819476378105,
        enableIpMasqAgent: true,
        ipAllocationPolicy: {
          clusterIpv4CidrBlock: "aut",
          clusterSecondaryRangeName: "sit",
          servicesIpv4CidrBlock: "in",
          servicesSecondaryRangeName: "sunt",
          useIpAliases: true,
        },
        location: "ullam",
        machineType: "consequuntur",
        network: "aperiam",
        oauthScopes: [
          "repellendus",
          "natus",
          "consectetur",
        ],
        serviceAccount: "unde",
        subnetwork: "ut",
        tags: [
          "ut",
          "qui",
          "aspernatur",
        ],
      },
      nodeCount: 2279341170733245843,
      privateEnvironmentConfig: {
        cloudComposerConnectionSubnetwork: "quas",
        cloudComposerNetworkIpv4CidrBlock: "distinctio",
        cloudSqlIpv4CidrBlock: "saepe",
        enablePrivateEnvironment: true,
        enablePrivatelyUsedPublicIps: false,
        networkingConfig: {
          connectionType: "CONNECTION_TYPE_UNSPECIFIED",
        },
        privateClusterConfig: {
          enablePrivateEndpoint: false,
          masterIpv4CidrBlock: "nesciunt",
        },
        webServerIpv4CidrBlock: "rem",
      },
      softwareConfig: {
        airflowConfigOverrides: {
          "ratione": "placeat",
          "quam": "odit",
          "voluptate": "ipsum",
        },
        envVariables: {
          "pariatur": "dicta",
          "nulla": "tenetur",
        },
        imageVersion: "et",
        pypiPackages: {
          "ut": "modi",
          "consequuntur": "ducimus",
          "molestiae": "voluptas",
        },
        pythonVersion: "facilis",
        schedulerCount: 2867322181936390622,
      },
      webServerConfig: {
        machineType: "modi",
      },
      webServerNetworkAccessControl: {
        allowedIpRanges: [
          {
            description: "quasi",
            value: "necessitatibus",
          },
        ],
      },
      workloadsConfig: {
        scheduler: {
          count: 3406083734481139106,
          cpu: 7.100000,
          memoryGb: 34.099998,
          storageGb: 50.099998,
        },
        webServer: {
          cpu: 80.099998,
          memoryGb: 75.099998,
          storageGb: 88.199997,
        },
        worker: {
          cpu: 3.200000,
          maxCount: 8764901745431848692,
          memoryGb: 61.099998,
          minCount: 3415318281050260438,
          storageGb: 35.200001,
        },
      },
    },
    createTime: "dolores",
    labels: {
      "tempora": "aliquam",
      "in": "iusto",
    },
    name: "reiciendis",
    state: "CREATING",
    updateTime: "laudantium",
    uuid: "quae",
  },
};

sdk.projects.composerProjectsLocationsEnvironmentsCreate(req).then((res: ComposerProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `composerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `composerProjectsLocationsEnvironmentsList` - List environments.
* `composerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `composerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `composerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
