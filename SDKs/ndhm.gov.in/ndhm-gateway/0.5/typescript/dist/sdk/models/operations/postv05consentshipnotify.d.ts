import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsHipNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05ConsentsHipNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hipConsentNotification?: shared.HipConsentNotification;
}
export declare class PostV05ConsentsHipNotifyRequest extends SpeakeasyBase {
    headers: PostV05ConsentsHipNotifyHeaders;
    request: PostV05ConsentsHipNotifyRequests;
}
export declare class PostV05ConsentsHipNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
