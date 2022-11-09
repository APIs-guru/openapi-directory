import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CallToAction } from "./calltoaction";
import { LocalPostEvent } from "./localpostevent";
import { MediaItem } from "./mediaitem";
import { LocalPostOffer } from "./localpostoffer";

export enum LocalPostAlertTypeEnum {
    AlertTypeUnspecified = "ALERT_TYPE_UNSPECIFIED"
,    Covid19 = "COVID_19"
}

export enum LocalPostStateEnum {
    LocalPostStateUnspecified = "LOCAL_POST_STATE_UNSPECIFIED"
,    Rejected = "REJECTED"
,    Live = "LIVE"
,    Processing = "PROCESSING"
}

export enum LocalPostTopicTypeEnum {
    LocalPostTopicTypeUnspecified = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Event = "EVENT"
,    Offer = "OFFER"
,    Alert = "ALERT"
}


// LocalPost
/** 
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
**/
export class LocalPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertType" })
  alertType?: LocalPostAlertTypeEnum;

  @Metadata({ data: "json, name=callToAction" })
  callToAction?: CallToAction;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=event" })
  event?: LocalPostEvent;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=media", elemType: shared.MediaItem })
  media?: MediaItem[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=offer" })
  offer?: LocalPostOffer;

  @Metadata({ data: "json, name=searchUrl" })
  searchUrl?: string;

  @Metadata({ data: "json, name=state" })
  state?: LocalPostStateEnum;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=topicType" })
  topicType?: LocalPostTopicTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
