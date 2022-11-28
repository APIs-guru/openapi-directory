import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";



// ListReviewsResponse
/** 
 * Response message for Reviews.ListReviews.
**/
export class ListReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reviews", elemType: Review })
  reviews?: Review[];

  @SpeakeasyMetadata({ data: "json, name=totalReviewCount" })
  totalReviewCount?: number;
}
