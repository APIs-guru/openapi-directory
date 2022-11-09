import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewReply } from "./reviewreply";
import { Reviewer } from "./reviewer";

export enum ReviewStarRatingEnum {
    StarRatingUnspecified = "STAR_RATING_UNSPECIFIED"
,    One = "ONE"
,    Two = "TWO"
,    Three = "THREE"
,    Four = "FOUR"
,    Five = "FIVE"
}


// Review
/** 
 * Output only. Represents a review for a location.
**/
export class Review extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reviewId" })
  reviewId?: string;

  @Metadata({ data: "json, name=reviewReply" })
  reviewReply?: ReviewReply;

  @Metadata({ data: "json, name=reviewer" })
  reviewer?: Reviewer;

  @Metadata({ data: "json, name=starRating" })
  starRating?: ReviewStarRatingEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
