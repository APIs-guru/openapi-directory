import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { PopupWindowProperties } from "./popupwindowproperties";
export declare enum CreativeCustomEventAdvertiserCustomEventTypeEnum {
    AdvertiserEventTimer = "ADVERTISER_EVENT_TIMER",
    AdvertiserEventExit = "ADVERTISER_EVENT_EXIT",
    AdvertiserEventCounter = "ADVERTISER_EVENT_COUNTER"
}
export declare enum CreativeCustomEventArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}
export declare enum CreativeCustomEventTargetTypeEnum {
    TargetBlank = "TARGET_BLANK",
    TargetTop = "TARGET_TOP",
    TargetSelf = "TARGET_SELF",
    TargetParent = "TARGET_PARENT",
    TargetPopup = "TARGET_POPUP"
}
/**
 * Creative Custom Event.
**/
export declare class CreativeCustomEvent extends SpeakeasyBase {
    advertiserCustomEventId?: string;
    advertiserCustomEventName?: string;
    advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventTypeEnum;
    artworkLabel?: string;
    artworkType?: CreativeCustomEventArtworkTypeEnum;
    exitClickThroughUrl?: CreativeClickThroughUrl;
    id?: string;
    popupWindowProperties?: PopupWindowProperties;
    targetType?: CreativeCustomEventTargetTypeEnum;
    videoReportingId?: string;
}
