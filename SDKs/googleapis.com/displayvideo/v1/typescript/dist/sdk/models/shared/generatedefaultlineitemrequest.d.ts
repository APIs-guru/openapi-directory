import { SpeakeasyBase } from "../../../internal/utils";
import { MobileAppInput } from "./mobileapp";
export declare enum GenerateDefaultLineItemRequestLineItemTypeEnum {
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
/**
 * Request message for LineItemService.GenerateDefaultLineItem.
**/
export declare class GenerateDefaultLineItemRequestInput extends SpeakeasyBase {
    displayName?: string;
    insertionOrderId?: string;
    lineItemType?: GenerateDefaultLineItemRequestLineItemTypeEnum;
    mobileApp?: MobileAppInput;
}
