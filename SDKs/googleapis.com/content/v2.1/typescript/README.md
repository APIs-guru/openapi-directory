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
    accessToken: "placeat",
    alt: "json",
    callback: "est",
    fields: "ut",
    key: "nihil",
    oauthToken: "odit",
    prettyPrint: false,
    quotaUser: "sit",
    uploadType: "maxime",
    uploadProtocol: "temporibus",
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
* `contentAccountsCredentialsCreate` - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* `contentAccountsCustombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `contentAccountsDelete` - Deletes a Merchant Center sub-account.
* `contentAccountsGet` - Retrieves a Merchant Center account.
* `contentAccountsInsert` - Creates a Merchant Center sub-account.
* `contentAccountsLabelsCreate` - Creates a new label, not assigned to any account.
* `contentAccountsLabelsDelete` - Deletes a label and removes it from all accounts to which it was assigned.
* `contentAccountsLabelsList` - Lists the labels assigned to an account.
* `contentAccountsLabelsPatch` - Updates a label.
* `contentAccountsLink` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `contentAccountsList` - Lists the sub-accounts in your Merchant Center account.
* `contentAccountsListlinks` - Returns the list of accounts linked to your Merchant Center account.
* `contentAccountsRequestphoneverification` - Request verification code to start phone verification.
* `contentAccountsReturncarrierCreate` - Links return carrier to a merchant account.
* `contentAccountsReturncarrierDelete` - Delete a return carrier in the merchant account.
* `contentAccountsReturncarrierList` - Lists available return carriers in the merchant account.
* `contentAccountsReturncarrierPatch` - Updates a return carrier in the merchant account.
* `contentAccountsUpdate` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* `contentAccountsUpdatelabels` - Updates labels that are assigned to the Merchant Center account by CSS user.
* `contentAccountsVerifyphonenumber` - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### accountstatuses

* `contentAccountstatusesCustombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `contentAccountstatusesGet` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `contentAccountstatusesList` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `contentAccounttaxCustombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `contentAccounttaxGet` - Retrieves the tax settings of the account.
* `contentAccounttaxList` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `contentAccounttaxUpdate` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### buyongoogleprograms

* `contentBuyongoogleprogramsActivate` - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* `contentBuyongoogleprogramsGet` - Retrieves a status of the BoG program for your Merchant Center account.
* `contentBuyongoogleprogramsOnboard` - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* `contentBuyongoogleprogramsPatch` - Updates the status of the BoG program for your Merchant Center account.
* `contentBuyongoogleprogramsPause` - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* `contentBuyongoogleprogramsRequestreview` - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### collections

* `contentCollectionsCreate` - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* `contentCollectionsDelete` - Deletes a collection from your Merchant Center account.
* `contentCollectionsGet` - Retrieves a collection from your Merchant Center account.
* `contentCollectionsList` - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### collectionstatuses

* `contentCollectionstatusesGet` - Gets the status of a collection from your Merchant Center account.
* `contentCollectionstatusesList` - Lists the statuses of the collections in your Merchant Center account.

### csses

* `contentCssesGet` - Retrieves a single CSS domain by ID.
* `contentCssesList` - Lists CSS domains affiliated with a CSS group.
* `contentCssesUpdatelabels` - Updates labels that are assigned to a CSS domain by its CSS group.

### datafeeds

* `contentDatafeedsCustombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `contentDatafeedsDelete` - Deletes a datafeed configuration from your Merchant Center account.
* `contentDatafeedsFetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* `contentDatafeedsGet` - Retrieves a datafeed configuration from your Merchant Center account.
* `contentDatafeedsInsert` - Registers a datafeed configuration with your Merchant Center account.
* `contentDatafeedsList` - Lists the configurations for datafeeds in your Merchant Center account.
* `contentDatafeedsUpdate` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `contentDatafeedstatusesCustombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `contentDatafeedstatusesGet` - Retrieves the status of a datafeed from your Merchant Center account.
* `contentDatafeedstatusesList` - Lists the statuses of the datafeeds in your Merchant Center account.

### freelistingsprogram

