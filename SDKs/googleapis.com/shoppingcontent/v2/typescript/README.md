# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ContentAccountsAuthinfoRequest, ContentAccountsAuthinfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContentAccountsAuthinfoRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "cumque",
    alt: "json",
    callback: "adipisci",
    fields: "eaque",
    key: "eaque",
    oauthToken: "sint",
    prettyPrint: true,
    quotaUser: "qui",
    uploadType: "occaecati",
    uploadProtocol: "earum",
  },
};

sdk.accounts.contentAccountsAuthinfo(req).then((res: ContentAccountsAuthinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `contentAccountsAuthinfo` - Returns information about the authenticated user.
* `contentAccountsClaimwebsite` - Claims the website of a Merchant Center sub-account.
* `contentAccountsCustombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `contentAccountsDelete` - Deletes a Merchant Center sub-account.
* `contentAccountsGet` - Retrieves a Merchant Center account.
* `contentAccountsInsert` - Creates a Merchant Center sub-account.
* `contentAccountsLink` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `contentAccountsList` - Lists the sub-accounts in your Merchant Center account.
* `contentAccountsUpdate` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### accountstatuses

* `contentAccountstatusesCustombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `contentAccountstatusesGet` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `contentAccountstatusesList` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `contentAccounttaxCustombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `contentAccounttaxGet` - Retrieves the tax settings of the account.
* `contentAccounttaxList` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `contentAccounttaxUpdate` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### datafeeds

* `contentDatafeedsCustombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `contentDatafeedsDelete` - Deletes a datafeed configuration from your Merchant Center account.
* `contentDatafeedsFetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* `contentDatafeedsGet` - Retrieves a datafeed configuration from your Merchant Center account.
* `contentDatafeedsInsert` - Registers a datafeed configuration with your Merchant Center account.
* `contentDatafeedsList` - Lists the configurations for datafeeds in your Merchant Center account.
* `contentDatafeedsUpdate` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `contentDatafeedstatusesCustombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `contentDatafeedstatusesGet` - Retrieves the status of a datafeed from your Merchant Center account.
* `contentDatafeedstatusesList` - Lists the statuses of the datafeeds in your Merchant Center account.

### liasettings

* `contentLiasettingsCustombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `contentLiasettingsGet` - Retrieves the LIA settings of the account.
* `contentLiasettingsGetaccessiblegmbaccounts` - Retrieves the list of accessible Google My Business accounts.
* `contentLiasettingsList` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `contentLiasettingsListposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `contentLiasettingsRequestgmbaccess` - Requests access to a specified Google My Business account.
* `contentLiasettingsRequestinventoryverification` - Requests inventory validation for the specified country.
* `contentLiasettingsSetinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `contentLiasettingsSetposdataprovider` - Sets the POS data provider for the specified country.
* `contentLiasettingsUpdate` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### orderinvoices

* `contentOrderinvoicesCreatechargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `contentOrderinvoicesCreaterefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `contentOrderreportsListdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `contentOrderreportsListtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `contentOrderreturnsGet` - Retrieves an order return from your Merchant Center account.
* `contentOrderreturnsList` - Lists order returns in your Merchant Center account.

### orders

* `contentOrdersAcknowledge` - Marks an order as acknowledged.
* `contentOrdersAdvancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `contentOrdersCancel` - Cancels all line items in an order, making a full refund.
* `contentOrdersCancellineitem` - Cancels a line item, making a full refund.
* `contentOrdersCanceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `contentOrdersCreatetestorder` - Sandbox only. Creates a test order.
* `contentOrdersCreatetestreturn` - Sandbox only. Creates a test return.
* `contentOrdersCustombatch` - Retrieves or modifies multiple orders in a single request.
* `contentOrdersGet` - Retrieves an order from your Merchant Center account.
* `contentOrdersGetbymerchantorderid` - Retrieves an order using merchant order ID.
* `contentOrdersGettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `contentOrdersInstorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* `contentOrdersList` - Lists the orders in your Merchant Center account.
* `contentOrdersRefund` - Deprecated, please use returnRefundLineItem instead.
* `contentOrdersRejectreturnlineitem` - Rejects return on an line item.
* `contentOrdersReturnlineitem` - Returns a line item.
* `contentOrdersReturnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `contentOrdersSetlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `contentOrdersShiplineitems` - Marks line item(s) as shipped.
* `contentOrdersUpdatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `contentOrdersUpdatemerchantorderid` - Updates the merchant order ID for a given order.
* `contentOrdersUpdateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### pos

* `contentPosCustombatch` - Batches multiple POS-related calls in a single request.
* `contentPosDelete` - Deletes a store for the given merchant.
* `contentPosGet` - Retrieves information about the given store.
* `contentPosInsert` - Creates a store for the given merchant.
* `contentPosInventory` - Submit inventory for the given merchant.
* `contentPosList` - Lists the stores of the target merchant.
* `contentPosSale` - Submit a sale event for the given merchant.

### products

* `contentProductsCustombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `contentProductsDelete` - Deletes a product from your Merchant Center account.
* `contentProductsGet` - Retrieves a product from your Merchant Center account.
* `contentProductsInsert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `contentProductsList` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### productstatuses

* `contentProductstatusesCustombatch` - Gets the statuses of multiple products in a single request.
* `contentProductstatusesGet` - Gets the status of a product from your Merchant Center account.
* `contentProductstatusesList` - Lists the statuses of the products in your Merchant Center account.

### shippingsettings

* `contentShippingsettingsCustombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `contentShippingsettingsGet` - Retrieves the shipping settings of the account.
* `contentShippingsettingsGetsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `contentShippingsettingsGetsupportedholidays` - Retrieves supported holidays for an account.
* `contentShippingsettingsGetsupportedpickupservices` - Retrieves supported pickup services for an account.
* `contentShippingsettingsList` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `contentShippingsettingsUpdate` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
