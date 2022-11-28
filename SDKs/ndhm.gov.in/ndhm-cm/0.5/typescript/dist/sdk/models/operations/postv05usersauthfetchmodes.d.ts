import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthFetchModesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05UsersAuthFetchModesRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthModeQueryRequest?: shared.PatientAuthModeQueryRequest;
}
export declare class PostV05UsersAuthFetchModesRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthFetchModesHeaders;
    request: PostV05UsersAuthFetchModesRequests;
}
export declare class PostV05UsersAuthFetchModesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
