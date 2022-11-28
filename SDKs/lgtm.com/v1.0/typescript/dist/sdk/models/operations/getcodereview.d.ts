import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCodeReviewPathParams extends SpeakeasyBase {
    reviewId: string;
}
export declare class GetCodeReviewSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetCodeReviewRequest extends SpeakeasyBase {
    pathParams: GetCodeReviewPathParams;
    security: GetCodeReviewSecurity;
}
export declare class GetCodeReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    codeReviews?: shared.CodeReview[];
}
