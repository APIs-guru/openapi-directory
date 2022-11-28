import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05LinksLinkInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientLinkReferenceRequest?: shared.PatientLinkReferenceRequest;
}
export declare class PostV05LinksLinkInitRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkInitHeaders;
    request: PostV05LinksLinkInitRequests;
}
export declare class PostV05LinksLinkInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
