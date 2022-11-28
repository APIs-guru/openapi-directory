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
import { DataplexProjectsLocationsDataScansCreateRequest, DataplexProjectsLocationsDataScansCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DataplexProjectsLocationsDataScansCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "est",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "ipsam",
    alt: "json",
    callback: "temporibus",
    dataScanId: "occaecati",
    fields: "deleniti",
    key: "sit",
    oauthToken: "corporis",
    prettyPrint: true,
    quotaUser: "ut",
    uploadType: "vel",
    uploadProtocol: "eligendi",
  },
  request: {
    data: {
      entity: "blanditiis",
    },
    dataProfileResult: {
      profile: {
        fields: [
          {
            mode: "incidunt",
            name: "voluptatem",
            profile: {
              distinctRatio: 53.099998,
              doubleProfile: {
                average: 6.100000,
                max: 11.200000,
                min: 41.099998,
                quartiles: [
                  85.199997,
                  43.200001,
                ],
                standardDeviation: 17.100000,
              },
              integerProfile: {
                average: 63.099998,
                max: "magnam",
                min: "repudiandae",
                quartiles: [
                  "iusto",
                  "vero",
                  "cumque",
                ],
                standardDeviation: 79.099998,
              },
              nullRatio: 30.100000,
              stringProfile: {
                averageLength: 39.099998,
                maxLength: "et",
                minLength: "totam",
              },
              topNValues: [
                {
                  count: "sunt",
                  value: "placeat",
                },
                {
                  count: "reprehenderit",
                  value: "et",
                },
              ],
            },
            type: "sint",
          },
          {
            mode: "hic",
            name: "possimus",
            profile: {
              distinctRatio: 40.099998,
              doubleProfile: {
                average: 39.099998,
                max: 45.200001,
                min: 15.100000,
                quartiles: [
                  84.199997,
                  84.099998,
                  55.200001,
                ],
                standardDeviation: 25.200001,
              },
              integerProfile: {
                average: 42.099998,
                max: "odio",
                min: "rem",
                quartiles: [
                  "et",
                ],
                standardDeviation: 15.100000,
              },
              nullRatio: 94.199997,
              stringProfile: {
                averageLength: 76.199997,
                maxLength: "expedita",
                minLength: "rerum",
              },
              topNValues: [
                {
                  count: "fugit",
                  value: "dolorum",
                },
                {
                  count: "at",
                  value: "optio",
                },
                {
                  count: "est",
                  value: "doloribus",
                },
              ],
            },
            type: "voluptatem",
          },
          {
            mode: "fuga",
            name: "occaecati",
            profile: {
              distinctRatio: 84.099998,
              doubleProfile: {
                average: 18.100000,
                max: 3.100000,
                min: 16.200001,
                quartiles: [
                  39.099998,
                  42.099998,
                ],
                standardDeviation: 50.200001,
              },
              integerProfile: {
                average: 85.199997,
                max: "incidunt",
                min: "molestiae",
                quartiles: [
                  "eveniet",
                ],
                standardDeviation: 32.200001,
              },
              nullRatio: 71.199997,
              stringProfile: {
                averageLength: 35.099998,
                maxLength: "vitae",
                minLength: "repellendus",
              },
              topNValues: [
                {
                  count: "ut",
                  value: "dolorem",
                },
              ],
            },
            type: "vero",
          },
        ],
      },
      rowCount: "quibusdam",
      scannedData: {
        incrementalField: {
          end: "sit",
          field: "culpa",
          start: "delectus",
        },
      },
    },
    dataProfileSpec: {
      "dolor": "accusantium",
      "ipsum": "et",
    },
    dataQualityResult: {
      dimensions: [
        {
          passed: false,
        },
        {
          passed: false,
        },
        {
          passed: false,
        },
      ],
      passed: false,
      rowCount: "necessitatibus",
      rules: [
        {
          evaluatedCount: "aliquam",
          failingRowsQuery: "illo",
          nullCount: "eveniet",
          passRatio: 19.200001,
          passed: true,
          passedCount: "accusantium",
          rule: {
            column: "saepe",
            dimension: "harum",
            ignoreNull: false,
            nonNullExpectation: {
              "nemo": "velit",
              "aliquid": "nesciunt",
            },
            rangeExpectation: {
              maxValue: "ipsum",
              minValue: "enim",
              strictMaxEnabled: false,
              strictMinEnabled: false,
            },
            regexExpectation: {
              regex: "rerum",
            },
            rowConditionExpectation: {
              sqlExpression: "adipisci",
            },
            setExpectation: {
              values: [
                "quaerat",
              ],
            },
            statisticRangeExpectation: {
              maxValue: "itaque",
              minValue: "magni",
              statistic: "MIN",
              strictMaxEnabled: true,
              strictMinEnabled: true,
            },
            tableConditionExpectation: {
              sqlExpression: "qui",
            },
            threshold: 85.099998,
            uniquenessExpectation: {
              "earum": "est",
            },
          },
        },
        {
          evaluatedCount: "dicta",
          failingRowsQuery: "odit",
          nullCount: "autem",
          passRatio: 1.100000,
          passed: true,
          passedCount: "dolor",
          rule: {
            column: "libero",
            dimension: "odit",
            ignoreNull: false,
            nonNullExpectation: {
              "dolor": "pariatur",
              "harum": "occaecati",
            },
            rangeExpectation: {
              maxValue: "delectus",
              minValue: "magnam",
              strictMaxEnabled: true,
              strictMinEnabled: true,
            },
            regexExpectation: {
              regex: "magnam",
            },
            rowConditionExpectation: {
              sqlExpression: "nulla",
            },
            setExpectation: {
              values: [
                "mollitia",
              ],
            },
            statisticRangeExpectation: {
              maxValue: "laborum",
              minValue: "non",
              statistic: "MAX",
              strictMaxEnabled: true,
              strictMinEnabled: true,
            },
            tableConditionExpectation: {
              sqlExpression: "iusto",
            },
            threshold: 94.099998,
            uniquenessExpectation: {
              "quam": "sit",
            },
          },
        },
        {
          evaluatedCount: "quas",
          failingRowsQuery: "est",
          nullCount: "possimus",
          passRatio: 85.099998,
          passed: false,
          passedCount: "aut",
          rule: {
            column: "non",
            dimension: "id",
            ignoreNull: true,
            nonNullExpectation: {
              "consequatur": "ex",
            },
            rangeExpectation: {
              maxValue: "ut",
              minValue: "quas",
              strictMaxEnabled: true,
              strictMinEnabled: false,
            },
            regexExpectation: {
              regex: "maxime",
            },
            rowConditionExpectation: {
              sqlExpression: "enim",
            },
            setExpectation: {
              values: [
                "pariatur",
              ],
            },
            statisticRangeExpectation: {
              maxValue: "quidem",
              minValue: "nesciunt",
              statistic: "MAX",
              strictMaxEnabled: true,
              strictMinEnabled: true,
            },
            tableConditionExpectation: {
              sqlExpression: "officia",
            },
            threshold: 9.100000,
            uniquenessExpectation: {
              "et": "sunt",
            },
          },
        },
      ],
      scannedData: {
        incrementalField: {
          end: "eaque",
          field: "a",
          start: "eum",
        },
      },
    },
    dataQualitySpec: {
      rules: [
        {
          column: "est",
          dimension: "quibusdam",
          ignoreNull: false,
          nonNullExpectation: {
            "omnis": "illum",
            "et": "labore",
          },
          rangeExpectation: {
            maxValue: "voluptas",
            minValue: "eligendi",
            strictMaxEnabled: false,
            strictMinEnabled: false,
          },
          regexExpectation: {
            regex: "nostrum",
          },
          rowConditionExpectation: {
            sqlExpression: "similique",
          },
          setExpectation: {
            values: [
              "aut",
              "ut",
            ],
          },
          statisticRangeExpectation: {
            maxValue: "rerum",
            minValue: "est",
            statistic: "MAX",
            strictMaxEnabled: false,
            strictMinEnabled: false,
          },
          tableConditionExpectation: {
            sqlExpression: "aut",
          },
          threshold: 39.200001,
          uniquenessExpectation: {
            "voluptas": "voluptas",
          },
        },
        {
          column: "quae",
          dimension: "nam",
          ignoreNull: true,
          nonNullExpectation: {
            "corrupti": "ut",
          },
          rangeExpectation: {
            maxValue: "quia",
            minValue: "expedita",
            strictMaxEnabled: true,
            strictMinEnabled: true,
          },
          regexExpectation: {
            regex: "inventore",
          },
          rowConditionExpectation: {
            sqlExpression: "molestiae",
          },
          setExpectation: {
            values: [
              "omnis",
              "in",
              "aperiam",
            ],
          },
          statisticRangeExpectation: {
            maxValue: "sint",
            minValue: "similique",
            statistic: "STATISTIC_UNDEFINED",
            strictMaxEnabled: true,
            strictMinEnabled: false,
          },
          tableConditionExpectation: {
            sqlExpression: "et",
          },
          threshold: 59.099998,
          uniquenessExpectation: {
            "qui": "ab",
          },
        },
      ],
    },
    description: "molestiae",
    displayName: "temporibus",
    executionSpec: {
      field: "molestias",
      trigger: {
        onDemand: {
          "quia": "nihil",
          "cum": "et",
        },
        schedule: {
          cron: "delectus",
        },
      },
    },
    labels: {
      "aut": "consequuntur",
      "harum": "quia",
      "et": "ut",
    },
  },
};

