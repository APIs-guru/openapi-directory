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
    
    req := operations.ServicecontrolServicesAllocateQuotaRequest{
        Security: operations.ServicecontrolServicesAllocateQuotaSecurity{
            Option1: &operations.ServicecontrolServicesAllocateQuotaSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ServicecontrolServicesAllocateQuotaPathParams{
            ServiceName: "perferendis",
        },
        QueryParams: operations.ServicecontrolServicesAllocateQuotaQueryParams{
            DollarXgafv: "1",
            AccessToken: "aliquam",
            Alt: "media",
            Callback: "dolore",
            Fields: "officia",
            Key: "deleniti",
            OauthToken: "hic",
            PrettyPrint: true,
            QuotaUser: "necessitatibus",
            UploadType: "at",
            UploadProtocol: "recusandae",
        },
        Request: &shared.AllocateQuotaRequest{
            AllocateOperation: &shared.QuotaOperation{
                ConsumerID: "velit",
                Labels: map[string]string{
                    "est": "omnis",
                    "aspernatur": "nemo",
                    "nesciunt": "autem",
                },
                MethodName: "vel",
                OperationID: "culpa",
                QuotaMetrics: []shared.MetricValueSet{
                    shared.MetricValueSet{
                        MetricName: "nesciunt",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "sed",
                                        "dignissimos",
                                    },
                                    Count: "ipsum",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "aliquid": "laboriosam",
                                                    "laborum": "provident",
                                                },
                                            },
                                            Timestamp: "voluptatem",
                                            Value: 51.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            56.099998,
                                            6.200000,
                                            90.199997,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 3.200000,
                                        NumFiniteBuckets: 9031118058591412898,
                                        Scale: 11.200000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 7949316518546041418,
                                        Offset: 40.200001,
                                        Width: 99.099998,
                                    },
                                    Maximum: 73.099998,
                                    Mean: 60.200001,
                                    Minimum: 53.099998,
                                    SumOfSquaredDeviation: 90.199997,
                                },
                                DoubleValue: 58.099998,
                                EndTime: "non",
                                Int64Value: "dolor",
                                Labels: map[string]string{
                                    "tenetur": "voluptas",
                                    "dolor": "in",
                                    "beatae": "rerum",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "sunt",
                                    Nanos: 8184954283311234747,
                                    Units: "pariatur",
                                },
                                StartTime: "autem",
                                StringValue: "sit",
                            },
                        },
                    },
                    shared.MetricValueSet{
                        MetricName: "aspernatur",
                        MetricValues: []shared.MetricValue{
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "praesentium",
                                    },
                                    Count: "quod",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "mollitia": "est",
                                                },
                                                map[string]interface{}{
                                                    "autem": "et",
                                                    "repudiandae": "quaerat",
                                                    "molestiae": "error",
                                                },
                                            },
                                            Timestamp: "minima",
                                            Value: 84.099998,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "ab": "suscipit",
                                                    "incidunt": "dicta",
                                                    "debitis": "fuga",
                                                },
                                            },
                                            Timestamp: "illo",
                                            Value: 79.199997,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            83.099998,
                                            89.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 13.100000,
                                        NumFiniteBuckets: 9199469050705661813,
                                        Scale: 11.200000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 6873295988035631064,
                                        Offset: 7.200000,
                                        Width: 67.099998,
                                    },
                                    Maximum: 65.099998,
                                    Mean: 37.200001,
                                    Minimum: 15.200000,
                                    SumOfSquaredDeviation: 43.099998,
                                },
                                DoubleValue: 71.199997,
                                EndTime: "doloremque",
                                Int64Value: "dolores",
                                Labels: map[string]string{
                                    "doloremque": "libero",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "pariatur",
                                    Nanos: 3019523213627311051,
                                    Units: "saepe",
                                },
                                StartTime: "aut",
                                StringValue: "rerum",
                            },
                            shared.MetricValue{
                                BoolValue: false,
                                DistributionValue: &shared.Distribution{
                                    BucketCounts: []string{
                                        "et",
                                    },
                                    Count: "mollitia",
                                    Exemplars: []shared.Exemplar{
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "voluptas": "in",
                                                },
                                                map[string]interface{}{
                                                    "et": "blanditiis",
                                                },
                                            },
                                            Timestamp: "et",
                                            Value: 41.200001,
                                        },
                                        shared.Exemplar{
                                            Attachments: []map[string]interface{}{
                                                map[string]interface{}{
                                                    "quae": "sit",
                                                    "voluptatibus": "sit",
                                                    "ipsum": "voluptas",
                                                },
                                                map[string]interface{}{
                                                    "est": "sint",
                                                },
                                            },
                                            Timestamp: "in",
                                            Value: 50.099998,
                                        },
                                    },
                                    ExplicitBuckets: &shared.ExplicitBuckets{
                                        Bounds: []float64{
                                            46.099998,
                                        },
                                    },
                                    ExponentialBuckets: &shared.ExponentialBuckets{
                                        GrowthFactor: 2.100000,
                                        NumFiniteBuckets: 5911240153053150395,
                                        Scale: 0.200000,
                                    },
                                    LinearBuckets: &shared.LinearBuckets{
                                        NumFiniteBuckets: 7149743858926030835,
                                        Offset: 4.100000,
                                        Width: 39.099998,
                                    },
                                    Maximum: 67.199997,
                                    Mean: 18.100000,
                                    Minimum: 25.200001,
                                    SumOfSquaredDeviation: 64.199997,
                                },
                                DoubleValue: 64.199997,
                                EndTime: "commodi",
                                Int64Value: "nulla",
                                Labels: map[string]string{
                                    "consequuntur": "velit",
                                    "ut": "occaecati",
                                },
                                MoneyValue: &shared.Money{
                                    CurrencyCode: "minima",
                                    Nanos: 3900992097778565861,
                                    Units: "dicta",
                                },
                                StartTime: "at",
                                StringValue: "consectetur",
                            },
                        },
                    },
                },
                QuotaMode: "ADJUST_ONLY",
            },
            ServiceConfigID: "magnam",
        },
    }
    
    res, err := s.Services.ServicecontrolServicesAllocateQuota(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateQuotaResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `ServicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `ServicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `ServicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
