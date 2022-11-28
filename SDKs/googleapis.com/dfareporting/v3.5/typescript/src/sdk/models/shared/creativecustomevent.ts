import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { PopupWindowProperties } from "./popupwindowproperties";


export enum CreativeCustomEventAdvertiserCustomEventTypeEnum {
    AdvertiserEventTimer = "ADVERTISER_EVENT_TIMER",
    AdvertiserEventExit = "ADVERTISER_EVENT_EXIT",
    AdvertiserEventCounter = "ADVERTISER_EVENT_COUNTER"
}

export enum CreativeCustomEventArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH",
    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5",
    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED",
    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}

export enum CreativeCustomEventTargetTypeEnum {
    TargetBlank = "TARGET_BLANK",
    TargetTop = "TARGET_TOP",
    TargetSelf = "TARGET_SELF",
    TargetParent = "TARGET_PARENT",
    TargetPopup = "TARGET_POPUP"
}


// CreativeCustomEvent
/** 
 * Creative Custom Event.
**/
export class CreativeCustomEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserCustomEventId" })
  advertiserCustomEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserCustomEventName" })
  advertiserCustomEventName?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserCustomEventType" })
  advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=artworkLabel" })
  artworkLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=artworkType" })
  artworkType?: CreativeCustomEventArtworkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=exitClickThroughUrl" })
  exitClickThroughUrl?: CreativeClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=popupWindowProperties" })
  popupWindowProperties?: PopupWindowProperties;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: CreativeCustomEventTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=videoReportingId" })
  videoReportingId?: string;
}
