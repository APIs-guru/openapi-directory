# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ServicecontrolServicesAllocateQuotaRequest(
    security=operations.ServicecontrolServicesAllocateQuotaSecurity(
        option1=operations.ServicecontrolServicesAllocateQuotaSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ServicecontrolServicesAllocateQuotaPathParams(
        service_name="perferendis",
    ),
    query_params=operations.ServicecontrolServicesAllocateQuotaQueryParams(
        dollar_xgafv="1",
        access_token="aliquam",
        alt="media",
        callback="dolore",
        fields="officia",
        key="deleniti",
        oauth_token="hic",
        pretty_print=True,
        quota_user="necessitatibus",
        upload_type="at",
        upload_protocol="recusandae",
    ),
    request=shared.AllocateQuotaRequest(
        allocate_operation=shared.QuotaOperation(
            consumer_id="velit",
            labels={
                "est": "omnis",
                "aspernatur": "nemo",
                "nesciunt": "autem",
            },
            method_name="vel",
            operation_id="culpa",
            quota_metrics=[
                shared.MetricValueSet(
                    metric_name="nesciunt",
                    metric_values=[
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "sed",
                                    "dignissimos",
                                ],
                                count="ipsum",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "aliquid": "laboriosam",
                                                "laborum": "provident",
                                            },
                                        ],
                                        timestamp="voluptatem",
                                        value=51.099998,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        56.099998,
                                        6.200000,
                                        90.199997,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=3.200000,
                                    num_finite_buckets=9031118058591412898,
                                    scale=11.200000,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=7949316518546041418,
                                    offset=40.200001,
                                    width=99.099998,
                                ),
                                maximum=73.099998,
                                mean=60.200001,
                                minimum=53.099998,
                                sum_of_squared_deviation=90.199997,
                            ),
                            double_value=58.099998,
                            end_time="non",
                            int64_value="dolor",
                            labels={
                                "tenetur": "voluptas",
                                "dolor": "in",
                                "beatae": "rerum",
                            },
                            money_value=shared.Money(
                                currency_code="sunt",
                                nanos=8184954283311234747,
                                units="pariatur",
                            ),
                            start_time="autem",
                            string_value="sit",
                        ),
                    ],
                ),
                shared.MetricValueSet(
                    metric_name="aspernatur",
                    metric_values=[
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "praesentium",
                                ],
                                count="quod",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "mollitia": "est",
                                            },
                                            {
                                                "autem": "et",
                                                "repudiandae": "quaerat",
                                                "molestiae": "error",
                                            },
                                        ],
                                        timestamp="minima",
                                        value=84.099998,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "ab": "suscipit",
                                                "incidunt": "dicta",
                                                "debitis": "fuga",
                                            },
                                        ],
                                        timestamp="illo",
                                        value=79.199997,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        83.099998,
                                        89.099998,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=13.100000,
                                    num_finite_buckets=9199469050705661813,
                                    scale=11.200000,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=6873295988035631064,
                                    offset=7.200000,
                                    width=67.099998,
                                ),
                                maximum=65.099998,
                                mean=37.200001,
                                minimum=15.200000,
                                sum_of_squared_deviation=43.099998,
                            ),
                            double_value=71.199997,
                            end_time="doloremque",
                            int64_value="dolores",
                            labels={
                                "doloremque": "libero",
                            },
                            money_value=shared.Money(
                                currency_code="pariatur",
                                nanos=3019523213627311051,
                                units="saepe",
                            ),
                            start_time="aut",
                            string_value="rerum",
                        ),
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "et",
                                ],
                                count="mollitia",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "voluptas": "in",
                                            },
                                            {
                                                "et": "blanditiis",
                                            },
                                        ],
                                        timestamp="et",
                                        value=41.200001,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "quae": "sit",
                                                "voluptatibus": "sit",
                                                "ipsum": "voluptas",
                                            },
                                            {
                                                "est": "sint",
                                            },
                                        ],
                                        timestamp="in",
                                        value=50.099998,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        46.099998,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=2.100000,
                                    num_finite_buckets=5911240153053150395,
                                    scale=0.200000,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=7149743858926030835,
                                    offset=4.100000,
                                    width=39.099998,
                                ),
                                maximum=67.199997,
                                mean=18.100000,
                                minimum=25.200001,
                                sum_of_squared_deviation=64.199997,
                            ),
                            double_value=64.199997,
                            end_time="commodi",
                            int64_value="nulla",
                            labels={
                                "consequuntur": "velit",
                                "ut": "occaecati",
                            },
                            money_value=shared.Money(
                                currency_code="minima",
                                nanos=3900992097778565861,
                                units="dicta",
                            ),
                            start_time="at",
                            string_value="consectetur",
                        ),
                    ],
                ),
            ],
            quota_mode="ADJUST_ONLY",
        ),
        service_config_id="magnam",
    ),
)
    
res = s.services.servicecontrol_services_allocate_quota(req)

if res.allocate_quota_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrol_services_allocate_quota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrol_services_check` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrol_services_report` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
