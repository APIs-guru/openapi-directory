import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentRequestsStatusHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05ConsentRequestsStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    consentRequestStatusRequest?: shared.ConsentRequestStatusRequest;
}
export declare class PostV05ConsentRequestsStatusRequest extends SpeakeasyBase {
    headers: PostV05ConsentRequestsStatusHeaders;
    request: PostV05ConsentRequestsStatusRequests;
}
export declare class PostV05ConsentRequestsStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
