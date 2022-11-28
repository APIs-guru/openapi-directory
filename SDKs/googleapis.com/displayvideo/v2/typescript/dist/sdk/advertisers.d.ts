import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Advertisers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoAdvertisersAssetsUpload - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
    **/
    displayvideoAdvertisersAssetsUpload(req: operations.DisplayvideoAdvertisersAssetsUploadRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersAssetsUploadResponse>;
    /**
     * displayvideoAdvertisersAudit - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
    **/
    displayvideoAdvertisersAudit(req: operations.DisplayvideoAdvertisersAuditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersAuditResponse>;
    /**
     * displayvideoAdvertisersCampaignsCreate - Creates a new campaign. Returns the newly created campaign if successful.
    **/
    displayvideoAdvertisersCampaignsCreate(req: operations.DisplayvideoAdvertisersCampaignsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsCreateResponse>;
    /**
     * displayvideoAdvertisersCampaignsDelete - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    displayvideoAdvertisersCampaignsDelete(req: operations.DisplayvideoAdvertisersCampaignsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsDeleteResponse>;
    /**
     * displayvideoAdvertisersCampaignsGet - Gets a campaign.
    **/
    displayvideoAdvertisersCampaignsGet(req: operations.DisplayvideoAdvertisersCampaignsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsGetResponse>;
    /**
     * displayvideoAdvertisersCampaignsList - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoAdvertisersCampaignsList(req: operations.DisplayvideoAdvertisersCampaignsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsListResponse>;
    /**
     * displayvideoAdvertisersCampaignsListAssignedTargetingOptions - Lists assigned targeting options of a campaign across targeting types.
    **/
    displayvideoAdvertisersCampaignsListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersCampaignsPatch - Updates an existing campaign. Returns the updated campaign if successful.
    **/
    displayvideoAdvertisersCampaignsPatch(req: operations.DisplayvideoAdvertisersCampaignsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsPatchResponse>;
    /**
     * displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a campaign.
    **/
    displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a campaign for a specified targeting type.
    **/
    displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * displayvideoAdvertisersChannelsCreate - Creates a new channel. Returns the newly created channel if successful.
    **/
    displayvideoAdvertisersChannelsCreate(req: operations.DisplayvideoAdvertisersChannelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsCreateResponse>;
    /**
     * displayvideoAdvertisersChannelsList - Lists channels for a partner or advertiser.
    **/
    displayvideoAdvertisersChannelsList(req: operations.DisplayvideoAdvertisersChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsListResponse>;
    /**
     * displayvideoAdvertisersChannelsPatch - Updates a channel. Returns the updated channel if successful.
    **/
    displayvideoAdvertisersChannelsPatch(req: operations.DisplayvideoAdvertisersChannelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsPatchResponse>;
    /**
     * displayvideoAdvertisersChannelsSitesBulkEdit - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
    **/
    displayvideoAdvertisersChannelsSitesBulkEdit(req: operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse>;
    /**
     * displayvideoAdvertisersChannelsSitesDelete - Deletes a site from a channel.
    **/
    displayvideoAdvertisersChannelsSitesDelete(req: operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse>;
    /**
     * displayvideoAdvertisersChannelsSitesList - Lists sites in a channel.
    **/
    displayvideoAdvertisersChannelsSitesList(req: operations.DisplayvideoAdvertisersChannelsSitesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesListResponse>;
    /**
     * displayvideoAdvertisersChannelsSitesReplace - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
    **/
    displayvideoAdvertisersChannelsSitesReplace(req: operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse>;
    /**
     * displayvideoAdvertisersCreate - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
    **/
    displayvideoAdvertisersCreate(req: operations.DisplayvideoAdvertisersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreateResponse>;
    /**
     * displayvideoAdvertisersCreativesCreate - Creates a new creative. Returns the newly created creative if successful.
    **/
    displayvideoAdvertisersCreativesCreate(req: operations.DisplayvideoAdvertisersCreativesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesCreateResponse>;
    /**
     * displayvideoAdvertisersCreativesDelete - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
    **/
    displayvideoAdvertisersCreativesDelete(req: operations.DisplayvideoAdvertisersCreativesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesDeleteResponse>;
    /**
     * displayvideoAdvertisersCreativesGet - Gets a creative.
    **/
    displayvideoAdvertisersCreativesGet(req: operations.DisplayvideoAdvertisersCreativesGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesGetResponse>;
    /**
     * displayvideoAdvertisersCreativesList - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoAdvertisersCreativesList(req: operations.DisplayvideoAdvertisersCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesListResponse>;
    /**
     * displayvideoAdvertisersCreativesPatch - Updates an existing creative. Returns the updated creative if successful.
    **/
    displayvideoAdvertisersCreativesPatch(req: operations.DisplayvideoAdvertisersCreativesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersCreativesPatchResponse>;
    /**
     * displayvideoAdvertisersDelete - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
    **/
    displayvideoAdvertisersDelete(req: operations.DisplayvideoAdvertisersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersDeleteResponse>;
    /**
     * displayvideoAdvertisersEditAssignedTargetingOptions - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
    **/
    displayvideoAdvertisersEditAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersGet - Gets an advertiser.
    **/
    displayvideoAdvertisersGet(req: operations.DisplayvideoAdvertisersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersGetResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersCreate - Creates a new insertion order. Returns the newly created insertion order if successful.
    **/
    displayvideoAdvertisersInsertionOrdersCreate(req: operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersDelete - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    displayvideoAdvertisersInsertionOrdersDelete(req: operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersGet - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
    **/
    displayvideoAdvertisersInsertionOrdersGet(req: operations.DisplayvideoAdvertisersInsertionOrdersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersGetResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersList - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoAdvertisersInsertionOrdersList(req: operations.DisplayvideoAdvertisersInsertionOrdersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersListResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions - Lists assigned targeting options of an insertion order across targeting types.
    **/
    displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersPatch - Updates an existing insertion order. Returns the updated insertion order if successful.
    **/
    displayvideoAdvertisersInsertionOrdersPatch(req: operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
    **/
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
    **/
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an insertion order.
    **/
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an insertion order.
    **/
    displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * displayvideoAdvertisersInvoicesList - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
    **/
    displayvideoAdvertisersInvoicesList(req: operations.DisplayvideoAdvertisersInvoicesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInvoicesListResponse>;
    /**
     * displayvideoAdvertisersInvoicesLookupInvoiceCurrency - Retrieves the invoice currency used by an advertiser in a given month.
    **/
    displayvideoAdvertisersInvoicesLookupInvoiceCurrency(req: operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse>;
    /**
     * displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
    **/
    displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions - Lists assigned targeting options for multiple line items across targeting types.
    **/
    displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersLineItemsBulkUpdate - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
    **/
    displayvideoAdvertisersLineItemsBulkUpdate(req: operations.DisplayvideoAdvertisersLineItemsBulkUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsBulkUpdateResponse>;
    /**
     * displayvideoAdvertisersLineItemsCreate - Creates a new line item. Returns the newly created line item if successful.
    **/
    displayvideoAdvertisersLineItemsCreate(req: operations.DisplayvideoAdvertisersLineItemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsCreateResponse>;
    /**
     * displayvideoAdvertisersLineItemsDelete - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    displayvideoAdvertisersLineItemsDelete(req: operations.DisplayvideoAdvertisersLineItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsDeleteResponse>;
    /**
     * displayvideoAdvertisersLineItemsDuplicate - Duplicates a line item. Returns the ID of the created line item if successful.
    **/
    displayvideoAdvertisersLineItemsDuplicate(req: operations.DisplayvideoAdvertisersLineItemsDuplicateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsDuplicateResponse>;
    /**
     * displayvideoAdvertisersLineItemsGenerateDefault - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
    **/
    displayvideoAdvertisersLineItemsGenerateDefault(req: operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse>;
    /**
     * displayvideoAdvertisersLineItemsGet - Gets a line item.
    **/
    displayvideoAdvertisersLineItemsGet(req: operations.DisplayvideoAdvertisersLineItemsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsGetResponse>;
    /**
     * displayvideoAdvertisersLineItemsList - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoAdvertisersLineItemsList(req: operations.DisplayvideoAdvertisersLineItemsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsListResponse>;
    /**
     * displayvideoAdvertisersLineItemsPatch - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
    **/
    displayvideoAdvertisersLineItemsPatch(req: operations.DisplayvideoAdvertisersLineItemsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsPatchResponse>;
    /**
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
    **/
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
    **/
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a line item.
    **/
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a line item.
    **/
    displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse>;
    /**
     * displayvideoAdvertisersList - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
    **/
    displayvideoAdvertisersList(req: operations.DisplayvideoAdvertisersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersListResponse>;
    /**
     * displayvideoAdvertisersListAssignedTargetingOptions - Lists assigned targeting options of an advertiser across targeting types.
    **/
    displayvideoAdvertisersListAssignedTargetingOptions(req: operations.DisplayvideoAdvertisersListAssignedTargetingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersListAssignedTargetingOptionsResponse>;
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
    **/
    displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse>;
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsCreate - Creates an assignment between a location and a location list.
    **/
    displayvideoAdvertisersLocationListsAssignedLocationsCreate(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse>;
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsDelete - Deletes the assignment between a location and a location list.
    **/
    displayvideoAdvertisersLocationListsAssignedLocationsDelete(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse>;
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsList - Lists locations assigned to a location list.
    **/
    displayvideoAdvertisersLocationListsAssignedLocationsList(req: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse>;
    /**
     * displayvideoAdvertisersLocationListsCreate - Creates a new location list. Returns the newly created location list if successful.
    **/
    displayvideoAdvertisersLocationListsCreate(req: operations.DisplayvideoAdvertisersLocationListsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsCreateResponse>;
    /**
     * displayvideoAdvertisersLocationListsList - Lists location lists based on a given advertiser id.
    **/
    displayvideoAdvertisersLocationListsList(req: operations.DisplayvideoAdvertisersLocationListsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsListResponse>;
    /**
     * displayvideoAdvertisersLocationListsPatch - Updates a location list. Returns the updated location list if successful.
    **/
    displayvideoAdvertisersLocationListsPatch(req: operations.DisplayvideoAdvertisersLocationListsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersLocationListsPatchResponse>;
    /**
     * displayvideoAdvertisersManualTriggersActivate - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
    **/
    displayvideoAdvertisersManualTriggersActivate(req: operations.DisplayvideoAdvertisersManualTriggersActivateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersActivateResponse>;
    /**
     * displayvideoAdvertisersManualTriggersCreate - Creates a new manual trigger. Returns the newly created manual trigger if successful.
    **/
    displayvideoAdvertisersManualTriggersCreate(req: operations.DisplayvideoAdvertisersManualTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersCreateResponse>;
    /**
     * displayvideoAdvertisersManualTriggersDeactivate - Deactivates a manual trigger.
    **/
    displayvideoAdvertisersManualTriggersDeactivate(req: operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse>;
    /**
     * displayvideoAdvertisersManualTriggersGet - Gets a manual trigger.
    **/
    displayvideoAdvertisersManualTriggersGet(req: operations.DisplayvideoAdvertisersManualTriggersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersGetResponse>;
    /**
     * displayvideoAdvertisersManualTriggersList - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
    **/
    displayvideoAdvertisersManualTriggersList(req: operations.DisplayvideoAdvertisersManualTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersListResponse>;
    /**
     * displayvideoAdvertisersManualTriggersPatch - Updates a manual trigger. Returns the updated manual trigger if successful.
    **/
    displayvideoAdvertisersManualTriggersPatch(req: operations.DisplayvideoAdvertisersManualTriggersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersManualTriggersPatchResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsCreate - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
    **/
    displayvideoAdvertisersNegativeKeywordListsCreate(req: operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsList - Lists negative keyword lists based on a given advertiser id.
    **/
    displayvideoAdvertisersNegativeKeywordListsList(req: operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
    **/
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete - Deletes a negative keyword from a negative keyword list.
    **/
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList - Lists negative keywords in a negative keyword list.
    **/
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
    **/
    displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(req: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse>;
    /**
     * displayvideoAdvertisersNegativeKeywordListsPatch - Updates a negative keyword list. Returns the updated negative keyword list if successful.
    **/
    displayvideoAdvertisersNegativeKeywordListsPatch(req: operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse>;
    /**
     * displayvideoAdvertisersPatch - Updates an existing advertiser. Returns the updated advertiser if successful.
    **/
    displayvideoAdvertisersPatch(req: operations.DisplayvideoAdvertisersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersPatchResponse>;
    /**
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
    **/
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse>;
    /**
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from an advertiser.
    **/
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse>;
    /**
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an advertiser.
    **/
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse>;
    /**
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an advertiser.
    **/
    displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(req: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse>;
}
