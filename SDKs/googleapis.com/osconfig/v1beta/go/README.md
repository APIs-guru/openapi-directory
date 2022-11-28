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
    
    req := operations.OsconfigProjectsGuestPoliciesCreateRequest{
        Security: operations.OsconfigProjectsGuestPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OsconfigProjectsGuestPoliciesCreatePathParams{
            Parent: "earum",
        },
        QueryParams: operations.OsconfigProjectsGuestPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "laboriosam",
            Alt: "media",
            Callback: "quam",
            Fields: "aut",
            GuestPolicyID: "aut",
            Key: "est",
            OauthToken: "similique",
            PrettyPrint: true,
            QuotaUser: "dolor",
            UploadType: "et",
            UploadProtocol: "est",
        },
        Request: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "fugit": "expedita",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "neque",
                    "quia",
                },
                Instances: []string{
                    "soluta",
                    "non",
                    "et",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: "eius",
                        OsShortName: "aut",
                        OsVersion: "provident",
                    },
                },
                Zones: []string{
                    "dolorem",
                },
            },
            Description: "cum",
            Etag: "earum",
            Name: "harum",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB_SRC",
                        Components: []string{
                            "voluptatem",
                        },
                        Distribution: "quae",
                        GpgKey: "ea",
                        URI: "quia",
                    },
                    Goo: &shared.GooRepository{
                        Name: "dolorem",
                        URL: "beatae",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "voluptatem",
                        DisplayName: "dolor",
                        GpgKeys: []string{
                            "dolorem",
                            "sunt",
                        },
                        ID: "ut",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "quia",
                        DisplayName: "dolorum",
                        GpgKeys: []string{
                            "non",
                        },
                        ID: "dolor",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "omnis",
                        },
                        Distribution: "vitae",
                        GpgKey: "dolorem",
                        URI: "voluptas",
                    },
                    Goo: &shared.GooRepository{
                        Name: "molestiae",
                        URL: "debitis",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "et",
                        DisplayName: "et",
                        GpgKeys: []string{
                            "animi",
                            "dolore",
                        },
                        ID: "dolores",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "nihil",
                        DisplayName: "quas",
                        GpgKeys: []string{
                            "nemo",
                        },
                        ID: "aut",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "in",
                        },
                        Distribution: "quia",
                        GpgKey: "quidem",
                        URI: "sunt",
                    },
                    Goo: &shared.GooRepository{
                        Name: "tempora",
                        URL: "blanditiis",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "reiciendis",
                        DisplayName: "ad",
                        GpgKeys: []string{
                            "explicabo",
                            "enim",
                            "nihil",
                        },
                        ID: "eius",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "ut",
                        DisplayName: "maiores",
                        GpgKeys: []string{
                            "adipisci",
                            "ab",
                        },
                        ID: "quia",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "DESIRED_STATE_UNSPECIFIED",
                    Manager: "APT",
                    Name: "aspernatur",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "ipsam",
                                Generation: "omnis",
                                Object: "nam",
                            },
                            ID: "sint",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "minus",
                                URI: "et",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "sapiente",
                                Generation: "explicabo",
                                Object: "architecto",
                            },
                            ID: "quam",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "alias",
                                URI: "similique",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "est",
                                Generation: "aut",
                                Object: "repellat",
                            },
                            ID: "qui",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "aut",
                                URI: "distinctio",
                            },
                        },
                    },
                    DesiredState: "DESIRED_STATE_UNSPECIFIED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "cum",
                                Destination: "est",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "atque",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "eum",
                                Destination: "similique",
                                Overwrite: true,
                                Permissions: "deleniti",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    7122569346342062927,
                                },
                                Args: []string{
                                    "hic",
                                },
                                ArtifactID: "aperiam",
                                LocalPath: "asperiores",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    2178124038817671216,
                                    2444525000112152390,
                                },
                                ArtifactID: "quam",
                                Flags: []string{
                                    "officiis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "molestias",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    9039477044149418637,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "rerum",
                            },
                        },
                    },
                    Name: "rerum",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "similique",
                                Destination: "alias",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "consequuntur",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "fuga",
                                Destination: "quos",
                                Overwrite: true,
                                Permissions: "facere",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    6177610145225093962,
                                    465178855250046112,
                                    3551547707500116900,
                                },
                                Args: []string{
                                    "et",
                                    "facere",
                                    "et",
                                },
                                ArtifactID: "officiis",
                                LocalPath: "similique",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    6900656949720075118,
                                },
                                ArtifactID: "sit",
                                Flags: []string{
                                    "sed",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "esse",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    4708595733770981717,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "culpa",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "deleniti",
                                Destination: "corporis",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "quo",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "dolorem",
                                Destination: "saepe",
                                Overwrite: true,
                                Permissions: "et",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    14991002672757812,
                                },
                                Args: []string{
                                    "tempora",
                                    "et",
                                    "quia",
                                },
                                ArtifactID: "porro",
                                LocalPath: "officia",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    1902411893298843288,
                                    263922135336930585,
                                    926545870077699743,
                                },
                                ArtifactID: "tempore",
                                Flags: []string{
                                    "similique",
                                    "laborum",
                                    "voluptates",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "iure",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    7440842171506281591,
                                    3826893327860544255,
                                },
                                Interpreter: "SHELL",
                                Script: "eum",
                            },
                        },
                    },
                    Version: "culpa",
                },
            },
        },
    }
    
    res, err := s.Projects.OsconfigProjectsGuestPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestPolicy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `OsconfigProjectsGuestPoliciesCreate` - Create an OS Config guest policy.
* `OsconfigProjectsGuestPoliciesList` - Get a page of OS Config guest policies.
* `OsconfigProjectsPatchDeploymentsCreate` - Create an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsDelete` - Delete an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsList` - Get a page of OS Config patch deployments.
* `OsconfigProjectsPatchDeploymentsPatch` - Update an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsPause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `OsconfigProjectsPatchDeploymentsResume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `OsconfigProjectsPatchJobsCancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `OsconfigProjectsPatchJobsExecute` - Patch VM instances by creating and running a patch job.
* `OsconfigProjectsPatchJobsGet` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `OsconfigProjectsPatchJobsInstanceDetailsList` - Get a list of instance details for a given patch job.
* `OsconfigProjectsPatchJobsList` - Get a list of patch jobs.
* `OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
