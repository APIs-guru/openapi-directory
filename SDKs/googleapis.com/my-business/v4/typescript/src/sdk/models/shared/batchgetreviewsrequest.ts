import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetReviewsRequest
/** 
 * Request message for Reviews.BatchGetReviews.
**/
export class BatchGetReviewsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreRatingOnlyReviews" })
  ignoreRatingOnlyReviews?: boolean;

  @Metadata({ data: "json, name=locationNames" })
  locationNames?: string[];

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
