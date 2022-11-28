import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthInitHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05UsersAuthInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthInitRequest?: shared.PatientAuthInitRequest;
}
export declare class PostV05UsersAuthInitRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthInitHeaders;
    request: PostV05UsersAuthInitRequests;
}
export declare class PostV05UsersAuthInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