* `contentFreelistingsprogramGet` - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `contentFreelistingsprogramRequestreview` - Requests a review of free listings in a specific region. This method is only available to selected merchants.

### liasettings

* `contentLiasettingsCustombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `contentLiasettingsGet` - Retrieves the LIA settings of the account.
* `contentLiasettingsGetaccessiblegmbaccounts` - Retrieves the list of accessible Business Profiles.
* `contentLiasettingsList` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `contentLiasettingsListposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `contentLiasettingsRequestgmbaccess` - Requests access to a specified Business Profile.
* `contentLiasettingsRequestinventoryverification` - Requests inventory validation for the specified country.
* `contentLiasettingsSetinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `contentLiasettingsSetposdataprovider` - Sets the POS data provider for the specified country.
* `contentLiasettingsUpdate` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### localinventory

* `contentLocalinventoryCustombatch` - Updates local inventory for multiple products or stores in a single request.
* `contentLocalinventoryInsert` - Updates the local inventory of a product in your Merchant Center account.

### orderinvoices

* `contentOrderinvoicesCreatechargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `contentOrderinvoicesCreaterefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `contentOrderreportsListdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `contentOrderreportsListtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `contentOrderreturnsAcknowledge` - Acks an order return in your Merchant Center account.
* `contentOrderreturnsCreateorderreturn` - Create return in your Merchant Center account.
* `contentOrderreturnsGet` - Retrieves an order return from your Merchant Center account.
* `contentOrderreturnsLabelsCreate` - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* `contentOrderreturnsList` - Lists order returns in your Merchant Center account.
* `contentOrderreturnsProcess` - Processes return in your Merchant Center account.

### orders

* `contentOrdersAcknowledge` - Marks an order as acknowledged.
* `contentOrdersAdvancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `contentOrdersCancel` - Cancels all line items in an order, making a full refund.
* `contentOrdersCancellineitem` - Cancels a line item, making a full refund.
* `contentOrdersCanceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `contentOrdersCaptureOrder` - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* `contentOrdersCreatetestorder` - Sandbox only. Creates a test order.
* `contentOrdersCreatetestreturn` - Sandbox only. Creates a test return.
* `contentOrdersGet` - Retrieves an order from your Merchant Center account.
* `contentOrdersGetbymerchantorderid` - Retrieves an order using merchant order ID.
* `contentOrdersGettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `contentOrdersInstorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* `contentOrdersList` - Lists the orders in your Merchant Center account.
* `contentOrdersRefunditem` - Issues a partial or total refund for items and shipment.
* `contentOrdersRefundorder` - Issues a partial or total refund for an order.
* `contentOrdersRejectreturnlineitem` - Rejects return on an line item.
* `contentOrdersReturnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `contentOrdersSetlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `contentOrdersShiplineitems` - Marks line item(s) as shipped.
* `contentOrdersUpdatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `contentOrdersUpdatemerchantorderid` - Updates the merchant order ID for a given order.
* `contentOrdersUpdateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### ordertrackingsignals

* `contentOrdertrackingsignalsCreate` - Creates new order tracking signal.

### pos

* `contentPosCustombatch` - Batches multiple POS-related calls in a single request.
* `contentPosDelete` - Deletes a store for the given merchant.
* `contentPosGet` - Retrieves information about the given store.
* `contentPosInsert` - Creates a store for the given merchant.
* `contentPosInventory` - Submit inventory for the given merchant.
* `contentPosList` - Lists the stores of the target merchant.
* `contentPosSale` - Submit a sale event for the given merchant.

### productdeliverytime

* `contentProductdeliverytimeCreate` - Creates or updates the delivery time of a product.
* `contentProductdeliverytimeDelete` - Deletes the delivery time of a product.
* `contentProductdeliverytimeGet` - Gets `productDeliveryTime` by `productId`.

### products

* `contentProductsCustombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `contentProductsDelete` - Deletes a product from your Merchant Center account.
* `contentProductsGet` - Retrieves a product from your Merchant Center account.
* `contentProductsInsert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `contentProductsList` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* `contentProductsUpdate` - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### productstatuses

* `contentProductstatusesCustombatch` - Gets the statuses of multiple products in a single request.
* `contentProductstatusesGet` - Gets the status of a product from your Merchant Center account.
* `contentProductstatusesList` - Lists the statuses of the products in your Merchant Center account.
* `contentProductstatusesRepricingreportsList` - Lists the metrics report for a given Repricing product.

### promotions

* `contentPromotionsCreate` - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* `contentPromotionsGet` - Retrieves a promotion from your Merchant Center account.

### pubsubnotificationsettings

* `contentPubsubnotificationsettingsGet` - Retrieves a Merchant Center account's pubsub notification settings.
* `contentPubsubnotificationsettingsUpdate` - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### quotas

* `contentQuotasList` - Lists the quota limit and quota usage per method for your Merchant Center account.

### regionalinventory

* `contentRegionalinventoryCustombatch` - Updates regional inventory for multiple products or regions in a single request.
* `contentRegionalinventoryInsert` - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### regions

* `contentRegionsCreate` - Creates a region definition in your Merchant Center account.
* `contentRegionsDelete` - Deletes a region definition from your Merchant Center account.
* `contentRegionsGet` - Retrieves a region defined in your Merchant Center account.
* `contentRegionsList` - Lists the regions in your Merchant Center account.
* `contentRegionsPatch` - Updates a region definition in your Merchant Center account.

### reports

* `contentReportsSearch` - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### repricingrules

* `contentRepricingrulesCreate` - Creates a repricing rule for your Merchant Center account.
* `contentRepricingrulesDelete` - Deletes a repricing rule in your Merchant Center account.
* `contentRepricingrulesGet` - Retrieves a repricing rule from your Merchant Center account.
* `contentRepricingrulesList` - Lists the repricing rules in your Merchant Center account.
* `contentRepricingrulesPatch` - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* `contentRepricingrulesRepricingreportsList` - Lists the metrics report for a given Repricing rule.

### returnaddress

* `contentReturnaddressCustombatch` - Batches multiple return address related calls in a single request.
* `contentReturnaddressDelete` - Deletes a return address for the given Merchant Center account.
* `contentReturnaddressGet` - Gets a return address of the Merchant Center account.
* `contentReturnaddressInsert` - Inserts a return address for the Merchant Center account.
* `contentReturnaddressList` - Lists the return addresses of the Merchant Center account.

### returnpolicy

* `contentReturnpolicyCustombatch` - Batches multiple return policy related calls in a single request.
* `contentReturnpolicyDelete` - Deletes a return policy for the given Merchant Center account.
* `contentReturnpolicyGet` - Gets a return policy of the Merchant Center account.
* `contentReturnpolicyInsert` - Inserts a return policy for the Merchant Center account.
* `contentReturnpolicyList` - Lists the return policies of the Merchant Center account.

### returnpolicyonline

* `contentReturnpolicyonlineCreate` - Creates a new return policy.
* `contentReturnpolicyonlineDelete` - Deletes an existing return policy.
* `contentReturnpolicyonlineGet` - Gets an existing return policy.
* `contentReturnpolicyonlineList` - Lists all existing return policies.
* `contentReturnpolicyonlinePatch` - Updates an existing return policy.

### settlementreports

* `contentSettlementreportsGet` - Retrieves a settlement report from your Merchant Center account.
* `contentSettlementreportsList` - Retrieves a list of settlement reports from your Merchant Center account.

### settlementtransactions

* `contentSettlementtransactionsList` - Retrieves a list of transactions for the settlement.

### shippingsettings

* `contentShippingsettingsCustombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `contentShippingsettingsGet` - Retrieves the shipping settings of the account.
* `contentShippingsettingsGetsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `contentShippingsettingsGetsupportedholidays` - Retrieves supported holidays for an account.
* `contentShippingsettingsGetsupportedpickupservices` - Retrieves supported pickup services for an account.
* `contentShippingsettingsList` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `contentShippingsettingsUpdate` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### shoppingadsprogram

* `contentShoppingadsprogramGet` - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `contentShoppingadsprogramRequestreview` - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
