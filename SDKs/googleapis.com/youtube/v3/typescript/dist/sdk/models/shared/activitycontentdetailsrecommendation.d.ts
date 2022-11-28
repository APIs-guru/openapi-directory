import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
export declare enum ActivityContentDetailsRecommendationReasonEnum {
    ReasonUnspecified = "reasonUnspecified",
    VideoFavorited = "videoFavorited",
    VideoLiked = "videoLiked",
    VideoWatched = "videoWatched"
}
/**
 * Information that identifies the recommended resource.
**/
export declare class ActivityContentDetailsRecommendation extends SpeakeasyBase {
    reason?: ActivityContentDetailsRecommendationReasonEnum;
    resourceId?: ResourceId;
    seedResourceId?: ResourceId;
}
