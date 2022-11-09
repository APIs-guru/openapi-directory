import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationReview } from "./locationreview";


// BatchGetReviewsResponse
/** 
 * Response message for Reviews.BatchGetReviews.
**/
export class BatchGetReviewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationReviews", elemType: shared.LocationReview })
  locationReviews?: LocationReview[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
