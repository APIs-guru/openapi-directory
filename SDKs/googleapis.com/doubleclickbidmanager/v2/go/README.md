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
    
    req := operations.DoubleclickbidmanagerQueriesCreateRequest{
        Security: operations.DoubleclickbidmanagerQueriesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "alias",
            Alt: "proto",
            Callback: "commodi",
            Fields: "sunt",
            Key: "corrupti",
            OauthToken: "voluptatem",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "asperiores",
            UploadProtocol: "consequatur",
        },
        Request: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 6671789434805244583,
                        Month: 5212482904067058666,
                        Year: 6059164999202033981,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 7939716795557568095,
                        Month: 4222494168206318085,
                        Year: 1307568881775119472,
                    },
                    Range: "YEAR_TO_DATE",
                },
                Format: "XLSX",
                SendNotification: false,
                ShareEmailAddress: []string{
                    "dolorem",
                    "omnis",
                    "delectus",
                },
                Title: "corrupti",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "nesciunt",
                        Value: "voluptatem",
                    },
                },
                GroupBys: []string{
                    "quo",
                    "eaque",
                },
                Metrics: []string{
                    "officiis",
                    "asperiores",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "qui",
                            Name: "corporis",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ipsa",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "possimus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "illo",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "aperiam",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "cumque",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "dolorum",
                                                            "et",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "velit",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "sequi",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "modi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quia",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "accusantium",
                                                            "ut",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "modi",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "iusto",
                                                            "esse",
                                                            "repudiandae",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "consequatur",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "accusamus",
                                                            "iste",
                                                            "animi",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "iste",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "perspiciatis",
                                                            "deserunt",
                                                            "dolorem",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "sint",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "vel",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "quia",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "est",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "sint",
                                                            "velit",
                                                            "et",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "harum",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "recusandae",
                                            Match: "EXACT",
                                            Values: []string{
                                                "dolor",
                                                "atque",
                                                "mollitia",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "rerum",
                                            Match: "EXACT",
                                            Values: []string{
                                                "distinctio",
                                                "reprehenderit",
                                                "dolorem",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "omnis",
                                            Match: "UNKNOWN",
                                            Values: []string{
                                                "itaque",
                                                "consequuntur",
                                                "in",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "STANDARD",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 1398871752352432732,
                    Month: 496797688226034688,
                    Year: 2217355476950766575,
                },
                Frequency: "DAILY",
                NextRunTimezoneCode: "qui",
                StartDate: &shared.Date{
                    Day: 1533745246519513631,
                    Month: 7560247571997630603,
                    Year: 8121837298909135117,
                },
            },
        },
    }
    
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, req)
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

* `DoubleclickbidmanagerQueriesCreate` - Creates a query.
* `DoubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `DoubleclickbidmanagerQueriesGet` - Retrieves a query.
* `DoubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `DoubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `DoubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `DoubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
