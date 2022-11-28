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
import { CloudbillingBillingAccountsEstimateCostScenarioRequest, CloudbillingBillingAccountsEstimateCostScenarioResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudbillingBillingAccountsEstimateCostScenarioRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    billingAccount: "minima",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "iure",
    alt: "proto",
    callback: "et",
    fields: "quidem",
    key: "est",
    oauthToken: "laboriosam",
    prettyPrint: false,
    quotaUser: "quod",
    uploadType: "enim",
    uploadProtocol: "rerum",
  },
  request: {
    costScenario: {
      commitments: [
        {
          name: "ut",
          vmResourceBasedCud: {
            guestAccelerator: {
              acceleratorCount: "autem",
              acceleratorType: "tempore",
            },
            machineSeries: "vel",
            memorySizeGb: 69.099998,
            plan: "THIRTY_SIX_MONTH",
            region: "inventore",
            virtualCpuCount: "consequatur",
          },
        },
      ],
      scenarioConfig: {
        estimateDuration: "ipsam",
      },
      workloads: [
        {
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "ut",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "placeat",
                    },
                    usageRate: 30.200001,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "quia",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aut",
                    },
                    usageRate: 94.199997,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "laborum",
                    },
                    usageRate: 44.200001,
                  },
                ],
              },
            },
            dualRegion: {
              name: "ipsa",
            },
            multiRegion: {
              name: "pariatur",
            },
            operationA: {
              usageRateTimeline: {
                unit: "beatae",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "amet",
                    },
                    usageRate: 73.099998,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "est",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eligendi",
                    },
                    usageRate: 28.100000,
                  },
                ],
              },
            },
            region: {
              name: "saepe",
            },
            storageClass: "tenetur",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "animi",
              acceleratorType: "fugiat",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "aut",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "facere",
                    },
                    usageRate: 57.099998,
                  },
                ],
              },
            },
            licenses: [
              "architecto",
              "voluptas",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "delectus",
                memorySizeGb: 13.100000,
                virtualCpuCount: "officiis",
              },
              predefinedMachineType: {
                machineType: "optio",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "aut",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "repellendus",
                        },
                        usageRate: 98.099998,
                      },
                    ],
                  },
                },
                diskType: "numquam",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "saepe",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "veniam",
                        },
                        usageRate: 13.200000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quam",
                        },
                        usageRate: 64.099998,
                      },
                    ],
                  },
                },
                scope: "SCOPE_ZONAL",
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "veniam",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "molestiae",
                        },
                        usageRate: 15.100000,
                      },
                    ],
                  },
                },
                diskType: "molestiae",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "fuga",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quia",
                        },
                        usageRate: 6.200000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quas",
                        },
                        usageRate: 49.200001,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "excepturi",
                        },
                        usageRate: 89.199997,
                      },
                    ],
                  },
                },
                scope: "SCOPE_REGIONAL",
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "libero",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "voluptatem",
                        },
                        usageRate: 53.099998,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "incidunt",
                        },
                        usageRate: 12.100000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "possimus",
                        },
                        usageRate: 43.200001,
                      },
                    ],
                  },
                },
                diskType: "quasi",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "nostrum",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "vel",
                        },
                        usageRate: 81.099998,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "id",
                        },
                        usageRate: 10.200000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "ad",
                        },
                        usageRate: 47.200001,
                      },
                    ],
                  },
                },
                scope: "SCOPE_ZONAL",
              },
            ],
            preemptible: false,
            region: "minus",
          },
          name: "temporibus",
        },
        {
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "sit",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aut",
                    },
                    usageRate: 99.199997,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "occaecati",
                    },
                    usageRate: 18.200001,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "eos",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "est",
                    },
                    usageRate: 45.200001,
                  },
                ],
              },
            },
            dualRegion: {
              name: "laborum",
            },
            multiRegion: {
              name: "vel",
            },
            operationA: {
              usageRateTimeline: {
                unit: "qui",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "est",
                    },
                    usageRate: 69.199997,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "saepe",
                    },
                    usageRate: 35.099998,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "at",
                    },
                    usageRate: 18.100000,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "accusantium",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "corrupti",
                    },
                    usageRate: 54.200001,
                  },
                ],
              },
            },
            region: {
              name: "in",
            },
            storageClass: "officiis",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "impedit",
              acceleratorType: "est",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "exercitationem",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "et",
                    },
                    usageRate: 3.200000,
                  },
                ],
              },
            },
            licenses: [
              "error",
              "id",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "minima",
                memorySizeGb: 59.200001,
                virtualCpuCount: "dicta",
              },
              predefinedMachineType: {
                machineType: "blanditiis",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "et",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "sapiente",
                        },
                        usageRate: 41.099998,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "delectus",
                        },
                        usageRate: 53.099998,
                      },
                    ],
                  },
                },
                diskType: "delectus",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "ipsa",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aut",
                        },
                        usageRate: 7.100000,
                      },
                    ],
                  },
                },
                scope: "SCOPE_ZONAL",
              },
            ],
            preemptible: false,
            region: "aut",
          },
          name: "a",
        },
        {
          cloudStorageWorkload: {
            dataRetrieval: {
              usageRateTimeline: {
                unit: "et",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "est",
                    },
                    usageRate: 39.200001,
                  },
                ],
              },
            },
            dataStored: {
              usageRateTimeline: {
                unit: "doloremque",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eius",
                    },
                    usageRate: 45.200001,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "voluptates",
                    },
                    usageRate: 40.099998,
                  },
                ],
              },
            },
            dualRegion: {
              name: "rerum",
            },
            multiRegion: {
              name: "nemo",
            },
            operationA: {
              usageRateTimeline: {
                unit: "reprehenderit",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "sed",
                    },
                    usageRate: 82.199997,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eos",
                    },
                    usageRate: 47.099998,
                  },
                ],
              },
            },
            operationB: {
              usageRateTimeline: {
                unit: "dignissimos",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "eveniet",
                    },
                    usageRate: 89.099998,
                  },
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "aut",
                    },
                    usageRate: 19.100000,
                  },
                ],
              },
            },
            region: {
              name: "qui",
            },
            storageClass: "quas",
          },
          computeVmWorkload: {
            enableConfidentialCompute: false,
            guestAccelerator: {
              acceleratorCount: "eos",
              acceleratorType: "eos",
            },
            instancesRunning: {
              usageRateTimeline: {
                unit: "natus",
                usageRateTimelineEntries: [
                  {
                    effectiveTime: {
                      estimationTimeFrameOffset: "alias",
                    },
                    usageRate: 59.099998,
                  },
                ],
              },
            },
            licenses: [
              "eius",
              "repellat",
              "in",
            ],
            machineType: {
              customMachineType: {
                machineSeries: "sunt",
                memorySizeGb: 6.200000,
                virtualCpuCount: "quia",
              },
              predefinedMachineType: {
                machineType: "culpa",
              },
            },
            persistentDisks: [
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "qui",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "maxime",
                        },
                        usageRate: 74.099998,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quia",
                        },
                        usageRate: 99.199997,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "aut",
                        },
                        usageRate: 62.200001,
                      },
                    ],
                  },
                },
                diskType: "sequi",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "dolor",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "quas",
                        },
                        usageRate: 3.100000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "qui",
                        },
                        usageRate: 91.199997,
                      },
                    ],
                  },
                },
                scope: "SCOPE_REGIONAL",
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "debitis",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "autem",
                        },
                        usageRate: 79.199997,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "eum",
                        },
                        usageRate: 67.199997,
                      },
                    ],
                  },
                },
                diskType: "saepe",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "laboriosam",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "esse",
                        },
                        usageRate: 16.100000,
                      },
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "consequatur",
                        },
                        usageRate: 63.200001,
                      },
                    ],
                  },
                },
                scope: "SCOPE_ZONAL",
              },
              {
                diskSize: {
                  usageRateTimeline: {
                    unit: "tempore",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "corrupti",
                        },
                        usageRate: 63.200001,
                      },
                    ],
                  },
                },
                diskType: "eaque",
                provisionedIops: {
                  usageRateTimeline: {
                    unit: "reprehenderit",
                    usageRateTimelineEntries: [
                      {
                        effectiveTime: {
                          estimationTimeFrameOffset: "molestiae",
                        },
                        usageRate: 32.099998,
                      },
                    ],
                  },
                },
                scope: "SCOPE_UNSPECIFIED",
              },
            ],
            preemptible: true,
            region: "quae",
          },
          name: "sit",
        },
      ],
    },
  },
};

sdk.billingAccounts.cloudbillingBillingAccountsEstimateCostScenario(req).then((res: CloudbillingBillingAccountsEstimateCostScenarioResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `cloudbillingBillingAccountsEstimateCostScenario` - Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.

### v1beta

* `cloudbillingEstimateCostScenario` - Estimate list prices using a `CostScenario` without a defined `billingAccount`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
