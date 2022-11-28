import { SpeakeasyBase } from "../../../internal/utils";
import { CallToAction } from "./calltoaction";
import { LocalPostEvent } from "./localpostevent";
import { MediaItem } from "./mediaitem";
import { LocalPostOffer } from "./localpostoffer";
export declare enum LocalPostAlertTypeEnum {
    AlertTypeUnspecified = "ALERT_TYPE_UNSPECIFIED",
    Covid19 = "COVID_19"
}
export declare enum LocalPostStateEnum {
    LocalPostStateUnspecified = "LOCAL_POST_STATE_UNSPECIFIED",
    Rejected = "REJECTED",
    Live = "LIVE",
    Processing = "PROCESSING"
}
export declare enum LocalPostTopicTypeEnum {
    LocalPostTopicTypeUnspecified = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Event = "EVENT",
    Offer = "OFFER",
    Alert = "ALERT"
}
/**
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
**/
export declare class LocalPost extends SpeakeasyBase {
    alertType?: LocalPostAlertTypeEnum;
    callToAction?: CallToAction;
    createTime?: string;
    event?: LocalPostEvent;
    languageCode?: string;
    media?: MediaItem[];
    name?: string;
    offer?: LocalPostOffer;
    searchUrl?: string;
    state?: LocalPostStateEnum;
    summary?: string;
    topicType?: LocalPostTopicTypeEnum;
    updateTime?: string;
}
