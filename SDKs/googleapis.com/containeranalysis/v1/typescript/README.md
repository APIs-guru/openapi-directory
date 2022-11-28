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
import { ContaineranalysisProjectsNotesBatchCreateRequest, ContaineranalysisProjectsNotesBatchCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContaineranalysisProjectsNotesBatchCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "dolores",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "eaque",
    alt: "media",
    callback: "asperiores",
    fields: "quasi",
    key: "praesentium",
    oauthToken: "in",
    prettyPrint: false,
    quotaUser: "qui",
    uploadType: "dicta",
    uploadProtocol: "excepturi",
  },
  request: {
    notes: {
      "atque": {
        attestation: {
          hint: {
            humanReadableName: "architecto",
          },
        },
        build: {
          builderVersion: "consequatur",
        },
        compliance: {
          cisBenchmark: {
            profileLevel: 6408885157449401522,
            severity: "MINIMAL",
          },
          description: "et",
          rationale: "similique",
          remediation: "reiciendis",
          scanInstructions: "et",
          title: "repudiandae",
          version: [
            {
              benchmarkDocument: "perferendis",
              cpeUri: "beatae",
              version: "quaerat",
            },
            {
              benchmarkDocument: "quia",
              cpeUri: "eos",
              version: "laudantium",
            },
          ],
        },
        createTime: "asperiores",
        deployment: {
          resourceUri: [
            "aperiam",
            "autem",
          ],
        },
        discovery: {
          analysisKind: "IMAGE",
        },
        dsseAttestation: {
          hint: {
            humanReadableName: "sint",
          },
        },
        expirationTime: "earum",
        image: {
          fingerprint: {
            v1Name: "omnis",
            v2Blob: [
              "vitae",
              "beatae",
              "voluptatem",
            ],
            v2Name: "accusamus",
          },
          resourceUrl: "voluptatum",
        },
        kind: "VULNERABILITY",
        longDescription: "sint",
        name: "consequatur",
        package: {
          architecture: "ARCHITECTURE_UNSPECIFIED",
          cpeUri: "voluptatem",
          description: "officia",
          digest: [
            {
              algo: "et",
              digestBytes: "in",
            },
            {
              algo: "ipsa",
              digestBytes: "iusto",
            },
          ],
          distribution: [
            {
              architecture: "ARCHITECTURE_UNSPECIFIED",
              cpeUri: "sint",
              description: "qui",
              latestVersion: {
                epoch: 8856515308731129739,
                fullName: "in",
                inclusive: false,
                kind: "MINIMUM",
                name: "dignissimos",
                revision: "facere",
              },
              maintainer: "porro",
              url: "illum",
            },
          ],
          license: {
            comments: "dicta",
            expression: "optio",
          },
          maintainer: "odit",
          name: "qui",
          packageType: "exercitationem",
          url: "fugiat",
          version: {
            epoch: 6288504000152364579,
            fullName: "et",
            inclusive: false,
            kind: "NORMAL",
            name: "est",
            revision: "qui",
          },
        },
        relatedNoteNames: [
          "nihil",
        ],
        relatedUrl: [
          {
            label: "sunt",
            url: "laborum",
          },
          {
            label: "ut",
            url: "quod",
          },
          {
            label: "autem",
            url: "ea",
          },
        ],
        shortDescription: "dolore",
        updateTime: "velit",
        upgrade: {
          distributions: [
            {
              classification: "non",
              cpeUri: "fugiat",
              cve: [
                "animi",
                "reprehenderit",
                "voluptatem",
              ],
              severity: "ut",
            },
          ],
          package: "rerum",
          version: {
            epoch: 6338775822404312350,
            fullName: "nemo",
            inclusive: true,
            kind: "MINIMUM",
            name: "dolorum",
            revision: "ut",
          },
          windowsUpdate: {
            categories: [
              {
                categoryId: "autem",
                name: "unde",
              },
            ],
            description: "sit",
            identity: {
              revision: 8794724976011811463,
              updateId: "illo",
            },
            kbArticleIds: [
              "sed",
            ],
            lastPublishedTimestamp: "repellendus",
            supportUrl: "nihil",
            title: "vitae",
          },
        },
        vulnerability: {
          cvssScore: 69.099998,
          cvssV3: {
            attackComplexity: "ATTACK_COMPLEXITY_HIGH",
            attackVector: "ATTACK_VECTOR_ADJACENT",
            availabilityImpact: "IMPACT_UNSPECIFIED",
            baseScore: 39.200001,
            confidentialityImpact: "IMPACT_UNSPECIFIED",
            exploitabilityScore: 30.200001,
            impactScore: 71.199997,
            integrityImpact: "IMPACT_UNSPECIFIED",
            privilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
            scope: "SCOPE_CHANGED",
            userInteraction: "USER_INTERACTION_NONE",
          },
          cvssVersion: "CVSS_VERSION_2",
          details: [
            {
              affectedCpeUri: "tempora",
              affectedPackage: "amet",
              affectedVersionEnd: {
                epoch: 2810521072406894835,
                fullName: "doloremque",
                inclusive: false,
                kind: "MAXIMUM",
                name: "aut",
                revision: "et",
              },
              affectedVersionStart: {
                epoch: 7169743132887921865,
                fullName: "aperiam",
                inclusive: false,
                kind: "MINIMUM",
                name: "hic",
                revision: "quidem",
              },
              description: "quis",
              fixedCpeUri: "dolor",
              fixedPackage: "ut",
              fixedVersion: {
                epoch: 5863948450854302852,
                fullName: "ut",
                inclusive: false,
                kind: "MINIMUM",
                name: "est",
                revision: "voluptatem",
              },
              isObsolete: true,
              packageType: "at",
              severityName: "autem",
              source: "corporis",
              sourceUpdateTime: "voluptatum",
              vendor: "aut",
            },
            {
              affectedCpeUri: "et",
              affectedPackage: "quisquam",
              affectedVersionEnd: {
                epoch: 7029236867252284498,
                fullName: "consectetur",
                inclusive: true,
                kind: "NORMAL",
                name: "reiciendis",
                revision: "eos",
              },
              affectedVersionStart: {
                epoch: 769622730363203195,
                fullName: "possimus",
                inclusive: false,
                kind: "MINIMUM",
                name: "iusto",
                revision: "quisquam",
              },
              description: "ea",
              fixedCpeUri: "maxime",
              fixedPackage: "voluptates",
              fixedVersion: {
                epoch: 4516163747119219783,
                fullName: "est",
                inclusive: false,
                kind: "MINIMUM",
                name: "soluta",
                revision: "assumenda",
              },
              isObsolete: true,
              packageType: "autem",
              severityName: "laudantium",
              source: "enim",
              sourceUpdateTime: "aut",
              vendor: "architecto",
            },
          ],
          severity: "HIGH",
          sourceUpdateTime: "aut",
          windowsDetails: [
            {
              cpeUri: "ut",
              description: "dolorum",
              fixingKbs: [
                {
                  name: "aliquid",
                  url: "exercitationem",
                },
              ],
              name: "alias",
            },
            {
              cpeUri: "autem",
              description: "excepturi",
              fixingKbs: [
                {
                  name: "assumenda",
                  url: "non",
                },
                {
                  name: "et",
                  url: "unde",
                },
              ],
              name: "quia",
            },
            {
              cpeUri: "voluptatum",
              description: "incidunt",
              fixingKbs: [
                {
                  name: "ducimus",
                  url: "corrupti",
                },
                {
                  name: "laboriosam",
                  url: "qui",
                },
              ],
              name: "modi",
            },
          ],
        },
      },
      "dolores": {
        attestation: {
          hint: {
            humanReadableName: "sunt",
          },
        },
        build: {
          builderVersion: "sed",
        },
        compliance: {
          cisBenchmark: {
            profileLevel: 156586821005951173,
            severity: "LOW",
          },
          description: "tempore",
          rationale: "soluta",
          remediation: "non",
          scanInstructions: "amet",
          title: "error",
          version: [
            {
              benchmarkDocument: "explicabo",
              cpeUri: "ducimus",
              version: "est",
            },
            {
              benchmarkDocument: "iste",
              cpeUri: "similique",
              version: "nulla",
            },
          ],
        },
        createTime: "sint",
        deployment: {
          resourceUri: [
            "et",
            "rem",
            "sed",
          ],
        },
        discovery: {
          analysisKind: "UPGRADE",
        },
        dsseAttestation: {
          hint: {
            humanReadableName: "eius",
          },
        },
        expirationTime: "eum",
        image: {
          fingerprint: {
            v1Name: "asperiores",
            v2Blob: [
              "debitis",
            ],
            v2Name: "odio",
          },
          resourceUrl: "esse",
        },
        kind: "ATTESTATION",
        longDescription: "ea",
        name: "sint",
        package: {
          architecture: "ARCHITECTURE_UNSPECIFIED",
          cpeUri: "consequatur",
          description: "et",
          digest: [
            {
              algo: "pariatur",
              digestBytes: "minus",
            },
          ],
          distribution: [
            {
              architecture: "ARCHITECTURE_UNSPECIFIED",
              cpeUri: "consequatur",
              description: "ut",
              latestVersion: {
                epoch: 2243212377013183394,
                fullName: "optio",
                inclusive: true,
                kind: "VERSION_KIND_UNSPECIFIED",
                name: "labore",
                revision: "reprehenderit",
              },
              maintainer: "consectetur",
              url: "eligendi",
            },
          ],
          license: {
            comments: "minima",
            expression: "rerum",
          },
          maintainer: "aut",
          name: "voluptas",
          packageType: "dolorem",
          url: "perspiciatis",
          version: {
            epoch: 2804437921637268738,
            fullName: "laboriosam",
            inclusive: true,
            kind: "NORMAL",
            name: "sit",
            revision: "quam",
          },
        },
        relatedNoteNames: [
          "dolorum",
          "pariatur",
        ],
        relatedUrl: [
          {
            label: "qui",
            url: "temporibus",
          },
          {
            label: "officia",
            url: "aut",
          },
          {
            label: "corporis",
            url: "corporis",
          },
        ],
        shortDescription: "eligendi",
        updateTime: "quo",
        upgrade: {
          distributions: [
            {
              classification: "earum",
              cpeUri: "consequatur",
              cve: [
                "commodi",
              ],
              severity: "perferendis",
            },
            {
              classification: "fugiat",
              cpeUri: "minus",
              cve: [
                "dolores",
                "ut",
                "odit",
              ],
              severity: "corporis",
            },
          ],
          package: "id",
          version: {
            epoch: 3432019385414158726,
            fullName: "excepturi",
            inclusive: true,
            kind: "MAXIMUM",
            name: "voluptatem",
            revision: "ullam",
          },
          windowsUpdate: {
            categories: [
              {
                categoryId: "porro",
                name: "doloremque",
              },
            ],
            description: "dolore",
            identity: {
              revision: 3900874539364457086,
              updateId: "nihil",
            },
            kbArticleIds: [
              "distinctio",
              "magnam",
              "fuga",
            ],
            lastPublishedTimestamp: "voluptas",
            supportUrl: "eius",
            title: "dolores",
          },
        },
        vulnerability: {
          cvssScore: 48.099998,
          cvssV3: {
            attackComplexity: "ATTACK_COMPLEXITY_HIGH",
            attackVector: "ATTACK_VECTOR_PHYSICAL",
            availabilityImpact: "IMPACT_NONE",
            baseScore: 6.100000,
            confidentialityImpact: "IMPACT_NONE",
            exploitabilityScore: 71.199997,
            impactScore: 67.099998,
            integrityImpact: "IMPACT_UNSPECIFIED",
            privilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
            scope: "SCOPE_UNCHANGED",
            userInteraction: "USER_INTERACTION_UNSPECIFIED",
          },
          cvssVersion: "CVSS_VERSION_UNSPECIFIED",
          details: [
            {
              affectedCpeUri: "enim",
              affectedPackage: "rerum",
              affectedVersionEnd: {
                epoch: 4148031594757594594,
                fullName: "quo",
                inclusive: false,
                kind: "VERSION_KIND_UNSPECIFIED",
                name: "sunt",
                revision: "ipsam",
              },
              affectedVersionStart: {
                epoch: 139826008698127399,
                fullName: "dolores",
                inclusive: false,
                kind: "MINIMUM",
                name: "iusto",
                revision: "sit",
              },
              description: "magnam",
              fixedCpeUri: "ea",
              fixedPackage: "accusamus",
              fixedVersion: {
                epoch: 5267402672884233298,
                fullName: "corporis",
                inclusive: true,
                kind: "MAXIMUM",
                name: "dolores",
                revision: "totam",
              },
              isObsolete: true,
              packageType: "libero",
              severityName: "voluptas",
              source: "magnam",
              sourceUpdateTime: "itaque",
              vendor: "et",
            },
            {
              affectedCpeUri: "enim",
              affectedPackage: "molestiae",
              affectedVersionEnd: {
                epoch: 1730254247388449812,
                fullName: "iure",
                inclusive: false,
                kind: "MAXIMUM",
                name: "laudantium",
                revision: "omnis",
              },
              affectedVersionStart: {
                epoch: 5957202480037773714,
                fullName: "reprehenderit",
                inclusive: false,
                kind: "MAXIMUM",
                name: "recusandae",
                revision: "soluta",
              },
              description: "error",
              fixedCpeUri: "reprehenderit",
              fixedPackage: "voluptatum",
              fixedVersion: {
                epoch: 7624688387790099166,
                fullName: "temporibus",
                inclusive: false,
                kind: "MINIMUM",
                name: "a",
                revision: "et",
              },
              isObsolete: false,
              packageType: "soluta",
              severityName: "dolore",
              source: "excepturi",
              sourceUpdateTime: "animi",
              vendor: "in",
            },
          ],
          severity: "SEVERITY_UNSPECIFIED",
          sourceUpdateTime: "eum",
          windowsDetails: [
            {
              cpeUri: "repudiandae",
              description: "aut",
              fixingKbs: [
                {
                  name: "itaque",
                  url: "occaecati",
                },
                {
                  name: "sapiente",
                  url: "voluptate",
                },
              ],
              name: "harum",
            },
            {
              cpeUri: "cumque",
              description: "voluptas",
              fixingKbs: [
                {
                  name: "numquam",
                  url: "id",
                },
              ],
              name: "ut",
            },
          ],
        },
      },
    },
  },
};

