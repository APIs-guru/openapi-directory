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
    
    req := operations.BillingbudgetsBillingAccountsBudgetsCreateRequest{
        Security: operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
            Option1: &operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "in",
            Fields: "qui",
            Key: "expedita",
            OauthToken: "dicta",
            PrettyPrint: false,
            QuotaUser: "voluptatem",
            UploadType: "et",
            UploadProtocol: "quibusdam",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "neque": "soluta",
                    "voluptate": "minima",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "libero",
                    Nanos: 6204113631619794035,
                    Units: "ratione",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "MONTH",
                CreditTypes: []string{
                    "minima",
                    "velit",
                },
                CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 1521486426180571951,
                        Month: 9000291902311776059,
                        Year: 4786425625306782624,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 3524430840374632814,
                        Month: 121253028379321650,
                        Year: 4275829936943250503,
                    },
                },
                Labels: map[string][]interface{}{
                    "ex": []interface{}{
                        "perferendis",
                        "dolores",
                        "molestiae",
                    },
                },
                Projects: []string{
                    "maxime",
                    "amet",
                },
                Services: []string{
                    "quia",
                },
                Subaccounts: []string{
                    "cupiditate",
                },
            },
            DisplayName: "excepturi",
            Etag: "itaque",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "ut",
                    "excepturi",
                },
                PubsubTopic: "autem",
                SchemaVersion: "neque",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "FORECASTED_SPEND",
                    ThresholdPercent: 98.199997,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "BASIS_UNSPECIFIED",
                    ThresholdPercent: 53.099998,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "BASIS_UNSPECIFIED",
                    ThresholdPercent: 69.099998,
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `BillingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `BillingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `BillingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
