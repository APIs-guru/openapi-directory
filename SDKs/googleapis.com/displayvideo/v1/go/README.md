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
    
    req := operations.DisplayvideoAdvertisersAssetsUploadRequest{
        Security: operations.DisplayvideoAdvertisersAssetsUploadSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DisplayvideoAdvertisersAssetsUploadPathParams{
            AdvertiserID: "est",
        },
        QueryParams: operations.DisplayvideoAdvertisersAssetsUploadQueryParams{
            DollarXgafv: "1",
            AccessToken: "pariatur",
            Alt: "proto",
            Callback: "cumque",
            Fields: "enim",
            Key: "quisquam",
            OauthToken: "quo",
            PrettyPrint: false,
            QuotaUser: "ipsam",
            UploadType: "non",
            UploadProtocol: "sed",
        },
        Request: []byte("reprehenderit"),
    }
    
    res, err := s.Advertisers.DisplayvideoAdvertisersAssetsUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### advertisers

* `DisplayvideoAdvertisersAssetsUpload` - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* `DisplayvideoAdvertisersAudit` - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* `DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions` - Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* `DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions` - Lists assigned targeting options of an advertiser across targeting types.
* `DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions` - Lists assigned targeting options of a campaign across targeting types.
* `DisplayvideoAdvertisersCampaignsCreate` - Creates a new campaign. Returns the newly created campaign if successful.
* `DisplayvideoAdvertisersCampaignsDelete` - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `DisplayvideoAdvertisersCampaignsGet` - Gets a campaign.
* `DisplayvideoAdvertisersCampaignsList` - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoAdvertisersCampaignsPatch` - Updates an existing campaign. Returns the updated campaign if successful.
* `DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a campaign.
* `DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a campaign for a specified targeting type.
* `DisplayvideoAdvertisersChannelsCreate` - Creates a new channel. Returns the newly created channel if successful.
* `DisplayvideoAdvertisersChannelsList` - Lists channels for a partner or advertiser.
* `DisplayvideoAdvertisersChannelsPatch` - Updates a channel. Returns the updated channel if successful.
* `DisplayvideoAdvertisersChannelsSitesBulkEdit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `DisplayvideoAdvertisersChannelsSitesDelete` - Deletes a site from a channel.
* `DisplayvideoAdvertisersChannelsSitesList` - Lists sites in a channel.
* `DisplayvideoAdvertisersChannelsSitesReplace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `DisplayvideoAdvertisersCreate` - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* `DisplayvideoAdvertisersCreativesCreate` - Creates a new creative. Returns the newly created creative if successful.
* `DisplayvideoAdvertisersCreativesDelete` - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* `DisplayvideoAdvertisersCreativesGet` - Gets a creative.
* `DisplayvideoAdvertisersCreativesList` - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoAdvertisersCreativesPatch` - Updates an existing creative. Returns the updated creative if successful.
* `DisplayvideoAdvertisersDelete` - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* `DisplayvideoAdvertisersGet` - Gets an advertiser.
* `DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions` - Lists assigned targeting options of an insertion order across targeting types.
* `DisplayvideoAdvertisersInsertionOrdersCreate` - Creates a new insertion order. Returns the newly created insertion order if successful.
* `DisplayvideoAdvertisersInsertionOrdersDelete` - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `DisplayvideoAdvertisersInsertionOrdersGet` - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* `DisplayvideoAdvertisersInsertionOrdersList` - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoAdvertisersInsertionOrdersPatch` - Updates an existing insertion order. Returns the updated insertion order if successful.
* `DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to an insertion order.
* `DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to an insertion order.
* `DisplayvideoAdvertisersInvoicesList` - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* `DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency` - Retrieves the invoice currency used by an advertiser in a given month.
* `DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions` - Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions` - Lists assigned targeting options of a line item across targeting types.
* `DisplayvideoAdvertisersLineItemsCreate` - Creates a new line item. Returns the newly created line item if successful.
* `DisplayvideoAdvertisersLineItemsDelete` - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `DisplayvideoAdvertisersLineItemsGenerateDefault` - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* `DisplayvideoAdvertisersLineItemsGet` - Gets a line item.
* `DisplayvideoAdvertisersLineItemsList` - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoAdvertisersLineItemsPatch` - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* `DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* `DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a line item.
* `DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a line item.
* `DisplayvideoAdvertisersList` - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* `DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit` - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* `DisplayvideoAdvertisersLocationListsAssignedLocationsCreate` - Creates an assignment between a location and a location list.
* `DisplayvideoAdvertisersLocationListsAssignedLocationsDelete` - Deletes the assignment between a location and a location list.
* `DisplayvideoAdvertisersLocationListsAssignedLocationsList` - Lists locations assigned to a location list.
* `DisplayvideoAdvertisersLocationListsCreate` - Creates a new location list. Returns the newly created location list if successful.
* `DisplayvideoAdvertisersLocationListsList` - Lists location lists based on a given advertiser id.
* `DisplayvideoAdvertisersLocationListsPatch` - Updates a location list. Returns the updated location list if successful.
* `DisplayvideoAdvertisersManualTriggersActivate` - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
* `DisplayvideoAdvertisersManualTriggersCreate` - Creates a new manual trigger. Returns the newly created manual trigger if successful.
* `DisplayvideoAdvertisersManualTriggersDeactivate` - Deactivates a manual trigger.
* `DisplayvideoAdvertisersManualTriggersGet` - Gets a manual trigger.
* `DisplayvideoAdvertisersManualTriggersList` - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
* `DisplayvideoAdvertisersManualTriggersPatch` - Updates a manual trigger. Returns the updated manual trigger if successful.
* `DisplayvideoAdvertisersNegativeKeywordListsCreate` - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* `DisplayvideoAdvertisersNegativeKeywordListsList` - Lists negative keyword lists based on a given advertiser id.
* `DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit` - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* `DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete` - Deletes a negative keyword from a negative keyword list.
* `DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList` - Lists negative keywords in a negative keyword list.
* `DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace` - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* `DisplayvideoAdvertisersNegativeKeywordListsPatch` - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* `DisplayvideoAdvertisersPatch` - Updates an existing advertiser. Returns the updated advertiser if successful.
* `DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* `DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from an advertiser.
* `DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to an advertiser.
* `DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to an advertiser.

