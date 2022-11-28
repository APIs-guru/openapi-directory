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
    
    req := operations.ContaineranalysisProjectsNotesBatchCreateRequest{
        Security: operations.ContaineranalysisProjectsNotesBatchCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContaineranalysisProjectsNotesBatchCreatePathParams{
            Parent: "dolores",
        },
        QueryParams: operations.ContaineranalysisProjectsNotesBatchCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eaque",
            Alt: "media",
            Callback: "asperiores",
            Fields: "quasi",
            Key: "praesentium",
            OauthToken: "in",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "dicta",
            UploadProtocol: "excepturi",
        },
        Request: &shared.BatchCreateNotesRequest{
            Notes: map[string]shared.Note{
                "atque": shared.Note{
                    Attestation: &shared.AttestationNote{
                        Hint: &shared.Hint{
                            HumanReadableName: "architecto",
                        },
                    },
                    Build: &shared.BuildNote{
                        BuilderVersion: "consequatur",
                    },
                    Compliance: &shared.ComplianceNote{
                        CisBenchmark: &shared.CisBenchmark{
                            ProfileLevel: 6408885157449401522,
                            Severity: "MINIMAL",
                        },
                        Description: "et",
                        Rationale: "similique",
                        Remediation: "reiciendis",
                        ScanInstructions: "et",
                        Title: "repudiandae",
                        Version: []shared.ComplianceVersion{
                            shared.ComplianceVersion{
                                BenchmarkDocument: "perferendis",
                                CpeURI: "beatae",
                                Version: "quaerat",
                            },
                            shared.ComplianceVersion{
                                BenchmarkDocument: "quia",
                                CpeURI: "eos",
                                Version: "laudantium",
                            },
                        },
                    },
                    CreateTime: "asperiores",
                    Deployment: &shared.DeploymentNote{
                        ResourceURI: []string{
                            "aperiam",
                            "autem",
                        },
                    },
                    Discovery: &shared.DiscoveryNote{
                        AnalysisKind: "IMAGE",
                    },
                    DsseAttestation: &shared.DsseAttestationNote{
                        Hint: &shared.DsseHint{
                            HumanReadableName: "sint",
                        },
                    },
                    ExpirationTime: "earum",
                    Image: &shared.ImageNote{
                        Fingerprint: &shared.Fingerprint{
                            V1Name: "omnis",
                            V2Blob: []string{
                                "vitae",
                                "beatae",
                                "voluptatem",
                            },
                            V2Name: "accusamus",
                        },
                        ResourceURL: "voluptatum",
                    },
                    Kind: "VULNERABILITY",
                    LongDescription: "sint",
                    Name: "consequatur",
                    Package: &shared.PackageNote{
                        Architecture: "ARCHITECTURE_UNSPECIFIED",
                        CpeURI: "voluptatem",
                        Description: "officia",
                        Digest: []shared.Digest{
                            shared.Digest{
                                Algo: "et",
                                DigestBytes: "in",
                            },
                            shared.Digest{
                                Algo: "ipsa",
                                DigestBytes: "iusto",
                            },
                        },
                        Distribution: []shared.Distribution{
                            shared.Distribution{
                                Architecture: "ARCHITECTURE_UNSPECIFIED",
                                CpeURI: "sint",
                                Description: "qui",
                                LatestVersion: &shared.Version{
                                    Epoch: 8856515308731129739,
                                    FullName: "in",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "dignissimos",
                                    Revision: "facere",
                                },
                                Maintainer: "porro",
                                URL: "illum",
                            },
                        },
                        License: &shared.License{
                            Comments: "dicta",
                            Expression: "optio",
                        },
                        Maintainer: "odit",
                        Name: "qui",
                        PackageType: "exercitationem",
                        URL: "fugiat",
                        Version: &shared.Version{
                            Epoch: 6288504000152364579,
                            FullName: "et",
                            Inclusive: false,
                            Kind: "NORMAL",
                            Name: "est",
                            Revision: "qui",
                        },
                    },
                    RelatedNoteNames: []string{
                        "nihil",
                    },
                    RelatedURL: []shared.RelatedURL{
                        shared.RelatedURL{
                            Label: "sunt",
                            URL: "laborum",
                        },
                        shared.RelatedURL{
                            Label: "ut",
                            URL: "quod",
                        },
                        shared.RelatedURL{
                            Label: "autem",
                            URL: "ea",
                        },
                    },
                    ShortDescription: "dolore",
                    UpdateTime: "velit",
                    Upgrade: &shared.UpgradeNote{
                        Distributions: []shared.UpgradeDistribution{
                            shared.UpgradeDistribution{
                                Classification: "non",
                                CpeURI: "fugiat",
                                Cve: []string{
                                    "animi",
                                    "reprehenderit",
                                    "voluptatem",
                                },
                                Severity: "ut",
                            },
                        },
                        Package: "rerum",
                        Version: &shared.Version{
                            Epoch: 6338775822404312350,
                            FullName: "nemo",
                            Inclusive: true,
                            Kind: "MINIMUM",
                            Name: "dolorum",
                            Revision: "ut",
                        },
                        WindowsUpdate: &shared.WindowsUpdate{
                            Categories: []shared.Category{
                                shared.Category{
                                    CategoryID: "autem",
                                    Name: "unde",
                                },
                            },
                            Description: "sit",
                            Identity: &shared.Identity{
                                Revision: 8794724976011811463,
                                UpdateID: "illo",
                            },
                            KbArticleIds: []string{
                                "sed",
                            },
                            LastPublishedTimestamp: "repellendus",
                            SupportURL: "nihil",
                            Title: "vitae",
                        },
                    },
                    Vulnerability: &shared.VulnerabilityNote{
                        CvssScore: 69.099998,
                        CvssV3: &shared.CvsSv3{
                            AttackComplexity: "ATTACK_COMPLEXITY_HIGH",
                            AttackVector: "ATTACK_VECTOR_ADJACENT",
                            AvailabilityImpact: "IMPACT_UNSPECIFIED",
                            BaseScore: 39.200001,
                            ConfidentialityImpact: "IMPACT_UNSPECIFIED",
                            ExploitabilityScore: 30.200001,
                            ImpactScore: 71.199997,
                            IntegrityImpact: "IMPACT_UNSPECIFIED",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
                            Scope: "SCOPE_CHANGED",
                            UserInteraction: "USER_INTERACTION_NONE",
                        },
                        CvssVersion: "CVSS_VERSION_2",
                        Details: []shared.Detail{
                            shared.Detail{
                                AffectedCpeURI: "tempora",
                                AffectedPackage: "amet",
                                AffectedVersionEnd: &shared.Version{
                                    Epoch: 2810521072406894835,
                                    FullName: "doloremque",
                                    Inclusive: false,
                                    Kind: "MAXIMUM",
                                    Name: "aut",
                                    Revision: "et",
                                },
                                AffectedVersionStart: &shared.Version{
                                    Epoch: 7169743132887921865,
                                    FullName: "aperiam",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "hic",
                                    Revision: "quidem",
                                },
                                Description: "quis",
                                FixedCpeURI: "dolor",
                                FixedPackage: "ut",
                                FixedVersion: &shared.Version{
                                    Epoch: 5863948450854302852,
                                    FullName: "ut",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "est",
                                    Revision: "voluptatem",
                                },
                                IsObsolete: true,
                                PackageType: "at",
                                SeverityName: "autem",
                                Source: "corporis",
                                SourceUpdateTime: "voluptatum",
                                Vendor: "aut",
                            },
                            shared.Detail{
                                AffectedCpeURI: "et",
                                AffectedPackage: "quisquam",
                                AffectedVersionEnd: &shared.Version{
                                    Epoch: 7029236867252284498,
                                    FullName: "consectetur",
                                    Inclusive: true,
                                    Kind: "NORMAL",
                                    Name: "reiciendis",
                                    Revision: "eos",
                                },
                                AffectedVersionStart: &shared.Version{
                                    Epoch: 769622730363203195,
                                    FullName: "possimus",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "iusto",
                                    Revision: "quisquam",
                                },
                                Description: "ea",
                                FixedCpeURI: "maxime",
                                FixedPackage: "voluptates",
                                FixedVersion: &shared.Version{
                                    Epoch: 4516163747119219783,
                                    FullName: "est",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "soluta",
                                    Revision: "assumenda",
                                },
                                IsObsolete: true,
                                PackageType: "autem",
                                SeverityName: "laudantium",
                                Source: "enim",
                                SourceUpdateTime: "aut",
                                Vendor: "architecto",
                            },
                        },
                        Severity: "HIGH",
                        SourceUpdateTime: "aut",
                        WindowsDetails: []shared.WindowsDetail{
                            shared.WindowsDetail{
                                CpeURI: "ut",
                                Description: "dolorum",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "aliquid",
                                        URL: "exercitationem",
                                    },
                                },
                                Name: "alias",
                            },
                            shared.WindowsDetail{
                                CpeURI: "autem",
                                Description: "excepturi",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "assumenda",
                                        URL: "non",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "et",
                                        URL: "unde",
                                    },
                                },
                                Name: "quia",
                            },
                            shared.WindowsDetail{
                                CpeURI: "voluptatum",
                                Description: "incidunt",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "ducimus",
                                        URL: "corrupti",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "laboriosam",
                                        URL: "qui",
                                    },
                                },
                                Name: "modi",
                            },
                        },
                    },
                },
                "dolores": shared.Note{
                    Attestation: &shared.AttestationNote{
                        Hint: &shared.Hint{
                            HumanReadableName: "sunt",
                        },
                    },
                    Build: &shared.BuildNote{
                        BuilderVersion: "sed",
                    },
                    Compliance: &shared.ComplianceNote{
                        CisBenchmark: &shared.CisBenchmark{
                            ProfileLevel: 156586821005951173,
                            Severity: "LOW",
                        },
                        Description: "tempore",
                        Rationale: "soluta",
                        Remediation: "non",
                        ScanInstructions: "amet",
                        Title: "error",
                        Version: []shared.ComplianceVersion{
                            shared.ComplianceVersion{
                                BenchmarkDocument: "explicabo",
                                CpeURI: "ducimus",
                                Version: "est",
                            },
                            shared.ComplianceVersion{
                                BenchmarkDocument: "iste",
                                CpeURI: "similique",
                                Version: "nulla",
                            },
                        },
                    },
                    CreateTime: "sint",
                    Deployment: &shared.DeploymentNote{
                        ResourceURI: []string{
                            "et",
                            "rem",
                            "sed",
                        },
                    },
                    Discovery: &shared.DiscoveryNote{
                        AnalysisKind: "UPGRADE",
                    },
                    DsseAttestation: &shared.DsseAttestationNote{
                        Hint: &shared.DsseHint{
                            HumanReadableName: "eius",
                        },
                    },
                    ExpirationTime: "eum",
                    Image: &shared.ImageNote{
                        Fingerprint: &shared.Fingerprint{
                            V1Name: "asperiores",
                            V2Blob: []string{
                                "debitis",
                            },
                            V2Name: "odio",
                        },
                        ResourceURL: "esse",
                    },
                    Kind: "ATTESTATION",
                    LongDescription: "ea",
                    Name: "sint",
                    Package: &shared.PackageNote{
                        Architecture: "ARCHITECTURE_UNSPECIFIED",
                        CpeURI: "consequatur",
                        Description: "et",
                        Digest: []shared.Digest{
                            shared.Digest{
                                Algo: "pariatur",
                                DigestBytes: "minus",
                            },
                        },
                        Distribution: []shared.Distribution{
                            shared.Distribution{
                                Architecture: "ARCHITECTURE_UNSPECIFIED",
                                CpeURI: "consequatur",
                                Description: "ut",
                                LatestVersion: &shared.Version{
                                    Epoch: 2243212377013183394,
                                    FullName: "optio",
                                    Inclusive: true,
                                    Kind: "VERSION_KIND_UNSPECIFIED",
                                    Name: "labore",
                                    Revision: "reprehenderit",
                                },
                                Maintainer: "consectetur",
                                URL: "eligendi",
                            },
                        },
                        License: &shared.License{
                            Comments: "minima",
                            Expression: "rerum",
                        },
                        Maintainer: "aut",
                        Name: "voluptas",
                        PackageType: "dolorem",
                        URL: "perspiciatis",
                        Version: &shared.Version{
                            Epoch: 2804437921637268738,
                            FullName: "laboriosam",
                            Inclusive: true,
                            Kind: "NORMAL",
                            Name: "sit",
                            Revision: "quam",
                        },
                    },
                    RelatedNoteNames: []string{
                        "dolorum",
                        "pariatur",
                    },
                    RelatedURL: []shared.RelatedURL{
                        shared.RelatedURL{
                            Label: "qui",
                            URL: "temporibus",
                        },
                        shared.RelatedURL{
                            Label: "officia",
                            URL: "aut",
                        },
                        shared.RelatedURL{
                            Label: "corporis",
                            URL: "corporis",
                        },
                    },
                    ShortDescription: "eligendi",
                    UpdateTime: "quo",
                    Upgrade: &shared.UpgradeNote{
                        Distributions: []shared.UpgradeDistribution{
                            shared.UpgradeDistribution{
                                Classification: "earum",
                                CpeURI: "consequatur",
                                Cve: []string{
                                    "commodi",
                                },
                                Severity: "perferendis",
                            },
                            shared.UpgradeDistribution{
                                Classification: "fugiat",
                                CpeURI: "minus",
                                Cve: []string{
                                    "dolores",
                                    "ut",
                                    "odit",
                                },
                                Severity: "corporis",
                            },
                        },
                        Package: "id",
                        Version: &shared.Version{
                            Epoch: 3432019385414158726,
                            FullName: "excepturi",
                            Inclusive: true,
                            Kind: "MAXIMUM",
                            Name: "voluptatem",
                            Revision: "ullam",
                        },
                        WindowsUpdate: &shared.WindowsUpdate{
                            Categories: []shared.Category{
                                shared.Category{
                                    CategoryID: "porro",
                                    Name: "doloremque",
                                },
                            },
                            Description: "dolore",
                            Identity: &shared.Identity{
                                Revision: 3900874539364457086,
                                UpdateID: "nihil",
                            },
                            KbArticleIds: []string{
                                "distinctio",
                                "magnam",
                                "fuga",
                            },
                            LastPublishedTimestamp: "voluptas",
                            SupportURL: "eius",
                            Title: "dolores",
                        },
                    },
                    Vulnerability: &shared.VulnerabilityNote{
                        CvssScore: 48.099998,
                        CvssV3: &shared.CvsSv3{
                            AttackComplexity: "ATTACK_COMPLEXITY_HIGH",
                            AttackVector: "ATTACK_VECTOR_PHYSICAL",
                            AvailabilityImpact: "IMPACT_NONE",
                            BaseScore: 6.100000,
                            ConfidentialityImpact: "IMPACT_NONE",
                            ExploitabilityScore: 71.199997,
                            ImpactScore: 67.099998,
                            IntegrityImpact: "IMPACT_UNSPECIFIED",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
                            Scope: "SCOPE_UNCHANGED",
                            UserInteraction: "USER_INTERACTION_UNSPECIFIED",
                        },
                        CvssVersion: "CVSS_VERSION_UNSPECIFIED",
                        Details: []shared.Detail{
                            shared.Detail{
                                AffectedCpeURI: "enim",
                                AffectedPackage: "rerum",
                                AffectedVersionEnd: &shared.Version{
                                    Epoch: 4148031594757594594,
                                    FullName: "quo",
                                    Inclusive: false,
                                    Kind: "VERSION_KIND_UNSPECIFIED",
                                    Name: "sunt",
                                    Revision: "ipsam",
                                },
                                AffectedVersionStart: &shared.Version{
                                    Epoch: 139826008698127399,
                                    FullName: "dolores",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "iusto",
                                    Revision: "sit",
                                },
                                Description: "magnam",
                                FixedCpeURI: "ea",
                                FixedPackage: "accusamus",
                                FixedVersion: &shared.Version{
                                    Epoch: 5267402672884233298,
                                    FullName: "corporis",
                                    Inclusive: true,
                                    Kind: "MAXIMUM",
                                    Name: "dolores",
                                    Revision: "totam",
                                },
                                IsObsolete: true,
                                PackageType: "libero",
                                SeverityName: "voluptas",
                                Source: "magnam",
                                SourceUpdateTime: "itaque",
                                Vendor: "et",
                            },
                            shared.Detail{
                                AffectedCpeURI: "enim",
                                AffectedPackage: "molestiae",
                                AffectedVersionEnd: &shared.Version{
                                    Epoch: 1730254247388449812,
                                    FullName: "iure",
                                    Inclusive: false,
                                    Kind: "MAXIMUM",
                                    Name: "laudantium",
                                    Revision: "omnis",
                                },
                                AffectedVersionStart: &shared.Version{
                                    Epoch: 5957202480037773714,
                                    FullName: "reprehenderit",
                                    Inclusive: false,
                                    Kind: "MAXIMUM",
                                    Name: "recusandae",
                                    Revision: "soluta",
                                },
                                Description: "error",
                                FixedCpeURI: "reprehenderit",
                                FixedPackage: "voluptatum",
                                FixedVersion: &shared.Version{
                                    Epoch: 7624688387790099166,
                                    FullName: "temporibus",
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "a",
                                    Revision: "et",
                                },
                                IsObsolete: false,
                                PackageType: "soluta",
                                SeverityName: "dolore",
                                Source: "excepturi",
                                SourceUpdateTime: "animi",
                                Vendor: "in",
                            },
                        },
                        Severity: "SEVERITY_UNSPECIFIED",
                        SourceUpdateTime: "eum",
                        WindowsDetails: []shared.WindowsDetail{
                            shared.WindowsDetail{
                                CpeURI: "repudiandae",
                                Description: "aut",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "itaque",
                                        URL: "occaecati",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "sapiente",
                                        URL: "voluptate",
                                    },
                                },
                                Name: "harum",
                            },
                            shared.WindowsDetail{
                                CpeURI: "cumque",
                                Description: "voluptas",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "numquam",
                                        URL: "id",
                                    },
                                },
                                Name: "ut",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.ContaineranalysisProjectsNotesBatchCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateNotesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContaineranalysisProjectsNotesBatchCreate` - Creates new notes in batch.
* `ContaineranalysisProjectsNotesCreate` - Creates a new note.
* `ContaineranalysisProjectsNotesList` - Lists notes for the specified project.
* `ContaineranalysisProjectsNotesOccurrencesList` - Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
* `ContaineranalysisProjectsOccurrencesBatchCreate` - Creates new occurrences in batch.
* `ContaineranalysisProjectsOccurrencesCreate` - Creates a new occurrence.
* `ContaineranalysisProjectsOccurrencesDelete` - Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
* `ContaineranalysisProjectsOccurrencesGet` - Gets the specified occurrence.
* `ContaineranalysisProjectsOccurrencesGetIamPolicy` - Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
* `ContaineranalysisProjectsOccurrencesGetNotes` - Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
* `ContaineranalysisProjectsOccurrencesGetVulnerabilitySummary` - Gets a summary of the number and severity of occurrences.
* `ContaineranalysisProjectsOccurrencesList` - Lists occurrences for the specified project.
* `ContaineranalysisProjectsOccurrencesPatch` - Updates the specified occurrence.
* `ContaineranalysisProjectsOccurrencesSetIamPolicy` - Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
* `ContaineranalysisProjectsOccurrencesTestIamPermissions` - Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
