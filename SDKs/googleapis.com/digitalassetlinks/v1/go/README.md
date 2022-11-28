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
    
    req := operations.DigitalassetlinksAssetlinksBulkCheckRequest{
        QueryParams: operations.DigitalassetlinksAssetlinksBulkCheckQueryParams{
            DollarXgafv: "1",
            AccessToken: "nesciunt",
            Alt: "proto",
            Callback: "et",
            Fields: "qui",
            Key: "voluptatem",
            OauthToken: "aliquam",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            UploadType: "quidem",
            UploadProtocol: "enim",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: false,
            DefaultRelation: "enim",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "porro",
                    },
                    PackageName: "voluptatem",
                },
                Web: &shared.WebAsset{
                    Site: "et",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "consequatur",
                    },
                    PackageName: "totam",
                },
                Web: &shared.WebAsset{
                    Site: "eius",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "pariatur",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "ipsam",
                            },
                            PackageName: "voluptatibus",
                        },
                        Web: &shared.WebAsset{
                            Site: "nesciunt",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "quo",
                            },
                            PackageName: "rerum",
                        },
                        Web: &shared.WebAsset{
                            Site: "eos",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "distinctio",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "nisi",
                            },
                            PackageName: "dolorum",
                        },
                        Web: &shared.WebAsset{
                            Site: "velit",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "dolor",
                            },
                            PackageName: "molestiae",
                        },
                        Web: &shared.WebAsset{
                            Site: "consequatur",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Assetlinks.DigitalassetlinksAssetlinksBulkCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCheckResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assetlinks

* `DigitalassetlinksAssetlinksBulkCheck` - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* `DigitalassetlinksAssetlinksCheck` - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### statements

* `DigitalassetlinksStatementsList` - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