### combinedAudiences

* `DisplayvideoCombinedAudiencesGet` - Gets a combined audience.
* `DisplayvideoCombinedAudiencesList` - Lists combined audiences. The order is defined by the order_by parameter.

### customBiddingAlgorithms

* `DisplayvideoCustomBiddingAlgorithmsCreate` - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* `DisplayvideoCustomBiddingAlgorithmsGet` - Gets a custom bidding algorithm.
* `DisplayvideoCustomBiddingAlgorithmsList` - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* `DisplayvideoCustomBiddingAlgorithmsPatch` - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* `DisplayvideoCustomBiddingAlgorithmsScriptsCreate` - Creates a new custom bidding script. Returns the newly created script if successful.
* `DisplayvideoCustomBiddingAlgorithmsScriptsGet` - Gets a custom bidding script.
* `DisplayvideoCustomBiddingAlgorithmsScriptsList` - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* `DisplayvideoCustomBiddingAlgorithmsUploadScript` - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### customLists

* `DisplayvideoCustomListsGet` - Gets a custom list.
* `DisplayvideoCustomListsList` - Lists custom lists. The order is defined by the order_by parameter.

### firstAndThirdPartyAudiences

* `DisplayvideoFirstAndThirdPartyAudiencesCreate` - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers` - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `DisplayvideoFirstAndThirdPartyAudiencesGet` - Gets a first and third party audience.
* `DisplayvideoFirstAndThirdPartyAudiencesList` - Lists first and third party audiences. The order is defined by the order_by parameter.
* `DisplayvideoFirstAndThirdPartyAudiencesPatch` - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### floodlightGroups

* `DisplayvideoFloodlightGroupsGet` - Gets a Floodlight group.

### googleAudiences

* `DisplayvideoGoogleAudiencesGet` - Gets a Google audience.
* `DisplayvideoGoogleAudiencesList` - Lists Google audiences. The order is defined by the order_by parameter.

### guaranteedOrders

* `DisplayvideoGuaranteedOrdersCreate` - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* `DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors` - Edits read advertisers of a guaranteed order.
* `DisplayvideoGuaranteedOrdersGet` - Gets a guaranteed order.
* `DisplayvideoGuaranteedOrdersList` - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoGuaranteedOrdersPatch` - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### inventorySourceGroups

