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
    
    req := operations.DataplexProjectsLocationsDataScansCreateRequest{
        Security: operations.DataplexProjectsLocationsDataScansCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataplexProjectsLocationsDataScansCreatePathParams{
            Parent: "est",
        },
        QueryParams: operations.DataplexProjectsLocationsDataScansCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ipsam",
            Alt: "json",
            Callback: "temporibus",
            DataScanID: "occaecati",
            Fields: "deleniti",
            Key: "sit",
            OauthToken: "corporis",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "vel",
            UploadProtocol: "eligendi",
        },
        Request: &shared.GoogleCloudDataplexV1DataScanInput{
            Data: &shared.GoogleCloudDataplexV1DataSource{
                Entity: "blanditiis",
            },
            DataProfileResult: &shared.GoogleCloudDataplexV1DataProfileResult{
                Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfile{
                    Fields: []shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                        shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                            Mode: "incidunt",
                            Name: "voluptatem",
                            Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo{
                                DistinctRatio: 53.099998,
                                DoubleProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo{
                                    Average: 6.100000,
                                    Max: 11.200000,
                                    Min: 41.099998,
                                    Quartiles: []float64{
                                        85.199997,
                                        43.200001,
                                    },
                                    StandardDeviation: 17.100000,
                                },
                                IntegerProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo{
                                    Average: 63.099998,
                                    Max: "magnam",
                                    Min: "repudiandae",
                                    Quartiles: []string{
                                        "iusto",
                                        "vero",
                                        "cumque",
                                    },
                                    StandardDeviation: 79.099998,
                                },
                                NullRatio: 30.100000,
                                StringProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo{
                                    AverageLength: 39.099998,
                                    MaxLength: "et",
                                    MinLength: "totam",
                                },
                                TopNValues: []shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "sunt",
                                        Value: "placeat",
                                    },
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "reprehenderit",
                                        Value: "et",
                                    },
                                },
                            },
                            Type: "sint",
                        },
                        shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                            Mode: "hic",
                            Name: "possimus",
                            Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo{
                                DistinctRatio: 40.099998,
                                DoubleProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo{
                                    Average: 39.099998,
                                    Max: 45.200001,
                                    Min: 15.100000,
                                    Quartiles: []float64{
                                        84.199997,
                                        84.099998,
                                        55.200001,
                                    },
                                    StandardDeviation: 25.200001,
                                },
                                IntegerProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo{
                                    Average: 42.099998,
                                    Max: "odio",
                                    Min: "rem",
                                    Quartiles: []string{
                                        "et",
                                    },
                                    StandardDeviation: 15.100000,
                                },
                                NullRatio: 94.199997,
                                StringProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo{
                                    AverageLength: 76.199997,
                                    MaxLength: "expedita",
                                    MinLength: "rerum",
                                },
                                TopNValues: []shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "fugit",
                                        Value: "dolorum",
                                    },
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "at",
                                        Value: "optio",
                                    },
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "est",
                                        Value: "doloribus",
                                    },
                                },
                            },
                            Type: "voluptatem",
                        },
                        shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                            Mode: "fuga",
                            Name: "occaecati",
                            Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo{
                                DistinctRatio: 84.099998,
                                DoubleProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo{
                                    Average: 18.100000,
                                    Max: 3.100000,
                                    Min: 16.200001,
                                    Quartiles: []float64{
                                        39.099998,
                                        42.099998,
                                    },
                                    StandardDeviation: 50.200001,
                                },
                                IntegerProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo{
                                    Average: 85.199997,
                                    Max: "incidunt",
                                    Min: "molestiae",
                                    Quartiles: []string{
                                        "eveniet",
                                    },
                                    StandardDeviation: 32.200001,
                                },
                                NullRatio: 71.199997,
                                StringProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo{
                                    AverageLength: 35.099998,
                                    MaxLength: "vitae",
                                    MinLength: "repellendus",
                                },
                                TopNValues: []shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "ut",
                                        Value: "dolorem",
                                    },
                                },
                            },
                            Type: "vero",
                        },
                    },
                },
                RowCount: "quibusdam",
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: "sit",
                        Field: "culpa",
                        Start: "delectus",
                    },
                },
            },
            DataProfileSpec: map[string]interface{}{
                "dolor": "accusantium",
                "ipsum": "et",
            },
            DataQualityResult: &shared.GoogleCloudDataplexV1DataQualityResult{
                Dimensions: []shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                },
                Passed: false,
                RowCount: "necessitatibus",
                Rules: []shared.GoogleCloudDataplexV1DataQualityRuleResult{
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "aliquam",
                        FailingRowsQuery: "illo",
                        NullCount: "eveniet",
                        PassRatio: 19.200001,
                        Passed: true,
                        PassedCount: "accusantium",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "saepe",
                            Dimension: "harum",
                            IgnoreNull: false,
                            NonNullExpectation: map[string]interface{}{
                                "nemo": "velit",
                                "aliquid": "nesciunt",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "ipsum",
                                MinValue: "enim",
                                StrictMaxEnabled: false,
                                StrictMinEnabled: false,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "rerum",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "adipisci",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "quaerat",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "itaque",
                                MinValue: "magni",
                                Statistic: "MIN",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: true,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "qui",
                            },
                            Threshold: 85.099998,
                            UniquenessExpectation: map[string]interface{}{
                                "earum": "est",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "dicta",
                        FailingRowsQuery: "odit",
                        NullCount: "autem",
                        PassRatio: 1.100000,
                        Passed: true,
                        PassedCount: "dolor",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "libero",
                            Dimension: "odit",
                            IgnoreNull: false,
                            NonNullExpectation: map[string]interface{}{
                                "dolor": "pariatur",
                                "harum": "occaecati",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "delectus",
                                MinValue: "magnam",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: true,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "magnam",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "nulla",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "mollitia",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "laborum",
                                MinValue: "non",
                                Statistic: "MAX",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: true,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "iusto",
                            },
                            Threshold: 94.099998,
                            UniquenessExpectation: map[string]interface{}{
                                "quam": "sit",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "quas",
                        FailingRowsQuery: "est",
                        NullCount: "possimus",
                        PassRatio: 85.099998,
                        Passed: false,
                        PassedCount: "aut",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "non",
                            Dimension: "id",
                            IgnoreNull: true,
                            NonNullExpectation: map[string]interface{}{
                                "consequatur": "ex",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "ut",
                                MinValue: "quas",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: false,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "maxime",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "enim",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "pariatur",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "quidem",
                                MinValue: "nesciunt",
                                Statistic: "MAX",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: true,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "officia",
                            },
                            Threshold: 9.100000,
                            UniquenessExpectation: map[string]interface{}{
                                "et": "sunt",
                            },
                        },
                    },
                },
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: "eaque",
                        Field: "a",
                        Start: "eum",
                    },
                },
            },
            DataQualitySpec: &shared.GoogleCloudDataplexV1DataQualitySpec{
                Rules: []shared.GoogleCloudDataplexV1DataQualityRule{
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: "est",
                        Dimension: "quibusdam",
                        IgnoreNull: false,
                        NonNullExpectation: map[string]interface{}{
                            "omnis": "illum",
                            "et": "labore",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: "voluptas",
                            MinValue: "eligendi",
                            StrictMaxEnabled: false,
                            StrictMinEnabled: false,
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: "nostrum",
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: "similique",
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "aut",
                                "ut",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: "rerum",
                            MinValue: "est",
                            Statistic: "MAX",
                            StrictMaxEnabled: false,
                            StrictMinEnabled: false,
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: "aut",
                        },
                        Threshold: 39.200001,
                        UniquenessExpectation: map[string]interface{}{
                            "voluptas": "voluptas",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: "quae",
                        Dimension: "nam",
                        IgnoreNull: true,
                        NonNullExpectation: map[string]interface{}{
                            "corrupti": "ut",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: "quia",
                            MinValue: "expedita",
                            StrictMaxEnabled: true,
                            StrictMinEnabled: true,
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: "inventore",
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: "molestiae",
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "omnis",
                                "in",
                                "aperiam",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: "sint",
                            MinValue: "similique",
                            Statistic: "STATISTIC_UNDEFINED",
                            StrictMaxEnabled: true,
                            StrictMinEnabled: false,
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: "et",
                        },
                        Threshold: 59.099998,
                        UniquenessExpectation: map[string]interface{}{
                            "qui": "ab",
                        },
                    },
                },
            },
            Description: "molestiae",
            DisplayName: "temporibus",
            ExecutionSpec: &shared.GoogleCloudDataplexV1DataScanExecutionSpec{
                Field: "molestias",
                Trigger: &shared.GoogleCloudDataplexV1Trigger{
                    OnDemand: map[string]interface{}{
                        "quia": "nihil",
                        "cum": "et",
                    },
                    Schedule: &shared.GoogleCloudDataplexV1TriggerSchedule{
                        Cron: "delectus",
                    },
                },
            },
            Labels: map[string]string{
                "aut": "consequuntur",
                "harum": "quia",
                "et": "ut",
            },
        },
    }
    
    res, err := s.Projects.DataplexProjectsLocationsDataScansCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DataplexProjectsLocationsDataScansCreate` - Creates a dataScan resource.
* `DataplexProjectsLocationsDataScansList` - Lists dataScans.
* `DataplexProjectsLocationsDataScansRun` - Run an on demand execution of a DataScan.
* `DataplexProjectsLocationsLakesContentCreate` - Create a content.
* `DataplexProjectsLocationsLakesContentList` - List content.
* `DataplexProjectsLocationsLakesContentitemsCreate` - Create a content.
* `DataplexProjectsLocationsLakesContentitemsList` - List content.
* `DataplexProjectsLocationsLakesCreate` - Creates a lake resource.
* `DataplexProjectsLocationsLakesEnvironmentsCreate` - Create an environment resource.
* `DataplexProjectsLocationsLakesEnvironmentsList` - Lists environments under the given lake.
* `DataplexProjectsLocationsLakesEnvironmentsSessionsList` - Lists session resources in an environment.
* `DataplexProjectsLocationsLakesList` - Lists lake resources in a project and location.
* `DataplexProjectsLocationsLakesTasksCreate` - Creates a task resource within a lake.
* `DataplexProjectsLocationsLakesTasksJobsList` - Lists Jobs under the given task.
* `DataplexProjectsLocationsLakesTasksList` - Lists tasks under the given lake.
* `DataplexProjectsLocationsLakesZonesAssetsActionsList` - Lists action resources in an asset.
* `DataplexProjectsLocationsLakesZonesAssetsCreate` - Creates an asset resource.
* `DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DataplexProjectsLocationsLakesZonesAssetsList` - Lists asset resources in a zone.
* `DataplexProjectsLocationsLakesZonesAssetsPatch` - Updates an asset resource.
* `DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DataplexProjectsLocationsLakesZonesCreate` - Creates a zone resource within a lake.
* `DataplexProjectsLocationsLakesZonesEntitiesCreate` - Create a metadata entity.
* `DataplexProjectsLocationsLakesZonesEntitiesList` - List metadata entities in a zone.
* `DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate` - Create a metadata partition.
* `DataplexProjectsLocationsLakesZonesEntitiesPartitionsList` - List metadata partitions of an entity.
* `DataplexProjectsLocationsLakesZonesEntitiesUpdate` - Update a metadata entity. Only supports full resource update.
* `DataplexProjectsLocationsLakesZonesList` - Lists zone resources in a lake.
* `DataplexProjectsLocationsList` - Lists information about the supported locations for this service.
* `DataplexProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `DataplexProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `DataplexProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DataplexProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
