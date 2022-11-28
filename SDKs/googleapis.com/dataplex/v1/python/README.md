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
    
req = operations.DataplexProjectsLocationsDataScansCreateRequest(
    security=operations.DataplexProjectsLocationsDataScansCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DataplexProjectsLocationsDataScansCreatePathParams(
        parent="est",
    ),
    query_params=operations.DataplexProjectsLocationsDataScansCreateQueryParams(
        dollar_xgafv="2",
        access_token="ipsam",
        alt="json",
        callback="temporibus",
        data_scan_id="occaecati",
        fields="deleniti",
        key="sit",
        oauth_token="corporis",
        pretty_print=True,
        quota_user="ut",
        upload_type="vel",
        upload_protocol="eligendi",
    ),
    request=shared.GoogleCloudDataplexV1DataScanInput(
        data=shared.GoogleCloudDataplexV1DataSource(
            entity="blanditiis",
        ),
        data_profile_result=shared.GoogleCloudDataplexV1DataProfileResult(
            profile=shared.GoogleCloudDataplexV1DataProfileResultProfile(
                fields=[
                    shared.GoogleCloudDataplexV1DataProfileResultProfileField(
                        mode="incidunt",
                        name="voluptatem",
                        profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo(
                            distinct_ratio=53.099998,
                            double_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo(
                                average=6.100000,
                                max=11.200000,
                                min=41.099998,
                                quartiles=[
                                    85.199997,
                                    43.200001,
                                ],
                                standard_deviation=17.100000,
                            ),
                            integer_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo(
                                average=63.099998,
                                max="magnam",
                                min="repudiandae",
                                quartiles=[
                                    "iusto",
                                    "vero",
                                    "cumque",
                                ],
                                standard_deviation=79.099998,
                            ),
                            null_ratio=30.100000,
                            string_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo(
                                average_length=39.099998,
                                max_length="et",
                                min_length="totam",
                            ),
                            top_n_values=[
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="sunt",
                                    value="placeat",
                                ),
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="reprehenderit",
                                    value="et",
                                ),
                            ],
                        ),
                        type="sint",
                    ),
                    shared.GoogleCloudDataplexV1DataProfileResultProfileField(
                        mode="hic",
                        name="possimus",
                        profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo(
                            distinct_ratio=40.099998,
                            double_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo(
                                average=39.099998,
                                max=45.200001,
                                min=15.100000,
                                quartiles=[
                                    84.199997,
                                    84.099998,
                                    55.200001,
                                ],
                                standard_deviation=25.200001,
                            ),
                            integer_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo(
                                average=42.099998,
                                max="odio",
                                min="rem",
                                quartiles=[
                                    "et",
                                ],
                                standard_deviation=15.100000,
                            ),
                            null_ratio=94.199997,
                            string_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo(
                                average_length=76.199997,
                                max_length="expedita",
                                min_length="rerum",
                            ),
                            top_n_values=[
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="fugit",
                                    value="dolorum",
                                ),
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="at",
                                    value="optio",
                                ),
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="est",
                                    value="doloribus",
                                ),
                            ],
                        ),
                        type="voluptatem",
                    ),
                    shared.GoogleCloudDataplexV1DataProfileResultProfileField(
                        mode="fuga",
                        name="occaecati",
                        profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo(
                            distinct_ratio=84.099998,
                            double_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo(
                                average=18.100000,
                                max=3.100000,
                                min=16.200001,
                                quartiles=[
                                    39.099998,
                                    42.099998,
                                ],
                                standard_deviation=50.200001,
                            ),
                            integer_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo(
                                average=85.199997,
                                max="incidunt",
                                min="molestiae",
                                quartiles=[
                                    "eveniet",
                                ],
                                standard_deviation=32.200001,
                            ),
                            null_ratio=71.199997,
                            string_profile=shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo(
                                average_length=35.099998,
                                max_length="vitae",
                                min_length="repellendus",
                            ),
                            top_n_values=[
                                shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue(
                                    count="ut",
                                    value="dolorem",
                                ),
                            ],
                        ),
                        type="vero",
                    ),
                ],
            ),
            row_count="quibusdam",
            scanned_data=shared.GoogleCloudDataplexV1ScannedData(
                incremental_field=shared.GoogleCloudDataplexV1ScannedDataIncrementalField(
                    end="sit",
                    field="culpa",
                    start="delectus",
                ),
            ),
        ),
        data_profile_spec={
            "dolor": "accusantium",
            "ipsum": "et",
        },
        data_quality_result=shared.GoogleCloudDataplexV1DataQualityResult(
            dimensions=[
                shared.GoogleCloudDataplexV1DataQualityDimensionResult(
                    passed=False,
                ),
                shared.GoogleCloudDataplexV1DataQualityDimensionResult(
                    passed=False,
                ),
                shared.GoogleCloudDataplexV1DataQualityDimensionResult(
                    passed=False,
                ),
            ],
            passed=False,
            row_count="necessitatibus",
            rules=[
                shared.GoogleCloudDataplexV1DataQualityRuleResult(
                    evaluated_count="aliquam",
                    failing_rows_query="illo",
                    null_count="eveniet",
                    pass_ratio=19.200001,
                    passed=True,
                    passed_count="accusantium",
                    rule=shared.GoogleCloudDataplexV1DataQualityRule(
                        column="saepe",
                        dimension="harum",
                        ignore_null=False,
                        non_null_expectation={
                            "nemo": "velit",
                            "aliquid": "nesciunt",
                        },
                        range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation(
                            max_value="ipsum",
                            min_value="enim",
                            strict_max_enabled=False,
                            strict_min_enabled=False,
                        ),
                        regex_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation(
                            regex="rerum",
                        ),
                        row_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation(
                            sql_expression="adipisci",
                        ),
                        set_expectation=shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation(
                            values=[
                                "quaerat",
                            ],
                        ),
                        statistic_range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation(
                            max_value="itaque",
                            min_value="magni",
                            statistic="MIN",
                            strict_max_enabled=True,
                            strict_min_enabled=True,
                        ),
                        table_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation(
                            sql_expression="qui",
                        ),
                        threshold=85.099998,
                        uniqueness_expectation={
                            "earum": "est",
                        },
                    ),
                ),
                shared.GoogleCloudDataplexV1DataQualityRuleResult(
                    evaluated_count="dicta",
                    failing_rows_query="odit",
                    null_count="autem",
                    pass_ratio=1.100000,
                    passed=True,
                    passed_count="dolor",
                    rule=shared.GoogleCloudDataplexV1DataQualityRule(
                        column="libero",
                        dimension="odit",
                        ignore_null=False,
                        non_null_expectation={
                            "dolor": "pariatur",
                            "harum": "occaecati",
                        },
                        range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation(
                            max_value="delectus",
                            min_value="magnam",
                            strict_max_enabled=True,
                            strict_min_enabled=True,
                        ),
                        regex_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation(
                            regex="magnam",
                        ),
                        row_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation(
                            sql_expression="nulla",
                        ),
                        set_expectation=shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation(
                            values=[
                                "mollitia",
                            ],
                        ),
                        statistic_range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation(
                            max_value="laborum",
                            min_value="non",
                            statistic="MAX",
                            strict_max_enabled=True,
                            strict_min_enabled=True,
                        ),
                        table_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation(
                            sql_expression="iusto",
                        ),
                        threshold=94.099998,
                        uniqueness_expectation={
                            "quam": "sit",
                        },
                    ),
                ),
                shared.GoogleCloudDataplexV1DataQualityRuleResult(
                    evaluated_count="quas",
                    failing_rows_query="est",
                    null_count="possimus",
                    pass_ratio=85.099998,
                    passed=False,
                    passed_count="aut",
                    rule=shared.GoogleCloudDataplexV1DataQualityRule(
                        column="non",
                        dimension="id",
                        ignore_null=True,
                        non_null_expectation={
                            "consequatur": "ex",
                        },
                        range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation(
                            max_value="ut",
                            min_value="quas",
                            strict_max_enabled=True,
                            strict_min_enabled=False,
                        ),
                        regex_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation(
                            regex="maxime",
                        ),
                        row_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation(
                            sql_expression="enim",
                        ),
                        set_expectation=shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation(
                            values=[
                                "pariatur",
                            ],
                        ),
                        statistic_range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation(
                            max_value="quidem",
                            min_value="nesciunt",
                            statistic="MAX",
                            strict_max_enabled=True,
                            strict_min_enabled=True,
                        ),
                        table_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation(
                            sql_expression="officia",
                        ),
                        threshold=9.100000,
                        uniqueness_expectation={
                            "et": "sunt",
                        },
                    ),
                ),
            ],
            scanned_data=shared.GoogleCloudDataplexV1ScannedData(
                incremental_field=shared.GoogleCloudDataplexV1ScannedDataIncrementalField(
                    end="eaque",
                    field="a",
                    start="eum",
                ),
            ),
        ),
        data_quality_spec=shared.GoogleCloudDataplexV1DataQualitySpec(
            rules=[
                shared.GoogleCloudDataplexV1DataQualityRule(
                    column="est",
                    dimension="quibusdam",
                    ignore_null=False,
                    non_null_expectation={
                        "omnis": "illum",
                        "et": "labore",
                    },
                    range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation(
                        max_value="voluptas",
                        min_value="eligendi",
                        strict_max_enabled=False,
                        strict_min_enabled=False,
                    ),
                    regex_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation(
                        regex="nostrum",
                    ),
                    row_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation(
                        sql_expression="similique",
                    ),
                    set_expectation=shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation(
                        values=[
                            "aut",
                            "ut",
                        ],
                    ),
                    statistic_range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation(
                        max_value="rerum",
                        min_value="est",
                        statistic="MAX",
                        strict_max_enabled=False,
                        strict_min_enabled=False,
                    ),
                    table_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation(
                        sql_expression="aut",
                    ),
                    threshold=39.200001,
                    uniqueness_expectation={
                        "voluptas": "voluptas",
                    },
                ),
                shared.GoogleCloudDataplexV1DataQualityRule(
                    column="quae",
                    dimension="nam",
                    ignore_null=True,
                    non_null_expectation={
                        "corrupti": "ut",
                    },
                    range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation(
                        max_value="quia",
                        min_value="expedita",
                        strict_max_enabled=True,
                        strict_min_enabled=True,
                    ),
                    regex_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation(
                        regex="inventore",
                    ),
                    row_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation(
                        sql_expression="molestiae",
                    ),
                    set_expectation=shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation(
                        values=[
                            "omnis",
                            "in",
                            "aperiam",
                        ],
                    ),
                    statistic_range_expectation=shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation(
                        max_value="sint",
                        min_value="similique",
                        statistic="STATISTIC_UNDEFINED",
                        strict_max_enabled=True,
                        strict_min_enabled=False,
                    ),
                    table_condition_expectation=shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation(
                        sql_expression="et",
                    ),
                    threshold=59.099998,
                    uniqueness_expectation={
                        "qui": "ab",
                    },
                ),
            ],
        ),
        description="molestiae",
        display_name="temporibus",
        execution_spec=shared.GoogleCloudDataplexV1DataScanExecutionSpec(
            field="molestias",
            trigger=shared.GoogleCloudDataplexV1Trigger(
                on_demand={
                    "quia": "nihil",
                    "cum": "et",
                },
                schedule=shared.GoogleCloudDataplexV1TriggerSchedule(
                    cron="delectus",
                ),
            ),
        ),
        labels={
            "aut": "consequuntur",
            "harum": "quia",
            "et": "ut",
        },
    ),
)
    