sdk.projects.dataplexProjectsLocationsDataScansCreate(req).then((res: DataplexProjectsLocationsDataScansCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dataplexProjectsLocationsDataScansCreate` - Creates a dataScan resource.
* `dataplexProjectsLocationsDataScansList` - Lists dataScans.
* `dataplexProjectsLocationsDataScansRun` - Run an on demand execution of a DataScan.
* `dataplexProjectsLocationsLakesContentCreate` - Create a content.
* `dataplexProjectsLocationsLakesContentList` - List content.
* `dataplexProjectsLocationsLakesContentitemsCreate` - Create a content.
* `dataplexProjectsLocationsLakesContentitemsList` - List content.
* `dataplexProjectsLocationsLakesCreate` - Creates a lake resource.
* `dataplexProjectsLocationsLakesEnvironmentsCreate` - Create an environment resource.
* `dataplexProjectsLocationsLakesEnvironmentsList` - Lists environments under the given lake.
* `dataplexProjectsLocationsLakesEnvironmentsSessionsList` - Lists session resources in an environment.
* `dataplexProjectsLocationsLakesList` - Lists lake resources in a project and location.
* `dataplexProjectsLocationsLakesTasksCreate` - Creates a task resource within a lake.
* `dataplexProjectsLocationsLakesTasksJobsList` - Lists Jobs under the given task.
* `dataplexProjectsLocationsLakesTasksList` - Lists tasks under the given lake.
* `dataplexProjectsLocationsLakesZonesAssetsActionsList` - Lists action resources in an asset.
* `dataplexProjectsLocationsLakesZonesAssetsCreate` - Creates an asset resource.
* `dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataplexProjectsLocationsLakesZonesAssetsList` - Lists asset resources in a zone.
* `dataplexProjectsLocationsLakesZonesAssetsPatch` - Updates an asset resource.
* `dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataplexProjectsLocationsLakesZonesCreate` - Creates a zone resource within a lake.
* `dataplexProjectsLocationsLakesZonesEntitiesCreate` - Create a metadata entity.
* `dataplexProjectsLocationsLakesZonesEntitiesList` - List metadata entities in a zone.
* `dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate` - Create a metadata partition.
* `dataplexProjectsLocationsLakesZonesEntitiesPartitionsList` - List metadata partitions of an entity.
* `dataplexProjectsLocationsLakesZonesEntitiesUpdate` - Update a metadata entity. Only supports full resource update.
* `dataplexProjectsLocationsLakesZonesList` - Lists zone resources in a lake.
* `dataplexProjectsLocationsList` - Lists information about the supported locations for this service.
* `dataplexProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataplexProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `dataplexProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dataplexProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
