import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Review } from "./review";


// ListReviewsResponse
/** 
 * Response message for Reviews.ListReviews.
**/
export class ListReviewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reviews", elemType: shared.Review })
  reviews?: Review[];

  @Metadata({ data: "json, name=totalReviewCount" })
  totalReviewCount?: number;
}
