import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionRequestsHiuOnInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05SubscriptionRequestsHiuOnInitRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionRequestsHiuOnInitHeaders;
    request: shared.HiuSubscriptionRequestReceipt;
}
export declare class PostV05SubscriptionRequestsHiuOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
