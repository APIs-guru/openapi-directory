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
    
req = operations.ContentAccountsAuthinfoRequest(
    security=operations.ContentAccountsAuthinfoSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.ContentAccountsAuthinfoQueryParams(
        dollar_xgafv="1",
        access_token="placeat",
        alt="json",
        callback="est",
        fields="ut",
        key="nihil",
        oauth_token="odit",
        pretty_print=False,
        quota_user="sit",
        upload_type="maxime",
        upload_protocol="temporibus",
    ),
)
    
res = s.accounts.content_accounts_authinfo(req)

if res.accounts_auth_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `content_accounts_authinfo` - Returns information about the authenticated user.
* `content_accounts_claimwebsite` - Claims the website of a Merchant Center sub-account.
* `content_accounts_credentials_create` - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* `content_accounts_custombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `content_accounts_delete` - Deletes a Merchant Center sub-account.
* `content_accounts_get` - Retrieves a Merchant Center account.
* `content_accounts_insert` - Creates a Merchant Center sub-account.
* `content_accounts_labels_create` - Creates a new label, not assigned to any account.
* `content_accounts_labels_delete` - Deletes a label and removes it from all accounts to which it was assigned.
* `content_accounts_labels_list` - Lists the labels assigned to an account.
* `content_accounts_labels_patch` - Updates a label.
* `content_accounts_link` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `content_accounts_list` - Lists the sub-accounts in your Merchant Center account.
* `content_accounts_listlinks` - Returns the list of accounts linked to your Merchant Center account.
* `content_accounts_requestphoneverification` - Request verification code to start phone verification.
* `content_accounts_returncarrier_create` - Links return carrier to a merchant account.
* `content_accounts_returncarrier_delete` - Delete a return carrier in the merchant account.
* `content_accounts_returncarrier_list` - Lists available return carriers in the merchant account.
* `content_accounts_returncarrier_patch` - Updates a return carrier in the merchant account.
* `content_accounts_update` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* `content_accounts_updatelabels` - Updates labels that are assigned to the Merchant Center account by CSS user.
* `content_accounts_verifyphonenumber` - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### accountstatuses

* `content_accountstatuses_custombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `content_accountstatuses_get` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `content_accountstatuses_list` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `content_accounttax_custombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `content_accounttax_get` - Retrieves the tax settings of the account.
* `content_accounttax_list` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `content_accounttax_update` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### buyongoogleprograms

* `content_buyongoogleprograms_activate` - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* `content_buyongoogleprograms_get` - Retrieves a status of the BoG program for your Merchant Center account.
* `content_buyongoogleprograms_onboard` - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* `content_buyongoogleprograms_patch` - Updates the status of the BoG program for your Merchant Center account.
* `content_buyongoogleprograms_pause` - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* `content_buyongoogleprograms_requestreview` - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### collections

* `content_collections_create` - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* `content_collections_delete` - Deletes a collection from your Merchant Center account.
* `content_collections_get` - Retrieves a collection from your Merchant Center account.
* `content_collections_list` - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### collectionstatuses

* `content_collectionstatuses_get` - Gets the status of a collection from your Merchant Center account.
* `content_collectionstatuses_list` - Lists the statuses of the collections in your Merchant Center account.

### csses

* `content_csses_get` - Retrieves a single CSS domain by ID.
* `content_csses_list` - Lists CSS domains affiliated with a CSS group.
* `content_csses_updatelabels` - Updates labels that are assigned to a CSS domain by its CSS group.

### datafeeds

* `content_datafeeds_custombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `content_datafeeds_delete` - Deletes a datafeed configuration from your Merchant Center account.
* `content_datafeeds_fetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* `content_datafeeds_get` - Retrieves a datafeed configuration from your Merchant Center account.
* `content_datafeeds_insert` - Registers a datafeed configuration with your Merchant Center account.
* `content_datafeeds_list` - Lists the configurations for datafeeds in your Merchant Center account.
* `content_datafeeds_update` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `content_datafeedstatuses_custombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `content_datafeedstatuses_get` - Retrieves the status of a datafeed from your Merchant Center account.
* `content_datafeedstatuses_list` - Lists the statuses of the datafeeds in your Merchant Center account.

