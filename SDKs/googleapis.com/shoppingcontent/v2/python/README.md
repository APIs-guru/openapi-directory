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
        access_token="cumque",
        alt="json",
        callback="adipisci",
        fields="eaque",
        key="eaque",
        oauth_token="sint",
        pretty_print=True,
        quota_user="qui",
        upload_type="occaecati",
        upload_protocol="earum",
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
* `content_accounts_custombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `content_accounts_delete` - Deletes a Merchant Center sub-account.
* `content_accounts_get` - Retrieves a Merchant Center account.
* `content_accounts_insert` - Creates a Merchant Center sub-account.
* `content_accounts_link` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `content_accounts_list` - Lists the sub-accounts in your Merchant Center account.
* `content_accounts_update` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### accountstatuses

* `content_accountstatuses_custombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `content_accountstatuses_get` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `content_accountstatuses_list` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `content_accounttax_custombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `content_accounttax_get` - Retrieves the tax settings of the account.
* `content_accounttax_list` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `content_accounttax_update` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### datafeeds

* `content_datafeeds_custombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `content_datafeeds_delete` - Deletes a datafeed configuration from your Merchant Center account.
* `content_datafeeds_fetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* `content_datafeeds_get` - Retrieves a datafeed configuration from your Merchant Center account.
* `content_datafeeds_insert` - Registers a datafeed configuration with your Merchant Center account.
* `content_datafeeds_list` - Lists the configurations for datafeeds in your Merchant Center account.
* `content_datafeeds_update` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `content_datafeedstatuses_custombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `content_datafeedstatuses_get` - Retrieves the status of a datafeed from your Merchant Center account.
* `content_datafeedstatuses_list` - Lists the statuses of the datafeeds in your Merchant Center account.

### liasettings

* `content_liasettings_custombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `content_liasettings_get` - Retrieves the LIA settings of the account.
* `content_liasettings_getaccessiblegmbaccounts` - Retrieves the list of accessible Google My Business accounts.
* `content_liasettings_list` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `content_liasettings_listposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `content_liasettings_requestgmbaccess` - Requests access to a specified Google My Business account.
* `content_liasettings_requestinventoryverification` - Requests inventory validation for the specified country.
* `content_liasettings_setinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `content_liasettings_setposdataprovider` - Sets the POS data provider for the specified country.
* `content_liasettings_update` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### orderinvoices

* `content_orderinvoices_createchargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `content_orderinvoices_createrefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `content_orderreports_listdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `content_orderreports_listtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `content_orderreturns_get` - Retrieves an order return from your Merchant Center account.
* `content_orderreturns_list` - Lists order returns in your Merchant Center account.

### orders

* `content_orders_acknowledge` - Marks an order as acknowledged.
* `content_orders_advancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `content_orders_cancel` - Cancels all line items in an order, making a full refund.
* `content_orders_cancellineitem` - Cancels a line item, making a full refund.
* `content_orders_canceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `content_orders_createtestorder` - Sandbox only. Creates a test order.
* `content_orders_createtestreturn` - Sandbox only. Creates a test return.
* `content_orders_custombatch` - Retrieves or modifies multiple orders in a single request.
* `content_orders_get` - Retrieves an order from your Merchant Center account.
* `content_orders_getbymerchantorderid` - Retrieves an order using merchant order ID.
* `content_orders_gettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `content_orders_instorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* `content_orders_list` - Lists the orders in your Merchant Center account.
* `content_orders_refund` - Deprecated, please use returnRefundLineItem instead.
* `content_orders_rejectreturnlineitem` - Rejects return on an line item.
* `content_orders_returnlineitem` - Returns a line item.
* `content_orders_returnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `content_orders_setlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `content_orders_shiplineitems` - Marks line item(s) as shipped.
* `content_orders_updatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `content_orders_updatemerchantorderid` - Updates the merchant order ID for a given order.
* `content_orders_updateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### pos

* `content_pos_custombatch` - Batches multiple POS-related calls in a single request.
* `content_pos_delete` - Deletes a store for the given merchant.
* `content_pos_get` - Retrieves information about the given store.
* `content_pos_insert` - Creates a store for the given merchant.
* `content_pos_inventory` - Submit inventory for the given merchant.
* `content_pos_list` - Lists the stores of the target merchant.
* `content_pos_sale` - Submit a sale event for the given merchant.

### products

* `content_products_custombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `content_products_delete` - Deletes a product from your Merchant Center account.
* `content_products_get` - Retrieves a product from your Merchant Center account.
* `content_products_insert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `content_products_list` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### productstatuses

* `content_productstatuses_custombatch` - Gets the statuses of multiple products in a single request.
* `content_productstatuses_get` - Gets the status of a product from your Merchant Center account.
* `content_productstatuses_list` - Lists the statuses of the products in your Merchant Center account.

### shippingsettings

* `content_shippingsettings_custombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `content_shippingsettings_get` - Retrieves the shipping settings of the account.
* `content_shippingsettings_getsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `content_shippingsettings_getsupportedholidays` - Retrieves supported holidays for an account.
* `content_shippingsettings_getsupportedpickupservices` - Retrieves supported pickup services for an account.
* `content_shippingsettings_list` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `content_shippingsettings_update` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
