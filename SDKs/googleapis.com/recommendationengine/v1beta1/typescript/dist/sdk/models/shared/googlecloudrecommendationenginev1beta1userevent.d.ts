import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1EventDetail } from "./googlecloudrecommendationenginev1beta1eventdetail";
import { GoogleCloudRecommendationengineV1beta1ProductEventDetail } from "./googlecloudrecommendationenginev1beta1producteventdetail";
import { GoogleCloudRecommendationengineV1beta1UserInfo } from "./googlecloudrecommendationenginev1beta1userinfo";
export declare enum GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum {
    EventSourceUnspecified = "EVENT_SOURCE_UNSPECIFIED",
    Automl = "AUTOML",
    Ecommerce = "ECOMMERCE",
    BatchUpload = "BATCH_UPLOAD"
}
/**
 * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRecommendationengineV1beta1UserEvent extends SpeakeasyBase {
    eventDetail?: GoogleCloudRecommendationengineV1beta1EventDetail;
    eventSource?: GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
    eventTime?: string;
    eventType?: string;
    productEventDetail?: GoogleCloudRecommendationengineV1beta1ProductEventDetail;
    userInfo?: GoogleCloudRecommendationengineV1beta1UserInfo;
}
