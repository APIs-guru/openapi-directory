import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReviewsReviewIdPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class PostReviewsReviewIdQueryParams extends SpeakeasyBase {
    customData?: string;
    description: string;
    headline: string;
    rating: number;
    userAccountId: string;
    userId: string;
}
export declare class PostReviewsReviewIdRequest extends SpeakeasyBase {
    pathParams: PostReviewsReviewIdPathParams;
    queryParams: PostReviewsReviewIdQueryParams;
}
export declare class PostReviewsReviewIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
