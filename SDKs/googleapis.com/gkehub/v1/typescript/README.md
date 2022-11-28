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
import { GkehubProjectsLocationsFeaturesCreateRequest, GkehubProjectsLocationsFeaturesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GkehubProjectsLocationsFeaturesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "enim",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "magni",
    alt: "proto",
    callback: "id",
    featureId: "dolor",
    fields: "id",
    key: "ea",
    oauthToken: "error",
    prettyPrint: false,
    quotaUser: "similique",
    requestId: "quo",
    uploadType: "est",
    uploadProtocol: "tenetur",
  },
  request: {
    labels: {
      "quas": "ea",
      "facere": "excepturi",
      "iusto": "corporis",
    },
    membershipSpecs: {
      "blanditiis": {
        configmanagement: {
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "temporibus",
              httpsProxy: "veniam",
              policyDir: "itaque",
              secretType: "sed",
              syncBranch: "sint",
              syncRepo: "nihil",
              syncRev: "cumque",
              syncWaitSecs: "sed",
            },
            oci: {
              gcpServiceAccountEmail: "aut",
              policyDir: "ut",
              secretType: "sit",
              syncRepo: "aut",
              syncWaitSecs: "odit",
            },
            preventDrift: false,
            sourceFormat: "voluptatibus",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: true,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "velit",
            enabled: false,
            exemptableNamespaces: [
              "itaque",
              "id",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "PROMETHEUS",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryInstalled: true,
          },
          version: "rerum",
        },
        fleetobservability: {
          "nostrum": "ex",
          "sint": "ex",
          "atque": "eos",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "molestiae",
                clientSecret: "impedit",
                kubectlRedirectUri: "accusantium",
                tenant: "libero",
              },
              googleConfig: {
                disable: true,
              },
              name: "quo",
              oidcConfig: {
                certificateAuthorityData: "natus",
                clientId: "deserunt",
                clientSecret: "amet",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "sit",
                groupPrefix: "reiciendis",
                groupsClaim: "sint",
                issuerUri: "et",
                kubectlRedirectUri: "unde",
                scopes: "aut",
                userClaim: "molestiae",
                userPrefix: "tempore",
              },
              proxy: "quia",
            },
            {
              azureadConfig: {
                clientId: "dolorem",
                clientSecret: "voluptas",
                kubectlRedirectUri: "omnis",
                tenant: "nulla",
              },
              googleConfig: {
                disable: false,
              },
              name: "ab",
              oidcConfig: {
                certificateAuthorityData: "aut",
                clientId: "natus",
                clientSecret: "ipsum",
                deployCloudConsoleProxy: true,
                enableAccessToken: true,
                extraParams: "voluptatibus",
                groupPrefix: "sequi",
                groupsClaim: "voluptatem",
                issuerUri: "et",
                kubectlRedirectUri: "id",
                scopes: "impedit",
                userClaim: "et",
                userPrefix: "rerum",
              },
              proxy: "consequuntur",
            },
            {
              azureadConfig: {
                clientId: "fugit",
                clientSecret: "aut",
                kubectlRedirectUri: "maxime",
                tenant: "in",
              },
              googleConfig: {
                disable: true,
              },
              name: "sit",
              oidcConfig: {
                certificateAuthorityData: "non",
                clientId: "delectus",
                clientSecret: "et",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "minima",
                groupPrefix: "accusantium",
                groupsClaim: "ut",
                issuerUri: "assumenda",
                kubectlRedirectUri: "saepe",
                scopes: "provident",
                userClaim: "delectus",
                userPrefix: "unde",
              },
              proxy: "similique",
            },
          ],
        },
        mesh: {
          controlPlane: "MANUAL",
          management: "MANAGEMENT_AUTOMATIC",
        },
      },
      "expedita": {
        configmanagement: {
          configSync: {
            allowVerticalScale: true,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "sint",
              httpsProxy: "rerum",
              policyDir: "maiores",
              secretType: "et",
              syncBranch: "sit",
              syncRepo: "veniam",
              syncRev: "ipsum",
              syncWaitSecs: "qui",
            },
            oci: {
              gcpServiceAccountEmail: "aut",
              policyDir: "sunt",
              secretType: "aperiam",
              syncRepo: "numquam",
              syncWaitSecs: "veritatis",
            },
            preventDrift: false,
            sourceFormat: "vero",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: true,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "qui",
            enabled: false,
            exemptableNamespaces: [
              "dolor",
              "et",
              "velit",
            ],
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: true,
            templateLibraryInstalled: false,
          },
          version: "facere",
        },
        fleetobservability: {
          "ad": "quis",
          "iure": "neque",
          "quis": "aspernatur",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "temporibus",
                clientSecret: "culpa",
                kubectlRedirectUri: "soluta",
                tenant: "dolor",
              },
              googleConfig: {
                disable: true,
              },
              name: "eveniet",
              oidcConfig: {
                certificateAuthorityData: "qui",
                clientId: "ut",
                clientSecret: "et",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "voluptatum",
                groupPrefix: "assumenda",
                groupsClaim: "porro",
                issuerUri: "consequatur",
                kubectlRedirectUri: "est",
                scopes: "quasi",
                userClaim: "quaerat",
                userPrefix: "sint",
              },
              proxy: "eveniet",
            },
            {
              azureadConfig: {
                clientId: "dolor",
                clientSecret: "ratione",
                kubectlRedirectUri: "sed",
                tenant: "voluptatum",
              },
              googleConfig: {
                disable: true,
              },
              name: "aut",
              oidcConfig: {
                certificateAuthorityData: "ut",
                clientId: "voluptatem",
                clientSecret: "voluptas",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "quia",
                groupPrefix: "unde",
                groupsClaim: "maiores",
                issuerUri: "qui",
                kubectlRedirectUri: "et",
                scopes: "est",
                userClaim: "vel",
                userPrefix: "deserunt",
              },
              proxy: "necessitatibus",
            },
            {
              azureadConfig: {
                clientId: "voluptatem",
                clientSecret: "vel",
                kubectlRedirectUri: "facilis",
                tenant: "aut",
              },
              googleConfig: {
                disable: false,
              },
              name: "sequi",
              oidcConfig: {
                certificateAuthorityData: "tempora",
                clientId: "id",
                clientSecret: "eveniet",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "quam",
                groupPrefix: "perspiciatis",
                groupsClaim: "saepe",
                issuerUri: "et",
                kubectlRedirectUri: "consequatur",
                scopes: "sunt",
                userClaim: "vero",
                userPrefix: "aut",
              },
              proxy: "consequatur",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          management: "MANAGEMENT_MANUAL",
        },
      },
    },
    resourceState: {
      state: "SERVICE_UPDATING",
    },
    scopeSpecs: {
      "voluptatem": {
        "et": "quia",
        "nam": "veritatis",
        "ad": "dolores",
      },
    },
    spec: {
      appdevexperience: {
        "animi": "dicta",
      },
      fleetobservability: {
        "et": "in",
      },
      multiclusteringress: {
        configMembership: "repellendus",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "UNKNOWN",
          description: "repudiandae",
        },
      },
      fleetobservability: {
        "iste": "maxime",
        "earum": "repudiandae",
        "facere": "rerum",
      },
      state: {
        code: "OK",
        description: "dolorum",
        updateTime: "ab",
      },
    },
  },
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
