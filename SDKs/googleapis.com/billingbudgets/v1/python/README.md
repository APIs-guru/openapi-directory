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
        parent="sit",
    ),
    query_params=operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams(
        dollar_xgafv="1",
        access_token="voluptas",
        alt="media",
        callback="in",
        fields="qui",
        key="expedita",
        oauth_token="dicta",
        pretty_print=False,
        quota_user="voluptatem",
        upload_type="et",
        upload_protocol="quibusdam",
    ),
    request=shared.GoogleCloudBillingBudgetsV1BudgetInput(
        amount=shared.GoogleCloudBillingBudgetsV1BudgetAmount(
            last_period_amount={
                "neque": "soluta",
                "voluptate": "minima",
            },
            specified_amount=shared.GoogleTypeMoney(
                currency_code="libero",
                nanos=6204113631619794035,
                units="ratione",
            ),
        ),
        budget_filter=shared.GoogleCloudBillingBudgetsV1Filter(
            calendar_period="MONTH",
            credit_types=[
                "minima",
                "velit",
            ],
            credit_types_treatment="EXCLUDE_ALL_CREDITS",
            custom_period=shared.GoogleCloudBillingBudgetsV1CustomPeriod(
                end_date=shared.GoogleTypeDate(
                    day=1521486426180571951,
                    month=9000291902311776059,
                    year=4786425625306782624,
                ),
                start_date=shared.GoogleTypeDate(
                    day=3524430840374632814,
                    month=121253028379321650,
                    year=4275829936943250503,
                ),
            ),
            labels={
                "ex": [
                    "perferendis",
                    "dolores",
                    "molestiae",
                ],
            },
            projects=[
                "maxime",
                "amet",
            ],
            services=[
                "quia",
            ],
            subaccounts=[
                "cupiditate",
            ],
        ),
        display_name="excepturi",
        etag="itaque",
        notifications_rule=shared.GoogleCloudBillingBudgetsV1NotificationsRule(
            disable_default_iam_recipients=False,
            monitoring_notification_channels=[
                "ut",
                "excepturi",
            ],
            pubsub_topic="autem",
            schema_version="neque",
        ),
        threshold_rules=[
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="FORECASTED_SPEND",
                threshold_percent=98.199997,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="BASIS_UNSPECIFIED",
                threshold_percent=53.099998,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="BASIS_UNSPECIFIED",
                threshold_percent=69.099998,
            ),
        ],
    ),
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req)

if res.google_cloud_billing_budgets_v1_budget is not None:
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
