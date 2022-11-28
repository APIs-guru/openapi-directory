import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionRequestsHiuNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05SubscriptionRequestsHiuNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    subscriptionApprovalNotification?: shared.SubscriptionApprovalNotification;
}
export declare class PostV05SubscriptionRequestsHiuNotifyRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionRequestsHiuNotifyHeaders;
    request: PostV05SubscriptionRequestsHiuNotifyRequests;
}
export declare class PostV05SubscriptionRequestsHiuNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
