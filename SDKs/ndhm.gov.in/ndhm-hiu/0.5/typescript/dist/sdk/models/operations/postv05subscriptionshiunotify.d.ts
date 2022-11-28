import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionsHiuNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05SubscriptionsHiuNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiuSubscriptionNotification?: shared.HiuSubscriptionNotification;
}
export declare class PostV05SubscriptionsHiuNotifyRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionsHiuNotifyHeaders;
    request: PostV05SubscriptionsHiuNotifyRequests;
}
export declare class PostV05SubscriptionsHiuNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
