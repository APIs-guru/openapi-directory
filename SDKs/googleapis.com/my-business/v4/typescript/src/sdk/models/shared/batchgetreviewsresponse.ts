import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationReview } from "./locationreview";



// BatchGetReviewsResponse
/** 
 * Response message for Reviews.BatchGetReviews.
**/
export class BatchGetReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationReviews", elemType: LocationReview })
  locationReviews?: LocationReview[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
