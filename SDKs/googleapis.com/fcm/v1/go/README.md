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
    
    req := operations.FcmProjectsMessagesSendRequest{
        Security: operations.FcmProjectsMessagesSendSecurity{
            Option1: &operations.FcmProjectsMessagesSendSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.FcmProjectsMessagesSendPathParams{
            Parent: "eaque",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "1",
            AccessToken: "magni",
            Alt: "json",
            Callback: "exercitationem",
            Fields: "et",
            Key: "recusandae",
            OauthToken: "rem",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "provident",
            UploadProtocol: "illum",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "est",
                    Data: map[string]string{
                        "illum": "quia",
                    },
                    DirectBootOk: true,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "quae",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "consectetur",
                        BodyLocArgs: []string{
                            "aut",
                        },
                        BodyLocKey: "praesentium",
                        BypassProxyNotification: true,
                        ChannelID: "labore",
                        ClickAction: "quisquam",
                        Color: "dicta",
                        DefaultLightSettings: false,
                        DefaultSound: false,
                        DefaultVibrateTimings: false,
                        EventTime: "ut",
                        Icon: "et",
                        Image: "tempora",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 37.200001,
                                Blue: 52.200001,
                                Green: 70.199997,
                                Red: 45.099998,
                            },
                            LightOffDuration: "incidunt",
                            LightOnDuration: "iusto",
                        },
                        LocalOnly: false,
                        NotificationCount: 9090797606458476403,
                        NotificationPriority: "PRIORITY_HIGH",
                        Sound: "id",
                        Sticky: false,
                        Tag: "autem",
                        Ticker: "consequatur",
                        Title: "officiis",
                        TitleLocArgs: []string{
                            "voluptate",
                            "doloribus",
                            "nesciunt",
                        },
                        TitleLocKey: "exercitationem",
                        VibrateTimings: []string{
                            "ut",
                        },
                        Visibility: "SECRET",
                    },
                    Priority: "HIGH",
                    RestrictedPackageName: "ducimus",
                    TTL: "et",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "quia",
                        Image: "error",
                    },
                    Headers: map[string]string{
                        "molestias": "sequi",
                    },
                    Payload: map[string]interface{}{
                        "id": "occaecati",
                        "nulla": "omnis",
                        "molestias": "nemo",
                    },
                },
                Condition: "provident",
                Data: map[string]string{
                    "officiis": "et",
                    "eaque": "a",
                    "odit": "velit",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "est",
                },
                Name: "sunt",
                Notification: &shared.Notification{
                    Body: "nisi",
                    Image: "commodi",
                    Title: "facere",
                },
                Token: "pariatur",
                Topic: "voluptate",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "voluptatum": "perferendis",
                        "quis": "ab",
                        "et": "distinctio",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "doloremque",
                        Link: "voluptas",
                    },
                    Headers: map[string]string{
                        "consequatur": "alias",
                    },
                    Notification: map[string]interface{}{
                        "fuga": "ab",
                    },
                },
            },
            ValidateOnly: true,
        },
    }
    
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Message != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `FcmProjectsMessagesSend` - Send a message to specified target (a registration token, topic or condition).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
