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
import { DisplayvideoAdvertisersAssetsUploadRequest, DisplayvideoAdvertisersAssetsUploadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DisplayvideoAdvertisersAssetsUploadRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    advertiserId: "labore",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "laboriosam",
    alt: "proto",
    callback: "necessitatibus",
    fields: "ut",
    key: "veritatis",
    oauthToken: "suscipit",
    prettyPrint: true,
    quotaUser: "pariatur",
    uploadType: "asperiores",
    uploadProtocol: "velit",
  },
  request: "voluptas".encode(),
};

sdk.advertisers.displayvideoAdvertisersAssetsUpload(req).then((res: DisplayvideoAdvertisersAssetsUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### advertisers

* `displayvideoAdvertisersAssetsUpload` - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* `displayvideoAdvertisersAudit` - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* `displayvideoAdvertisersCampaignsCreate` - Creates a new campaign. Returns the newly created campaign if successful.
* `displayvideoAdvertisersCampaignsDelete` - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideoAdvertisersCampaignsGet` - Gets a campaign.
* `displayvideoAdvertisersCampaignsList` - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoAdvertisersCampaignsListAssignedTargetingOptions` - Lists assigned targeting options of a campaign across targeting types.
* `displayvideoAdvertisersCampaignsPatch` - Updates an existing campaign. Returns the updated campaign if successful.
* `displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a campaign.
* `displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a campaign for a specified targeting type.
* `displayvideoAdvertisersChannelsCreate` - Creates a new channel. Returns the newly created channel if successful.
* `displayvideoAdvertisersChannelsList` - Lists channels for a partner or advertiser.
* `displayvideoAdvertisersChannelsPatch` - Updates a channel. Returns the updated channel if successful.
* `displayvideoAdvertisersChannelsSitesBulkEdit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `displayvideoAdvertisersChannelsSitesDelete` - Deletes a site from a channel.
* `displayvideoAdvertisersChannelsSitesList` - Lists sites in a channel.
* `displayvideoAdvertisersChannelsSitesReplace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `displayvideoAdvertisersCreate` - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* `displayvideoAdvertisersCreativesCreate` - Creates a new creative. Returns the newly created creative if successful.
* `displayvideoAdvertisersCreativesDelete` - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* `displayvideoAdvertisersCreativesGet` - Gets a creative.
* `displayvideoAdvertisersCreativesList` - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoAdvertisersCreativesPatch` - Updates an existing creative. Returns the updated creative if successful.
* `displayvideoAdvertisersDelete` - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* `displayvideoAdvertisersEditAssignedTargetingOptions` - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* `displayvideoAdvertisersGet` - Gets an advertiser.
* `displayvideoAdvertisersInsertionOrdersCreate` - Creates a new insertion order. Returns the newly created insertion order if successful.
* `displayvideoAdvertisersInsertionOrdersDelete` - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideoAdvertisersInsertionOrdersGet` - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* `displayvideoAdvertisersInsertionOrdersList` - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions` - Lists assigned targeting options of an insertion order across targeting types.
* `displayvideoAdvertisersInsertionOrdersPatch` - Updates an existing insertion order. Returns the updated insertion order if successful.
* `displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* `displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* `displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to an insertion order.
* `displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to an insertion order.
* `displayvideoAdvertisersInvoicesList` - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* `displayvideoAdvertisersInvoicesLookupInvoiceCurrency` - Retrieves the invoice currency used by an advertiser in a given month.
* `displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions` - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions` - Lists assigned targeting options for multiple line items across targeting types.
* `displayvideoAdvertisersLineItemsBulkUpdate` - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideoAdvertisersLineItemsCreate` - Creates a new line item. Returns the newly created line item if successful.
* `displayvideoAdvertisersLineItemsDelete` - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideoAdvertisersLineItemsDuplicate` - Duplicates a line item. Returns the ID of the created line item if successful.
* `displayvideoAdvertisersLineItemsGenerateDefault` - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* `displayvideoAdvertisersLineItemsGet` - Gets a line item.
* `displayvideoAdvertisersLineItemsList` - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoAdvertisersLineItemsPatch` - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* `displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* `displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a line item.
* `displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a line item.
* `displayvideoAdvertisersList` - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* `displayvideoAdvertisersListAssignedTargetingOptions` - Lists assigned targeting options of an advertiser across targeting types.
* `displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit` - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* `displayvideoAdvertisersLocationListsAssignedLocationsCreate` - Creates an assignment between a location and a location list.
* `displayvideoAdvertisersLocationListsAssignedLocationsDelete` - Deletes the assignment between a location and a location list.
* `displayvideoAdvertisersLocationListsAssignedLocationsList` - Lists locations assigned to a location list.
* `displayvideoAdvertisersLocationListsCreate` - Creates a new location list. Returns the newly created location list if successful.
* `displayvideoAdvertisersLocationListsList` - Lists location lists based on a given advertiser id.
* `displayvideoAdvertisersLocationListsPatch` - Updates a location list. Returns the updated location list if successful.
* `displayvideoAdvertisersManualTriggersActivate` - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
* `displayvideoAdvertisersManualTriggersCreate` - Creates a new manual trigger. Returns the newly created manual trigger if successful.
* `displayvideoAdvertisersManualTriggersDeactivate` - Deactivates a manual trigger.
* `displayvideoAdvertisersManualTriggersGet` - Gets a manual trigger.
* `displayvideoAdvertisersManualTriggersList` - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
* `displayvideoAdvertisersManualTriggersPatch` - Updates a manual trigger. Returns the updated manual trigger if successful.
* `displayvideoAdvertisersNegativeKeywordListsCreate` - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* `displayvideoAdvertisersNegativeKeywordListsList` - Lists negative keyword lists based on a given advertiser id.
* `displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit` - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* `displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete` - Deletes a negative keyword from a negative keyword list.
* `displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList` - Lists negative keywords in a negative keyword list.
* `displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace` - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* `displayvideoAdvertisersNegativeKeywordListsPatch` - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* `displayvideoAdvertisersPatch` - Updates an existing advertiser. Returns the updated advertiser if successful.
* `displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* `displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from an advertiser.
* `displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to an advertiser.
* `displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to an advertiser.

### combinedAudiences

* `displayvideoCombinedAudiencesGet` - Gets a combined audience.
* `displayvideoCombinedAudiencesList` - Lists combined audiences. The order is defined by the order_by parameter.

### customBiddingAlgorithms

* `displayvideoCustomBiddingAlgorithmsCreate` - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* `displayvideoCustomBiddingAlgorithmsGet` - Gets a custom bidding algorithm.
* `displayvideoCustomBiddingAlgorithmsList` - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* `displayvideoCustomBiddingAlgorithmsPatch` - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* `displayvideoCustomBiddingAlgorithmsScriptsCreate` - Creates a new custom bidding script. Returns the newly created script if successful.
* `displayvideoCustomBiddingAlgorithmsScriptsGet` - Gets a custom bidding script.
* `displayvideoCustomBiddingAlgorithmsScriptsList` - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* `displayvideoCustomBiddingAlgorithmsUploadScript` - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### customLists

* `displayvideoCustomListsGet` - Gets a custom list.
* `displayvideoCustomListsList` - Lists custom lists. The order is defined by the order_by parameter.

### firstAndThirdPartyAudiences

* `displayvideoFirstAndThirdPartyAudiencesCreate` - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers` - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `displayvideoFirstAndThirdPartyAudiencesGet` - Gets a first and third party audience.
* `displayvideoFirstAndThirdPartyAudiencesList` - Lists first and third party audiences. The order is defined by the order_by parameter.
* `displayvideoFirstAndThirdPartyAudiencesPatch` - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### floodlightGroups

* `displayvideoFloodlightGroupsGet` - Gets a Floodlight group.

### googleAudiences

* `displayvideoGoogleAudiencesGet` - Gets a Google audience.
* `displayvideoGoogleAudiencesList` - Lists Google audiences. The order is defined by the order_by parameter.

### guaranteedOrders

* `displayvideoGuaranteedOrdersCreate` - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* `displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors` - Edits read advertisers of a guaranteed order.
* `displayvideoGuaranteedOrdersGet` - Gets a guaranteed order.
* `displayvideoGuaranteedOrdersList` - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoGuaranteedOrdersPatch` - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### inventorySourceGroups

* `displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit` - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* `displayvideoInventorySourceGroupsAssignedInventorySourcesCreate` - Creates an assignment between an inventory source and an inventory source group.
* `displayvideoInventorySourceGroupsAssignedInventorySourcesDelete` - Deletes the assignment between an inventory source and an inventory source group.
* `displayvideoInventorySourceGroupsAssignedInventorySourcesList` - Lists inventory sources assigned to an inventory source group.
* `displayvideoInventorySourceGroupsCreate` - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* `displayvideoInventorySourceGroupsDelete` - Deletes an inventory source group.
* `displayvideoInventorySourceGroupsGet` - Gets an inventory source group.
* `displayvideoInventorySourceGroupsList` - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### inventorySources

* `displayvideoInventorySourcesCreate` - Creates a new inventory source. Returns the newly created inventory source if successful.
* `displayvideoInventorySourcesEditInventorySourceReadWriteAccessors` - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* `displayvideoInventorySourcesGet` - Gets an inventory source.
* `displayvideoInventorySourcesList` - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideoInventorySourcesPatch` - Updates an existing inventory source. Returns the updated inventory source if successful.

### media

* `displayvideoMediaDownload` - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* `displayvideoMediaUpload` - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### partners

* `displayvideoPartnersChannelsCreate` - Creates a new channel. Returns the newly created channel if successful.
* `displayvideoPartnersChannelsList` - Lists channels for a partner or advertiser.
* `displayvideoPartnersChannelsPatch` - Updates a channel. Returns the updated channel if successful.
* `displayvideoPartnersChannelsSitesBulkEdit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `displayvideoPartnersChannelsSitesDelete` - Deletes a site from a channel.
* `displayvideoPartnersChannelsSitesList` - Lists sites in a channel.
* `displayvideoPartnersChannelsSitesReplace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `displayvideoPartnersEditAssignedTargetingOptions` - Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* `displayvideoPartnersGet` - Gets a partner.
* `displayvideoPartnersList` - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* `displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* `displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from a partner.
* `displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a partner.
* `displayvideoPartnersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a partner.

### sdfdownloadtasks

* `displayvideoSdfdownloadtasksCreate` - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* `displayvideoSdfdownloadtasksOperationsGet` - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### targetingTypes

* `displayvideoTargetingTypesTargetingOptionsGet` - Gets a single targeting option.
* `displayvideoTargetingTypesTargetingOptionsList` - Lists targeting options of a given type.
* `displayvideoTargetingTypesTargetingOptionsSearch` - Searches for targeting options of a given type based on the given search terms.

### users

* `displayvideoUsersBulkEditAssignedUserRoles` - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.
* `displayvideoUsersCreate` - Creates a new user. Returns the newly created user if successful.
* `displayvideoUsersDelete` - Deletes a user.
* `displayvideoUsersGet` - Gets a user.
* `displayvideoUsersList` - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.
* `displayvideoUsersPatch` - Updates an existing user. Returns the updated user if successful.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
