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
    
req = operations.DisplayvideoAdvertisersAssetsUploadRequest(
    security=operations.DisplayvideoAdvertisersAssetsUploadSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DisplayvideoAdvertisersAssetsUploadPathParams(
        advertiser_id="labore",
    ),
    query_params=operations.DisplayvideoAdvertisersAssetsUploadQueryParams(
        dollar_xgafv="1",
        access_token="laboriosam",
        alt="proto",
        callback="necessitatibus",
        fields="ut",
        key="veritatis",
        oauth_token="suscipit",
        pretty_print=True,
        quota_user="pariatur",
        upload_type="asperiores",
        upload_protocol="velit",
    ),
    request="voluptas".encode(),
)
    
res = s.advertisers.displayvideo_advertisers_assets_upload(req)

if res.create_asset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### advertisers

* `displayvideo_advertisers_assets_upload` - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* `displayvideo_advertisers_audit` - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* `displayvideo_advertisers_campaigns_create` - Creates a new campaign. Returns the newly created campaign if successful.
* `displayvideo_advertisers_campaigns_delete` - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideo_advertisers_campaigns_get` - Gets a campaign.
* `displayvideo_advertisers_campaigns_list` - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_advertisers_campaigns_list_assigned_targeting_options` - Lists assigned targeting options of a campaign across targeting types.
* `displayvideo_advertisers_campaigns_patch` - Updates an existing campaign. Returns the updated campaign if successful.
* `displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get` - Gets a single targeting option assigned to a campaign.
* `displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list` - Lists the targeting options assigned to a campaign for a specified targeting type.
* `displayvideo_advertisers_channels_create` - Creates a new channel. Returns the newly created channel if successful.
* `displayvideo_advertisers_channels_list` - Lists channels for a partner or advertiser.
* `displayvideo_advertisers_channels_patch` - Updates a channel. Returns the updated channel if successful.
* `displayvideo_advertisers_channels_sites_bulk_edit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `displayvideo_advertisers_channels_sites_delete` - Deletes a site from a channel.
* `displayvideo_advertisers_channels_sites_list` - Lists sites in a channel.
* `displayvideo_advertisers_channels_sites_replace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `displayvideo_advertisers_create` - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* `displayvideo_advertisers_creatives_create` - Creates a new creative. Returns the newly created creative if successful.
* `displayvideo_advertisers_creatives_delete` - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* `displayvideo_advertisers_creatives_get` - Gets a creative.
* `displayvideo_advertisers_creatives_list` - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_advertisers_creatives_patch` - Updates an existing creative. Returns the updated creative if successful.
* `displayvideo_advertisers_delete` - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* `displayvideo_advertisers_edit_assigned_targeting_options` - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* `displayvideo_advertisers_get` - Gets an advertiser.
* `displayvideo_advertisers_insertion_orders_create` - Creates a new insertion order. Returns the newly created insertion order if successful.
* `displayvideo_advertisers_insertion_orders_delete` - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideo_advertisers_insertion_orders_get` - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* `displayvideo_advertisers_insertion_orders_list` - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_advertisers_insertion_orders_list_assigned_targeting_options` - Lists assigned targeting options of an insertion order across targeting types.
* `displayvideo_advertisers_insertion_orders_patch` - Updates an existing insertion order. Returns the updated insertion order if successful.
* `displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_create` - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* `displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_delete` - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* `displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get` - Gets a single targeting option assigned to an insertion order.
* `displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list` - Lists the targeting options assigned to an insertion order.
* `displayvideo_advertisers_invoices_list` - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* `displayvideo_advertisers_invoices_lookup_invoice_currency` - Retrieves the invoice currency used by an advertiser in a given month.
* `displayvideo_advertisers_line_items_bulk_edit_assigned_targeting_options` - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideo_advertisers_line_items_bulk_list_assigned_targeting_options` - Lists assigned targeting options for multiple line items across targeting types.
* `displayvideo_advertisers_line_items_bulk_update` - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideo_advertisers_line_items_create` - Creates a new line item. Returns the newly created line item if successful.
* `displayvideo_advertisers_line_items_delete` - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* `displayvideo_advertisers_line_items_duplicate` - Duplicates a line item. Returns the ID of the created line item if successful.
* `displayvideo_advertisers_line_items_generate_default` - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* `displayvideo_advertisers_line_items_get` - Gets a line item.
* `displayvideo_advertisers_line_items_list` - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_advertisers_line_items_patch` - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* `displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create` - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* `displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete` - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* `displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get` - Gets a single targeting option assigned to a line item.
* `displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list` - Lists the targeting options assigned to a line item.
* `displayvideo_advertisers_list` - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* `displayvideo_advertisers_list_assigned_targeting_options` - Lists assigned targeting options of an advertiser across targeting types.
* `displayvideo_advertisers_location_lists_assigned_locations_bulk_edit` - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* `displayvideo_advertisers_location_lists_assigned_locations_create` - Creates an assignment between a location and a location list.
* `displayvideo_advertisers_location_lists_assigned_locations_delete` - Deletes the assignment between a location and a location list.
* `displayvideo_advertisers_location_lists_assigned_locations_list` - Lists locations assigned to a location list.
* `displayvideo_advertisers_location_lists_create` - Creates a new location list. Returns the newly created location list if successful.
* `displayvideo_advertisers_location_lists_list` - Lists location lists based on a given advertiser id.
* `displayvideo_advertisers_location_lists_patch` - Updates a location list. Returns the updated location list if successful.
* `displayvideo_advertisers_manual_triggers_activate` - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
* `displayvideo_advertisers_manual_triggers_create` - Creates a new manual trigger. Returns the newly created manual trigger if successful.
* `displayvideo_advertisers_manual_triggers_deactivate` - Deactivates a manual trigger.
* `displayvideo_advertisers_manual_triggers_get` - Gets a manual trigger.
* `displayvideo_advertisers_manual_triggers_list` - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
* `displayvideo_advertisers_manual_triggers_patch` - Updates a manual trigger. Returns the updated manual trigger if successful.
* `displayvideo_advertisers_negative_keyword_lists_create` - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* `displayvideo_advertisers_negative_keyword_lists_list` - Lists negative keyword lists based on a given advertiser id.
* `displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit` - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* `displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete` - Deletes a negative keyword from a negative keyword list.
* `displayvideo_advertisers_negative_keyword_lists_negative_keywords_list` - Lists negative keywords in a negative keyword list.
* `displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace` - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* `displayvideo_advertisers_negative_keyword_lists_patch` - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* `displayvideo_advertisers_patch` - Updates an existing advertiser. Returns the updated advertiser if successful.
* `displayvideo_advertisers_targeting_types_assigned_targeting_options_create` - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* `displayvideo_advertisers_targeting_types_assigned_targeting_options_delete` - Deletes an assigned targeting option from an advertiser.
* `displayvideo_advertisers_targeting_types_assigned_targeting_options_get` - Gets a single targeting option assigned to an advertiser.
* `displayvideo_advertisers_targeting_types_assigned_targeting_options_list` - Lists the targeting options assigned to an advertiser.

