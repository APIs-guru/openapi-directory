import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05SessionsRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    sessionRequest?: shared.SessionRequest;
}
export declare class PostV05SessionsRequest extends SpeakeasyBase {
    request: PostV05SessionsRequests;
}
export declare class PostV05SessionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    sessionResponse?: shared.SessionResponse;
    statusCode: number;
}
