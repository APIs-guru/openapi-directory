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
import { OsconfigProjectsGuestPoliciesCreateRequest, OsconfigProjectsGuestPoliciesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: OsconfigProjectsGuestPoliciesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "earum",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "laboriosam",
    alt: "media",
    callback: "quam",
    fields: "aut",
    guestPolicyId: "aut",
    key: "est",
    oauthToken: "similique",
    prettyPrint: true,
    quotaUser: "dolor",
    uploadType: "et",
    uploadProtocol: "est",
  },
  request: {
    assignment: {
      groupLabels: [
        {
          labels: {
            "fugit": "expedita",
          },
        },
      ],
      instanceNamePrefixes: [
        "neque",
        "quia",
      ],
      instances: [
        "soluta",
        "non",
        "et",
      ],
      osTypes: [
        {
          osArchitecture: "eius",
          osShortName: "aut",
          osVersion: "provident",
        },
      ],
      zones: [
        "dolorem",
      ],
    },
    description: "cum",
    etag: "earum",
    name: "harum",
    packageRepositories: [
      {
        apt: {
          archiveType: "DEB_SRC",
          components: [
            "voluptatem",
          ],
          distribution: "quae",
          gpgKey: "ea",
          uri: "quia",
        },
        goo: {
          name: "dolorem",
          url: "beatae",
        },
        yum: {
          baseUrl: "voluptatem",
          displayName: "dolor",
          gpgKeys: [
            "dolorem",
            "sunt",
          ],
          id: "ut",
        },
        zypper: {
          baseUrl: "quia",
          displayName: "dolorum",
          gpgKeys: [
            "non",
          ],
          id: "dolor",
        },
      },
      {
        apt: {
          archiveType: "DEB",
          components: [
            "omnis",
          ],
          distribution: "vitae",
          gpgKey: "dolorem",
          uri: "voluptas",
        },
        goo: {
          name: "molestiae",
          url: "debitis",
        },
        yum: {
          baseUrl: "et",
          displayName: "et",
          gpgKeys: [
            "animi",
            "dolore",
          ],
          id: "dolores",
        },
        zypper: {
          baseUrl: "nihil",
          displayName: "quas",
          gpgKeys: [
            "nemo",
          ],
          id: "aut",
        },
      },
      {
        apt: {
          archiveType: "DEB",
          components: [
            "in",
          ],
          distribution: "quia",
          gpgKey: "quidem",
          uri: "sunt",
        },
        goo: {
          name: "tempora",
          url: "blanditiis",
        },
        yum: {
          baseUrl: "reiciendis",
          displayName: "ad",
          gpgKeys: [
            "explicabo",
            "enim",
            "nihil",
          ],
          id: "eius",
        },
        zypper: {
          baseUrl: "ut",
          displayName: "maiores",
          gpgKeys: [
            "adipisci",
            "ab",
          ],
          id: "quia",
        },
      },
    ],
    packages: [
      {
        desiredState: "DESIRED_STATE_UNSPECIFIED",
        manager: "APT",
        name: "aspernatur",
      },
    ],
    recipes: [
      {
        artifacts: [
          {
            allowInsecure: false,
            gcs: {
              bucket: "ipsam",
              generation: "omnis",
              object: "nam",
            },
            id: "sint",
            remote: {
              checksum: "minus",
              uri: "et",
            },
          },
          {
            allowInsecure: true,
            gcs: {
              bucket: "sapiente",
              generation: "explicabo",
              object: "architecto",
            },
            id: "quam",
            remote: {
              checksum: "alias",
              uri: "similique",
            },
          },
          {
            allowInsecure: false,
            gcs: {
              bucket: "est",
              generation: "aut",
              object: "repellat",
            },
            id: "qui",
            remote: {
              checksum: "aut",
              uri: "distinctio",
            },
          },
        ],
        desiredState: "DESIRED_STATE_UNSPECIFIED",
        installSteps: [
          {
            archiveExtraction: {
              artifactId: "cum",
              destination: "est",
              type: "TAR",
            },
            dpkgInstallation: {
              artifactId: "atque",
            },
            fileCopy: {
              artifactId: "eum",
              destination: "similique",
              overwrite: true,
              permissions: "deleniti",
            },
            fileExec: {
              allowedExitCodes: [
                7122569346342062927,
              ],
              args: [
                "hic",
              ],
              artifactId: "aperiam",
              localPath: "asperiores",
            },
            msiInstallation: {
              allowedExitCodes: [
                2178124038817671216,
                2444525000112152390,
              ],
              artifactId: "quam",
              flags: [
                "officiis",
              ],
            },
            rpmInstallation: {
              artifactId: "molestias",
            },
            scriptRun: {
              allowedExitCodes: [
                9039477044149418637,
              ],
              interpreter: "POWERSHELL",
              script: "rerum",
            },
          },
        ],
        name: "rerum",
        updateSteps: [
          {
            archiveExtraction: {
              artifactId: "similique",
              destination: "alias",
              type: "ARCHIVE_TYPE_UNSPECIFIED",
            },
            dpkgInstallation: {
              artifactId: "consequuntur",
            },
            fileCopy: {
              artifactId: "fuga",
              destination: "quos",
              overwrite: true,
              permissions: "facere",
            },
            fileExec: {
              allowedExitCodes: [
                6177610145225093962,
                465178855250046112,
                3551547707500116900,
              ],
              args: [
                "et",
                "facere",
                "et",
              ],
              artifactId: "officiis",
              localPath: "similique",
            },
            msiInstallation: {
              allowedExitCodes: [
                6900656949720075118,
              ],
              artifactId: "sit",
              flags: [
                "sed",
              ],
            },
            rpmInstallation: {
              artifactId: "esse",
            },
            scriptRun: {
              allowedExitCodes: [
                4708595733770981717,
              ],
              interpreter: "INTERPRETER_UNSPECIFIED",
              script: "culpa",
            },
          },
          {
            archiveExtraction: {
              artifactId: "deleniti",
              destination: "corporis",
              type: "ARCHIVE_TYPE_UNSPECIFIED",
            },
            dpkgInstallation: {
              artifactId: "quo",
            },
            fileCopy: {
              artifactId: "dolorem",
              destination: "saepe",
              overwrite: true,
              permissions: "et",
            },
            fileExec: {
              allowedExitCodes: [
                14991002672757812,
              ],
              args: [
                "tempora",
                "et",
                "quia",
              ],
              artifactId: "porro",
              localPath: "officia",
            },
            msiInstallation: {
              allowedExitCodes: [
                1902411893298843288,
                263922135336930585,
                926545870077699743,
              ],
              artifactId: "tempore",
              flags: [
                "similique",
                "laborum",
                "voluptates",
              ],
            },
            rpmInstallation: {
              artifactId: "iure",
            },
            scriptRun: {
              allowedExitCodes: [
                7440842171506281591,
                3826893327860544255,
              ],
              interpreter: "SHELL",
              script: "eum",
            },
          },
        ],
        version: "culpa",
      },
    ],
  },
};

sdk.projects.osconfigProjectsGuestPoliciesCreate(req).then((res: OsconfigProjectsGuestPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `osconfigProjectsGuestPoliciesCreate` - Create an OS Config guest policy.
* `osconfigProjectsGuestPoliciesList` - Get a page of OS Config guest policies.
* `osconfigProjectsPatchDeploymentsCreate` - Create an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsDelete` - Delete an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsList` - Get a page of OS Config patch deployments.
* `osconfigProjectsPatchDeploymentsPatch` - Update an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsPause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `osconfigProjectsPatchDeploymentsResume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `osconfigProjectsPatchJobsCancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `osconfigProjectsPatchJobsExecute` - Patch VM instances by creating and running a patch job.
* `osconfigProjectsPatchJobsGet` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `osconfigProjectsPatchJobsInstanceDetailsList` - Get a list of instance details for a given patch job.
* `osconfigProjectsPatchJobsList` - Get a list of patch jobs.
* `osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
