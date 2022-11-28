import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionRequestsHiuOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05SubscriptionRequestsHiuOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionRequestsHiuOnNotifyHeaders;
    request: shared.HiuSubscriptionRequestNotificationAcknowledgement;
}
export declare class PostV05SubscriptionRequestsHiuOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
