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
    
    req := operations.GenomicsPipelinesRunRequest{
        Security: operations.GenomicsPipelinesRunSecurity{
            Option1: &operations.GenomicsPipelinesRunSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.GenomicsPipelinesRunQueryParams{
            DollarXgafv: "2",
            AccessToken: "soluta",
            Alt: "json",
            Callback: "sit",
            Fields: "omnis",
            Key: "facilis",
            OauthToken: "distinctio",
            PrettyPrint: false,
            QuotaUser: "architecto",
            UploadType: "et",
            UploadProtocol: "assumenda",
        },
        Request: &shared.RunPipelineRequest{
            Labels: map[string]string{
                "odio": "doloribus",
            },
            Pipeline: &shared.Pipeline{
                Actions: []shared.Action{
                    shared.Action{
                        Commands: []string{
                            "ut",
                            "hic",
                        },
                        Credentials: &shared.Secret{
                            CipherText: "aspernatur",
                            KeyName: "natus",
                        },
                        EncryptedEnvironment: &shared.Secret{
                            CipherText: "nostrum",
                            KeyName: "nisi",
                        },
                        Entrypoint: "molestiae",
                        Environment: map[string]string{
                            "et": "cumque",
                        },
                        Flags: []shared.ActionFlagsEnum{
                            "BLOCK_EXTERNAL_NETWORK",
                        },
                        ImageURI: "ut",
                        Labels: map[string]string{
                            "ut": "voluptatum",
                            "ipsum": "quae",
                        },
                        Mounts: []shared.Mount{
                            shared.Mount{
                                Disk: "quia",
                                Path: "non",
                                ReadOnly: true,
                            },
                            shared.Mount{
                                Disk: "repellendus",
                                Path: "nemo",
                                ReadOnly: false,
                            },
                        },
                        Name: "qui",
                        PidNamespace: "dicta",
                        PortMappings: map[string]int32{
                            "est": 2896824219235230529,
                        },
                        Timeout: "eveniet",
                    },
                },
                EncryptedEnvironment: &shared.Secret{
                    CipherText: "et",
                    KeyName: "nostrum",
                },
                Environment: map[string]string{
                    "non": "dolorem",
                    "laboriosam": "ea",
                    "omnis": "sunt",
                },
                Resources: &shared.Resources{
                    ProjectID: "et",
                    Regions: []string{
                        "et",
                    },
                    VirtualMachine: &shared.VirtualMachine{
                        Accelerators: []shared.Accelerator{
                            shared.Accelerator{
                                Count: "nemo",
                                Type: "deserunt",
                            },
                        },
                        BootDiskSizeGb: 2076279485001306565,
                        BootImage: "maiores",
                        CPUPlatform: "quos",
                        Disks: []shared.Disk{
                            shared.Disk{
                                Name: "et",
                                SizeGb: 2418626545759797140,
                                SourceImage: "illum",
                                Type: "quis",
                            },
                        },
                        DockerCacheImages: []string{
                            "numquam",
                            "aliquam",
                            "dignissimos",
                        },
                        EnableStackdriverMonitoring: true,
                        Labels: map[string]string{
                            "ut": "sequi",
                        },
                        MachineType: "esse",
                        Network: &shared.Network{
                            Name: "non",
                            Subnetwork: "id",
                            UsePrivateAddress: false,
                        },
                        NvidiaDriverVersion: "ipsa",
                        Preemptible: false,
                        Reservation: "dolorem",
                        ServiceAccount: &shared.ServiceAccount{
                            Email: "a",
                            Scopes: []string{
                                "amet",
                            },
                        },
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "natus",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "velit",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 435428050689545107,
                                    SourceImage: "alias",
                                    Type: "excepturi",
                                },
                                Volume: "temporibus",
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "ut",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "aliquam",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 8603608382322563670,
                                    SourceImage: "officiis",
                                    Type: "voluptas",
                                },
                                Volume: "aut",
                            },
                            shared.Volume{
                                ExistingDisk: &shared.ExistingDisk{
                                    Disk: "voluptatibus",
                                },
                                NfsMount: &shared.NfsMount{
                                    Target: "rerum",
                                },
                                PersistentDisk: &shared.PersistentDisk{
                                    SizeGb: 6103563391960606643,
                                    SourceImage: "voluptatem",
                                    Type: "in",
                                },
                                Volume: "praesentium",
                            },
                        },
                    },
                    Zones: []string{
                        "perspiciatis",
                    },
                },
                Timeout: "consectetur",
            },
            PubSubTopic: "voluptatibus",
        },
    }
    
    res, err := s.Pipelines.GenomicsPipelinesRun(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### pipelines

* `GenomicsPipelinesRun` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `GenomicsProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `GenomicsProjectsOperationsList` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `GenomicsProjectsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `GenomicsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
