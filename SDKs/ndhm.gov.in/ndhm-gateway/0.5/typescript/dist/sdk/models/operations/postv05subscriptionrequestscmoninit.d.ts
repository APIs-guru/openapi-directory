import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionRequestsCmOnInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05SubscriptionRequestsCmOnInitRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionRequestsCmOnInitHeaders;
    request: shared.HiuSubscriptionRequestReceipt;
}
export declare class PostV05SubscriptionRequestsCmOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
