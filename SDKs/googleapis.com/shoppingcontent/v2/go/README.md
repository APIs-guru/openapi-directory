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
    
    req := operations.ContentAccountsAuthinfoRequest{
        Security: operations.ContentAccountsAuthinfoSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.ContentAccountsAuthinfoQueryParams{
            DollarXgafv: "1",
            AccessToken: "cumque",
            Alt: "json",
            Callback: "adipisci",
            Fields: "eaque",
            Key: "eaque",
            OauthToken: "sint",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "occaecati",
            UploadProtocol: "earum",
        },
    }
    
    res, err := s.Accounts.ContentAccountsAuthinfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsAuthInfoResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `ContentAccountsAuthinfo` - Returns information about the authenticated user.
* `ContentAccountsClaimwebsite` - Claims the website of a Merchant Center sub-account.
* `ContentAccountsCustombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `ContentAccountsDelete` - Deletes a Merchant Center sub-account.
* `ContentAccountsGet` - Retrieves a Merchant Center account.
* `ContentAccountsInsert` - Creates a Merchant Center sub-account.
* `ContentAccountsLink` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `ContentAccountsList` - Lists the sub-accounts in your Merchant Center account.
* `ContentAccountsUpdate` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### accountstatuses

* `ContentAccountstatusesCustombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `ContentAccountstatusesGet` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `ContentAccountstatusesList` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `ContentAccounttaxCustombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `ContentAccounttaxGet` - Retrieves the tax settings of the account.
* `ContentAccounttaxList` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `ContentAccounttaxUpdate` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### datafeeds

* `ContentDatafeedsCustombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `ContentDatafeedsDelete` - Deletes a datafeed configuration from your Merchant Center account.
* `ContentDatafeedsFetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* `ContentDatafeedsGet` - Retrieves a datafeed configuration from your Merchant Center account.
* `ContentDatafeedsInsert` - Registers a datafeed configuration with your Merchant Center account.
* `ContentDatafeedsList` - Lists the configurations for datafeeds in your Merchant Center account.
* `ContentDatafeedsUpdate` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `ContentDatafeedstatusesCustombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `ContentDatafeedstatusesGet` - Retrieves the status of a datafeed from your Merchant Center account.
* `ContentDatafeedstatusesList` - Lists the statuses of the datafeeds in your Merchant Center account.

### liasettings

* `ContentLiasettingsCustombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `ContentLiasettingsGet` - Retrieves the LIA settings of the account.
* `ContentLiasettingsGetaccessiblegmbaccounts` - Retrieves the list of accessible Google My Business accounts.
* `ContentLiasettingsList` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `ContentLiasettingsListposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `ContentLiasettingsRequestgmbaccess` - Requests access to a specified Google My Business account.
* `ContentLiasettingsRequestinventoryverification` - Requests inventory validation for the specified country.
* `ContentLiasettingsSetinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `ContentLiasettingsSetposdataprovider` - Sets the POS data provider for the specified country.
* `ContentLiasettingsUpdate` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### orderinvoices

* `ContentOrderinvoicesCreatechargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `ContentOrderinvoicesCreaterefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `ContentOrderreportsListdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `ContentOrderreportsListtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `ContentOrderreturnsGet` - Retrieves an order return from your Merchant Center account.
* `ContentOrderreturnsList` - Lists order returns in your Merchant Center account.

### orders

* `ContentOrdersAcknowledge` - Marks an order as acknowledged.
* `ContentOrdersAdvancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `ContentOrdersCancel` - Cancels all line items in an order, making a full refund.
* `ContentOrdersCancellineitem` - Cancels a line item, making a full refund.
* `ContentOrdersCanceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `ContentOrdersCreatetestorder` - Sandbox only. Creates a test order.
* `ContentOrdersCreatetestreturn` - Sandbox only. Creates a test return.
* `ContentOrdersCustombatch` - Retrieves or modifies multiple orders in a single request.
* `ContentOrdersGet` - Retrieves an order from your Merchant Center account.
* `ContentOrdersGetbymerchantorderid` - Retrieves an order using merchant order ID.
* `ContentOrdersGettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `ContentOrdersInstorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* `ContentOrdersList` - Lists the orders in your Merchant Center account.
* `ContentOrdersRefund` - Deprecated, please use returnRefundLineItem instead.
* `ContentOrdersRejectreturnlineitem` - Rejects return on an line item.
* `ContentOrdersReturnlineitem` - Returns a line item.
* `ContentOrdersReturnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `ContentOrdersSetlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `ContentOrdersShiplineitems` - Marks line item(s) as shipped.
* `ContentOrdersUpdatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `ContentOrdersUpdatemerchantorderid` - Updates the merchant order ID for a given order.
* `ContentOrdersUpdateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### pos

* `ContentPosCustombatch` - Batches multiple POS-related calls in a single request.
* `ContentPosDelete` - Deletes a store for the given merchant.
* `ContentPosGet` - Retrieves information about the given store.
* `ContentPosInsert` - Creates a store for the given merchant.
* `ContentPosInventory` - Submit inventory for the given merchant.
* `ContentPosList` - Lists the stores of the target merchant.
* `ContentPosSale` - Submit a sale event for the given merchant.

### products

* `ContentProductsCustombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `ContentProductsDelete` - Deletes a product from your Merchant Center account.
* `ContentProductsGet` - Retrieves a product from your Merchant Center account.
* `ContentProductsInsert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `ContentProductsList` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### productstatuses

* `ContentProductstatusesCustombatch` - Gets the statuses of multiple products in a single request.
* `ContentProductstatusesGet` - Gets the status of a product from your Merchant Center account.
* `ContentProductstatusesList` - Lists the statuses of the products in your Merchant Center account.

### shippingsettings

* `ContentShippingsettingsCustombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `ContentShippingsettingsGet` - Retrieves the shipping settings of the account.
* `ContentShippingsettingsGetsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `ContentShippingsettingsGetsupportedholidays` - Retrieves supported holidays for an account.
* `ContentShippingsettingsGetsupportedpickupservices` - Retrieves supported pickup services for an account.
* `ContentShippingsettingsList` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `ContentShippingsettingsUpdate` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
