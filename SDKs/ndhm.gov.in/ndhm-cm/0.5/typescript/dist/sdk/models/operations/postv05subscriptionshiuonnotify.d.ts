import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionsHiuOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05SubscriptionsHiuOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionsHiuOnNotifyHeaders;
    request: shared.HiuSubscriptionNotificationAcknowledgment;
}
export declare class PostV05SubscriptionsHiuOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
