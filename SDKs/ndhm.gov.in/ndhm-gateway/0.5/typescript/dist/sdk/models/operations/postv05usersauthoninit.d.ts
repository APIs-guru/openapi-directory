import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthOnInitHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
    xHiuId: string;
}
export declare class PostV05UsersAuthOnInitRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthInitResponse?: shared.PatientAuthInitResponse;
}
export declare class PostV05UsersAuthOnInitRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthOnInitHeaders;
    request: PostV05UsersAuthOnInitRequests;
}
export declare class PostV05UsersAuthOnInitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
