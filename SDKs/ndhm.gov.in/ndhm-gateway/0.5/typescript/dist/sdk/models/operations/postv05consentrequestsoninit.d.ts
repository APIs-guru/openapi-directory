import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentRequestsOnInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentRequestsOnInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    consentRequestInitResponse?: shared.ConsentRequestInitResponse;
}
export declare class PostV05ConsentRequestsOnInitRequest extends SpeakeasyBase {
    headers: PostV05ConsentRequestsOnInitHeaders;
    request: PostV05ConsentRequestsOnInitRequests;
}
export declare class PostV05ConsentRequestsOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
