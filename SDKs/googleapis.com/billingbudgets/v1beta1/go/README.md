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
            Parent: "ratione",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "libero",
            Alt: "proto",
            Callback: "qui",
            Fields: "quae",
            Key: "iste",
            OauthToken: "animi",
            PrettyPrint: true,
            QuotaUser: "pariatur",
            UploadType: "adipisci",
            UploadProtocol: "recusandae",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: true,
                    MonitoringNotificationChannels: []string{
                        "unde",
                    },
                    PubsubTopic: "et",
                    SchemaVersion: "voluptatum",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "molestiae": "tempora",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "praesentium",
                        Nanos: 2369452140427811028,
                        Units: "sed",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "YEAR",
                    CreditTypes: []string{
                        "aliquid",
                        "sit",
                        "aut",
                    },
                    CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 5424098840598598124,
                            Month: 6573536602896611658,
                            Year: 5050765952509064220,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 2424619421979615217,
                            Month: 3868935517736166565,
                            Year: 2032218833617120042,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "aut": []interface{}{
                            "voluptatum",
                            "officia",
                            "illum",
                        },
                        "incidunt": []interface{}{
                            "et",
                            "dolorem",
                        },
                    },
                    Projects: []string{
                        "laborum",
                    },
                    Services: []string{
                        "dicta",
                    },
                    Subaccounts: []string{
                        "nisi",
                    },
                },
                DisplayName: "tempore",
                Etag: "rerum",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 71.199997,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 78.199997,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 44.099998,
                    },
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
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
