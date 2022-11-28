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
import { ContaineranalysisProjectsNotesCreateRequest, ContaineranalysisProjectsNotesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContaineranalysisProjectsNotesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "occaecati",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "alias",
    alt: "json",
    callback: "ea",
    fields: "placeat",
    key: "laudantium",
    name: "iure",
    noteId: "sit",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "at",
    uploadType: "et",
    uploadProtocol: "enim",
  },
  request: {
    attestationAuthority: {
      hint: {
        humanReadableName: "nemo",
      },
    },
    baseImage: {
      fingerprint: {
        v1Name: "nulla",
        v2Blob: [
          "commodi",
          "in",
          "eligendi",
        ],
        v2Name: "laboriosam",
      },
      resourceUrl: "nesciunt",
    },
    buildType: {
      builderVersion: "dolores",
      signature: {
        keyId: "impedit",
        keyType: "PKIX_PEM",
        publicKey: "accusamus",
        signature: "doloremque",
      },
    },
    compliance: {
      cisBenchmark: {
        profileLevel: 2668619937311068945,
        severity: "SEVERITY_UNSPECIFIED",
      },
      description: "rerum",
      rationale: "voluptatem",
      remediation: "debitis",
      scanInstructions: "repudiandae",
      title: "sint",
      version: [
        {
          benchmarkDocument: "tenetur",
          cpeUri: "deleniti",
          version: "suscipit",
        },
      ],
    },
    createTime: "in",
    deployable: {
      resourceUri: [
        "eos",
        "voluptatum",
      ],
    },
    discovery: {
      analysisKind: "IMAGE_BASIS",
    },
    dsseAttestation: {
      hint: {
        humanReadableName: "vel",
      },
    },
    expirationTime: "minima",
    kind: "ATTESTATION_AUTHORITY",
    longDescription: "praesentium",
    name: "nemo",
    package: {
      architecture: "X86",
      cpeUri: "veritatis",
      description: "dolor",
      digest: [
        {
          algo: "autem",
          digestBytes: "minima",
        },
      ],
      distribution: [
        {
          architecture: "X64",
          cpeUri: "aliquid",
          description: "quisquam",
          latestVersion: {
            epoch: 2382237157700235635,
            inclusive: true,
            kind: "MINIMUM",
            name: "est",
            revision: "velit",
          },
          maintainer: "enim",
          url: "optio",
        },
        {
          architecture: "ARCHITECTURE_UNSPECIFIED",
          cpeUri: "laboriosam",
          description: "est",
          latestVersion: {
            epoch: 8161500657122210804,
            inclusive: true,
            kind: "NORMAL",
            name: "sunt",
            revision: "earum",
          },
          maintainer: "ut",
          url: "in",
        },
        {
          architecture: "X86",
          cpeUri: "ipsum",
          description: "excepturi",
          latestVersion: {
            epoch: 7603882901693968790,
            inclusive: false,
            kind: "MAXIMUM",
            name: "in",
            revision: "occaecati",
          },
          maintainer: "quis",
          url: "recusandae",
        },
      ],
      license: {
        comments: "quaerat",
        expression: "culpa",
      },
      maintainer: "minima",
      name: "et",
      packageType: "laudantium",
      url: "pariatur",
      version: {
        epoch: 6886837275943705348,
        inclusive: false,
        kind: "MAXIMUM",
        name: "et",
        revision: "ad",
      },
    },
    relatedUrl: [
      {
        label: "delectus",
        url: "minima",
      },
      {
        label: "ut",
        url: "est",
      },
    ],
    sbom: {
      dataLicence: "aspernatur",
      spdxVersion: "est",
    },
    shortDescription: "tempora",
    spdxFile: {
      checksum: [
        "eligendi",
        "autem",
        "fuga",
      ],
      fileType: "SPDX",
      title: "corrupti",
    },
    spdxPackage: {
      analyzed: false,
      attribution: "eos",
      checksum: "blanditiis",
      copyright: "deserunt",
      detailedDescription: "ipsum",
      downloadLocation: "tenetur",
      externalRefs: [
        {
          category: "SECURITY",
          comment: "blanditiis",
          locator: "ipsa",
          type: "ut",
        },
        {
          category: "PACKAGE_MANAGER",
          comment: "delectus",
          locator: "corporis",
          type: "consequatur",
        },
        {
          category: "PERSISTENT_ID",
          comment: "aliquid",
          locator: "quos",
          type: "iure",
        },
      ],
      filesLicenseInfo: [
        "nihil",
        "hic",
      ],
      homePage: "saepe",
      licenseDeclared: {
        comments: "dolores",
        expression: "possimus",
      },
      originator: "aut",
      packageType: "ut",
      summaryDescription: "unde",
      supplier: "consequatur",
      title: "et",
      verificationCode: "et",
      version: "tempore",
    },
    spdxRelationship: {
      type: "HAS_PREREQUISITE",
    },
    updateTime: "culpa",
    upgrade: {
      distributions: [
        {
          classification: "consectetur",
          cpeUri: "magni",
          cve: [
            "enim",
            "nam",
            "ut",
          ],
          severity: "atque",
        },
      ],
      package: "adipisci",
      version: {
        epoch: 1333898400016087624,
        inclusive: false,
        kind: "NORMAL",
        name: "non",
        revision: "reprehenderit",
      },
    },
    vulnerabilityType: {
      cvssScore: 63.099998,
      cvssV2: {
        attackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
        attackVector: "ATTACK_VECTOR_NETWORK",
        authentication: "AUTHENTICATION_SINGLE",
        availabilityImpact: "IMPACT_PARTIAL",
        baseScore: 86.199997,
        confidentialityImpact: "IMPACT_LOW",
        exploitabilityScore: 33.200001,
        impactScore: 91.099998,
        integrityImpact: "IMPACT_LOW",
        privilegesRequired: "PRIVILEGES_REQUIRED_LOW",
        scope: "SCOPE_UNSPECIFIED",
        userInteraction: "USER_INTERACTION_UNSPECIFIED",
      },
      cwe: [
        "id",
        "asperiores",
      ],
      details: [
        {
          cpeUri: "omnis",
          description: "quaerat",
          fixedLocation: {
            cpeUri: "in",
            fileLocation: [
              {
                filePath: "quas",
              },
            ],
            package: "omnis",
            version: {
              epoch: 7734856464178983150,
              inclusive: false,
              kind: "MINIMUM",
              name: "dolores",
              revision: "voluptates",
            },
          },
          isObsolete: false,
          maxAffectedVersion: {
            epoch: 9081386922194976867,
            inclusive: true,
            kind: "MINIMUM",
            name: "vel",
            revision: "necessitatibus",
          },
          minAffectedVersion: {
            epoch: 8855434532889870208,
            inclusive: true,
            kind: "NORMAL",
            name: "impedit",
            revision: "a",
          },
          package: "eaque",
          packageType: "quo",
          severityName: "aut",
          source: "consectetur",
          vendor: "corporis",
        },
        {
          cpeUri: "eaque",
          description: "minus",
          fixedLocation: {
            cpeUri: "quaerat",
            fileLocation: [
              {
                filePath: "non",
              },
              {
                filePath: "vel",
              },
              {
                filePath: "maiores",
              },
            ],
            package: "pariatur",
            version: {
              epoch: 6919549363026447310,
              inclusive: true,
              kind: "MINIMUM",
              name: "sunt",
              revision: "ut",
            },
          },
          isObsolete: true,
          maxAffectedVersion: {
            epoch: 2956222707044632948,
            inclusive: false,
            kind: "MINIMUM",
            name: "aut",
            revision: "aspernatur",
          },
          minAffectedVersion: {
            epoch: 2998563391556972300,
            inclusive: false,
            kind: "MINIMUM",
            name: "et",
            revision: "a",
          },
          package: "quo",
          packageType: "vero",
          severityName: "dolorem",
          source: "repellendus",
          vendor: "placeat",
        },
      ],
      severity: "CRITICAL",
    },
  },
};

