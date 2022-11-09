import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileApp } from "./mobileapp";

export enum GenerateDefaultLineItemRequestLineItemTypeEnum {
    LineItemTypeUnspecified = "LINE_ITEM_TYPE_UNSPECIFIED"
,    LineItemTypeDisplayDefault = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
,    LineItemTypeDisplayMobileAppInstall = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
,    LineItemTypeVideoDefault = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
,    LineItemTypeVideoMobileAppInstall = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
,    LineItemTypeDisplayMobileAppInventory = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
,    LineItemTypeVideoMobileAppInventory = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
,    LineItemTypeAudioDefault = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
,    LineItemTypeVideoOverTheTop = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
,    LineItemTypeYoutubeAndPartnersAction = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION"
,    LineItemTypeYoutubeAndPartnersNonSkippable = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE"
,    LineItemTypeYoutubeAndPartnersVideoSequence = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE"
,    LineItemTypeYoutubeAndPartnersAudio = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO"
,    LineItemTypeYoutubeAndPartnersReach = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH"
,    LineItemTypeYoutubeAndPartnersSimple = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE"
}


// GenerateDefaultLineItemRequest
/** 
 * Request message for LineItemService.GenerateDefaultLineItem.
**/
export class GenerateDefaultLineItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=insertionOrderId" })
  insertionOrderId?: string;

  @Metadata({ data: "json, name=lineItemType" })
  lineItemType?: GenerateDefaultLineItemRequestLineItemTypeEnum;

  @Metadata({ data: "json, name=mobileApp" })
  mobileApp?: MobileApp;
}