* `DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit` - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* `DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreate` - Creates an assignment between an inventory source and an inventory source group.
* `DisplayvideoInventorySourceGroupsAssignedInventorySourcesDelete` - Deletes the assignment between an inventory source and an inventory source group.
* `DisplayvideoInventorySourceGroupsAssignedInventorySourcesList` - Lists inventory sources assigned to an inventory source group.
* `DisplayvideoInventorySourceGroupsCreate` - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* `DisplayvideoInventorySourceGroupsDelete` - Deletes an inventory source group.
* `DisplayvideoInventorySourceGroupsGet` - Gets an inventory source group.
* `DisplayvideoInventorySourceGroupsList` - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### inventorySources

* `DisplayvideoInventorySourcesCreate` - Creates a new inventory source. Returns the newly created inventory source if successful.
* `DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessors` - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* `DisplayvideoInventorySourcesGet` - Gets an inventory source.
* `DisplayvideoInventorySourcesList` - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `DisplayvideoInventorySourcesPatch` - Updates an existing inventory source. Returns the updated inventory source if successful.

### media

* `DisplayvideoMediaDownload` - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* `DisplayvideoMediaUpload` - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### partners

* `DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptions` - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* `DisplayvideoPartnersChannelsCreate` - Creates a new channel. Returns the newly created channel if successful.
* `DisplayvideoPartnersChannelsList` - Lists channels for a partner or advertiser.
* `DisplayvideoPartnersChannelsPatch` - Updates a channel. Returns the updated channel if successful.
* `DisplayvideoPartnersChannelsSitesBulkEdit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `DisplayvideoPartnersChannelsSitesDelete` - Deletes a site from a channel.
* `DisplayvideoPartnersChannelsSitesList` - Lists sites in a channel.
* `DisplayvideoPartnersChannelsSitesReplace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `DisplayvideoPartnersGet` - Gets a partner.
* `DisplayvideoPartnersList` - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* `DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate` - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* `DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete` - Deletes an assigned targeting option from a partner.
* `DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGet` - Gets a single targeting option assigned to a partner.
* `DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsList` - Lists the targeting options assigned to a partner.

### sdfdownloadtasks

* `DisplayvideoSdfdownloadtasksCreate` - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* `DisplayvideoSdfdownloadtasksOperationsGet` - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### targetingTypes

* `DisplayvideoTargetingTypesTargetingOptionsGet` - Gets a single targeting option.
* `DisplayvideoTargetingTypesTargetingOptionsList` - Lists targeting options of a given type.
* `DisplayvideoTargetingTypesTargetingOptionsSearch` - Searches for targeting options of a given type based on the given search terms.

### users

* `DisplayvideoUsersBulkEditAssignedUserRoles` - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.
* `DisplayvideoUsersCreate` - Creates a new user. Returns the newly created user if successful.
* `DisplayvideoUsersDelete` - Deletes a user.
* `DisplayvideoUsersGet` - Gets a user.
* `DisplayvideoUsersList` - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.
* `DisplayvideoUsersPatch` - Updates an existing user. Returns the updated user if successful.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
