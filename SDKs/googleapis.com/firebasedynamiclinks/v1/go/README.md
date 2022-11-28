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
    
    req := operations.FirebasedynamiclinksManagedShortLinksCreateRequest{
        Security: operations.FirebasedynamiclinksManagedShortLinksCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.FirebasedynamiclinksManagedShortLinksCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ex",
            Alt: "proto",
            Callback: "ad",
            Fields: "atque",
            Key: "aut",
            OauthToken: "laborum",
            PrettyPrint: true,
            QuotaUser: "ullam",
            UploadType: "sit",
            UploadProtocol: "dolores",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "amet",
                        UtmCampaign: "cupiditate",
                        UtmContent: "sit",
                        UtmMedium: "est",
                        UtmSource: "quasi",
                        UtmTerm: "molestiae",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "recusandae",
                        Ct: "rem",
                        Mt: "eos",
                        Pt: "ut",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "est",
                    AndroidLink: "aut",
                    AndroidMinPackageVersionCode: "voluptatem",
                    AndroidPackageName: "nulla",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "voluptatibus",
                },
                DomainURIPrefix: "quibusdam",
                DynamicLinkDomain: "quod",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "nihil",
                    IosBundleID: "maxime",
                    IosCustomScheme: "nobis",
                    IosFallbackLink: "incidunt",
                    IosIpadBundleID: "tenetur",
                    IosIpadFallbackLink: "possimus",
                    IosMinimumVersion: "occaecati",
                },
                Link: "sequi",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: true,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "necessitatibus",
                    SocialImageLink: "voluptatem",
                    SocialTitle: "accusantium",
                },
            },
            LongDynamicLink: "qui",
            Name: "voluptas",
            SdkVersion: "mollitia",
            Suffix: &shared.Suffix{
                CustomSuffix: "aut",
                Option: "SHORT",
            },
        },
    }
    
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManagedShortLinkResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### managedShortLinks

* `FirebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### shortLinks

* `FirebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### v1

* `FirebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `FirebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `FirebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
