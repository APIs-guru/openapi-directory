import { SpeakeasyBase } from "../../../internal/utils";
import { LocationReview } from "./locationreview";
/**
 * Response message for Reviews.BatchGetReviews.
**/
export declare class BatchGetReviewsResponse extends SpeakeasyBase {
    locationReviews?: LocationReview[];
    nextPageToken?: string;
}
