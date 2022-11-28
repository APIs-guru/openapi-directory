import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestReviewPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class RequestReviewQueryParams extends SpeakeasyBase {
    base: string;
    callbackSecret?: string;
    callbackUrl?: string;
    externalId: number;
    reviewUrl?: string;
}
export declare class RequestReviewSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class RequestReviewRequest extends SpeakeasyBase {
    pathParams: RequestReviewPathParams;
    queryParams: RequestReviewQueryParams;
    request: Uint8Array;
    security: RequestReviewSecurity;
}
export declare class RequestReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