### combinedAudiences

* `displayvideo_combined_audiences_get` - Gets a combined audience.
* `displayvideo_combined_audiences_list` - Lists combined audiences. The order is defined by the order_by parameter.

### customBiddingAlgorithms

* `displayvideo_custom_bidding_algorithms_create` - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* `displayvideo_custom_bidding_algorithms_get` - Gets a custom bidding algorithm.
* `displayvideo_custom_bidding_algorithms_list` - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* `displayvideo_custom_bidding_algorithms_patch` - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* `displayvideo_custom_bidding_algorithms_scripts_create` - Creates a new custom bidding script. Returns the newly created script if successful.
* `displayvideo_custom_bidding_algorithms_scripts_get` - Gets a custom bidding script.
* `displayvideo_custom_bidding_algorithms_scripts_list` - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* `displayvideo_custom_bidding_algorithms_upload_script` - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### customLists

* `displayvideo_custom_lists_get` - Gets a custom list.
* `displayvideo_custom_lists_list` - Lists custom lists. The order is defined by the order_by parameter.

### firstAndThirdPartyAudiences

* `displayvideo_first_and_third_party_audiences_create` - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `displayvideo_first_and_third_party_audiences_edit_customer_match_members` - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* `displayvideo_first_and_third_party_audiences_get` - Gets a first and third party audience.
* `displayvideo_first_and_third_party_audiences_list` - Lists first and third party audiences. The order is defined by the order_by parameter.
* `displayvideo_first_and_third_party_audiences_patch` - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### floodlightGroups

