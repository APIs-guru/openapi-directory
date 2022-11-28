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
    
req = operations.DoubleclickbidmanagerQueriesCreateRequest(
    security=operations.DoubleclickbidmanagerQueriesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DoubleclickbidmanagerQueriesCreateQueryParams(
        dollar_xgafv="2",
        access_token="alias",
        alt="proto",
        callback="commodi",
        fields="sunt",
        key="corrupti",
        oauth_token="voluptatem",
        pretty_print=False,
        quota_user="molestiae",
        upload_type="asperiores",
        upload_protocol="consequatur",
    ),
    request=shared.QueryInput(
        metadata=shared.QueryMetadata(
            data_range=shared.DataRange(
                custom_end_date=shared.Date(
                    day=6671789434805244583,
                    month=5212482904067058666,
                    year=6059164999202033981,
                ),
                custom_start_date=shared.Date(
                    day=7939716795557568095,
                    month=4222494168206318085,
                    year=1307568881775119472,
                ),
                range="YEAR_TO_DATE",
            ),
            format="XLSX",
            send_notification=False,
            share_email_address=[
                "dolorem",
                "omnis",
                "delectus",
            ],
            title="corrupti",
        ),
        params=shared.Parameters(
            filters=[
                shared.FilterPair(
                    type="nesciunt",
                    value="voluptatem",
                ),
            ],
            group_bys=[
                "quo",
                "eaque",
            ],
            metrics=[
                "officiis",
                "asperiores",
            ],
            options=shared.Options(
                include_only_targeted_user_lists=False,
                path_query_options=shared.PathQueryOptions(
                    channel_grouping=shared.ChannelGrouping(
                        fallback_name="qui",
                        name="corporis",
                        rules=[
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="ipsa",
                                                    match="PARTIAL",
                                                    values=[
                                                        "possimus",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="illo",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "aperiam",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="cumque",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "dolorum",
                                                        "et",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="velit",
                            ),
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="sequi",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "modi",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="quia",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "accusantium",
                                                        "ut",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="modi",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "iusto",
                                                        "esse",
                                                        "repudiandae",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="consequatur",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "accusamus",
                                                        "iste",
                                                        "animi",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="iste",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "perspiciatis",
                                                        "deserunt",
                                                        "dolorem",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="sint",
                                                    match="PARTIAL",
                                                    values=[
                                                        "vel",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="quia",
                            ),
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="est",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "sint",
                                                        "velit",
                                                        "et",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="harum",
                            ),
                        ],
                    ),
                    path_filters=[
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="recusandae",
                                        match="EXACT",
                                        values=[
                                            "dolor",
                                            "atque",
                                            "mollitia",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="rerum",
                                        match="EXACT",
                                        values=[
                                            "distinctio",
                                            "reprehenderit",
                                            "dolorem",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="omnis",
                                        match="UNKNOWN",
                                        values=[
                                            "itaque",
                                            "consequuntur",
                                            "in",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="FIRST",
                        ),
                    ],
                ),
            ),
            type="STANDARD",
        ),
        schedule=shared.QuerySchedule(
            end_date=shared.Date(
                day=1398871752352432732,
                month=496797688226034688,
                year=2217355476950766575,
            ),
            frequency="DAILY",
            next_run_timezone_code="qui",
            start_date=shared.Date(
                day=1533745246519513631,
                month=7560247571997630603,
                year=8121837298909135117,
            ),
        ),
    ),
)
    
res = s.queries.doubleclickbidmanager_queries_create(req)

if res.query is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanager_queries_create` - Creates a query.
* `doubleclickbidmanager_queries_delete` - Deletes a query as well as the associated reports.
* `doubleclickbidmanager_queries_get` - Retrieves a query.
* `doubleclickbidmanager_queries_list` - Lists queries created by the current user.
* `doubleclickbidmanager_queries_reports_get` - Retrieves a report.
* `doubleclickbidmanager_queries_reports_list` - Lists reports associated with a query.
* `doubleclickbidmanager_queries_run` - Runs a stored query to generate a report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
