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
            Parent: "dignissimos",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "officiis",
            Alt: "json",
            Callback: "officiis",
            Fields: "nihil",
            Key: "omnis",
            OauthToken: "maxime",
            PrettyPrint: false,
            QuotaUser: "quos",
            UploadType: "et",
            UploadProtocol: "omnis",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1beta1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1beta1ReplayConfig{
                LogSource: "RECENT_ACCESSES",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "repudiandae": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "aut",
                                            "velit",
                                            "est",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quae",
                                            "et",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "enim",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "accusantium",
                                            "ut",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "iure",
                                            "odit",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "amet",
                                            "pariatur",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "tempore",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quia",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "quo",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "aut",
                                    Expression: "molestiae",
                                    Location: "blanditiis",
                                    Title: "et",
                                },
                                Members: []string{
                                    "dicta",
                                    "enim",
                                },
                                Role: "ratione",
                            },
                        },
                        Etag: "commodi",
                        Version: 8785782413205295304,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary{
                DifferenceCount: 7841242247132918320,
                ErrorCount: 2156911971396190993,
                LogCount: 5590233000876705772,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 4031732429361760447,
                    Month: 5797452881319356845,
                    Year: 2197377284877921821,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 4588745654855075331,
                    Month: 2360021394080816363,
                    Year: 587545568868920246,
                },
                UnchangedCount: 6171314581856648447,
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
