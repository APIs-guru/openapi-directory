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
            AccessToken: "placeat",
            Alt: "json",
            Callback: "est",
            Fields: "ut",
            Key: "nihil",
            OauthToken: "odit",
            PrettyPrint: false,
            QuotaUser: "sit",
            UploadType: "maxime",
            UploadProtocol: "temporibus",
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
* `ContentAccountsCredentialsCreate` - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* `ContentAccountsCustombatch` - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* `ContentAccountsDelete` - Deletes a Merchant Center sub-account.
* `ContentAccountsGet` - Retrieves a Merchant Center account.
* `ContentAccountsInsert` - Creates a Merchant Center sub-account.
* `ContentAccountsLabelsCreate` - Creates a new label, not assigned to any account.
* `ContentAccountsLabelsDelete` - Deletes a label and removes it from all accounts to which it was assigned.
* `ContentAccountsLabelsList` - Lists the labels assigned to an account.
* `ContentAccountsLabelsPatch` - Updates a label.
* `ContentAccountsLink` - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* `ContentAccountsList` - Lists the sub-accounts in your Merchant Center account.
* `ContentAccountsListlinks` - Returns the list of accounts linked to your Merchant Center account.
* `ContentAccountsRequestphoneverification` - Request verification code to start phone verification.
* `ContentAccountsReturncarrierCreate` - Links return carrier to a merchant account.
* `ContentAccountsReturncarrierDelete` - Delete a return carrier in the merchant account.
* `ContentAccountsReturncarrierList` - Lists available return carriers in the merchant account.
* `ContentAccountsReturncarrierPatch` - Updates a return carrier in the merchant account.
* `ContentAccountsUpdate` - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* `ContentAccountsUpdatelabels` - Updates labels that are assigned to the Merchant Center account by CSS user.
* `ContentAccountsVerifyphonenumber` - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### accountstatuses

* `ContentAccountstatusesCustombatch` - Retrieves multiple Merchant Center account statuses in a single request.
* `ContentAccountstatusesGet` - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* `ContentAccountstatusesList` - Lists the statuses of the sub-accounts in your Merchant Center account.

### accounttax

* `ContentAccounttaxCustombatch` - Retrieves and updates tax settings of multiple accounts in a single request.
* `ContentAccounttaxGet` - Retrieves the tax settings of the account.
* `ContentAccounttaxList` - Lists the tax settings of the sub-accounts in your Merchant Center account.
* `ContentAccounttaxUpdate` - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### buyongoogleprograms

* `ContentBuyongoogleprogramsActivate` - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* `ContentBuyongoogleprogramsGet` - Retrieves a status of the BoG program for your Merchant Center account.
* `ContentBuyongoogleprogramsOnboard` - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* `ContentBuyongoogleprogramsPatch` - Updates the status of the BoG program for your Merchant Center account.
* `ContentBuyongoogleprogramsPause` - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* `ContentBuyongoogleprogramsRequestreview` - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### collections

* `ContentCollectionsCreate` - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* `ContentCollectionsDelete` - Deletes a collection from your Merchant Center account.
* `ContentCollectionsGet` - Retrieves a collection from your Merchant Center account.
* `ContentCollectionsList` - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### collectionstatuses

* `ContentCollectionstatusesGet` - Gets the status of a collection from your Merchant Center account.
* `ContentCollectionstatusesList` - Lists the statuses of the collections in your Merchant Center account.

### csses

* `ContentCssesGet` - Retrieves a single CSS domain by ID.
* `ContentCssesList` - Lists CSS domains affiliated with a CSS group.
* `ContentCssesUpdatelabels` - Updates labels that are assigned to a CSS domain by its CSS group.

### datafeeds

* `ContentDatafeedsCustombatch` - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* `ContentDatafeedsDelete` - Deletes a datafeed configuration from your Merchant Center account.
* `ContentDatafeedsFetchnow` - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* `ContentDatafeedsGet` - Retrieves a datafeed configuration from your Merchant Center account.
* `ContentDatafeedsInsert` - Registers a datafeed configuration with your Merchant Center account.
* `ContentDatafeedsList` - Lists the configurations for datafeeds in your Merchant Center account.
* `ContentDatafeedsUpdate` - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### datafeedstatuses

* `ContentDatafeedstatusesCustombatch` - Gets multiple Merchant Center datafeed statuses in a single request.
* `ContentDatafeedstatusesGet` - Retrieves the status of a datafeed from your Merchant Center account.
* `ContentDatafeedstatusesList` - Lists the statuses of the datafeeds in your Merchant Center account.

### freelistingsprogram

