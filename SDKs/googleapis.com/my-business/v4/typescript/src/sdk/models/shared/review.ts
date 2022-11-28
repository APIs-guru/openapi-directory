import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewReply } from "./reviewreply";
import { Reviewer } from "./reviewer";


export enum ReviewStarRatingEnum {
    StarRatingUnspecified = "STAR_RATING_UNSPECIFIED",
    One = "ONE",
    Two = "TWO",
    Three = "THREE",
    Four = "FOUR",
    Five = "FIVE"
}


// Review
/** 
 * Output only. Represents a review for a location.
**/
export class Review extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewId" })
  reviewId?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewReply" })
  reviewReply?: ReviewReply;

  @SpeakeasyMetadata({ data: "json, name=reviewer" })
  reviewer?: Reviewer;

  @SpeakeasyMetadata({ data: "json, name=starRating" })
  starRating?: ReviewStarRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
