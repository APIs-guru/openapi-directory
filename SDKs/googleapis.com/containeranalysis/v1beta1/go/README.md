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
            Parent: "et",
        },
        QueryParams: operations.ContaineranalysisProjectsNotesBatchCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sed",
            Alt: "media",
            Callback: "dolorem",
            Fields: "soluta",
            Key: "at",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "corrupti",
            UploadType: "ut",
            UploadProtocol: "cupiditate",
        },
        Request: &shared.BatchCreateNotesRequest{
            Notes: map[string]shared.Note{
                "corporis": shared.Note{
                    AttestationAuthority: &shared.Authority{
                        Hint: &shared.Hint{
                            HumanReadableName: "non",
                        },
                    },
                    BaseImage: &shared.Basis{
                        Fingerprint: &shared.Fingerprint{
                            V1Name: "rerum",
                            V2Blob: []string{
                                "sed",
                                "perspiciatis",
                            },
                            V2Name: "sed",
                        },
                        ResourceURL: "officia",
                    },
                    Build: &shared.Build{
                        BuilderVersion: "quia",
                        Signature: &shared.BuildSignature{
                            KeyID: "officia",
                            KeyType: "PKIX_PEM",
                            PublicKey: "aut",
                            Signature: "nam",
                        },
                    },
                    CreateTime: "itaque",
                    Deployable: &shared.Deployable{
                        ResourceURI: []string{
                            "recusandae",
                            "optio",
                        },
                    },
                    Discovery: &shared.Discovery{
                        AnalysisKind: "SPDX_FILE",
                    },
                    ExpirationTime: "incidunt",
                    Intoto: &shared.InToto{
                        ExpectedCommand: []string{
                            "ut",
                        },
                        ExpectedMaterials: []shared.ArtifactRule{
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "eveniet",
                                    "harum",
                                },
                            },
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "aspernatur",
                                    "rerum",
                                    "eveniet",
                                },
                            },
                        },
                        ExpectedProducts: []shared.ArtifactRule{
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "illo",
                                    "assumenda",
                                },
                            },
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "libero",
                                    "ad",
                                },
                            },
                        },
                        SigningKeys: []shared.SigningKey{
                            shared.SigningKey{
                                KeyID: "ea",
                                KeyScheme: "voluptatum",
                                KeyType: "doloribus",
                                PublicKeyValue: "atque",
                            },
                            shared.SigningKey{
                                KeyID: "qui",
                                KeyScheme: "consequuntur",
                                KeyType: "omnis",
                                PublicKeyValue: "consequatur",
                            },
                            shared.SigningKey{
                                KeyID: "sapiente",
                                KeyScheme: "occaecati",
                                KeyType: "necessitatibus",
                                PublicKeyValue: "perspiciatis",
                            },
                        },
                        StepName: "voluptatem",
                        Threshold: "voluptatem",
                    },
                    Kind: "DISCOVERY",
                    LongDescription: "modi",
                    Name: "sed",
                    Package: &shared.Package{
                        Architecture: "ARCHITECTURE_UNSPECIFIED",
                        CpeURI: "eum",
                        Description: "debitis",
                        Digest: []shared.Digest{
                            shared.Digest{
                                Algo: "quia",
                                DigestBytes: "quia",
                            },
                            shared.Digest{
                                Algo: "et",
                                DigestBytes: "fugiat",
                            },
                            shared.Digest{
                                Algo: "dolorem",
                                DigestBytes: "nihil",
                            },
                        },
                        Distribution: []shared.Distribution{
                            shared.Distribution{
                                Architecture: "X64",
                                CpeURI: "molestias",
                                Description: "adipisci",
                                LatestVersion: &shared.Version{
                                    Epoch: 3412781772504123103,
                                    Inclusive: false,
                                    Kind: "MAXIMUM",
                                    Name: "illo",
                                    Revision: "tempora",
                                },
                                Maintainer: "fuga",
                                URL: "et",
                            },
                            shared.Distribution{
                                Architecture: "ARCHITECTURE_UNSPECIFIED",
                                CpeURI: "odio",
                                Description: "quasi",
                                LatestVersion: &shared.Version{
                                    Epoch: 1066238610314739485,
                                    Inclusive: true,
                                    Kind: "MAXIMUM",
                                    Name: "fugit",
                                    Revision: "ipsa",
                                },
                                Maintainer: "odit",
                                URL: "officiis",
                            },
                            shared.Distribution{
                                Architecture: "X64",
                                CpeURI: "nisi",
                                Description: "quasi",
                                LatestVersion: &shared.Version{
                                    Epoch: 1391316615603342607,
                                    Inclusive: true,
                                    Kind: "MAXIMUM",
                                    Name: "ut",
                                    Revision: "aliquam",
                                },
                                Maintainer: "est",
                                URL: "quis",
                            },
                        },
                        License: &shared.License{
                            Comments: "aut",
                            Expression: "magni",
                        },
                        Maintainer: "officia",
                        Name: "et",
                        PackageType: "velit",
                        URL: "aut",
                        Version: &shared.Version{
                            Epoch: 3578839472490561508,
                            Inclusive: true,
                            Kind: "MAXIMUM",
                            Name: "laudantium",
                            Revision: "delectus",
                        },
                    },
                    RelatedNoteNames: []string{
                        "libero",
                    },
                    RelatedURL: []shared.RelatedURL{
                        shared.RelatedURL{
                            Label: "rerum",
                            URL: "omnis",
                        },
                    },
                    Sbom: &shared.DocumentNote{
                        DataLicence: "non",
                        SpdxVersion: "eaque",
                    },
                    ShortDescription: "dicta",
                    SpdxFile: &shared.FileNote{
                        Checksum: []string{
                            "maiores",
                            "quis",
                            "dolorum",
                        },
                        FileType: "OTHER",
                        Title: "fugiat",
                    },
                    SpdxPackage: &shared.PackageInfoNote{
                        Analyzed: true,
                        Attribution: "maxime",
                        Checksum: "ut",
                        Copyright: "aut",
                        DetailedDescription: "omnis",
                        DownloadLocation: "deleniti",
                        ExternalRefs: []shared.ExternalRef{
                            shared.ExternalRef{
                                Category: "PERSISTENT_ID",
                                Comment: "ut",
                                Locator: "ad",
                                Type: "impedit",
                            },
                        },
                        FilesLicenseInfo: []string{
                            "velit",
                            "ea",
                            "quidem",
                        },
                        HomePage: "voluptatem",
                        LicenseDeclared: &shared.License{
                            Comments: "illo",
                            Expression: "voluptatem",
                        },
                        Originator: "et",
                        PackageType: "tenetur",
                        SummaryDescription: "aspernatur",
                        Supplier: "officiis",
                        Title: "corrupti",
                        VerificationCode: "possimus",
                        Version: "molestiae",
                    },
                    SpdxRelationship: &shared.RelationshipNote{
                        Type: "DEV_DEPENDENCY_OF",
                    },
                    UpdateTime: "dolor",
                    Vulnerability: &shared.Vulnerability{
                        CvssScore: 73.099998,
                        CvssV2: &shared.Cvss{
                            AttackComplexity: "ATTACK_COMPLEXITY_HIGH",
                            AttackVector: "ATTACK_VECTOR_ADJACENT",
                            Authentication: "AUTHENTICATION_MULTIPLE",
                            AvailabilityImpact: "IMPACT_PARTIAL",
                            BaseScore: 51.099998,
                            ConfidentialityImpact: "IMPACT_UNSPECIFIED",
                            ExploitabilityScore: 59.099998,
                            ImpactScore: 76.199997,
                            IntegrityImpact: "IMPACT_PARTIAL",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_HIGH",
                            Scope: "SCOPE_CHANGED",
                            UserInteraction: "USER_INTERACTION_REQUIRED",
                        },
                        CvssV3: &shared.CvsSv3{
                            AttackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
                            AttackVector: "ATTACK_VECTOR_UNSPECIFIED",
                            AvailabilityImpact: "IMPACT_NONE",
                            BaseScore: 5.100000,
                            ConfidentialityImpact: "IMPACT_HIGH",
                            ExploitabilityScore: 40.099998,
                            ImpactScore: 26.100000,
                            IntegrityImpact: "IMPACT_HIGH",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_HIGH",
                            Scope: "SCOPE_UNSPECIFIED",
                            UserInteraction: "USER_INTERACTION_REQUIRED",
                        },
                        CvssVersion: "CVSS_VERSION_3",
                        Cwe: []string{
                            "autem",
                            "est",
                        },
                        Details: []shared.Detail{
                            shared.Detail{
                                CpeURI: "illo",
                                Description: "placeat",
                                FixedLocation: &shared.VulnerabilityLocation{
                                    CpeURI: "distinctio",
                                    Package: "alias",
                                    Version: &shared.Version{
                                        Epoch: 2327978081091227784,
                                        Inclusive: true,
                                        Kind: "MAXIMUM",
                                        Name: "voluptatibus",
                                        Revision: "consequatur",
                                    },
                                },
                                IsObsolete: true,
                                MaxAffectedVersion: &shared.Version{
                                    Epoch: 5836363067191062363,
                                    Inclusive: true,
                                    Kind: "VERSION_KIND_UNSPECIFIED",
                                    Name: "praesentium",
                                    Revision: "dolor",
                                },
                                MinAffectedVersion: &shared.Version{
                                    Epoch: 7080138457793696380,
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "et",
                                    Revision: "rerum",
                                },
                                Package: "ut",
                                PackageType: "aspernatur",
                                SeverityName: "impedit",
                                Source: "eius",
                                SourceUpdateTime: "adipisci",
                                Vendor: "ducimus",
                            },
                        },
                        Severity: "LOW",
                        SourceUpdateTime: "facere",
                        WindowsDetails: []shared.WindowsDetail{
                            shared.WindowsDetail{
                                CpeURI: "ut",
                                Description: "cumque",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "voluptatem",
                                        URL: "vel",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "harum",
                                        URL: "id",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "iste",
                                        URL: "tempore",
                                    },
                                },
                                Name: "ex",
                            },
                            shared.WindowsDetail{
                                CpeURI: "distinctio",
                                Description: "architecto",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "ea",
                                        URL: "laboriosam",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "et",
                                        URL: "placeat",
                                    },
                                },
                                Name: "qui",
                            },
                            shared.WindowsDetail{
                                CpeURI: "odio",
                                Description: "aliquid",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "quas",
                                        URL: "non",
                                    },
                                },
                                Name: "et",
                            },
                        },
                    },
                },
                "eius": shared.Note{
                    AttestationAuthority: &shared.Authority{
                        Hint: &shared.Hint{
                            HumanReadableName: "nemo",
                        },
                    },
                    BaseImage: &shared.Basis{
                        Fingerprint: &shared.Fingerprint{
                            V1Name: "aperiam",
                            V2Blob: []string{
                                "omnis",
                                "perferendis",
                                "ut",
                            },
                            V2Name: "asperiores",
                        },
                        ResourceURL: "ipsum",
                    },
                    Build: &shared.Build{
                        BuilderVersion: "est",
                        Signature: &shared.BuildSignature{
                            KeyID: "omnis",
                            KeyType: "KEY_TYPE_UNSPECIFIED",
                            PublicKey: "dicta",
                            Signature: "placeat",
                        },
                    },
                    CreateTime: "ut",
                    Deployable: &shared.Deployable{
                        ResourceURI: []string{
                            "sequi",
                            "aut",
                            "asperiores",
                        },
                    },
                    Discovery: &shared.Discovery{
                        AnalysisKind: "SBOM",
                    },
                    ExpirationTime: "et",
                    Intoto: &shared.InToto{
                        ExpectedCommand: []string{
                            "voluptas",
                        },
                        ExpectedMaterials: []shared.ArtifactRule{
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "ut",
                                    "facere",
                                    "eos",
                                },
                            },
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "et",
                                },
                            },
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "voluptate",
                                    "minima",
                                    "totam",
                                },
                            },
                        },
                        ExpectedProducts: []shared.ArtifactRule{
                            shared.ArtifactRule{
                                ArtifactRule: []string{
                                    "dolorem",
                                    "quo",
                                    "culpa",
                                },
                            },
                        },
                        SigningKeys: []shared.SigningKey{
                            shared.SigningKey{
                                KeyID: "quia",
                                KeyScheme: "sed",
                                KeyType: "perferendis",
                                PublicKeyValue: "possimus",
                            },
                        },
                        StepName: "nisi",
                        Threshold: "aliquam",
                    },
                    Kind: "VULNERABILITY",
                    LongDescription: "sed",
                    Name: "nihil",
                    Package: &shared.Package{
                        Architecture: "X86",
                        CpeURI: "reiciendis",
                        Description: "nostrum",
                        Digest: []shared.Digest{
                            shared.Digest{
                                Algo: "atque",
                                DigestBytes: "similique",
                            },
                            shared.Digest{
                                Algo: "voluptate",
                                DigestBytes: "inventore",
                            },
                        },
                        Distribution: []shared.Distribution{
                            shared.Distribution{
                                Architecture: "ARCHITECTURE_UNSPECIFIED",
                                CpeURI: "ex",
                                Description: "laboriosam",
                                LatestVersion: &shared.Version{
                                    Epoch: 6363965034726191287,
                                    Inclusive: false,
                                    Kind: "NORMAL",
                                    Name: "voluptatibus",
                                    Revision: "magni",
                                },
                                Maintainer: "est",
                                URL: "accusantium",
                            },
                            shared.Distribution{
                                Architecture: "ARCHITECTURE_UNSPECIFIED",
                                CpeURI: "sint",
                                Description: "inventore",
                                LatestVersion: &shared.Version{
                                    Epoch: 6434815889137636530,
                                    Inclusive: false,
                                    Kind: "MINIMUM",
                                    Name: "aperiam",
                                    Revision: "distinctio",
                                },
                                Maintainer: "ea",
                                URL: "iste",
                            },
                            shared.Distribution{
                                Architecture: "X86",
                                CpeURI: "quae",
                                Description: "facilis",
                                LatestVersion: &shared.Version{
                                    Epoch: 434770091902266907,
                                    Inclusive: false,
                                    Kind: "MAXIMUM",
                                    Name: "maxime",
                                    Revision: "consequatur",
                                },
                                Maintainer: "qui",
                                URL: "et",
                            },
                        },
                        License: &shared.License{
                            Comments: "qui",
                            Expression: "omnis",
                        },
                        Maintainer: "debitis",
                        Name: "reprehenderit",
                        PackageType: "corrupti",
                        URL: "et",
                        Version: &shared.Version{
                            Epoch: 7129289965069529682,
                            Inclusive: true,
                            Kind: "MAXIMUM",
                            Name: "et",
                            Revision: "debitis",
                        },
                    },
                    RelatedNoteNames: []string{
                        "id",
                        "dolores",
                        "ullam",
                    },
                    RelatedURL: []shared.RelatedURL{
                        shared.RelatedURL{
                            Label: "porro",
                            URL: "dolor",
                        },
                        shared.RelatedURL{
                            Label: "pariatur",
                            URL: "pariatur",
                        },
                    },
                    Sbom: &shared.DocumentNote{
                        DataLicence: "voluptatem",
                        SpdxVersion: "itaque",
                    },
                    ShortDescription: "explicabo",
                    SpdxFile: &shared.FileNote{
                        Checksum: []string{
                            "quos",
                        },
                        FileType: "AUDIO",
                        Title: "et",
                    },
                    SpdxPackage: &shared.PackageInfoNote{
                        Analyzed: true,
                        Attribution: "qui",
                        Checksum: "quae",
                        Copyright: "id",
                        DetailedDescription: "ut",
                        DownloadLocation: "at",
                        ExternalRefs: []shared.ExternalRef{
                            shared.ExternalRef{
                                Category: "PACKAGE_MANAGER",
                                Comment: "sunt",
                                Locator: "consequuntur",
                                Type: "quo",
                            },
                            shared.ExternalRef{
                                Category: "PACKAGE_MANAGER",
                                Comment: "modi",
                                Locator: "voluptatem",
                                Type: "et",
                            },
                        },
                        FilesLicenseInfo: []string{
                            "nam",
                            "vel",
                        },
                        HomePage: "fugit",
                        LicenseDeclared: &shared.License{
                            Comments: "tenetur",
                            Expression: "consequuntur",
                        },
                        Originator: "fugit",
                        PackageType: "quia",
                        SummaryDescription: "molestiae",
                        Supplier: "voluptate",
                        Title: "et",
                        VerificationCode: "quos",
                        Version: "tempore",
                    },
                    SpdxRelationship: &shared.RelationshipNote{
                        Type: "PROVIDED_DEPENDENCY_OF",
                    },
                    UpdateTime: "aut",
                    Vulnerability: &shared.Vulnerability{
                        CvssScore: 96.199997,
                        CvssV2: &shared.Cvss{
                            AttackComplexity: "ATTACK_COMPLEXITY_UNSPECIFIED",
                            AttackVector: "ATTACK_VECTOR_NETWORK",
                            Authentication: "AUTHENTICATION_NONE",
                            AvailabilityImpact: "IMPACT_COMPLETE",
                            BaseScore: 59.200001,
                            ConfidentialityImpact: "IMPACT_COMPLETE",
                            ExploitabilityScore: 11.100000,
                            ImpactScore: 52.099998,
                            IntegrityImpact: "IMPACT_HIGH",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_NONE",
                            Scope: "SCOPE_UNSPECIFIED",
                            UserInteraction: "USER_INTERACTION_REQUIRED",
                        },
                        CvssV3: &shared.CvsSv3{
                            AttackComplexity: "ATTACK_COMPLEXITY_HIGH",
                            AttackVector: "ATTACK_VECTOR_PHYSICAL",
                            AvailabilityImpact: "IMPACT_LOW",
                            BaseScore: 2.200000,
                            ConfidentialityImpact: "IMPACT_UNSPECIFIED",
                            ExploitabilityScore: 35.200001,
                            ImpactScore: 76.099998,
                            IntegrityImpact: "IMPACT_HIGH",
                            PrivilegesRequired: "PRIVILEGES_REQUIRED_UNSPECIFIED",
                            Scope: "SCOPE_UNSPECIFIED",
                            UserInteraction: "USER_INTERACTION_REQUIRED",
                        },
                        CvssVersion: "CVSS_VERSION_3",
                        Cwe: []string{
                            "autem",
                        },
                        Details: []shared.Detail{
                            shared.Detail{
                                CpeURI: "sed",
                                Description: "nobis",
                                FixedLocation: &shared.VulnerabilityLocation{
                                    CpeURI: "consequatur",
                                    Package: "minima",
                                    Version: &shared.Version{
                                        Epoch: 1227456378136341562,
                                        Inclusive: true,
                                        Kind: "NORMAL",
                                        Name: "libero",
                                        Revision: "quae",
                                    },
                                },
                                IsObsolete: false,
                                MaxAffectedVersion: &shared.Version{
                                    Epoch: 3959198584473550564,
                                    Inclusive: true,
                                    Kind: "VERSION_KIND_UNSPECIFIED",
                                    Name: "minus",
                                    Revision: "aspernatur",
                                },
                                MinAffectedVersion: &shared.Version{
                                    Epoch: 3201707235573876117,
                                    Inclusive: true,
                                    Kind: "NORMAL",
                                    Name: "exercitationem",
                                    Revision: "non",
                                },
                                Package: "quo",
                                PackageType: "neque",
                                SeverityName: "asperiores",
                                Source: "nihil",
                                SourceUpdateTime: "neque",
                                Vendor: "est",
                            },
                            shared.Detail{
                                CpeURI: "sed",
                                Description: "voluptatem",
                                FixedLocation: &shared.VulnerabilityLocation{
                                    CpeURI: "eligendi",
                                    Package: "dolor",
                                    Version: &shared.Version{
                                        Epoch: 4385953855772302885,
                                        Inclusive: true,
                                        Kind: "MINIMUM",
                                        Name: "exercitationem",
                                        Revision: "facilis",
                                    },
                                },
                                IsObsolete: false,
                                MaxAffectedVersion: &shared.Version{
                                    Epoch: 4776490234926601866,
                                    Inclusive: false,
                                    Kind: "NORMAL",
                                    Name: "sequi",
                                    Revision: "libero",
                                },
                                MinAffectedVersion: &shared.Version{
                                    Epoch: 7380404357194425420,
                                    Inclusive: true,
                                    Kind: "MINIMUM",
                                    Name: "perferendis",
                                    Revision: "maxime",
                                },
                                Package: "possimus",
                                PackageType: "rerum",
                                SeverityName: "et",
                                Source: "non",
                                SourceUpdateTime: "ut",
                                Vendor: "necessitatibus",
                            },
                            shared.Detail{
                                CpeURI: "doloremque",
                                Description: "veritatis",
                                FixedLocation: &shared.VulnerabilityLocation{
                                    CpeURI: "velit",
                                    Package: "deleniti",
                                    Version: &shared.Version{
                                        Epoch: 3855892990959042568,
                                        Inclusive: true,
                                        Kind: "NORMAL",
                                        Name: "qui",
                                        Revision: "nostrum",
                                    },
                                },
                                IsObsolete: true,
                                MaxAffectedVersion: &shared.Version{
                                    Epoch: 3354263099144158810,
                                    Inclusive: true,
                                    Kind: "MINIMUM",
                                    Name: "qui",
                                    Revision: "suscipit",
                                },
                                MinAffectedVersion: &shared.Version{
                                    Epoch: 5950150515331165689,
                                    Inclusive: true,
                                    Kind: "NORMAL",
                                    Name: "repudiandae",
                                    Revision: "eveniet",
                                },
                                Package: "odit",
                                PackageType: "et",
                                SeverityName: "laborum",
                                Source: "placeat",
                                SourceUpdateTime: "voluptas",
                                Vendor: "voluptatem",
                            },
                        },
                        Severity: "MEDIUM",
                        SourceUpdateTime: "qui",
                        WindowsDetails: []shared.WindowsDetail{
                            shared.WindowsDetail{
                                CpeURI: "minima",
                                Description: "est",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "quos",
                                        URL: "accusamus",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "veniam",
                                        URL: "laboriosam",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "deserunt",
                                        URL: "quibusdam",
                                    },
                                },
                                Name: "sint",
                            },
                            shared.WindowsDetail{
                                CpeURI: "perspiciatis",
                                Description: "eos",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "ex",
                                        URL: "dolor",
                                    },
                                },
                                Name: "odio",
                            },
                            shared.WindowsDetail{
                                CpeURI: "vel",
                                Description: "est",
                                FixingKbs: []shared.KnowledgeBase{
                                    shared.KnowledgeBase{
                                        Name: "deserunt",
                                        URL: "iure",
                                    },
                                    shared.KnowledgeBase{
                                        Name: "aut",
                                        URL: "omnis",
                                    },
                                },
                                Name: "qui",
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