res = s.projects.dataplex_projects_locations_data_scans_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dataplex_projects_locations_data_scans_create` - Creates a dataScan resource.
* `dataplex_projects_locations_data_scans_list` - Lists dataScans.
* `dataplex_projects_locations_data_scans_run` - Run an on demand execution of a DataScan.
* `dataplex_projects_locations_lakes_content_create` - Create a content.
* `dataplex_projects_locations_lakes_content_list` - List content.
* `dataplex_projects_locations_lakes_contentitems_create` - Create a content.
* `dataplex_projects_locations_lakes_contentitems_list` - List content.
* `dataplex_projects_locations_lakes_create` - Creates a lake resource.
* `dataplex_projects_locations_lakes_environments_create` - Create an environment resource.
* `dataplex_projects_locations_lakes_environments_list` - Lists environments under the given lake.
* `dataplex_projects_locations_lakes_environments_sessions_list` - Lists session resources in an environment.
* `dataplex_projects_locations_lakes_list` - Lists lake resources in a project and location.
* `dataplex_projects_locations_lakes_tasks_create` - Creates a task resource within a lake.
* `dataplex_projects_locations_lakes_tasks_jobs_list` - Lists Jobs under the given task.
* `dataplex_projects_locations_lakes_tasks_list` - Lists tasks under the given lake.
* `dataplex_projects_locations_lakes_zones_assets_actions_list` - Lists action resources in an asset.
* `dataplex_projects_locations_lakes_zones_assets_create` - Creates an asset resource.
* `dataplex_projects_locations_lakes_zones_assets_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataplex_projects_locations_lakes_zones_assets_list` - Lists asset resources in a zone.
* `dataplex_projects_locations_lakes_zones_assets_patch` - Updates an asset resource.
* `dataplex_projects_locations_lakes_zones_assets_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataplex_projects_locations_lakes_zones_assets_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataplex_projects_locations_lakes_zones_create` - Creates a zone resource within a lake.
* `dataplex_projects_locations_lakes_zones_entities_create` - Create a metadata entity.
* `dataplex_projects_locations_lakes_zones_entities_list` - List metadata entities in a zone.
* `dataplex_projects_locations_lakes_zones_entities_partitions_create` - Create a metadata partition.
* `dataplex_projects_locations_lakes_zones_entities_partitions_list` - List metadata partitions of an entity.
* `dataplex_projects_locations_lakes_zones_entities_update` - Update a metadata entity. Only supports full resource update.
* `dataplex_projects_locations_lakes_zones_list` - Lists zone resources in a lake.
* `dataplex_projects_locations_list` - Lists information about the supported locations for this service.
* `dataplex_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataplex_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `dataplex_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dataplex_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