sdk.projects.containeranalysisProjectsNotesBatchCreate(req).then((res: ContaineranalysisProjectsNotesBatchCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `containeranalysisProjectsNotesBatchCreate` - Creates new notes in batch.
* `containeranalysisProjectsNotesCreate` - Creates a new note.
* `containeranalysisProjectsNotesList` - Lists notes for the specified project.
* `containeranalysisProjectsNotesOccurrencesList` - Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
* `containeranalysisProjectsOccurrencesBatchCreate` - Creates new occurrences in batch.
* `containeranalysisProjectsOccurrencesCreate` - Creates a new occurrence.
* `containeranalysisProjectsOccurrencesDelete` - Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
* `containeranalysisProjectsOccurrencesGet` - Gets the specified occurrence.
* `containeranalysisProjectsOccurrencesGetIamPolicy` - Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
* `containeranalysisProjectsOccurrencesGetNotes` - Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
* `containeranalysisProjectsOccurrencesGetVulnerabilitySummary` - Gets a summary of the number and severity of occurrences.
* `containeranalysisProjectsOccurrencesList` - Lists occurrences for the specified project.
* `containeranalysisProjectsOccurrencesPatch` - Updates the specified occurrence.
* `containeranalysisProjectsOccurrencesSetIamPolicy` - Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
* `containeranalysisProjectsOccurrencesTestIamPermissions` - Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
