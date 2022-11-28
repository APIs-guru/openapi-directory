import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05ConsentsHiuNotifyServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05ConsentsHiuNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentsHiuNotifyRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05ConsentsHiuNotifyHeaders;
    request: shared.HiuConsentNotificationEvent;
}
export declare class PostV05ConsentsHiuNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
