import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05ConsentRequestsOnInitServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05ConsentRequestsOnInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentRequestsOnInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    consentRequestInitResponse?: shared.ConsentRequestInitResponse;
}
export declare class PostV05ConsentRequestsOnInitRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05ConsentRequestsOnInitHeaders;
    request: PostV05ConsentRequestsOnInitRequests;
}
export declare class PostV05ConsentRequestsOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
