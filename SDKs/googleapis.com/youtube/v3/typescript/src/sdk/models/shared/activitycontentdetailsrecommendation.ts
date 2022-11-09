import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";
import { ResourceId } from "./resourceid";

export enum ActivityContentDetailsRecommendationReasonEnum {
    ReasonUnspecified = "reasonUnspecified"
,    VideoFavorited = "videoFavorited"
,    VideoLiked = "videoLiked"
,    VideoWatched = "videoWatched"
}


// ActivityContentDetailsRecommendation
/** 
 * Information that identifies the recommended resource.
**/
export class ActivityContentDetailsRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: ActivityContentDetailsRecommendationReasonEnum;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @Metadata({ data: "json, name=seedResourceId" })
  seedResourceId?: ResourceId;
}
