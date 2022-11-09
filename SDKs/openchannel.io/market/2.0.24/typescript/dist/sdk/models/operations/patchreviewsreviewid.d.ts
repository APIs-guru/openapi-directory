import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PatchReviewsReviewIdPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class PatchReviewsReviewIdQueryParams extends SpeakeasyBase {
    customData?: string;
    description?: string;
    headline?: string;
    rating?: number;
    userAccountId?: string;
    userId: string;
}
export declare class PatchReviewsReviewIdRequest extends SpeakeasyBase {
    pathParams: PatchReviewsReviewIdPathParams;
    queryParams: PatchReviewsReviewIdQueryParams;
}
export declare class PatchReviewsReviewIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
