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
    
    req := operations.ServicecontrolServicesCheckRequest{
        Security: operations.ServicecontrolServicesCheckSecurity{
            Option1: &operations.ServicecontrolServicesCheckSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.ServicecontrolServicesCheckPathParams{
            ServiceName: "ut",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "proto",
            Callback: "ut",
            Fields: "deserunt",
            Key: "accusamus",
            OauthToken: "quis",
            PrettyPrint: false,
            QuotaUser: "consequuntur",
            UploadType: "molestias",
            UploadProtocol: "beatae",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "autem",
                    Protocol: "voluptas",
                    Service: "iste",
                    Version: "qui",
                },
                Destination: &shared.Peer{
                    IP: "ducimus",
                    Labels: map[string]string{
                        "consequatur": "odio",
                    },
                    Port: "quidem",
                    Principal: "neque",
                    RegionCode: "excepturi",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "voluptates": "iusto",
                        "magnam": "maiores",
                        "ut": "et",
                    },
                    map[string]interface{}{
                        "iure": "sit",
                        "voluptatem": "aperiam",
                        "numquam": "sed",
                    },
                },
                Origin: &shared.Peer{
                    IP: "explicabo",
                    Labels: map[string]string{
                        "suscipit": "exercitationem",
                        "dolorem": "veritatis",
                    },
                    Port: "et",
                    Principal: "ducimus",
                    RegionCode: "nihil",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "nostrum",
                        },
                        Audiences: []string{
                            "dolor",
                            "pariatur",
                            "quod",
                        },
                        Claims: map[string]interface{}{
                            "doloribus": "accusamus",
                            "reiciendis": "hic",
                        },
                        Presenter: "aspernatur",
                        Principal: "possimus",
                    },
                    Headers: map[string]string{
                        "eius": "nihil",
                        "eius": "aliquid",
                    },
                    Host: "ratione",
                    ID: "perferendis",
                    Method: "voluptatem",
                    Path: "voluptatum",
                    Protocol: "quisquam",
                    Query: "quia",
                    Reason: "magni",
                    Scheme: "perspiciatis",
                    Size: "quo",
                    Time: "reiciendis",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "pariatur": "magni",
                        "sit": "assumenda",
                        "ut": "magni",
                    },
                    CreateTime: "culpa",
                    DeleteTime: "distinctio",
                    DisplayName: "a",
                    Etag: "ex",
                    Labels: map[string]string{
                        "dolorem": "provident",
                        "quia": "rerum",
                    },
                    Location: "ad",
                    Name: "voluptatem",
                    Service: "qui",
                    Type: "soluta",
                    UID: "nisi",
                    UpdateTime: "distinctio",
                },
                Response: &shared.Response{
                    BackendLatency: "aspernatur",
                    Code: "quidem",
                    Headers: map[string]string{
                        "aut": "dicta",
                    },
                    Size: "voluptas",
                    Time: "unde",
                },
                Source: &shared.Peer{
                    IP: "ipsum",
                    Labels: map[string]string{
                        "quia": "cumque",
                        "nobis": "qui",
                    },
                    Port: "odit",
                    Principal: "est",
                    RegionCode: "et",
                },
            },
            Flags: "magnam",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "porro",
                    Location: "cum",
                    Name: "doloribus",
                    Permission: "recusandae",
                    Type: "nostrum",
                },
                shared.ResourceInfo{
                    Container: "odit",
                    Location: "illum",
                    Name: "vero",
                    Permission: "molestiae",
                    Type: "rem",
                },
                shared.ResourceInfo{
                    Container: "et",
                    Location: "sapiente",
                    Name: "quis",
                    Permission: "numquam",
                    Type: "inventore",
                },
            },
            ServiceConfigID: "nobis",
        },
    }
    
    res, err := s.Services.ServicecontrolServicesCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `ServicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `ServicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
