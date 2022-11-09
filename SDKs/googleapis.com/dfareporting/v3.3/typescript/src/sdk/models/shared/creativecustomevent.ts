import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { PopupWindowProperties } from "./popupwindowproperties";

export enum CreativeCustomEventAdvertiserCustomEventTypeEnum {
    AdvertiserEventTimer = "ADVERTISER_EVENT_TIMER"
,    AdvertiserEventExit = "ADVERTISER_EVENT_EXIT"
,    AdvertiserEventCounter = "ADVERTISER_EVENT_COUNTER"
}

export enum CreativeCustomEventArtworkTypeEnum {
    ArtworkTypeFlash = "ARTWORK_TYPE_FLASH"
,    ArtworkTypeHtml5 = "ARTWORK_TYPE_HTML5"
,    ArtworkTypeMixed = "ARTWORK_TYPE_MIXED"
,    ArtworkTypeImage = "ARTWORK_TYPE_IMAGE"
}

export enum CreativeCustomEventTargetTypeEnum {
    TargetBlank = "TARGET_BLANK"
,    TargetTop = "TARGET_TOP"
,    TargetSelf = "TARGET_SELF"
,    TargetParent = "TARGET_PARENT"
,    TargetPopup = "TARGET_POPUP"
}


// CreativeCustomEvent
/** 
 * Creative Custom Event.
**/
export class CreativeCustomEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserCustomEventId" })
  advertiserCustomEventId?: string;

  @Metadata({ data: "json, name=advertiserCustomEventName" })
  advertiserCustomEventName?: string;

  @Metadata({ data: "json, name=advertiserCustomEventType" })
  advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventTypeEnum;

  @Metadata({ data: "json, name=artworkLabel" })
  artworkLabel?: string;

  @Metadata({ data: "json, name=artworkType" })
  artworkType?: CreativeCustomEventArtworkTypeEnum;

  @Metadata({ data: "json, name=exitClickThroughUrl" })
  exitClickThroughUrl?: CreativeClickThroughUrl;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=popupWindowProperties" })
  popupWindowProperties?: PopupWindowProperties;

  @Metadata({ data: "json, name=targetType" })
  targetType?: CreativeCustomEventTargetTypeEnum;

  @Metadata({ data: "json, name=videoReportingId" })
  videoReportingId?: string;
}
