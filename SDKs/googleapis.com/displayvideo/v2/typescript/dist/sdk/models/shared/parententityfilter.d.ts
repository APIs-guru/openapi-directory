import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParentEntityFilterFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    FileTypeCampaign = "FILE_TYPE_CAMPAIGN",
    FileTypeMediaProduct = "FILE_TYPE_MEDIA_PRODUCT",
    FileTypeInsertionOrder = "FILE_TYPE_INSERTION_ORDER",
    FileTypeLineItem = "FILE_TYPE_LINE_ITEM",
    FileTypeAdGroup = "FILE_TYPE_AD_GROUP",
    FileTypeAd = "FILE_TYPE_AD"
}
export declare enum ParentEntityFilterFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    FilterTypeNone = "FILTER_TYPE_NONE",
    FilterTypeAdvertiserId = "FILTER_TYPE_ADVERTISER_ID",
    FilterTypeCampaignId = "FILTER_TYPE_CAMPAIGN_ID",
    FilterTypeMediaProductId = "FILTER_TYPE_MEDIA_PRODUCT_ID",
    FilterTypeInsertionOrderId = "FILTER_TYPE_INSERTION_ORDER_ID",
    FilterTypeLineItemId = "FILTER_TYPE_LINE_ITEM_ID"
}
/**
 * A filtering option that filters on selected file types belonging to a chosen set of filter entities.
**/
export declare class ParentEntityFilter extends SpeakeasyBase {
    fileType?: ParentEntityFilterFileTypeEnum[];
    filterIds?: string[];
    filterType?: ParentEntityFilterFilterTypeEnum;
}
