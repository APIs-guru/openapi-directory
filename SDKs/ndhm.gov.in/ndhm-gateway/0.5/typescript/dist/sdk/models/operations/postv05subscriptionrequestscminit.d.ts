import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SubscriptionRequestsCmInitHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05SubscriptionRequestsCmInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    subscriptionRequest?: shared.SubscriptionRequest;
}
export declare class PostV05SubscriptionRequestsCmInitRequest extends SpeakeasyBase {
    headers: PostV05SubscriptionRequestsCmInitHeaders;
    request: PostV05SubscriptionRequestsCmInitRequests;
}
export declare class PostV05SubscriptionRequestsCmInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
