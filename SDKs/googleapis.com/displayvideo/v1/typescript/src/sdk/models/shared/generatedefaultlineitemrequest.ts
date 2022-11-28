import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileAppInput } from "./mobileapp";


export enum GenerateDefaultLineItemRequestLineItemTypeEnum {
    LineItemTypeUnspecified = "LINE_ITEM_TYPE_UNSPECIFIED",
    LineItemTypeDisplayDefault = "LINE_ITEM_TYPE_DISPLAY_DEFAULT",
    LineItemTypeDisplayMobileAppInstall = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL",
    LineItemTypeVideoDefault = "LINE_ITEM_TYPE_VIDEO_DEFAULT",
    LineItemTypeVideoMobileAppInstall = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL",
    LineItemTypeDisplayMobileAppInventory = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY",
    LineItemTypeVideoMobileAppInventory = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY",
    LineItemTypeAudioDefault = "LINE_ITEM_TYPE_AUDIO_DEFAULT",
    LineItemTypeVideoOverTheTop = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
}


// GenerateDefaultLineItemRequestInput
/** 
 * Request message for LineItemService.GenerateDefaultLineItem.
**/
export class GenerateDefaultLineItemRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=insertionOrderId" })
  insertionOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemType" })
  lineItemType?: GenerateDefaultLineItemRequestLineItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=mobileApp" })
  mobileApp?: MobileAppInput;
}
