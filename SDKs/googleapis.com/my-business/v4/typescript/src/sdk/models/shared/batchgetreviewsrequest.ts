import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetReviewsRequest
/** 
 * Request message for Reviews.BatchGetReviews.
**/
export class BatchGetReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreRatingOnlyReviews" })
  ignoreRatingOnlyReviews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locationNames" })
  locationNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
