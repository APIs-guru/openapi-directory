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
        access_token="ipsa",
        alt="proto",
        asynchronous=False,
        callback="et",
        fields="ducimus",
        key="maxime",
        oauth_token="id",
        pretty_print=True,
        quota_user="dolorem",
        upload_type="omnis",
        upload_protocol="esse",
    ),
    request=shared.Query(
        kind="ratione",
        metadata=shared.QueryMetadata(
            data_range="PREVIOUS_HALF_MONTH",
            format="XLSX",
            google_cloud_storage_path_for_latest_report="quibusdam",
            google_drive_path_for_latest_report="libero",
            latest_report_run_time_ms="unde",
            locale="laudantium",
            report_count=2054487096157752534,
            running=True,
            send_notification=True,
            share_email_address=[
                "atque",
                "et",
                "dolores",
            ],
            title="voluptates",
        ),
        params=shared.Parameters(
            filters=[
                shared.FilterPair(
                    type="FILTER_AUDIENCE_TYPE",
                    value="et",
                ),
            ],
            group_bys=[
                "FILTER_NOT_SUPPORTED",
            ],
            include_invite_data=False,
            metrics=[
                "METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS",
                "METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR",
                "METRIC_VENDOR_BLOCKED_ADS",
            ],
            options=shared.Options(
                include_only_targeted_user_lists=True,
                path_query_options=shared.PathQueryOptions(
                    channel_grouping=shared.ChannelGrouping(
                        fallback_name="est",
                        name="asperiores",
                        rules=[
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_EXTENSION_STATUS",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "rerum",
                                                        "repellat",
                                                        "sed",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="at",
                            ),
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_ADVERTISER_CURRENCY",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "dolorem",
                                                        "id",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS",
                                                    match="EXACT",
                                                    values=[
                                                        "repudiandae",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_AUDIENCE_LIST_COST",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "sunt",
                                                        "sunt",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_IAR_CATEGORY",
                                                    match="PARTIAL",
                                                    values=[
                                                        "sunt",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="vel",
                            ),
                        ],
                    ),
                    path_filters=[
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_DOMAIN",
                                        match="BEGINS_WITH",
                                        values=[
                                            "ut",
                                            "quod",
                                            "aperiam",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_VERIFICATION_AUDIBILITY_COMPLETE",
                                        match="UNKNOWN",
                                        values=[
                                            "dolores",
                                            "quo",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="FIRST",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_CREATIVE",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "magni",
                                            "error",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_GMAIL_AGE",
                                        match="PARTIAL",
                                        values=[
                                            "placeat",
                                            "vel",
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
                                        filter="FILTER_PLATFORM",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "fugit",
                                            "accusamus",
                                            "quas",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_TRUEVIEW_AD",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "in",
                                            "maxime",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_ADVERTISER",
                                        match="UNKNOWN",
                                        values=[
                                            "assumenda",
                                            "molestias",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="ANY",
                        ),
                    ],
                ),
            ),
            type="TYPE_NIELSEN_DAILY_REACH_BUILD",
        ),
        query_id="totam",
        report_data_end_time_ms="facilis",
        report_data_start_time_ms="cumque",
        schedule=shared.QuerySchedule(
            end_time_ms="aut",
            frequency="SEMI_MONTHLY",
            next_run_minute_of_day=1566211064787120766,
            next_run_timezone_code="ducimus",
            start_time_ms="possimus",
        ),
        timezone_code="qui",
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
