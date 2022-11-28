import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Reviews.BatchGetReviews.
**/
export declare class BatchGetReviewsRequest extends SpeakeasyBase {
    ignoreRatingOnlyReviews?: boolean;
    locationNames?: string[];
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