* `ContentFreelistingsprogramGet` - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `ContentFreelistingsprogramRequestreview` - Requests a review of free listings in a specific region. This method is only available to selected merchants.

### liasettings

* `ContentLiasettingsCustombatch` - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* `ContentLiasettingsGet` - Retrieves the LIA settings of the account.
* `ContentLiasettingsGetaccessiblegmbaccounts` - Retrieves the list of accessible Business Profiles.
* `ContentLiasettingsList` - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* `ContentLiasettingsListposdataproviders` - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* `ContentLiasettingsRequestgmbaccess` - Requests access to a specified Business Profile.
* `ContentLiasettingsRequestinventoryverification` - Requests inventory validation for the specified country.
* `ContentLiasettingsSetinventoryverificationcontact` - Sets the inventory verification contract for the specified country.
* `ContentLiasettingsSetposdataprovider` - Sets the POS data provider for the specified country.
* `ContentLiasettingsUpdate` - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### localinventory

* `ContentLocalinventoryCustombatch` - Updates local inventory for multiple products or stores in a single request.
* `ContentLocalinventoryInsert` - Updates the local inventory of a product in your Merchant Center account.

### orderinvoices

* `ContentOrderinvoicesCreatechargeinvoice` - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* `ContentOrderinvoicesCreaterefundinvoice` - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### orderreports

* `ContentOrderreportsListdisbursements` - Retrieves a report for disbursements from your Merchant Center account.
* `ContentOrderreportsListtransactions` - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### orderreturns

* `ContentOrderreturnsAcknowledge` - Acks an order return in your Merchant Center account.
* `ContentOrderreturnsCreateorderreturn` - Create return in your Merchant Center account.
* `ContentOrderreturnsGet` - Retrieves an order return from your Merchant Center account.
* `ContentOrderreturnsLabelsCreate` - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* `ContentOrderreturnsList` - Lists order returns in your Merchant Center account.
* `ContentOrderreturnsProcess` - Processes return in your Merchant Center account.

### orders

* `ContentOrdersAcknowledge` - Marks an order as acknowledged.
* `ContentOrdersAdvancetestorder` - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* `ContentOrdersCancel` - Cancels all line items in an order, making a full refund.
* `ContentOrdersCancellineitem` - Cancels a line item, making a full refund.
* `ContentOrdersCanceltestorderbycustomer` - Sandbox only. Cancels a test order for customer-initiated cancellation.
* `ContentOrdersCaptureOrder` - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* `ContentOrdersCreatetestorder` - Sandbox only. Creates a test order.
* `ContentOrdersCreatetestreturn` - Sandbox only. Creates a test return.
* `ContentOrdersGet` - Retrieves an order from your Merchant Center account.
* `ContentOrdersGetbymerchantorderid` - Retrieves an order using merchant order ID.
* `ContentOrdersGettestordertemplate` - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* `ContentOrdersInstorerefundlineitem` - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* `ContentOrdersList` - Lists the orders in your Merchant Center account.
* `ContentOrdersRefunditem` - Issues a partial or total refund for items and shipment.
* `ContentOrdersRefundorder` - Issues a partial or total refund for an order.
* `ContentOrdersRejectreturnlineitem` - Rejects return on an line item.
* `ContentOrdersReturnrefundlineitem` - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* `ContentOrdersSetlineitemmetadata` - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* `ContentOrdersShiplineitems` - Marks line item(s) as shipped.
* `ContentOrdersUpdatelineitemshippingdetails` - Updates ship by and delivery by dates for a line item.
* `ContentOrdersUpdatemerchantorderid` - Updates the merchant order ID for a given order.
* `ContentOrdersUpdateshipment` - Updates a shipment's status, carrier, and/or tracking ID.

### ordertrackingsignals

* `ContentOrdertrackingsignalsCreate` - Creates new order tracking signal.

### pos

* `ContentPosCustombatch` - Batches multiple POS-related calls in a single request.
* `ContentPosDelete` - Deletes a store for the given merchant.
* `ContentPosGet` - Retrieves information about the given store.
* `ContentPosInsert` - Creates a store for the given merchant.
* `ContentPosInventory` - Submit inventory for the given merchant.
* `ContentPosList` - Lists the stores of the target merchant.
* `ContentPosSale` - Submit a sale event for the given merchant.

### productdeliverytime

* `ContentProductdeliverytimeCreate` - Creates or updates the delivery time of a product.
* `ContentProductdeliverytimeDelete` - Deletes the delivery time of a product.
* `ContentProductdeliverytimeGet` - Gets `productDeliveryTime` by `productId`.

### products

