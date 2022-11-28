import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsHiuNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentsHiuNotifyRequest extends SpeakeasyBase {
    headers: PostV05ConsentsHiuNotifyHeaders;
    request: shared.HiuConsentNotificationEvent;
}
export declare class PostV05ConsentsHiuNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
