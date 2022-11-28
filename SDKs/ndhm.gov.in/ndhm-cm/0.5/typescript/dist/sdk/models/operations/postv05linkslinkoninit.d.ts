import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkOnInitHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05LinksLinkOnInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientLinkReferenceResult?: shared.PatientLinkReferenceResult;
}
export declare class PostV05LinksLinkOnInitRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkOnInitHeaders;
    request: PostV05LinksLinkOnInitRequests;
}
export declare class PostV05LinksLinkOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
