import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
    xHiuId: string;
}
export declare class PostV05UsersAuthNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthNotification?: shared.PatientAuthNotification;
}
export declare class PostV05UsersAuthNotifyRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthNotifyHeaders;
    request: PostV05UsersAuthNotifyRequests;
}
export declare class PostV05UsersAuthNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
