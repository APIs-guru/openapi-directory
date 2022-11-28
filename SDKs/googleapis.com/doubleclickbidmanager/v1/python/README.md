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
    
req = operations.DoubleclickbidmanagerQueriesCreatequeryRequest(
    security=operations.DoubleclickbidmanagerQueriesCreatequerySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DoubleclickbidmanagerQueriesCreatequeryQueryParams(
        dollar_xgafv="1",
        access_token="omnis",
        alt="json",
        asynchronous=True,
        callback="est",
        fields="impedit",
        key="ut",
        oauth_token="ad",
        pretty_print=False,
        quota_user="et",
        upload_type="tempore",
        upload_protocol="molestiae",
    ),
    request=shared.Query(
        kind="similique",
        metadata=shared.QueryMetadata(
            data_range="LAST_7_DAYS",
            format="XLSX",
            google_cloud_storage_path_for_latest_report="voluptatem",
            google_drive_path_for_latest_report="illum",
            latest_report_run_time_ms="soluta",
            locale="ut",
            report_count=2930063880160599793,
            running=False,
            send_notification=False,
            share_email_address=[
                "totam",
                "repellat",
            ],
            title="molestiae",
        ),
        params=shared.Parameters(
            filters=[
                shared.FilterPair(
                    type="FILTER_OS",
                    value="ad",
                ),
            ],
            group_bys=[
                "FILTER_DATA_SOURCE",
                "FILTER_INSERTION_ORDER_GOAL_VALUE",
            ],
            include_invite_data=True,
            metrics=[
                "METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE",
                "METRIC_CLICKS",
                "METRIC_WIN_LOSS_DEAL_TARGETED_IMPRESSIONS",
            ],
            options=shared.Options(
                include_only_targeted_user_lists=True,
                path_query_options=shared.PathQueryOptions(
                    channel_grouping=shared.ChannelGrouping(
                        fallback_name="itaque",
                        name="eligendi",
                        rules=[
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_CITY_NAME",
                                                    match="EXACT",
                                                    values=[
                                                        "alias",
                                                        "a",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_REMARKETING_LIST",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "ut",
                                                        "autem",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_VIDEO_DURATION_SECONDS",
                                                    match="PARTIAL",
                                                    values=[
                                                        "sunt",
                                                        "autem",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
                                                    match="PARTIAL",
                                                    values=[
                                                        "sunt",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_KEYWORD",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "eligendi",
                                                        "magni",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_AGE",
                                                    match="EXACT",
                                                    values=[
                                                        "rerum",
                                                        "perferendis",
                                                        "aspernatur",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS",
                                                    match="EXACT",
                                                    values=[
                                                        "aperiam",
                                                        "minima",
                                                        "illo",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="quam",
                            ),
                        ],
                    ),
                    path_filters=[
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_MOBILE_GEO",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "sunt",
                                            "sed",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_YOUTUBE_AD_VIDEO_ID",
                                        match="EXACT",
                                        values=[
                                            "impedit",
                                            "provident",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_DEVICE_MODEL",
                                        match="PARTIAL",
                                        values=[
                                            "nihil",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="LAST",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_CM360_PLACEMENT_ID",
                                        match="EXACT",
                                        values=[
                                            "distinctio",
                                            "velit",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_TRUEVIEW_CONVERSION_TYPE",
                                        match="EXACT",
                                        values=[
                                            "vel",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_BUDGET_SEGMENT_END_DATE",
                                        match="PARTIAL",
                                        values=[
                                            "dolor",
                                            "iure",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="LAST",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_ZIP_CODE",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "qui",
                                            "libero",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_CREATIVE_WIDTH",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "totam",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="FIRST",
                        ),
                    ],
                ),
            ),
            type="TYPE_INVENTORY_AVAILABILITY",
        ),
        query_id="ullam",
        report_data_end_time_ms="rem",
        report_data_start_time_ms="at",
        schedule=shared.QuerySchedule(
            end_time_ms="aut",
            frequency="WEEKLY",
            next_run_minute_of_day=8789873767134667831,
            next_run_timezone_code="eveniet",
            start_time_ms="est",
        ),
        timezone_code="ut",
    ),
)
    
res = s.queries.doubleclickbidmanager_queries_createquery(req)

if res.query is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanager_queries_createquery` - Creates a query.
* `doubleclickbidmanager_queries_deletequery` - Deletes a stored query as well as the associated stored reports.
* `doubleclickbidmanager_queries_getquery` - Retrieves a stored query.
* `doubleclickbidmanager_queries_listqueries` - Retrieves stored queries.
* `doubleclickbidmanager_queries_runquery` - Runs a stored query to generate a report.

### reports

* `doubleclickbidmanager_reports_listreports` - Retrieves stored reports.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
