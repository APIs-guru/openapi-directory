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
import { CloudfunctionsProjectsLocationsFunctionsCreateRequest, CloudfunctionsProjectsLocationsFunctionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudfunctionsProjectsLocationsFunctionsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "illo",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "atque",
    alt: "json",
    callback: "incidunt",
    fields: "at",
    functionId: "dolor",
    key: "totam",
    oauthToken: "qui",
    prettyPrint: true,
    quotaUser: "saepe",
    uploadType: "qui",
    uploadProtocol: "vel",
  },
  request: {
    buildConfig: {
      buildpackStack: "accusamus",
      dockerRegistry: "CONTAINER_REGISTRY",
      dockerRepository: "architecto",
      entryPoint: "harum",
      environmentVariables: {
        "omnis": "aspernatur",
      },
      runtime: "eum",
      source: {
        repoSource: {
          branchName: "id",
          commitSha: "quo",
          dir: "unde",
          invertRegex: true,
          projectId: "itaque",
          repoName: "ut",
          tagName: "voluptatibus",
        },
        storageSource: {
          bucket: "laborum",
          generation: "unde",
          object: "aliquam",
        },
      },
      sourceProvenance: {
        resolvedRepoSource: {
          branchName: "omnis",
          commitSha: "in",
          dir: "iusto",
          invertRegex: true,
          projectId: "incidunt",
          repoName: "et",
          tagName: "et",
        },
        resolvedStorageSource: {
          bucket: "nisi",
          generation: "laboriosam",
          object: "repellat",
        },
      },
      workerPool: "molestias",
    },
    description: "velit",
    environment: "ENVIRONMENT_UNSPECIFIED",
    eventTrigger: {
      channel: "sed",
      eventFilters: [
        {
          attribute: "deleniti",
          operator: "in",
          value: "reiciendis",
        },
        {
          attribute: "et",
          operator: "blanditiis",
          value: "nemo",
        },
      ],
      eventType: "officiis",
      pubsubTopic: "sed",
      retryPolicy: "RETRY_POLICY_RETRY",
      serviceAccountEmail: "est",
      triggerRegion: "quo",
    },
    labels: {
      "nam": "exercitationem",
    },
    name: "iusto",
    serviceConfig: {
      allTrafficOnLatestRevision: true,
      availableMemory: "incidunt",
      environmentVariables: {
        "molestiae": "assumenda",
        "quae": "quia",
        "et": "architecto",
      },
      ingressSettings: "ALLOW_INTERNAL_AND_GCLB",
      maxInstanceCount: 1249372551754401195,
      minInstanceCount: 2612374165539454459,
      secretEnvironmentVariables: [
        {
          key: "quo",
          projectId: "consequuntur",
          secret: "quia",
          version: "et",
        },
        {
          key: "sequi",
          projectId: "aut",
          secret: "quibusdam",
          version: "ipsum",
        },
        {
          key: "assumenda",
          projectId: "laborum",
          secret: "quidem",
          version: "aliquam",
        },
      ],
      secretVolumes: [
        {
          mountPath: "omnis",
          projectId: "sint",
          secret: "qui",
          versions: [
            {
              path: "perspiciatis",
              version: "excepturi",
            },
            {
              path: "quis",
              version: "illo",
            },
            {
              path: "magnam",
              version: "perspiciatis",
            },
          ],
        },
        {
          mountPath: "deserunt",
          projectId: "ratione",
          secret: "est",
          versions: [
            {
              path: "sit",
              version: "voluptas",
            },
            {
              path: "est",
              version: "labore",
            },
            {
              path: "dolorum",
              version: "exercitationem",
            },
          ],
        },
        {
          mountPath: "illum",
          projectId: "tempora",
          secret: "animi",
          versions: [
            {
              path: "voluptatibus",
              version: "sed",
            },
          ],
        },
      ],
      securityLevel: "SECURITY_LEVEL_UNSPECIFIED",
      serviceAccountEmail: "enim",
      timeoutSeconds: 9009814317629227096,
      vpcConnector: "et",
      vpcConnectorEgressSettings: "ALL_TRAFFIC",
    },
  },
};

sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req).then((res: CloudfunctionsProjectsLocationsFunctionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudfunctionsProjectsLocationsFunctionsCreate` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctionsProjectsLocationsFunctionsDelete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctionsProjectsLocationsFunctionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudfunctionsProjectsLocationsFunctionsList` - Returns a list of functions that belong to the requested project.
* `cloudfunctionsProjectsLocationsFunctionsPatch` - Updates existing function.
* `cloudfunctionsProjectsLocationsFunctionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudfunctionsProjectsLocationsFunctionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudfunctionsProjectsLocationsList` - Lists information about the supported locations for this service.
* `cloudfunctionsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `cloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
