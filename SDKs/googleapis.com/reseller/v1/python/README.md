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
    
req = operations.ResellerCustomersGetRequest(
    security=operations.ResellerCustomersGetSecurity(
        option1=operations.ResellerCustomersGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.ResellerCustomersGetPathParams(
        customer_id="dolor",
    ),
    query_params=operations.ResellerCustomersGetQueryParams(
        dollar_xgafv="1",
        access_token="assumenda",
        alt="media",
        callback="perspiciatis",
        fields="excepturi",
        key="doloremque",
        oauth_token="dolorum",
        pretty_print=False,
        quota_user="ipsam",
        upload_type="odio",
        upload_protocol="rerum",
    ),
)
    
res = s.customers.reseller_customers_get(req)

if res.customer is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `reseller_customers_get` - Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
* `reseller_customers_insert` - Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
* `reseller_customers_patch` - Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
* `reseller_customers_update` - Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

### resellernotify

* `reseller_resellernotify_getwatchdetails` - Returns all the details of the watch corresponding to the reseller.
* `reseller_resellernotify_register` - Registers a Reseller for receiving notifications.
* `reseller_resellernotify_unregister` - Unregisters a Reseller for receiving notifications.

### subscriptions

* `reseller_subscriptions_activate` - Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
* `reseller_subscriptions_change_plan` - Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
* `reseller_subscriptions_change_renewal_settings` - Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
* `reseller_subscriptions_change_seats` - Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
* `reseller_subscriptions_delete` - Cancels, suspends, or transfers a subscription to direct.
* `reseller_subscriptions_get` - Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
* `reseller_subscriptions_insert` - Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
* `reseller_subscriptions_list` - Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
* `reseller_subscriptions_start_paid_service` - Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
* `reseller_subscriptions_suspend` - Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
