import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReviewsQueryParams extends SpeakeasyBase {
    appId: string;
    autoApprove?: boolean;
    customData?: string;
    description: string;
    headline: string;
    mustOwnApp?: boolean;
    rating: number;
    type?: string;
    userAccountId?: string;
    userId: string;
}
export declare class PostReviewsRequest extends SpeakeasyBase {
    queryParams: PostReviewsQueryParams;
}
export declare class PostReviewsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
