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
            AccessToken: "omnis",
            Alt: "json",
            Asynchronous: true,
            Callback: "est",
            Fields: "impedit",
            Key: "ut",
            OauthToken: "ad",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "tempore",
            UploadProtocol: "molestiae",
        },
        Request: &shared.Query{
            Kind: "similique",
            Metadata: &shared.QueryMetadata{
                DataRange: "LAST_7_DAYS",
                Format: "XLSX",
                GoogleCloudStoragePathForLatestReport: "voluptatem",
                GoogleDrivePathForLatestReport: "illum",
                LatestReportRunTimeMs: "soluta",
                Locale: "ut",
                ReportCount: 2930063880160599793,
                Running: false,
                SendNotification: false,
                ShareEmailAddress: []string{
                    "totam",
                    "repellat",
                },
                Title: "molestiae",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_OS",
                        Value: "ad",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_DATA_SOURCE",
                    "FILTER_INSERTION_ORDER_GOAL_VALUE",
                },
                IncludeInviteData: true,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE",
                    "METRIC_CLICKS",
                    "METRIC_WIN_LOSS_DEAL_TARGETED_IMPRESSIONS",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "itaque",
                            Name: "eligendi",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_CITY_NAME",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "alias",
                                                            "a",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_REMARKETING_LIST",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "ut",
                                                            "autem",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VIDEO_DURATION_SECONDS",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "sunt",
                                                            "autem",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "sunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_KEYWORD",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "eligendi",
                                                            "magni",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_AGE",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "rerum",
                                                            "perferendis",
                                                            "aspernatur",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "aperiam",
                                                            "minima",
                                                            "illo",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "quam",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_MOBILE_GEO",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "sunt",
                                                "sed",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_YOUTUBE_AD_VIDEO_ID",
                                            Match: "EXACT",
                                            Values: []string{
                                                "impedit",
                                                "provident",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_DEVICE_MODEL",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "nihil",
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
                                            Filter: "FILTER_CM360_PLACEMENT_ID",
                                            Match: "EXACT",
                                            Values: []string{
                                                "distinctio",
                                                "velit",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_TRUEVIEW_CONVERSION_TYPE",
                                            Match: "EXACT",
                                            Values: []string{
                                                "vel",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_BUDGET_SEGMENT_END_DATE",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "dolor",
                                                "iure",
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
                                            Filter: "FILTER_ZIP_CODE",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "qui",
                                                "libero",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_CREATIVE_WIDTH",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "totam",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "TYPE_INVENTORY_AVAILABILITY",
            },
            QueryID: "ullam",
            ReportDataEndTimeMs: "rem",
            ReportDataStartTimeMs: "at",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "aut",
                Frequency: "WEEKLY",
                NextRunMinuteOfDay: 8789873767134667831,
                NextRunTimezoneCode: "eveniet",
                StartTimeMs: "est",
            },
            TimezoneCode: "ut",
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
