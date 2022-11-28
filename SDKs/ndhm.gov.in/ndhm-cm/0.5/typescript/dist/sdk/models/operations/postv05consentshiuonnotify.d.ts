import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsHiuOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05ConsentsHiuOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05ConsentsHiuOnNotifyHeaders;
    request: shared.HiuConsentNotificationResponse;
}
export declare class PostV05ConsentsHiuOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
