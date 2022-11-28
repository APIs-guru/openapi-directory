import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsHipOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05ConsentsHipOnNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hipConsentNotificationResponse?: shared.HipConsentNotificationResponse;
}
export declare class PostV05ConsentsHipOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05ConsentsHipOnNotifyHeaders;
    request: PostV05ConsentsHipOnNotifyRequests;
}
export declare class PostV05ConsentsHipOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
