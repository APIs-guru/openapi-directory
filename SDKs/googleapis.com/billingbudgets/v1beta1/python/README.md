# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BillingbudgetsBillingAccountsBudgetsCreateRequest(
    security=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity(
        option1=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams(
        parent="ratione",
    ),
    query_params=operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams(
        dollar_xgafv="1",
        access_token="libero",
        alt="proto",
        callback="qui",
        fields="quae",
        key="iste",
        oauth_token="animi",
        pretty_print=True,
        quota_user="pariatur",
        upload_type="adipisci",
        upload_protocol="recusandae",
    ),
    request=shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput(
        budget=shared.GoogleCloudBillingBudgetsV1beta1BudgetInput(
            all_updates_rule=shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule(
                disable_default_iam_recipients=True,
                monitoring_notification_channels=[
                    "unde",
                ],
                pubsub_topic="et",
                schema_version="voluptatum",
            ),
            amount=shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount(
                last_period_amount={
                    "molestiae": "tempora",
                },
                specified_amount=shared.GoogleTypeMoney(
                    currency_code="praesentium",
                    nanos=2369452140427811028,
                    units="sed",
                ),
            ),
            budget_filter=shared.GoogleCloudBillingBudgetsV1beta1Filter(
                calendar_period="YEAR",
                credit_types=[
                    "aliquid",
                    "sit",
                    "aut",
                ],
                credit_types_treatment="EXCLUDE_ALL_CREDITS",
                custom_period=shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod(
                    end_date=shared.GoogleTypeDate(
                        day=5424098840598598124,
                        month=6573536602896611658,
                        year=5050765952509064220,
                    ),
                    start_date=shared.GoogleTypeDate(
                        day=2424619421979615217,
                        month=3868935517736166565,
                        year=2032218833617120042,
                    ),
                ),
                labels={
                    "aut": [
                        "voluptatum",
                        "officia",
                        "illum",
                    ],
                    "incidunt": [
                        "et",
                        "dolorem",
                    ],
                },
                projects=[
                    "laborum",
                ],
                services=[
                    "dicta",
                ],
                subaccounts=[
                    "nisi",
                ],
            ),
            display_name="tempore",
            etag="rerum",
            threshold_rules=[
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="FORECASTED_SPEND",
                    threshold_percent=71.199997,
                ),
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="FORECASTED_SPEND",
                    threshold_percent=78.199997,
                ),
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="CURRENT_SPEND",
                    threshold_percent=44.099998,
                ),
            ],
        ),
    ),
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req)

if res.google_cloud_billing_budgets_v1beta1_budget is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `billingbudgets_billing_accounts_budgets_create` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `billingbudgets_billing_accounts_budgets_delete` - Deletes a budget. Returns successfully if already deleted.
* `billingbudgets_billing_accounts_budgets_get` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_list` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_patch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
