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
    
    req := operations.WebsecurityscannerProjectsScanConfigsCreateRequest{
        Security: operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WebsecurityscannerProjectsScanConfigsCreatePathParams{
            Parent: "voluptas",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "media",
            Callback: "maxime",
            Fields: "rerum",
            Key: "inventore",
            OauthToken: "explicabo",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "soluta",
            UploadProtocol: "ab",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "ullam",
                    Password: "illo",
                    Username: "nostrum",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "esse",
                    Username: "dolorem",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "odit",
                    },
                },
            },
            BlacklistPatterns: []string{
                "voluptatum",
            },
            DisplayName: "tempore",
            ExportToSecurityCommandCenter: "ENABLED",
            IgnoreHTTPStatusErrors: false,
            LatestRun: &shared.ScanRun{
                EndTime: "suscipit",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "AUTHENTICATION_CONFIG_ISSUE",
                    MostCommonHTTPErrorCode: 6560153558486064374,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "SCAN_ALREADY_RUNNING",
                        FieldName: "voluptatum",
                    },
                },
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: false,
                Name: "quos",
                ProgressPercent: 4657958053555222384,
                ResultState: "ERROR",
                StartTime: "commodi",
                UrlsCrawledCount: "et",
                UrlsTestedCount: "necessitatibus",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "BLOCKED_BY_IAP",
                    },
                },
            },
            ManagedScan: false,
            MaxQPS: 6612788434572589531,
            Name: "ratione",
            RiskLevel: "RISK_LEVEL_UNSPECIFIED",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 6888007712442229941,
                ScheduleTime: "itaque",
            },
            StartingUrls: []string{
                "earum",
                "incidunt",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "CLOUD_RUN",
                "TARGET_PLATFORM_UNSPECIFIED",
            },
            UserAgent: "CHROME_ANDROID",
        },
    }
    
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `WebsecurityscannerProjectsScanConfigsCreate` - Creates a new ScanConfig.
* `WebsecurityscannerProjectsScanConfigsDelete` - Deletes an existing ScanConfig and its child resources.
* `WebsecurityscannerProjectsScanConfigsList` - Lists ScanConfigs under a given project.
* `WebsecurityscannerProjectsScanConfigsPatch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList` - List CrawledUrls under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList` - List all FindingTypeStats under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet` - Gets a Finding.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingsList` - List Findings under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsList` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `WebsecurityscannerProjectsScanConfigsScanRunsStop` - Stops a ScanRun. The stopped ScanRun is returned.
* `WebsecurityscannerProjectsScanConfigsStart` - Start a ScanRun according to the given ScanConfig.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
