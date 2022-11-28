import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05LinksLinkOnConfirmHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05LinksLinkOnConfirmRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientLinkResult?: shared.PatientLinkResult;
}
export declare class PostV05LinksLinkOnConfirmRequest extends SpeakeasyBase {
    headers: PostV05LinksLinkOnConfirmHeaders;
    request: PostV05LinksLinkOnConfirmRequests;
}
export declare class PostV05LinksLinkOnConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
