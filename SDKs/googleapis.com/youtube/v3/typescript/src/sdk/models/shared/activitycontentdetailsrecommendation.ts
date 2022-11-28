import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";


export enum ActivityContentDetailsRecommendationReasonEnum {
    ReasonUnspecified = "reasonUnspecified",
    VideoFavorited = "videoFavorited",
    VideoLiked = "videoLiked",
    VideoWatched = "videoWatched"
}


// ActivityContentDetailsRecommendation
/** 
 * Information that identifies the recommended resource.
**/
export class ActivityContentDetailsRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: ActivityContentDetailsRecommendationReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @SpeakeasyMetadata({ data: "json, name=seedResourceId" })
  seedResourceId?: ResourceId;
}
