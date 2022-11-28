import { SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";
/**
 * Response message for Reviews.ListReviews.
**/
export declare class ListReviewsResponse extends SpeakeasyBase {
    averageRating?: number;
    nextPageToken?: string;
    reviews?: Review[];
    totalReviewCount?: number;
}
