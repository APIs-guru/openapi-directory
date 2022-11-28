# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ContaineranalysisProjectsNotesCreateRequest{
        Security: operations.ContaineranalysisProjectsNotesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContaineranalysisProjectsNotesCreatePathParams{
            Parent: "occaecati",
        },
        QueryParams: operations.ContaineranalysisProjectsNotesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "alias",
            Alt: "json",
            Callback: "ea",
            Fields: "placeat",
            Key: "laudantium",
            Name: "iure",
            NoteID: "sit",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "at",
            UploadType: "et",
            UploadProtocol: "enim",
        },
        Request: &shared.Note{
            AttestationAuthority: &shared.AttestationAuthority{
                Hint: &shared.AttestationAuthorityHint{
                    HumanReadableName: "nemo",
                },
            },
            BaseImage: &shared.Basis{
                Fingerprint: &shared.Fingerprint{
                    V1Name: "nulla",
                    V2Blob: []string{
                        "commodi",
                        "in",
                        "eligendi",
                    },
                    V2Name: "laboriosam",
                },
                ResourceURL: "nesciunt",
            },
            BuildType: &shared.BuildType{
                BuilderVersion: "dolores",
                Signature: &shared.BuildSignature{
                    KeyID: "impedit",
                    KeyType: "PKIX_PEM",
                    PublicKey: "accusamus",
                    Signature: "doloremque",
                },
            },
            Compliance: &shared.ComplianceNote{
                CisBenchmark: &shared.CisBenchmark{
                    ProfileLevel: 2668619937311068945,
                    Severity: "SEVERITY_UNSPECIFIED",
                },
                Description: "rerum",
                Rationale: "voluptatem",
                Remediation: "debitis",
                ScanInstructions: "repudiandae",
                Title: "sint",
                Version: []shared.ComplianceVersion{
                    shared.ComplianceVersion{
                        BenchmarkDocument: "tenetur",
                        CpeURI: "deleniti",
                        Version: "suscipit",
                    },
                },
            },
            CreateTime: "in",
            Deployable: &shared.Deployable{
                ResourceURI: []string{
                    "eos",
                    "voluptatum",
                },
            },
            Discovery: &shared.Discovery{
                AnalysisKind: "IMAGE_BASIS",
            },
            DsseAttestation: &shared.DsseAttestationNote{
                Hint: &shared.DsseHint{
                    HumanReadableName: "vel",
                },
            },
            ExpirationTime: "minima",
            Kind: "ATTESTATION_AUTHORITY",
            LongDescription: "praesentium",
            Name: "nemo",
            Package: &shared.Package{
                Architecture: "X86",
                CpeURI: "veritatis",
                Description: "dolor",
                Digest: []shared.Digest{
                    shared.Digest{
                        Algo: "autem",
                        DigestBytes: "minima",
                    },
                },
                Distribution: []shared.Distribution{
                    shared.Distribution{
                        Architecture: "X64",
                        CpeURI: "aliquid",
                        Description: "quisquam",
                        LatestVersion: &shared.Version{
                            Epoch: 2382237157700235635,
                            Inclusive: true,
                            Kind: "MINIMUM",
                            Name: "est",
                            Revision: "velit",
                        },
                        Maintainer: "enim",
                        URL: "optio",
                    },
                    shared.Distribution{
                        Architecture: "ARCHITECTURE_UNSPECIFIED",
                        CpeURI: "laboriosam",
                        Description: "est",
                        LatestVersion: &shared.Version{
                            Epoch: 8161500657122210804,
                            Inclusive: true,
                            Kind: "NORMAL",
                            Name: "sunt",
                            Revision: "earum",
                        },
                        Maintainer: "ut",
                        URL: "in",
                    },
                    shared.Distribution{
                        Architecture: "X86",
                        CpeURI: "ipsum",
                        Description: "excepturi",
                        LatestVersion: &shared.Version{
                            Epoch: 7603882901693968790,
                            Inclusive: false,
                            Kind: "MAXIMUM",
                            Name: "in",
                            Revision: "occaecati",
                        },
                        Maintainer: "quis",
                        URL: "recusandae",
                    },
                },
                License: &shared.License{
                    Comments: "quaerat",
                    Expression: "culpa",
                },
                Maintainer: "minima",
                Name: "et",
                PackageType: "laudantium",
                URL: "pariatur",
                Version: &shared.Version{
                    Epoch: 6886837275943705348,
                    Inclusive: false,
                    Kind: "MAXIMUM",
                    Name: "et",
                    Revision: "ad",
                },
            },
            RelatedURL: []shared.RelatedURL{
                shared.RelatedURL{
                    Label: "delectus",
                    URL: "minima",
                },
                shared.RelatedURL{
                    Label: "ut",
                    URL: "est",
                },
            },
            Sbom: &shared.DocumentNote{
                DataLicence: "aspernatur",
                SpdxVersion: "est",
            },
            ShortDescription: "tempora",
            SpdxFile: &shared.FileNote{
                Checksum: []string{
                    "eligendi",
                    "autem",
                    "fuga",
                },
                FileType: "SPDX",
                Title: "corrupti",
            },
            SpdxPackage: &shared.PackageInfoNote{
                Analyzed: false,
                Attribution: "eos",
                Checksum: "blanditiis",
                Copyright: "deserunt",
                DetailedDescription: "ipsum",
                DownloadLocation: "tenetur",
                ExternalRefs: []shared.ExternalRef{
                    shared.ExternalRef{
                        Category: "SECURITY",
                        Comment: "blanditiis",
                        Locator: "ipsa",
                        Type: "ut",
                    },
                    shared.ExternalRef{
                        Category: "PACKAGE_MANAGER",
                        Comment: "delectus",
                        Locator: "corporis",
                        Type: "consequatur",
                    },
                    shared.ExternalRef{
                        Category: "PERSISTENT_ID",
                        Comment: "aliquid",
                        Locator: "quos",
                        Type: "iure",
                    },
                },
                FilesLicenseInfo: []string{
                    "nihil",
                    "hic",
                },
                HomePage: "saepe",
                LicenseDeclared: &shared.License{
                    Comments: "dolores",
                    Expression: "possimus",
                },
                Originator: "aut",
                PackageType: "ut",
                SummaryDescription: "unde",
                Supplier: "consequatur",
                Title: "et",
                VerificationCode: "et",
                Version: "tempore",
            },
            SpdxRelationship: &shared.RelationshipNote{
                Type: "HAS_PREREQUISITE",
            },
            UpdateTime: "culpa",
            Upgrade: &shared.UpgradeNote{
                Distributions: []shared.UpgradeDistribution{
                    shared.UpgradeDistribution{
                        Classification: "consectetur",
                        CpeURI: "magni",
                        Cve: []string{
                            "enim",
                            "nam",
                            "ut",
                        },
                        Severity: "atque",
                    },
                },
                Package: "adipisci",
                Version: &shared.Version{
                    Epoch: 1333898400016087624,
                    Inclusive: false,
                    Kind: "NORMAL",
                    Name: "non",
                    Revision: "reprehenderit",
                },
            },
            VulnerabilityType: &shared.VulnerabilityType{
                CvssScore: 63.099998,
                CvssV2: &shared.Cvss{
                    AttackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
                    AttackVector: "ATTACK_VECTOR_NETWORK",
                    Authentication: "AUTHENTICATION_SINGLE",
                    AvailabilityImpact: "IMPACT_PARTIAL",
                    BaseScore: 86.199997,
                    ConfidentialityImpact: "IMPACT_LOW",
                    ExploitabilityScore: 33.200001,
                    ImpactScore: 91.099998,
                    IntegrityImpact: "IMPACT_LOW",
                    PrivilegesRequired: "PRIVILEGES_REQUIRED_LOW",
                    Scope: "SCOPE_UNSPECIFIED",
                    UserInteraction: "USER_INTERACTION_UNSPECIFIED",
                },
                Cwe: []string{
                    "id",
                    "asperiores",
                },
                Details: []shared.Detail{
                    shared.Detail{
                        CpeURI: "omnis",
                        Description: "quaerat",
                        FixedLocation: &shared.VulnerabilityLocation{
                            CpeURI: "in",
                            FileLocation: []shared.FileLocation{
                                shared.FileLocation{
                                    FilePath: "quas",
                                },
                            },
                            Package: "omnis",
                            Version: &shared.Version{
                                Epoch: 7734856464178983150,
                                Inclusive: false,
                                Kind: "MINIMUM",
                                Name: "dolores",
                                Revision: "voluptates",
                            },
                        },
                        IsObsolete: false,
                        MaxAffectedVersion: &shared.Version{
                            Epoch: 9081386922194976867,
                            Inclusive: true,
                            Kind: "MINIMUM",
                            Name: "vel",
                            Revision: "necessitatibus",
                        },
                        MinAffectedVersion: &shared.Version{
                            Epoch: 8855434532889870208,
                            Inclusive: true,
                            Kind: "NORMAL",
                            Name: "impedit",
                            Revision: "a",
                        },
                        Package: "eaque",
                        PackageType: "quo",
                        SeverityName: "aut",
                        Source: "consectetur",
                        Vendor: "corporis",
                    },
                    shared.Detail{
                        CpeURI: "eaque",
                        Description: "minus",
                        FixedLocation: &shared.VulnerabilityLocation{
                            CpeURI: "quaerat",
                            FileLocation: []shared.FileLocation{
                                shared.FileLocation{
                                    FilePath: "non",
                                },
                                shared.FileLocation{
                                    FilePath: "vel",
                                },
                                shared.FileLocation{
                                    FilePath: "maiores",
                                },
                            },
                            Package: "pariatur",
                            Version: &shared.Version{
                                Epoch: 6919549363026447310,
                                Inclusive: true,
                                Kind: "MINIMUM",
                                Name: "sunt",
                                Revision: "ut",
                            },
                        },
                        IsObsolete: true,
                        MaxAffectedVersion: &shared.Version{
                            Epoch: 2956222707044632948,
                            Inclusive: false,
                            Kind: "MINIMUM",
                            Name: "aut",
                            Revision: "aspernatur",
                        },
                        MinAffectedVersion: &shared.Version{
                            Epoch: 2998563391556972300,
                            Inclusive: false,
                            Kind: "MINIMUM",
                            Name: "et",
                            Revision: "a",
                        },
                        Package: "quo",
                        PackageType: "vero",
                        SeverityName: "dolorem",
                        Source: "repellendus",
                        Vendor: "placeat",
                    },
                },
                Severity: "CRITICAL",
            },
        },
    }
    
    res, err := s.Projects.ContaineranalysisProjectsNotesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Note != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContaineranalysisProjectsNotesCreate` - Creates a new `Note`.
* `ContaineranalysisProjectsNotesList` - Lists all `Notes` for a given project.
* `ContaineranalysisProjectsOccurrencesCreate` - Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
* `ContaineranalysisProjectsOccurrencesGetVulnerabilitySummary` - Gets a summary of the number and severity of occurrences.
* `ContaineranalysisProjectsOccurrencesList` - Lists active `Occurrences` for a given project matching the filters.
* `ContaineranalysisProjectsOperationsCreate` - Creates a new `Operation`.
* `ContaineranalysisProjectsScanConfigsList` - Lists scan configurations for a project.

### providers

* `ContaineranalysisProvidersNotesCreate` - Creates a new `Note`.
* `ContaineranalysisProvidersNotesDelete` - Deletes the given `Note` from the system.
* `ContaineranalysisProvidersNotesGet` - Returns the requested `Note`.
* `ContaineranalysisProvidersNotesGetIamPolicy` - Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
* `ContaineranalysisProvidersNotesList` - Lists all `Notes` for a given project.
* `ContaineranalysisProvidersNotesOccurrencesList` - Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
* `ContaineranalysisProvidersNotesPatch` - Updates an existing `Note`.
* `ContaineranalysisProvidersNotesSetIamPolicy` - Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
* `ContaineranalysisProvidersNotesTestIamPermissions` - Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
