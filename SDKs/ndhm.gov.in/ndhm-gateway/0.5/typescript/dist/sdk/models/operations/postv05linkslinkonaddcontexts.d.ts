import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkOnAddContextsHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05LinksLinkOnAddContextsRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientCareContextLinkResponse?: shared.PatientCareContextLinkResponse;
}
export declare class PostV05LinksLinkOnAddContextsRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkOnAddContextsHeaders;
    request: PostV05LinksLinkOnAddContextsRequests;
}
export declare class PostV05LinksLinkOnAddContextsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