### freelistingsprogram

* `content_freelistingsprogram_get` - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `content_freelistingsprogram_requestreview` - Requests a review of free listings in a specific region. This method is only available to selected merchants.

### liasettings

* `content_liasettings_custombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `content_liasettings_get` - Retrieves the LIA settings of the account.
* `content_liasettings_getaccessiblegmbaccounts` - Retrieves the list of accessible Business Profiles.
* `content_liasettings_list` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `content_liasettings_listposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `content_liasettings_requestgmbaccess` - Requests access to a specified Business Profile.
* `content_liasettings_requestinventoryverification` - Requests inventory validation for the specified country.
* `content_liasettings_setinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `content_liasettings_setposdataprovider` - Sets the POS data provider for the specified country.
* `content_liasettings_update` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### localinventory

* `content_localinventory_custombatch` - Updates local inventory for multiple products or stores in a single request.
* `content_localinventory_insert` - Updates the local inventory of a product in your Merchant Center account.

### orderinvoices

* `content_orderinvoices_createchargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `content_orderinvoices_createrefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `content_orderreports_listdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `content_orderreports_listtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `content_orderreturns_acknowledge` - Acks an order return in your Merchant Center account.
* `content_orderreturns_createorderreturn` - Create return in your Merchant Center account.
* `content_orderreturns_get` - Retrieves an order return from your Merchant Center account.
* `content_orderreturns_labels_create` - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* `content_orderreturns_list` - Lists order returns in your Merchant Center account.
* `content_orderreturns_process` - Processes return in your Merchant Center account.

### orders

* `content_orders_acknowledge` - Marks an order as acknowledged.
* `content_orders_advancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `content_orders_cancel` - Cancels all line items in an order, making a full refund.
* `content_orders_cancellineitem` - Cancels a line item, making a full refund.
* `content_orders_canceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `content_orders_capture_order` - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* `content_orders_createtestorder` - Sandbox only. Creates a test order.
* `content_orders_createtestreturn` - Sandbox only. Creates a test return.
* `content_orders_get` - Retrieves an order from your Merchant Center account.
* `content_orders_getbymerchantorderid` - Retrieves an order using merchant order ID.
* `content_orders_gettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `content_orders_instorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* `content_orders_list` - Lists the orders in your Merchant Center account.
* `content_orders_refunditem` - Issues a partial or total refund for items and shipment.
* `content_orders_refundorder` - Issues a partial or total refund for an order.
* `content_orders_rejectreturnlineitem` - Rejects return on an line item.
* `content_orders_returnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `content_orders_setlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `content_orders_shiplineitems` - Marks line item(s) as shipped.
* `content_orders_updatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `content_orders_updatemerchantorderid` - Updates the merchant order ID for a given order.
* `content_orders_updateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### ordertrackingsignals

* `content_ordertrackingsignals_create` - Creates new order tracking signal.

### pos

* `content_pos_custombatch` - Batches multiple POS-related calls in a single request.
* `content_pos_delete` - Deletes a store for the given merchant.
* `content_pos_get` - Retrieves information about the given store.
* `content_pos_insert` - Creates a store for the given merchant.
* `content_pos_inventory` - Submit inventory for the given merchant.
* `content_pos_list` - Lists the stores of the target merchant.
* `content_pos_sale` - Submit a sale event for the given merchant.

### productdeliverytime

* `content_productdeliverytime_create` - Creates or updates the delivery time of a product.
* `content_productdeliverytime_delete` - Deletes the delivery time of a product.
* `content_productdeliverytime_get` - Gets `productDeliveryTime` by `productId`.

### products

* `content_products_custombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `content_products_delete` - Deletes a product from your Merchant Center account.
* `content_products_get` - Retrieves a product from your Merchant Center account.
* `content_products_insert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `content_products_list` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* `content_products_update` - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### productstatuses

* `content_productstatuses_custombatch` - Gets the statuses of multiple products in a single request.
* `content_productstatuses_get` - Gets the status of a product from your Merchant Center account.
* `content_productstatuses_list` - Lists the statuses of the products in your Merchant Center account.
* `content_productstatuses_repricingreports_list` - Lists the metrics report for a given Repricing product.

### promotions

* `content_promotions_create` - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* `content_promotions_get` - Retrieves a promotion from your Merchant Center account.

### pubsubnotificationsettings

* `content_pubsubnotificationsettings_get` - Retrieves a Merchant Center account's pubsub notification settings.
* `content_pubsubnotificationsettings_update` - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### quotas

* `content_quotas_list` - Lists the quota limit and quota usage per method for your Merchant Center account.

### regionalinventory

* `content_regionalinventory_custombatch` - Updates regional inventory for multiple products or regions in a single request.
* `content_regionalinventory_insert` - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### regions

* `content_regions_create` - Creates a region definition in your Merchant Center account.
* `content_regions_delete` - Deletes a region definition from your Merchant Center account.
* `content_regions_get` - Retrieves a region defined in your Merchant Center account.
* `content_regions_list` - Lists the regions in your Merchant Center account.
* `content_regions_patch` - Updates a region definition in your Merchant Center account.

### reports

* `content_reports_search` - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### repricingrules

* `content_repricingrules_create` - Creates a repricing rule for your Merchant Center account.
* `content_repricingrules_delete` - Deletes a repricing rule in your Merchant Center account.
* `content_repricingrules_get` - Retrieves a repricing rule from your Merchant Center account.
* `content_repricingrules_list` - Lists the repricing rules in your Merchant Center account.
* `content_repricingrules_patch` - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* `content_repricingrules_repricingreports_list` - Lists the metrics report for a given Repricing rule.

### returnaddress

* `content_returnaddress_custombatch` - Batches multiple return address related calls in a single request.
* `content_returnaddress_delete` - Deletes a return address for the given Merchant Center account.
* `content_returnaddress_get` - Gets a return address of the Merchant Center account.
* `content_returnaddress_insert` - Inserts a return address for the Merchant Center account.
* `content_returnaddress_list` - Lists the return addresses of the Merchant Center account.

### returnpolicy

* `content_returnpolicy_custombatch` - Batches multiple return policy related calls in a single request.
* `content_returnpolicy_delete` - Deletes a return policy for the given Merchant Center account.
* `content_returnpolicy_get` - Gets a return policy of the Merchant Center account.
* `content_returnpolicy_insert` - Inserts a return policy for the Merchant Center account.
* `content_returnpolicy_list` - Lists the return policies of the Merchant Center account.

### returnpolicyonline

* `content_returnpolicyonline_create` - Creates a new return policy.
* `content_returnpolicyonline_delete` - Deletes an existing return policy.
* `content_returnpolicyonline_get` - Gets an existing return policy.
* `content_returnpolicyonline_list` - Lists all existing return policies.
* `content_returnpolicyonline_patch` - Updates an existing return policy.

### settlementreports

* `content_settlementreports_get` - Retrieves a settlement report from your Merchant Center account.
* `content_settlementreports_list` - Retrieves a list of settlement reports from your Merchant Center account.

### settlementtransactions

* `content_settlementtransactions_list` - Retrieves a list of transactions for the settlement.

### shippingsettings

* `content_shippingsettings_custombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `content_shippingsettings_get` - Retrieves the shipping settings of the account.
* `content_shippingsettings_getsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `content_shippingsettings_getsupportedholidays` - Retrieves supported holidays for an account.
* `content_shippingsettings_getsupportedpickupservices` - Retrieves supported pickup services for an account.
* `content_shippingsettings_list` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `content_shippingsettings_update` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### shoppingadsprogram

* `content_shoppingadsprogram_get` - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `content_shoppingadsprogram_requestreview` - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
