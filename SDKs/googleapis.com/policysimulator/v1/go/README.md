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
    
    req := operations.PolicysimulatorProjectsLocationsReplaysCreateRequest{
        Security: operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PolicysimulatorProjectsLocationsReplaysCreatePathParams{
            Parent: "quaerat",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "doloremque",
            Alt: "json",
            Callback: "numquam",
            Fields: "a",
            Key: "non",
            OauthToken: "itaque",
            PrettyPrint: false,
            QuotaUser: "quo",
            UploadType: "nisi",
            UploadProtocol: "deleniti",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "LOG_SOURCE_UNSPECIFIED",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "consequatur": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "voluptas",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "minima",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "alias",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                            "magnam",
                                            "blanditiis",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "debitis",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "maiores",
                                            "reprehenderit",
                                            "quia",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "officia",
                                            "sunt",
                                            "voluptatem",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "esse",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "id",
                                    Expression: "maxime",
                                    Location: "minus",
                                    Title: "sed",
                                },
                                Members: []string{
                                    "distinctio",
                                    "rerum",
                                },
                                Role: "totam",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "alias",
                                    Expression: "temporibus",
                                    Location: "delectus",
                                    Title: "nemo",
                                },
                                Members: []string{
                                    "accusantium",
                                    "illum",
                                },
                                Role: "quas",
                            },
                        },
                        Etag: "in",
                        Version: 6969309311508923998,
                    },
                    "aut": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "rerum",
                                            "qui",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "incidunt",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "odio",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "aperiam",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "dolorem",
                                    Expression: "dolor",
                                    Location: "iusto",
                                    Title: "iusto",
                                },
                                Members: []string{
                                    "alias",
                                    "atque",
                                },
                                Role: "vero",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "est",
                                    Expression: "quia",
                                    Location: "qui",
                                    Title: "iusto",
                                },
                                Members: []string{
                                    "delectus",
                                    "recusandae",
                                },
                                Role: "repellat",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "suscipit",
                                    Expression: "autem",
                                    Location: "accusamus",
                                    Title: "autem",
                                },
                                Members: []string{
                                    "laudantium",
                                },
                                Role: "debitis",
                            },
                        },
                        Etag: "sapiente",
                        Version: 4681406324211410955,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 5234953397910843034,
                ErrorCount: 5846958317667548146,
                LogCount: 7346453447501218193,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 2943922309746592043,
                    Month: 4494203844848527318,
                    Year: 2227584911989376714,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 2288355997085519707,
                    Month: 8427404750346864572,
                    Year: 8392707394207074712,
                },
                UnchangedCount: 2636727003386611254,
            },
        },
    }
    
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `PolicysimulatorProjectsLocationsReplaysCreate` - Creates and starts a Replay using the given ReplayConfig.
* `PolicysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `PolicysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