* `ContentProductsCustombatch` - Retrieves, inserts, and deletes multiple products in a single request.
* `ContentProductsDelete` - Deletes a product from your Merchant Center account.
* `ContentProductsGet` - Retrieves a product from your Merchant Center account.
* `ContentProductsInsert` - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* `ContentProductsList` - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* `ContentProductsUpdate` - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### productstatuses

* `ContentProductstatusesCustombatch` - Gets the statuses of multiple products in a single request.
* `ContentProductstatusesGet` - Gets the status of a product from your Merchant Center account.
* `ContentProductstatusesList` - Lists the statuses of the products in your Merchant Center account.
* `ContentProductstatusesRepricingreportsList` - Lists the metrics report for a given Repricing product.

### promotions

* `ContentPromotionsCreate` - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* `ContentPromotionsGet` - Retrieves a promotion from your Merchant Center account.

### pubsubnotificationsettings

* `ContentPubsubnotificationsettingsGet` - Retrieves a Merchant Center account's pubsub notification settings.
* `ContentPubsubnotificationsettingsUpdate` - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### quotas

* `ContentQuotasList` - Lists the quota limit and quota usage per method for your Merchant Center account.

### regionalinventory

* `ContentRegionalinventoryCustombatch` - Updates regional inventory for multiple products or regions in a single request.
* `ContentRegionalinventoryInsert` - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### regions

* `ContentRegionsCreate` - Creates a region definition in your Merchant Center account.
* `ContentRegionsDelete` - Deletes a region definition from your Merchant Center account.
* `ContentRegionsGet` - Retrieves a region defined in your Merchant Center account.
* `ContentRegionsList` - Lists the regions in your Merchant Center account.
* `ContentRegionsPatch` - Updates a region definition in your Merchant Center account.

### reports

* `ContentReportsSearch` - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### repricingrules

* `ContentRepricingrulesCreate` - Creates a repricing rule for your Merchant Center account.
* `ContentRepricingrulesDelete` - Deletes a repricing rule in your Merchant Center account.
* `ContentRepricingrulesGet` - Retrieves a repricing rule from your Merchant Center account.
* `ContentRepricingrulesList` - Lists the repricing rules in your Merchant Center account.
* `ContentRepricingrulesPatch` - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* `ContentRepricingrulesRepricingreportsList` - Lists the metrics report for a given Repricing rule.

### returnaddress

* `ContentReturnaddressCustombatch` - Batches multiple return address related calls in a single request.
* `ContentReturnaddressDelete` - Deletes a return address for the given Merchant Center account.
* `ContentReturnaddressGet` - Gets a return address of the Merchant Center account.
* `ContentReturnaddressInsert` - Inserts a return address for the Merchant Center account.
* `ContentReturnaddressList` - Lists the return addresses of the Merchant Center account.

### returnpolicy

* `ContentReturnpolicyCustombatch` - Batches multiple return policy related calls in a single request.
* `ContentReturnpolicyDelete` - Deletes a return policy for the given Merchant Center account.
* `ContentReturnpolicyGet` - Gets a return policy of the Merchant Center account.
* `ContentReturnpolicyInsert` - Inserts a return policy for the Merchant Center account.
* `ContentReturnpolicyList` - Lists the return policies of the Merchant Center account.

### returnpolicyonline

* `ContentReturnpolicyonlineCreate` - Creates a new return policy.
* `ContentReturnpolicyonlineDelete` - Deletes an existing return policy.
* `ContentReturnpolicyonlineGet` - Gets an existing return policy.
* `ContentReturnpolicyonlineList` - Lists all existing return policies.
* `ContentReturnpolicyonlinePatch` - Updates an existing return policy.

### settlementreports

* `ContentSettlementreportsGet` - Retrieves a settlement report from your Merchant Center account.
* `ContentSettlementreportsList` - Retrieves a list of settlement reports from your Merchant Center account.

### settlementtransactions

* `ContentSettlementtransactionsList` - Retrieves a list of transactions for the settlement.

### shippingsettings

* `ContentShippingsettingsCustombatch` - Retrieves and updates the shipping settings of multiple accounts in a single request.
* `ContentShippingsettingsGet` - Retrieves the shipping settings of the account.
* `ContentShippingsettingsGetsupportedcarriers` - Retrieves supported carriers and carrier services for an account.
* `ContentShippingsettingsGetsupportedholidays` - Retrieves supported holidays for an account.
* `ContentShippingsettingsGetsupportedpickupservices` - Retrieves supported pickup services for an account.
* `ContentShippingsettingsList` - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* `ContentShippingsettingsUpdate` - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### shoppingadsprogram

* `ContentShoppingadsprogramGet` - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* `ContentShoppingadsprogramRequestreview` - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
