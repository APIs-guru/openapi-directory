import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkAddContextsHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05LinksLinkAddContextsRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientCareContextLinkRequest?: shared.PatientCareContextLinkRequest;
}
export declare class PostV05LinksLinkAddContextsRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkAddContextsHeaders;
    request: PostV05LinksLinkAddContextsRequests;
}
export declare class PostV05LinksLinkAddContextsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
