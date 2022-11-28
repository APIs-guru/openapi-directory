import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentRequestsInitHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05ConsentRequestsInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    consentRequest?: shared.ConsentRequest;
}
export declare class PostV05ConsentRequestsInitRequest extends SpeakeasyBase {
    headers: PostV05ConsentRequestsInitHeaders;
    request: PostV05ConsentRequestsInitRequests;
}
export declare class PostV05ConsentRequestsInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
