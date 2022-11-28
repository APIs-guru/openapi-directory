import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthConfirmHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05UsersAuthConfirmRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthConfirmRequest?: shared.PatientAuthConfirmRequest;
}
export declare class PostV05UsersAuthConfirmRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthConfirmHeaders;
    request: PostV05UsersAuthConfirmRequests;
}
export declare class PostV05UsersAuthConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
