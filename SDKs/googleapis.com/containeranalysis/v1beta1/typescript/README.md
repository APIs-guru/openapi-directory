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
    parent: "et",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "sed",
    alt: "media",
    callback: "dolorem",
    fields: "soluta",
    key: "at",
    oauthToken: "et",
    prettyPrint: false,
    quotaUser: "corrupti",
    uploadType: "ut",
    uploadProtocol: "cupiditate",
  },
  request: {
    notes: {
      "corporis": {
        attestationAuthority: {
          hint: {
            humanReadableName: "non",
          },
        },
        baseImage: {
          fingerprint: {
            v1Name: "rerum",
            v2Blob: [
              "sed",
              "perspiciatis",
            ],
            v2Name: "sed",
          },
          resourceUrl: "officia",
        },
        build: {
          builderVersion: "quia",
          signature: {
            keyId: "officia",
            keyType: "PKIX_PEM",
            publicKey: "aut",
            signature: "nam",
          },
        },
        createTime: "itaque",
        deployable: {
          resourceUri: [
            "recusandae",
            "optio",
          ],
        },
        discovery: {
          analysisKind: "SPDX_FILE",
        },
        expirationTime: "incidunt",
        intoto: {
          expectedCommand: [
            "ut",
          ],
          expectedMaterials: [
            {
              artifactRule: [
                "eveniet",
                "harum",
              ],
            },
            {
              artifactRule: [
                "aspernatur",
                "rerum",
                "eveniet",
              ],
            },
          ],
          expectedProducts: [
            {
              artifactRule: [
                "illo",
                "assumenda",
              ],
            },
            {
              artifactRule: [
                "libero",
                "ad",
              ],
            },
          ],
          signingKeys: [
            {
              keyId: "ea",
              keyScheme: "voluptatum",
              keyType: "doloribus",
              publicKeyValue: "atque",
            },
            {
              keyId: "qui",
              keyScheme: "consequuntur",
              keyType: "omnis",
              publicKeyValue: "consequatur",
            },
            {
              keyId: "sapiente",
              keyScheme: "occaecati",
              keyType: "necessitatibus",
              publicKeyValue: "perspiciatis",
            },
          ],
          stepName: "voluptatem",
          threshold: "voluptatem",
        },
        kind: "DISCOVERY",
        longDescription: "modi",
        name: "sed",
        package: {
          architecture: "ARCHITECTURE_UNSPECIFIED",
          cpeUri: "eum",
          description: "debitis",
          digest: [
            {
              algo: "quia",
              digestBytes: "quia",
            },
            {
              algo: "et",
              digestBytes: "fugiat",
            },
            {
              algo: "dolorem",
              digestBytes: "nihil",
            },
          ],
          distribution: [
            {
              architecture: "X64",
              cpeUri: "molestias",
              description: "adipisci",
              latestVersion: {
                epoch: 3412781772504123103,
                inclusive: false,
                kind: "MAXIMUM",
                name: "illo",
                revision: "tempora",
              },
              maintainer: "fuga",
              url: "et",
            },
            {
              architecture: "ARCHITECTURE_UNSPECIFIED",
              cpeUri: "odio",
              description: "quasi",
              latestVersion: {
                epoch: 1066238610314739485,
                inclusive: true,
                kind: "MAXIMUM",
                name: "fugit",
                revision: "ipsa",
              },
              maintainer: "odit",
              url: "officiis",
            },
            {
              architecture: "X64",
              cpeUri: "nisi",
              description: "quasi",
              latestVersion: {
                epoch: 1391316615603342607,
                inclusive: true,
                kind: "MAXIMUM",
                name: "ut",
                revision: "aliquam",
              },
              maintainer: "est",
              url: "quis",
            },
          ],
          license: {
            comments: "aut",
            expression: "magni",
          },
          maintainer: "officia",
          name: "et",
          packageType: "velit",
          url: "aut",
          version: {
            epoch: 3578839472490561508,
            inclusive: true,
            kind: "MAXIMUM",
            name: "laudantium",
            revision: "delectus",
          },
        },
        relatedNoteNames: [
          "libero",
        ],
        relatedUrl: [
          {
            label: "rerum",
            url: "omnis",
          },
        ],
        sbom: {
          dataLicence: "non",
          spdxVersion: "eaque",
        },
        shortDescription: "dicta",
        spdxFile: {
          checksum: [
            "maiores",
            "quis",
            "dolorum",
          ],
          fileType: "OTHER",
          title: "fugiat",
        },
        spdxPackage: {
          analyzed: true,
          attribution: "maxime",
          checksum: "ut",
          copyright: "aut",
          detailedDescription: "omnis",
          downloadLocation: "deleniti",
          externalRefs: [
            {
              category: "PERSISTENT_ID",
              comment: "ut",
              locator: "ad",
              type: "impedit",
            },
          ],
          filesLicenseInfo: [
            "velit",
            "ea",
            "quidem",
          ],
          homePage: "voluptatem",
          licenseDeclared: {
            comments: "illo",
            expression: "voluptatem",
          },
          originator: "et",
          packageType: "tenetur",
          summaryDescription: "aspernatur",
          supplier: "officiis",
          title: "corrupti",
          verificationCode: "possimus",
          version: "molestiae",
        },
        spdxRelationship: {
          type: "DEV_DEPENDENCY_OF",
        },
        updateTime: "dolor",
        vulnerability: {
          cvssScore: 73.099998,
          cvssV2: {
            attackComplexity: "ATTACK_COMPLEXITY_HIGH",
            attackVector: "ATTACK_VECTOR_ADJACENT",
            authentication: "AUTHENTICATION_MULTIPLE",
            availabilityImpact: "IMPACT_PARTIAL",
            baseScore: 51.099998,
            confidentialityImpact: "IMPACT_UNSPECIFIED",
            exploitabilityScore: 59.099998,
            impactScore: 76.199997,
            integrityImpact: "IMPACT_PARTIAL",
            privilegesRequired: "PRIVILEGES_REQUIRED_HIGH",
            scope: "SCOPE_CHANGED",
            userInteraction: "USER_INTERACTION_REQUIRED",
          },
          cvssV3: {
            attackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
            attackVector: "ATTACK_VECTOR_UNSPECIFIED",
            availabilityImpact: "IMPACT_NONE",
            baseScore: 5.100000,
            confidentialityImpact: "IMPACT_HIGH",
            exploitabilityScore: 40.099998,
            impactScore: 26.100000,
            integrityImpact: "IMPACT_HIGH",
            privilegesRequired: "PRIVILEGES_REQUIRED_HIGH",
            scope: "SCOPE_UNSPECIFIED",
            userInteraction: "USER_INTERACTION_REQUIRED",
          },
          cvssVersion: "CVSS_VERSION_3",
          cwe: [
            "autem",
            "est",
          ],
          details: [
            {
              cpeUri: "illo",
              description: "placeat",
              fixedLocation: {
                cpeUri: "distinctio",
                package: "alias",
                version: {
                  epoch: 2327978081091227784,
                  inclusive: true,
                  kind: "MAXIMUM",
                  name: "voluptatibus",
                  revision: "consequatur",
                },
              },
              isObsolete: true,
              maxAffectedVersion: {
                epoch: 5836363067191062363,
                inclusive: true,
                kind: "VERSION_KIND_UNSPECIFIED",
                name: "praesentium",
                revision: "dolor",
              },
              minAffectedVersion: {
                epoch: 7080138457793696380,
                inclusive: false,
                kind: "MINIMUM",
                name: "et",
                revision: "rerum",
              },
              package: "ut",
              packageType: "aspernatur",
              severityName: "impedit",
              source: "eius",
              sourceUpdateTime: "adipisci",
              vendor: "ducimus",
            },
          ],
          severity: "LOW",
          sourceUpdateTime: "facere",
          windowsDetails: [
            {
              cpeUri: "ut",
              description: "cumque",
              fixingKbs: [
                {
                  name: "voluptatem",
                  url: "vel",
                },
                {
                  name: "harum",
                  url: "id",
                },
                {
                  name: "iste",
                  url: "tempore",
                },
              ],
              name: "ex",
            },
            {
              cpeUri: "distinctio",
              description: "architecto",
              fixingKbs: [
                {
                  name: "ea",
                  url: "laboriosam",
                },
                {
                  name: "et",
                  url: "placeat",
                },
              ],
              name: "qui",
            },
            {
              cpeUri: "odio",
              description: "aliquid",
              fixingKbs: [
                {
                  name: "quas",
                  url: "non",
                },
              ],
              name: "et",
            },
          ],
        },
      },
      "eius": {
        attestationAuthority: {
          hint: {
            humanReadableName: "nemo",
          },
        },
        baseImage: {
          fingerprint: {
            v1Name: "aperiam",
            v2Blob: [
              "omnis",
              "perferendis",
              "ut",
            ],
            v2Name: "asperiores",
          },
          resourceUrl: "ipsum",
        },
        build: {
          builderVersion: "est",
          signature: {
            keyId: "omnis",
            keyType: "KEY_TYPE_UNSPECIFIED",
            publicKey: "dicta",
            signature: "placeat",
          },
        },
        createTime: "ut",
        deployable: {
          resourceUri: [
            "sequi",
            "aut",
            "asperiores",
          ],
        },
        discovery: {
          analysisKind: "SBOM",
        },
        expirationTime: "et",
        intoto: {
          expectedCommand: [
            "voluptas",
          ],
          expectedMaterials: [
            {
              artifactRule: [
                "ut",
                "facere",
                "eos",
              ],
            },
            {
              artifactRule: [
                "et",
              ],
            },
            {
              artifactRule: [
                "voluptate",
                "minima",
                "totam",
              ],
            },
          ],
          expectedProducts: [
            {
              artifactRule: [
                "dolorem",
                "quo",
                "culpa",
              ],
            },
          ],
          signingKeys: [
            {
              keyId: "quia",
              keyScheme: "sed",
              keyType: "perferendis",
              publicKeyValue: "possimus",
            },
          ],
          stepName: "nisi",
          threshold: "aliquam",
        },
        kind: "VULNERABILITY",
        longDescription: "sed",
        name: "nihil",
        package: {
          architecture: "X86",
          cpeUri: "reiciendis",
          description: "nostrum",
          digest: [
            {
              algo: "atque",
              digestBytes: "similique",
            },
            {
              algo: "voluptate",
              digestBytes: "inventore",
            },
          ],
          distribution: [
            {
              architecture: "ARCHITECTURE_UNSPECIFIED",
              cpeUri: "ex",
              description: "laboriosam",
              latestVersion: {
                epoch: 6363965034726191287,
                inclusive: false,
                kind: "NORMAL",
                name: "voluptatibus",
                revision: "magni",
              },
              maintainer: "est",
              url: "accusantium",
            },
            {
              architecture: "ARCHITECTURE_UNSPECIFIED",
              cpeUri: "sint",
              description: "inventore",
              latestVersion: {
                epoch: 6434815889137636530,
                inclusive: false,
                kind: "MINIMUM",
                name: "aperiam",
                revision: "distinctio",
              },
              maintainer: "ea",
              url: "iste",
            },
            {
              architecture: "X86",
              cpeUri: "quae",
              description: "facilis",
              latestVersion: {
                epoch: 434770091902266907,
                inclusive: false,
                kind: "MAXIMUM",
                name: "maxime",
                revision: "consequatur",
              },
              maintainer: "qui",
              url: "et",
            },
          ],
          license: {
            comments: "qui",
            expression: "omnis",
          },
          maintainer: "debitis",
          name: "reprehenderit",
          packageType: "corrupti",
          url: "et",
          version: {
            epoch: 7129289965069529682,
            inclusive: true,
            kind: "MAXIMUM",
            name: "et",
            revision: "debitis",
          },
        },
        relatedNoteNames: [
          "id",
          "dolores",
          "ullam",
        ],
        relatedUrl: [
          {
            label: "porro",
            url: "dolor",
          },
          {
            label: "pariatur",
            url: "pariatur",
          },
        ],
        sbom: {
          dataLicence: "voluptatem",
          spdxVersion: "itaque",
        },
        shortDescription: "explicabo",
        spdxFile: {
          checksum: [
            "quos",
          ],
          fileType: "AUDIO",
          title: "et",
        },
        spdxPackage: {
          analyzed: true,
          attribution: "qui",
          checksum: "quae",
          copyright: "id",
          detailedDescription: "ut",
          downloadLocation: "at",
          externalRefs: [
            {
              category: "PACKAGE_MANAGER",
              comment: "sunt",
              locator: "consequuntur",
              type: "quo",
            },
            {
              category: "PACKAGE_MANAGER",
              comment: "modi",
              locator: "voluptatem",
              type: "et",
            },
          ],
          filesLicenseInfo: [
            "nam",
            "vel",
          ],
          homePage: "fugit",
          licenseDeclared: {
            comments: "tenetur",
            expression: "consequuntur",
          },
          originator: "fugit",
          packageType: "quia",
          summaryDescription: "molestiae",
          supplier: "voluptate",
          title: "et",
          verificationCode: "quos",
          version: "tempore",
        },
        spdxRelationship: {
          type: "PROVIDED_DEPENDENCY_OF",
        },
        updateTime: "aut",
        vulnerability: {
          cvssScore: 96.199997,
          cvssV2: {
            attackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
            attackVector: "ATTACK_VECTOR_NETWORK",
            authentication: "AUTHENTICATION_NONE",
            availabilityImpact: "IMPACT_COMPLETE",
            baseScore: 59.200001,
            confidentialityImpact: "IMPACT_COMPLETE",
            exploitabilityScore: 11.100000,
            impactScore: 52.099998,
            integrityImpact: "IMPACT_HIGH",
            privilegesRequired: "PRIVILEGES_REQUIRED_NONE",
            scope: "SCOPE_UNSPECIFIED",
            userInteraction: "USER_INTERACTION_REQUIRED",
          },
          cvssV3: {
            attackComplexity: "ATTACK_COMPLEXITY_HIGH",
            attackVector: "ATTACK_VECTOR_PHYSICAL",
            availabilityImpact: "IMPACT_LOW",
            baseScore: 2.200000,
            confidentialityImpact: "IMPACT_UNSPECIFIED",
            exploitabilityScore: 35.200001,
            impactScore: 76.099998,
            integrityImpact: "IMPACT_HIGH",
            privilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
            scope: "SCOPE_UNSPECIFIED",
            userInteraction: "USER_INTERACTION_REQUIRED",
          },
          cvssVersion: "CVSS_VERSION_3",
          cwe: [
            "autem",
          ],
          details: [
            {
              cpeUri: "sed",
              description: "nobis",
              fixedLocation: {
                cpeUri: "consequatur",
                package: "minima",
                version: {
                  epoch: 1227456378136341562,
                  inclusive: true,
                  kind: "NORMAL",
                  name: "libero",
                  revision: "quae",
                },
              },
              isObsolete: false,
              maxAffectedVersion: {
                epoch: 3959198584473550564,
                inclusive: true,
                kind: "VERSION_KIND_UNSPECIFIED",
                name: "minus",
                revision: "aspernatur",
              },
              minAffectedVersion: {
                epoch: 3201707235573876117,
                inclusive: true,
                kind: "NORMAL",
                name: "exercitationem",
                revision: "non",
              },
              package: "quo",
              packageType: "neque",
              severityName: "asperiores",
              source: "nihil",
              sourceUpdateTime: "neque",
              vendor: "est",
            },
            {
              cpeUri: "sed",
              description: "voluptatem",
              fixedLocation: {
                cpeUri: "eligendi",
                package: "dolor",
                version: {
                  epoch: 4385953855772302885,
                  inclusive: true,
                  kind: "MINIMUM",
                  name: "exercitationem",
                  revision: "facilis",
                },
              },
              isObsolete: false,
              maxAffectedVersion: {
                epoch: 4776490234926601866,
                inclusive: false,
                kind: "NORMAL",
                name: "sequi",
                revision: "libero",
              },
              minAffectedVersion: {
                epoch: 7380404357194425420,
                inclusive: true,
                kind: "MINIMUM",
                name: "perferendis",
                revision: "maxime",
              },
              package: "possimus",
              packageType: "rerum",
              severityName: "et",
              source: "non",
              sourceUpdateTime: "ut",
              vendor: "necessitatibus",
            },
            {
              cpeUri: "doloremque",
              description: "veritatis",
              fixedLocation: {
                cpeUri: "velit",
                package: "deleniti",
                version: {
                  epoch: 3855892990959042568,
                  inclusive: true,
                  kind: "NORMAL",
                  name: "qui",
                  revision: "nostrum",
                },
              },
              isObsolete: true,
              maxAffectedVersion: {
                epoch: 3354263099144158810,
                inclusive: true,
                kind: "MINIMUM",
                name: "qui",
                revision: "suscipit",
              },
              minAffectedVersion: {
                epoch: 5950150515331165689,
                inclusive: true,
                kind: "NORMAL",
                name: "repudiandae",
                revision: "eveniet",
              },
              package: "odit",
              packageType: "et",
              severityName: "laborum",
              source: "placeat",
              sourceUpdateTime: "voluptas",
              vendor: "voluptatem",
            },
          ],
          severity: "MEDIUM",
          sourceUpdateTime: "qui",
          windowsDetails: [
            {
              cpeUri: "minima",
              description: "est",
              fixingKbs: [
                {
                  name: "quos",
                  url: "accusamus",
                },
                {
                  name: "veniam",
                  url: "laboriosam",
                },
                {
                  name: "deserunt",
                  url: "quibusdam",
                },
              ],
              name: "sint",
            },
            {
              cpeUri: "perspiciatis",
              description: "eos",
              fixingKbs: [
                {
                  name: "ex",
                  url: "dolor",
                },
              ],
              name: "odio",
            },
            {
              cpeUri: "vel",
              description: "est",
              fixingKbs: [
                {
                  name: "deserunt",
                  url: "iure",
                },
                {
                  name: "aut",
                  url: "omnis",
                },
              ],
              name: "qui",
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
