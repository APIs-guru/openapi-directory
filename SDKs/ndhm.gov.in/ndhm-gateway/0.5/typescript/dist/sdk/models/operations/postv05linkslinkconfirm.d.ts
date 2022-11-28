import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkConfirmHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05LinksLinkConfirmRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    linkConfirmationRequest?: shared.LinkConfirmationRequest;
}
export declare class PostV05LinksLinkConfirmRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkConfirmHeaders;
    request: PostV05LinksLinkConfirmRequests;
}
export declare class PostV05LinksLinkConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
