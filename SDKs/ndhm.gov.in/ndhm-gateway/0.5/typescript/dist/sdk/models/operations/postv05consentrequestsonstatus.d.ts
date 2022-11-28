import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentRequestsOnStatusHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentRequestsOnStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiuConsentRequestStatus?: shared.HiuConsentRequestStatus;
}
export declare class PostV05ConsentRequestsOnStatusRequest extends SpeakeasyBase {
    headers: PostV05ConsentRequestsOnStatusHeaders;
    request: PostV05ConsentRequestsOnStatusRequests;
}
export declare class PostV05ConsentRequestsOnStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