sdk.projects.containeranalysisProjectsNotesCreate(req).then((res: ContaineranalysisProjectsNotesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `containeranalysisProjectsNotesCreate` - Creates a new `Note`.
* `containeranalysisProjectsNotesList` - Lists all `Notes` for a given project.
* `containeranalysisProjectsOccurrencesCreate` - Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
* `containeranalysisProjectsOccurrencesGetVulnerabilitySummary` - Gets a summary of the number and severity of occurrences.
* `containeranalysisProjectsOccurrencesList` - Lists active `Occurrences` for a given project matching the filters.
* `containeranalysisProjectsOperationsCreate` - Creates a new `Operation`.
* `containeranalysisProjectsScanConfigsList` - Lists scan configurations for a project.

### providers

* `containeranalysisProvidersNotesCreate` - Creates a new `Note`.
* `containeranalysisProvidersNotesDelete` - Deletes the given `Note` from the system.
* `containeranalysisProvidersNotesGet` - Returns the requested `Note`.
* `containeranalysisProvidersNotesGetIamPolicy` - Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
* `containeranalysisProvidersNotesList` - Lists all `Notes` for a given project.
* `containeranalysisProvidersNotesOccurrencesList` - Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
* `containeranalysisProvidersNotesPatch` - Updates an existing `Note`.
* `containeranalysisProvidersNotesSetIamPolicy` - Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
* `containeranalysisProvidersNotesTestIamPermissions` - Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
