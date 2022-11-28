import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05ConsentsOnFetchHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05ConsentsOnFetchRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    consentArtefactResponse?: shared.ConsentArtefactResponse;
}
export declare class PostV05ConsentsOnFetchRequest extends SpeakeasyBase {
    headers: PostV05ConsentsOnFetchHeaders;
    request: PostV05ConsentsOnFetchRequests;
}
export declare class PostV05ConsentsOnFetchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