* `displayvideo_floodlight_groups_get` - Gets a Floodlight group.

### googleAudiences

* `displayvideo_google_audiences_get` - Gets a Google audience.
* `displayvideo_google_audiences_list` - Lists Google audiences. The order is defined by the order_by parameter.

### guaranteedOrders

* `displayvideo_guaranteed_orders_create` - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* `displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors` - Edits read advertisers of a guaranteed order.
* `displayvideo_guaranteed_orders_get` - Gets a guaranteed order.
* `displayvideo_guaranteed_orders_list` - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_guaranteed_orders_patch` - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### inventorySourceGroups

* `displayvideo_inventory_source_groups_assigned_inventory_sources_bulk_edit` - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* `displayvideo_inventory_source_groups_assigned_inventory_sources_create` - Creates an assignment between an inventory source and an inventory source group.
* `displayvideo_inventory_source_groups_assigned_inventory_sources_delete` - Deletes the assignment between an inventory source and an inventory source group.
* `displayvideo_inventory_source_groups_assigned_inventory_sources_list` - Lists inventory sources assigned to an inventory source group.
* `displayvideo_inventory_source_groups_create` - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* `displayvideo_inventory_source_groups_delete` - Deletes an inventory source group.
* `displayvideo_inventory_source_groups_get` - Gets an inventory source group.
* `displayvideo_inventory_source_groups_list` - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### inventorySources

* `displayvideo_inventory_sources_create` - Creates a new inventory source. Returns the newly created inventory source if successful.
* `displayvideo_inventory_sources_edit_inventory_source_read_write_accessors` - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* `displayvideo_inventory_sources_get` - Gets an inventory source.
* `displayvideo_inventory_sources_list` - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* `displayvideo_inventory_sources_patch` - Updates an existing inventory source. Returns the updated inventory source if successful.

### media

* `displayvideo_media_download` - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* `displayvideo_media_upload` - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### partners

* `displayvideo_partners_channels_create` - Creates a new channel. Returns the newly created channel if successful.
* `displayvideo_partners_channels_list` - Lists channels for a partner or advertiser.
* `displayvideo_partners_channels_patch` - Updates a channel. Returns the updated channel if successful.
* `displayvideo_partners_channels_sites_bulk_edit` - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* `displayvideo_partners_channels_sites_delete` - Deletes a site from a channel.
* `displayvideo_partners_channels_sites_list` - Lists sites in a channel.
* `displayvideo_partners_channels_sites_replace` - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* `displayvideo_partners_edit_assigned_targeting_options` - Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* `displayvideo_partners_get` - Gets a partner.
* `displayvideo_partners_list` - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* `displayvideo_partners_targeting_types_assigned_targeting_options_create` - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* `displayvideo_partners_targeting_types_assigned_targeting_options_delete` - Deletes an assigned targeting option from a partner.
* `displayvideo_partners_targeting_types_assigned_targeting_options_get` - Gets a single targeting option assigned to a partner.
* `displayvideo_partners_targeting_types_assigned_targeting_options_list` - Lists the targeting options assigned to a partner.

### sdfdownloadtasks

* `displayvideo_sdfdownloadtasks_create` - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* `displayvideo_sdfdownloadtasks_operations_get` - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### targetingTypes

* `displayvideo_targeting_types_targeting_options_get` - Gets a single targeting option.
* `displayvideo_targeting_types_targeting_options_list` - Lists targeting options of a given type.
* `displayvideo_targeting_types_targeting_options_search` - Searches for targeting options of a given type based on the given search terms.

### users

* `displayvideo_users_bulk_edit_assigned_user_roles` - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.
* `displayvideo_users_create` - Creates a new user. Returns the newly created user if successful.
* `displayvideo_users_delete` - Deletes a user.
* `displayvideo_users_get` - Gets a user.
* `displayvideo_users_list` - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.
* `displayvideo_users_patch` - Updates an existing user. Returns the updated user if successful.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
