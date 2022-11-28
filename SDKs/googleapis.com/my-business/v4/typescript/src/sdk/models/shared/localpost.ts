import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallToAction } from "./calltoaction";
import { LocalPostEvent } from "./localpostevent";
import { MediaItem } from "./mediaitem";
import { LocalPostOffer } from "./localpostoffer";


export enum LocalPostAlertTypeEnum {
    AlertTypeUnspecified = "ALERT_TYPE_UNSPECIFIED",
    Covid19 = "COVID_19"
}

export enum LocalPostStateEnum {
    LocalPostStateUnspecified = "LOCAL_POST_STATE_UNSPECIFIED",
    Rejected = "REJECTED",
    Live = "LIVE",
    Processing = "PROCESSING"
}

export enum LocalPostTopicTypeEnum {
    LocalPostTopicTypeUnspecified = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Event = "EVENT",
    Offer = "OFFER",
    Alert = "ALERT"
}


// LocalPost
/** 
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
**/
export class LocalPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertType" })
  alertType?: LocalPostAlertTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=callToAction" })
  callToAction?: CallToAction;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: LocalPostEvent;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=media", elemType: MediaItem })
  media?: MediaItem[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: LocalPostOffer;

  @SpeakeasyMetadata({ data: "json, name=searchUrl" })
  searchUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LocalPostStateEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=topicType" })
  topicType?: LocalPostTopicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
