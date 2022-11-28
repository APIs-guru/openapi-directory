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
    
    req := operations.DoubleclickbidmanagerQueriesCreatequeryRequest{
        Security: operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreatequeryQueryParams{
            DollarXgafv: "1",
            AccessToken: "ipsa",
            Alt: "proto",
            Asynchronous: false,
            Callback: "et",
            Fields: "ducimus",
            Key: "maxime",
            OauthToken: "id",
            PrettyPrint: true,
            QuotaUser: "dolorem",
            UploadType: "omnis",
            UploadProtocol: "esse",
        },
        Request: &shared.Query{
            Kind: "ratione",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_HALF_MONTH",
                Format: "XLSX",
                GoogleCloudStoragePathForLatestReport: "quibusdam",
                GoogleDrivePathForLatestReport: "libero",
                LatestReportRunTimeMs: "unde",
                Locale: "laudantium",
                ReportCount: 2054487096157752534,
                Running: true,
                SendNotification: true,
                ShareEmailAddress: []string{
                    "atque",
                    "et",
                    "dolores",
                },
                Title: "voluptates",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_AUDIENCE_TYPE",
                        Value: "et",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_NOT_SUPPORTED",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS",
                    "METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR",
                    "METRIC_VENDOR_BLOCKED_ADS",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "est",
                            Name: "asperiores",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_EXTENSION_STATUS",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "rerum",
                                                            "repellat",
                                                            "sed",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "at",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ADVERTISER_CURRENCY",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "dolorem",
                                                            "id",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "repudiandae",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_AUDIENCE_LIST_COST",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "sunt",
                                                            "sunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_IAR_CATEGORY",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "sunt",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "vel",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_DOMAIN",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "ut",
                                                "quod",
                                                "aperiam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_VERIFICATION_AUDIBILITY_COMPLETE",
                                            Match: "UNKNOWN",
                                            Values: []string{
                                                "dolores",
                                                "quo",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_CREATIVE",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "magni",
                                                "error",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_GMAIL_AGE",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "placeat",
                                                "vel",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_PLATFORM",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "fugit",
                                                "accusamus",
                                                "quas",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_TRUEVIEW_AD",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "in",
                                                "maxime",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_ADVERTISER",
                                            Match: "UNKNOWN",
                                            Values: []string{
                                                "assumenda",
                                                "molestias",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "ANY",
                            },
                        },
                    },
                },
                Type: "TYPE_NIELSEN_DAILY_REACH_BUILD",
            },
            QueryID: "totam",
            ReportDataEndTimeMs: "facilis",
            ReportDataStartTimeMs: "cumque",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "aut",
                Frequency: "SEMI_MONTHLY",
                NextRunMinuteOfDay: 1566211064787120766,
                NextRunTimezoneCode: "ducimus",
                StartTimeMs: "possimus",
            },
            TimezoneCode: "qui",
        },
    }
    
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `DoubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `DoubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `DoubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `DoubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `DoubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### reports

* `DoubleclickbidmanagerReportsListreports` - Retrieves stored reports.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
