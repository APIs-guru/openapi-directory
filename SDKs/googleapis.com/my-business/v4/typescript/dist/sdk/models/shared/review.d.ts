import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewReply } from "./reviewreply";
import { Reviewer } from "./reviewer";
export declare enum ReviewStarRatingEnum {
    StarRatingUnspecified = "STAR_RATING_UNSPECIFIED",
    One = "ONE",
    Two = "TWO",
    Three = "THREE",
    Four = "FOUR",
    Five = "FIVE"
}
/**
 * Output only. Represents a review for a location.
**/
export declare class Review extends SpeakeasyBase {
    comment?: string;
    createTime?: string;
    name?: string;
    reviewId?: string;
    reviewReply?: ReviewReply;
    reviewer?: Reviewer;
    starRating?: ReviewStarRatingEnum;
    updateTime?: string;
}
