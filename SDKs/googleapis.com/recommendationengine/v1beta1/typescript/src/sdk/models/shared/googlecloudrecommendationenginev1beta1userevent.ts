import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1EventDetail } from "./googlecloudrecommendationenginev1beta1eventdetail";
import { GoogleCloudRecommendationengineV1beta1ProductEventDetail } from "./googlecloudrecommendationenginev1beta1producteventdetail";
import { GoogleCloudRecommendationengineV1beta1UserInfo } from "./googlecloudrecommendationenginev1beta1userinfo";


export enum GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum {
    EventSourceUnspecified = "EVENT_SOURCE_UNSPECIFIED",
    Automl = "AUTOML",
    Ecommerce = "ECOMMERCE",
    BatchUpload = "BATCH_UPLOAD"
}


// GoogleCloudRecommendationengineV1beta1UserEvent
/** 
 * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRecommendationengineV1beta1UserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventDetail" })
  eventDetail?: GoogleCloudRecommendationengineV1beta1EventDetail;

  @SpeakeasyMetadata({ data: "json, name=eventSource" })
  eventSource?: GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=productEventDetail" })
  productEventDetail?: GoogleCloudRecommendationengineV1beta1ProductEventDetail;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRecommendationengineV1beta1UserInfo;
}
