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
    
    req := operations.TrafficdirectorDiscoveryClientStatusRequest{
        Security: operations.TrafficdirectorDiscoveryClientStatusSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.TrafficdirectorDiscoveryClientStatusQueryParams{
            DollarXgafv: "1",
            AccessToken: "error",
            Alt: "media",
            Callback: "quos",
            Fields: "repellat",
            Key: "beatae",
            OauthToken: "iusto",
            PrettyPrint: false,
            QuotaUser: "similique",
            UploadType: "qui",
            UploadProtocol: "architecto",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "aut",
                        IgnoreCase: false,
                        Prefix: "dolores",
                        Regex: "consequuntur",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 7453439902694599752,
                            },
                            Regex: "id",
                        },
                        Suffix: "esse",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "quaerat",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 47.200001,
                                    Range: &shared.DoubleRange{
                                        End: 13.100000,
                                        Start: 50.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "vitae": "laborum",
                                    "vitae": "nihil",
                                    "excepturi": "dolores",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "ut",
                                    IgnoreCase: true,
                                    Prefix: "ullam",
                                    Regex: "voluptas",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 8920998268577836284,
                                        },
                                        Regex: "sequi",
                                    },
                                    Suffix: "eum",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "animi",
                                },
                                shared.PathSegment{
                                    Key: "veritatis",
                                },
                                shared.PathSegment{
                                    Key: "quas",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 68.199997,
                                    Range: &shared.DoubleRange{
                                        End: 31.100000,
                                        Start: 78.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "et": "temporibus",
                                    "reiciendis": "totam",
                                    "sed": "labore",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "voluptatem",
                                    IgnoreCase: false,
                                    Prefix: "qui",
                                    Regex: "iusto",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 4519647800677519930,
                                        },
                                        Regex: "quae",
                                    },
                                    Suffix: "nisi",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "recusandae",
                                },
                                shared.PathSegment{
                                    Key: "veritatis",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 81.099998,
                                    Range: &shared.DoubleRange{
                                        End: 10.100000,
                                        Start: 36.200001,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "similique": "ut",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "earum",
                                    IgnoreCase: false,
                                    Prefix: "voluptatem",
                                    Regex: "hic",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 1213782071673588914,
                                        },
                                        Regex: "fugiat",
                                    },
                                    Suffix: "cum",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "vel",
                        IgnoreCase: false,
                        Prefix: "explicabo",
                        Regex: "aut",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 7874805523998436429,
                            },
                            Regex: "sint",
                        },
                        Suffix: "repellat",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "non",
                                },
                                shared.PathSegment{
                                    Key: "unde",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 83.199997,
                                    Range: &shared.DoubleRange{
                                        End: 71.099998,
                                        Start: 90.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "natus": "aut",
                                    "qui": "facilis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "excepturi",
                                    IgnoreCase: true,
                                    Prefix: "eligendi",
                                    Regex: "praesentium",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 5827889564704785700,
                                        },
                                        Regex: "tenetur",
                                    },
                                    Suffix: "est",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "et",
                                },
                                shared.PathSegment{
                                    Key: "magni",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 22.200001,
                                    Range: &shared.DoubleRange{
                                        End: 19.200001,
                                        Start: 54.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "qui": "quas",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "sunt",
                                    IgnoreCase: true,
                                    Prefix: "cupiditate",
                                    Regex: "cumque",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 4086921742091866397,
                                        },
                                        Regex: "voluptatem",
                                    },
                                    Suffix: "in",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "et",
                        IgnoreCase: false,
                        Prefix: "laborum",
                        Regex: "adipisci",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 550283095766738378,
                            },
                            Regex: "autem",
                        },
                        Suffix: "ut",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "voluptas",
                                },
                                shared.PathSegment{
                                    Key: "dolore",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 56.200001,
                                    Range: &shared.DoubleRange{
                                        End: 10.100000,
                                        Start: 59.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "corrupti": "et",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "deserunt",
                                    IgnoreCase: true,
                                    Prefix: "at",
                                    Regex: "tempora",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 4032087116125045137,
                                        },
                                        Regex: "debitis",
                                    },
                                    Suffix: "culpa",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Discovery.TrafficdirectorDiscoveryClientStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStatusResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `TrafficdirectorDiscoveryClientStatus`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
