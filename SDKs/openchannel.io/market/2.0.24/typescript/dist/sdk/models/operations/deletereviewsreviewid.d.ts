import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteReviewsReviewIdPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class DeleteReviewsReviewIdQueryParams extends SpeakeasyBase {
    userAccountId?: string;
    userId: string;
}
export declare class DeleteReviewsReviewIdRequest extends SpeakeasyBase {
    pathParams: DeleteReviewsReviewIdPathParams;
    queryParams: DeleteReviewsReviewIdQueryParams;
}
export declare class DeleteReviewsReviewIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
