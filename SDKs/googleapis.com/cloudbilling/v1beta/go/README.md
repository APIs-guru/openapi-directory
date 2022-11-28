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
    
    req := operations.CloudbillingBillingAccountsEstimateCostScenarioRequest{
        Security: operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity{
            Option1: &operations.CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.CloudbillingBillingAccountsEstimateCostScenarioPathParams{
            BillingAccount: "minima",
        },
        QueryParams: operations.CloudbillingBillingAccountsEstimateCostScenarioQueryParams{
            DollarXgafv: "2",
            AccessToken: "iure",
            Alt: "proto",
            Callback: "et",
            Fields: "quidem",
            Key: "est",
            OauthToken: "laboriosam",
            PrettyPrint: false,
            QuotaUser: "quod",
            UploadType: "enim",
            UploadProtocol: "rerum",
        },
        Request: &shared.EstimateCostScenarioForBillingAccountRequest{
            CostScenario: &shared.CostScenario{
                Commitments: []shared.Commitment{
                    shared.Commitment{
                        Name: "ut",
                        VMResourceBasedCud: &shared.VMResourceBasedCud{
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "autem",
                                AcceleratorType: "tempore",
                            },
                            MachineSeries: "vel",
                            MemorySizeGb: 69.099998,
                            Plan: "THIRTY_SIX_MONTH",
                            Region: "inventore",
                            VirtualCPUCount: "consequatur",
                        },
                    },
                },
                ScenarioConfig: &shared.ScenarioConfig{
                    EstimateDuration: "ipsam",
                },
                Workloads: []shared.Workload{
                    shared.Workload{
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "ut",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "placeat",
                                            },
                                            UsageRate: 30.200001,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "quia",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 94.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "laborum",
                                            },
                                            UsageRate: 44.200001,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "ipsa",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "pariatur",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "beatae",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "amet",
                                            },
                                            UsageRate: 73.099998,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "est",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eligendi",
                                            },
                                            UsageRate: 28.100000,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "saepe",
                            },
                            StorageClass: "tenetur",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "animi",
                                AcceleratorType: "fugiat",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "aut",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "facere",
                                            },
                                            UsageRate: 57.099998,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "architecto",
                                "voluptas",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "delectus",
                                    MemorySizeGb: 13.100000,
                                    VirtualCPUCount: "officiis",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "optio",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "aut",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "repellendus",
                                                    },
                                                    UsageRate: 98.099998,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "numquam",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "saepe",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "veniam",
                                                    },
                                                    UsageRate: 13.200000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quam",
                                                    },
                                                    UsageRate: 64.099998,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_ZONAL",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "veniam",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "molestiae",
                                                    },
                                                    UsageRate: 15.100000,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "molestiae",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "fuga",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quia",
                                                    },
                                                    UsageRate: 6.200000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quas",
                                                    },
                                                    UsageRate: 49.200001,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "excepturi",
                                                    },
                                                    UsageRate: 89.199997,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_REGIONAL",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "libero",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "voluptatem",
                                                    },
                                                    UsageRate: 53.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "incidunt",
                                                    },
                                                    UsageRate: 12.100000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "possimus",
                                                    },
                                                    UsageRate: 43.200001,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "quasi",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "nostrum",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "vel",
                                                    },
                                                    UsageRate: 81.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "id",
                                                    },
                                                    UsageRate: 10.200000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "ad",
                                                    },
                                                    UsageRate: 47.200001,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_ZONAL",
                                },
                            },
                            Preemptible: false,
                            Region: "minus",
                        },
                        Name: "temporibus",
                    },
                    shared.Workload{
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "sit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 99.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "occaecati",
                                            },
                                            UsageRate: 18.200001,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "eos",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "est",
                                            },
                                            UsageRate: 45.200001,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "laborum",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "vel",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "qui",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "est",
                                            },
                                            UsageRate: 69.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "saepe",
                                            },
                                            UsageRate: 35.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "at",
                                            },
                                            UsageRate: 18.100000,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "accusantium",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "corrupti",
                                            },
                                            UsageRate: 54.200001,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "in",
                            },
                            StorageClass: "officiis",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "impedit",
                                AcceleratorType: "est",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "exercitationem",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "et",
                                            },
                                            UsageRate: 3.200000,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "error",
                                "id",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "minima",
                                    MemorySizeGb: 59.200001,
                                    VirtualCPUCount: "dicta",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "blanditiis",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "et",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "sapiente",
                                                    },
                                                    UsageRate: 41.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "delectus",
                                                    },
                                                    UsageRate: 53.099998,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "delectus",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "ipsa",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aut",
                                                    },
                                                    UsageRate: 7.100000,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_ZONAL",
                                },
                            },
                            Preemptible: false,
                            Region: "aut",
                        },
                        Name: "a",
                    },
                    shared.Workload{
                        CloudStorageWorkload: &shared.CloudStorageWorkload{
                            DataRetrieval: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "et",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "est",
                                            },
                                            UsageRate: 39.200001,
                                        },
                                    },
                                },
                            },
                            DataStored: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "doloremque",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eius",
                                            },
                                            UsageRate: 45.200001,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "voluptates",
                                            },
                                            UsageRate: 40.099998,
                                        },
                                    },
                                },
                            },
                            DualRegion: &shared.DualRegional{
                                Name: "rerum",
                            },
                            MultiRegion: &shared.MultiRegional{
                                Name: "nemo",
                            },
                            OperationA: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "reprehenderit",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "sed",
                                            },
                                            UsageRate: 82.199997,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eos",
                                            },
                                            UsageRate: 47.099998,
                                        },
                                    },
                                },
                            },
                            OperationB: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "dignissimos",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "eveniet",
                                            },
                                            UsageRate: 89.099998,
                                        },
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "aut",
                                            },
                                            UsageRate: 19.100000,
                                        },
                                    },
                                },
                            },
                            Region: &shared.Regional{
                                Name: "qui",
                            },
                            StorageClass: "quas",
                        },
                        ComputeVMWorkload: &shared.ComputeVMWorkload{
                            EnableConfidentialCompute: false,
                            GuestAccelerator: &shared.GuestAccelerator{
                                AcceleratorCount: "eos",
                                AcceleratorType: "eos",
                            },
                            InstancesRunning: &shared.Usage{
                                UsageRateTimeline: &shared.UsageRateTimeline{
                                    Unit: "natus",
                                    UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                        shared.UsageRateTimelineEntry{
                                            EffectiveTime: &shared.EstimationTimePoint{
                                                EstimationTimeFrameOffset: "alias",
                                            },
                                            UsageRate: 59.099998,
                                        },
                                    },
                                },
                            },
                            Licenses: []string{
                                "eius",
                                "repellat",
                                "in",
                            },
                            MachineType: &shared.MachineType{
                                CustomMachineType: &shared.CustomMachineType{
                                    MachineSeries: "sunt",
                                    MemorySizeGb: 6.200000,
                                    VirtualCPUCount: "quia",
                                },
                                PredefinedMachineType: &shared.PredefinedMachineType{
                                    MachineType: "culpa",
                                },
                            },
                            PersistentDisks: []shared.PersistentDisk{
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "qui",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "maxime",
                                                    },
                                                    UsageRate: 74.099998,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quia",
                                                    },
                                                    UsageRate: 99.199997,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "aut",
                                                    },
                                                    UsageRate: 62.200001,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "sequi",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "dolor",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "quas",
                                                    },
                                                    UsageRate: 3.100000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "qui",
                                                    },
                                                    UsageRate: 91.199997,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_REGIONAL",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "debitis",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "autem",
                                                    },
                                                    UsageRate: 79.199997,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "eum",
                                                    },
                                                    UsageRate: 67.199997,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "saepe",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "laboriosam",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "esse",
                                                    },
                                                    UsageRate: 16.100000,
                                                },
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "consequatur",
                                                    },
                                                    UsageRate: 63.200001,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_ZONAL",
                                },
                                shared.PersistentDisk{
                                    DiskSize: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "tempore",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "corrupti",
                                                    },
                                                    UsageRate: 63.200001,
                                                },
                                            },
                                        },
                                    },
                                    DiskType: "eaque",
                                    ProvisionedIops: &shared.Usage{
                                        UsageRateTimeline: &shared.UsageRateTimeline{
                                            Unit: "reprehenderit",
                                            UsageRateTimelineEntries: []shared.UsageRateTimelineEntry{
                                                shared.UsageRateTimelineEntry{
                                                    EffectiveTime: &shared.EstimationTimePoint{
                                                        EstimationTimeFrameOffset: "molestiae",
                                                    },
                                                    UsageRate: 32.099998,
                                                },
                                            },
                                        },
                                    },
                                    Scope: "SCOPE_UNSPECIFIED",
                                },
                            },
                            Preemptible: true,
                            Region: "quae",
                        },
                        Name: "sit",
                    },
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.CloudbillingBillingAccountsEstimateCostScenario(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EstimateCostScenarioForBillingAccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `CloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### v1beta

* `CloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
