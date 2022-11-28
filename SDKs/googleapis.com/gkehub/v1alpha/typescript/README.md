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
    parent: "rerum",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "delectus",
    alt: "json",
    callback: "assumenda",
    featureId: "fugiat",
    fields: "sed",
    key: "aperiam",
    oauthToken: "vel",
    prettyPrint: false,
    quotaUser: "rerum",
    requestId: "eum",
    uploadType: "rerum",
    uploadProtocol: "et",
  },
  request: {
    labels: {
      "et": "fugiat",
      "nihil": "laboriosam",
    },
    membershipSpecs: {
      "aut": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "officiis",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "minima",
        },
        configmanagement: {
          binauthz: {
            enabled: true,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "aut",
              httpsProxy: "incidunt",
              policyDir: "voluptatem",
              secretType: "in",
              syncBranch: "ut",
              syncRepo: "hic",
              syncRev: "molestiae",
              syncWaitSecs: "omnis",
            },
            oci: {
              gcpServiceAccountEmail: "quibusdam",
              policyDir: "ut",
              secretType: "numquam",
              syncRepo: "aperiam",
              syncWaitSecs: "eligendi",
            },
            preventDrift: false,
            sourceFormat: "ipsam",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: true,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "aspernatur",
            enabled: true,
            exemptableNamespaces: [
              "vel",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryInstalled: false,
          },
          version: "recusandae",
        },
        fleetobservability: {
          "ullam": "id",
          "mollitia": "illo",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "et",
                clientSecret: "sed",
                kubectlRedirectUri: "nihil",
                tenant: "sed",
              },
              googleConfig: {
                disable: true,
              },
              name: "rerum",
              oidcConfig: {
                certificateAuthorityData: "natus",
                clientId: "excepturi",
                clientSecret: "molestiae",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "ex",
                groupPrefix: "quis",
                groupsClaim: "et",
                issuerUri: "laudantium",
                kubectlRedirectUri: "optio",
                scopes: "quae",
                userClaim: "nulla",
                userPrefix: "tempore",
              },
              proxy: "voluptatem",
            },
            {
              azureadConfig: {
                clientId: "quis",
                clientSecret: "atque",
                kubectlRedirectUri: "velit",
                tenant: "ut",
              },
              googleConfig: {
                disable: false,
              },
              name: "dolorem",
              oidcConfig: {
                certificateAuthorityData: "magnam",
                clientId: "praesentium",
                clientSecret: "esse",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "totam",
                groupPrefix: "hic",
                groupsClaim: "porro",
                issuerUri: "accusantium",
                kubectlRedirectUri: "illum",
                scopes: "est",
                userClaim: "deserunt",
                userPrefix: "at",
              },
              proxy: "magnam",
            },
          ],
        },
        mesh: {
          controlPlane: "MANUAL",
          defaultChannel: "STABLE",
          management: "MANAGEMENT_AUTOMATIC",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "excepturi",
            exemptableNamespaces: [
              "fuga",
            ],
            installSpec: "INSTALL_SPEC_SUSPENDED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: true,
            },
          },
          version: "sed",
        },
        workloadcertificate: {
          certificateManagement: "ENABLED",
        },
      },
      "ipsum": {
        anthosobservability: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: false,
          version: "autem",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "incidunt",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "dolorum",
              httpsProxy: "sit",
              policyDir: "tempore",
              secretType: "et",
              syncBranch: "ut",
              syncRepo: "quis",
              syncRev: "officiis",
              syncWaitSecs: "qui",
            },
            oci: {
              gcpServiceAccountEmail: "suscipit",
              policyDir: "eos",
              secretType: "ut",
              syncRepo: "maxime",
              syncWaitSecs: "aut",
            },
            preventDrift: true,
            sourceFormat: "aspernatur",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: true,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "voluptatem",
            enabled: true,
            exemptableNamespaces: [
              "illo",
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
          version: "repudiandae",
        },
        fleetobservability: {
          "aspernatur": "est",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "eaque",
                clientSecret: "earum",
                kubectlRedirectUri: "et",
                tenant: "facere",
              },
              googleConfig: {
                disable: false,
              },
              name: "quam",
              oidcConfig: {
                certificateAuthorityData: "alias",
                clientId: "et",
                clientSecret: "saepe",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "quasi",
                groupPrefix: "autem",
                groupsClaim: "dolorum",
                issuerUri: "dolorem",
                kubectlRedirectUri: "fugit",
                scopes: "voluptates",
                userClaim: "aut",
                userPrefix: "amet",
              },
              proxy: "est",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          defaultChannel: "RAPID",
          management: "MANAGEMENT_UNSPECIFIED",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "inventore",
            exemptableNamespaces: [
              "voluptatem",
              "molestiae",
            ],
            installSpec: "INSTALL_SPEC_SUSPENDED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
                "CLOUD_MONITORING",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: true,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "excepturi",
        },
        workloadcertificate: {
          certificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
        },
      },
      "necessitatibus": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: true,
          version: "vitae",
        },
        cloudbuild: {
          securityPolicy: "SECURITY_POLICY_UNSPECIFIED",
          version: "explicabo",
        },
        configmanagement: {
          binauthz: {
            enabled: true,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "repellendus",
              httpsProxy: "ad",
              policyDir: "corrupti",
              secretType: "doloribus",
              syncBranch: "et",
              syncRepo: "sint",
              syncRev: "ullam",
              syncWaitSecs: "ea",
            },
            oci: {
              gcpServiceAccountEmail: "expedita",
              policyDir: "ratione",
              secretType: "qui",
              syncRepo: "totam",
              syncWaitSecs: "ut",
            },
            preventDrift: false,
            sourceFormat: "consequatur",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: true,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "vero",
            enabled: false,
            exemptableNamespaces: [
              "beatae",
              "aut",
              "dolorem",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
                "MONITORING_BACKEND_UNSPECIFIED",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: true,
            templateLibraryInstalled: true,
          },
          version: "enim",
        },
        fleetobservability: {
          "quia": "quisquam",
          "est": "aliquam",
          "dolores": "ea",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "reprehenderit",
                clientSecret: "molestiae",
                kubectlRedirectUri: "dolorum",
                tenant: "incidunt",
              },
              googleConfig: {
                disable: true,
              },
              name: "quis",
              oidcConfig: {
                certificateAuthorityData: "qui",
                clientId: "temporibus",
                clientSecret: "natus",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "facere",
                groupPrefix: "in",
                groupsClaim: "nisi",
                issuerUri: "dolores",
                kubectlRedirectUri: "voluptatem",
                scopes: "optio",
                userClaim: "eos",
                userPrefix: "tenetur",
              },
              proxy: "libero",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          defaultChannel: "CHANNEL_UNSPECIFIED",
          management: "MANAGEMENT_AUTOMATIC",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "earum",
            exemptableNamespaces: [
              "provident",
              "eligendi",
            ],
            installSpec: "INSTALL_SPEC_UNSPECIFIED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "similique",
        },
        workloadcertificate: {
          certificateManagement: "DISABLED",
        },
      },
    },
    resourceState: {
      state: "DISABLING",
    },
    scopeSpecs: {
      "expedita": {
        "harum": "ratione",
      },
      "in": {
        "ad": "ullam",
        "placeat": "repellat",
        "eius": "ducimus",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "laudantium",
        },
      },
      appdevexperience: {
        "odio": "placeat",
      },
      cloudauditlogging: {
        allowlistedServiceAccounts: [
          "dolorem",
        ],
      },
      fleetobservability: {
        "quis": "vel",
        "corrupti": "dolorem",
      },
      multiclusteringress: {
        billing: "BILLING_UNSPECIFIED",
        configMembership: "eius",
      },
      workloadcertificate: {
        defaultConfig: {
          certificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
        },
        provisionGoogleCa: "DISABLED",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "FAILED",
          description: "sed",
        },
      },
      fleetobservability: {
        "quis": "est",
      },
      state: {
        code: "OK",
        description: "natus",
        updateTime: "consequatur",
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
* `gkehubProjectsLocationsFleetsCreate` - Creates a fleet.
* `gkehubProjectsLocationsFleetsList` - Returns all fleets within an organization or a project that the caller has access to.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsListAdmin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `gkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsMembershipsValidateCreate` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
