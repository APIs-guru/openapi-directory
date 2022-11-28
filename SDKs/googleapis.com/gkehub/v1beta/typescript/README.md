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
    parent: "placeat",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "explicabo",
    alt: "proto",
    callback: "qui",
    featureId: "aut",
    fields: "enim",
    key: "minima",
    oauthToken: "quia",
    prettyPrint: true,
    quotaUser: "distinctio",
    requestId: "non",
    uploadType: "cumque",
    uploadProtocol: "provident",
  },
  request: {
    labels: {
      "ut": "dolor",
    },
    membershipSpecs: {
      "voluptates": {
        anthosobservability: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "laudantium",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "dolor",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "ut",
              httpsProxy: "et",
              policyDir: "nisi",
              secretType: "quo",
              syncBranch: "dolores",
              syncRepo: "aut",
              syncRev: "et",
              syncWaitSecs: "omnis",
            },
            oci: {
              gcpServiceAccountEmail: "recusandae",
              policyDir: "animi",
              secretType: "cumque",
              syncRepo: "deserunt",
              syncWaitSecs: "sapiente",
            },
            preventDrift: true,
            sourceFormat: "laborum",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "autem",
            enabled: false,
            exemptableNamespaces: [
              "neque",
              "vel",
              "dolorem",
            ],
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "qui",
        },
        fleetobservability: {
          "pariatur": "repellat",
          "magni": "quas",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "fuga",
                clientSecret: "et",
                kubectlRedirectUri: "consequatur",
                tenant: "nemo",
              },
              googleConfig: {
                disable: false,
              },
              name: "ab",
              oidcConfig: {
                certificateAuthorityData: "occaecati",
                clientId: "vitae",
                clientSecret: "dolor",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "dicta",
                groupPrefix: "autem",
                groupsClaim: "non",
                issuerUri: "cumque",
                kubectlRedirectUri: "id",
                scopes: "quia",
                userClaim: "aut",
                userPrefix: "placeat",
              },
              proxy: "reprehenderit",
            },
            {
              azureadConfig: {
                clientId: "quos",
                clientSecret: "repudiandae",
                kubectlRedirectUri: "soluta",
                tenant: "impedit",
              },
              googleConfig: {
                disable: false,
              },
              name: "nisi",
              oidcConfig: {
                certificateAuthorityData: "esse",
                clientId: "aut",
                clientSecret: "quia",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "quia",
                groupPrefix: "qui",
                groupsClaim: "voluptatibus",
                issuerUri: "omnis",
                kubectlRedirectUri: "excepturi",
                scopes: "ut",
                userClaim: "aperiam",
                userPrefix: "optio",
              },
              proxy: "ducimus",
            },
            {
              azureadConfig: {
                clientId: "cumque",
                clientSecret: "voluptatem",
                kubectlRedirectUri: "omnis",
                tenant: "at",
              },
              googleConfig: {
                disable: true,
              },
              name: "quia",
              oidcConfig: {
                certificateAuthorityData: "et",
                clientId: "repellendus",
                clientSecret: "eum",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "et",
                groupPrefix: "fugiat",
                groupsClaim: "et",
                issuerUri: "perferendis",
                kubectlRedirectUri: "sint",
                scopes: "ut",
                userClaim: "molestiae",
                userPrefix: "praesentium",
              },
              proxy: "et",
            },
          ],
        },
        mesh: {
          controlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
          management: "MANAGEMENT_UNSPECIFIED",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "voluptatem",
            exemptableNamespaces: [
              "et",
              "facere",
              "perferendis",
            ],
            installSpec: "INSTALL_SPEC_UNSPECIFIED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "MONITORING_BACKEND_UNSPECIFIED",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "ad",
        },
      },
    },
    resourceState: {
      state: "DISABLING",
    },
    scopeSpecs: {
      "qui": {
        "nostrum": "ad",
        "aut": "sed",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: true,
          version: "et",
        },
      },
      appdevexperience: {
        "magnam": "officia",
        "commodi": "et",
      },
      fleetobservability: {
        "ipsam": "harum",
        "eum": "ducimus",
      },
      multiclusteringress: {
        billing: "PAY_AS_YOU_GO",
        configMembership: "inventore",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "CODE_UNSPECIFIED",
          description: "velit",
        },
      },
      fleetobservability: {
        "mollitia": "ducimus",
      },
      state: {
        code: "OK",
        description: "enim",
        updateTime: "illo",
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
* `gkehubProjectsLocationsFeaturesPatch` - Updates an existing Feature.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
