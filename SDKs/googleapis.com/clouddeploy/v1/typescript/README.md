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
import { ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest, ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "dolorum",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "repellendus",
    alt: "json",
    callback: "commodi",
    deliveryPipelineId: "illo",
    fields: "qui",
    key: "vel",
    oauthToken: "aliquam",
    prettyPrint: true,
    quotaUser: "necessitatibus",
    requestId: "omnis",
    uploadType: "inventore",
    uploadProtocol: "nihil",
    validateOnly: false,
  },
  request: {
    annotations: {
      "mollitia": "et",
      "impedit": "cupiditate",
      "ut": "earum",
    },
    condition: {
      pipelineReadyCondition: {
        status: true,
        updateTime: "atque",
      },
      targetsPresentCondition: {
        missingTargets: [
          "aut",
          "itaque",
          "praesentium",
        ],
        status: true,
        updateTime: "corrupti",
      },
    },
    description: "pariatur",
    etag: "ex",
    labels: {
      "similique": "natus",
    },
    name: "omnis",
    serialPipeline: {
      stages: [
        {
          profiles: [
            "corrupti",
          ],
          strategy: {
            standard: {
              verify: false,
            },
          },
          targetId: "aut",
        },
        {
          profiles: [
            "et",
            "eos",
          ],
          strategy: {
            standard: {
              verify: false,
            },
          },
          targetId: "voluptatem",
        },
        {
          profiles: [
            "deserunt",
          ],
          strategy: {
            standard: {
              verify: false,
            },
          },
          targetId: "aspernatur",
        },
      ],
    },
    suspended: false,
  },
};

sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req).then((res: ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `clouddeployProjectsLocationsDeliveryPipelinesCreate` - Creates a new DeliveryPipeline in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesList` - Lists DeliveryPipelines in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon` - Abandons a Release in the Delivery Pipeline.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate` - Creates a new Release in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesList` - Lists Releases in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove` - Approves a Rollout.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate` - Creates a new Rollout in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList` - Lists JobRuns in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList` - Lists Rollouts in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob` - Retries the specified Job in a Rollout.
* `clouddeployProjectsLocationsList` - Lists information about the supported locations for this service.
* `clouddeployProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `clouddeployProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `clouddeployProjectsLocationsTargetsCreate` - Creates a new Target in a given project and location.
* `clouddeployProjectsLocationsTargetsDelete` - Deletes a single Target.
* `clouddeployProjectsLocationsTargetsGet` - Gets details of a single Target.
* `clouddeployProjectsLocationsTargetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `clouddeployProjectsLocationsTargetsList` - Lists Targets in a given project and location.
* `clouddeployProjectsLocationsTargetsPatch` - Updates the parameters of a single Target.
* `clouddeployProjectsLocationsTargetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `clouddeployProjectsLocationsTargetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
