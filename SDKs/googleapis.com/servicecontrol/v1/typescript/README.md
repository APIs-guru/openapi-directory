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
import { ServicecontrolServicesAllocateQuotaRequest, ServicecontrolServicesAllocateQuotaResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ServicecontrolServicesAllocateQuotaRequest = {
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
    serviceName: "perferendis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "aliquam",
    alt: "media",
    callback: "dolore",
    fields: "officia",
    key: "deleniti",
    oauthToken: "hic",
    prettyPrint: true,
    quotaUser: "necessitatibus",
    uploadType: "at",
    uploadProtocol: "recusandae",
  },
  request: {
    allocateOperation: {
      consumerId: "velit",
      labels: {
        "est": "omnis",
        "aspernatur": "nemo",
        "nesciunt": "autem",
      },
      methodName: "vel",
      operationId: "culpa",
      quotaMetrics: [
        {
          metricName: "nesciunt",
          metricValues: [
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "sed",
                  "dignissimos",
                ],
                count: "ipsum",
                exemplars: [
                  {
                    attachments: [
                      {
                        "aliquid": "laboriosam",
                        "laborum": "provident",
                      },
                    ],
                    timestamp: "voluptatem",
                    value: 51.099998,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    56.099998,
                    6.200000,
                    90.199997,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 3.200000,
                  numFiniteBuckets: 9031118058591412898,
                  scale: 11.200000,
                },
                linearBuckets: {
                  numFiniteBuckets: 7949316518546041418,
                  offset: 40.200001,
                  width: 99.099998,
                },
                maximum: 73.099998,
                mean: 60.200001,
                minimum: 53.099998,
                sumOfSquaredDeviation: 90.199997,
              },
              doubleValue: 58.099998,
              endTime: "non",
              int64Value: "dolor",
              labels: {
                "tenetur": "voluptas",
                "dolor": "in",
                "beatae": "rerum",
              },
              moneyValue: {
                currencyCode: "sunt",
                nanos: 8184954283311234747,
                units: "pariatur",
              },
              startTime: "autem",
              stringValue: "sit",
            },
          ],
        },
        {
          metricName: "aspernatur",
          metricValues: [
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "praesentium",
                ],
                count: "quod",
                exemplars: [
                  {
                    attachments: [
                      {
                        "mollitia": "est",
                      },
                      {
                        "autem": "et",
                        "repudiandae": "quaerat",
                        "molestiae": "error",
                      },
                    ],
                    timestamp: "minima",
                    value: 84.099998,
                  },
                  {
                    attachments: [
                      {
                        "ab": "suscipit",
                        "incidunt": "dicta",
                        "debitis": "fuga",
                      },
                    ],
                    timestamp: "illo",
                    value: 79.199997,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    83.099998,
                    89.099998,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 13.100000,
                  numFiniteBuckets: 9199469050705661813,
                  scale: 11.200000,
                },
                linearBuckets: {
                  numFiniteBuckets: 6873295988035631064,
                  offset: 7.200000,
                  width: 67.099998,
                },
                maximum: 65.099998,
                mean: 37.200001,
                minimum: 15.200000,
                sumOfSquaredDeviation: 43.099998,
              },
              doubleValue: 71.199997,
              endTime: "doloremque",
              int64Value: "dolores",
              labels: {
                "doloremque": "libero",
              },
              moneyValue: {
                currencyCode: "pariatur",
                nanos: 3019523213627311051,
                units: "saepe",
              },
              startTime: "aut",
              stringValue: "rerum",
            },
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "et",
                ],
                count: "mollitia",
                exemplars: [
                  {
                    attachments: [
                      {
                        "voluptas": "in",
                      },
                      {
                        "et": "blanditiis",
                      },
                    ],
                    timestamp: "et",
                    value: 41.200001,
                  },
                  {
                    attachments: [
                      {
                        "quae": "sit",
                        "voluptatibus": "sit",
                        "ipsum": "voluptas",
                      },
                      {
                        "est": "sint",
                      },
                    ],
                    timestamp: "in",
                    value: 50.099998,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    46.099998,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 2.100000,
                  numFiniteBuckets: 5911240153053150395,
                  scale: 0.200000,
                },
                linearBuckets: {
                  numFiniteBuckets: 7149743858926030835,
                  offset: 4.100000,
                  width: 39.099998,
                },
                maximum: 67.199997,
                mean: 18.100000,
                minimum: 25.200001,
                sumOfSquaredDeviation: 64.199997,
              },
              doubleValue: 64.199997,
              endTime: "commodi",
              int64Value: "nulla",
              labels: {
                "consequuntur": "velit",
                "ut": "occaecati",
              },
              moneyValue: {
                currencyCode: "minima",
                nanos: 3900992097778565861,
                units: "dicta",
              },
              startTime: "at",
              stringValue: "consectetur",
            },
          ],
        },
      ],
      quotaMode: "ADJUST_ONLY",
    },
    serviceConfigId: "magnam",
  },
};

sdk.services.servicecontrolServicesAllocateQuota(req).then((res: ServicecontrolServicesAllocateQuotaResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
