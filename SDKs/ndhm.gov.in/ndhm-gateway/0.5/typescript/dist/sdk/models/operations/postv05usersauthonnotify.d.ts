import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05UsersAuthOnNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05UsersAuthOnNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientAuthNotificationAcknowledgement?: shared.PatientAuthNotificationAcknowledgement;
}
export declare class PostV05UsersAuthOnNotifyRequest extends SpeakeasyBase {
    headers: PostV05UsersAuthOnNotifyHeaders;
    request: PostV05UsersAuthOnNotifyRequests;
}
export declare class PostV05UsersAuthOnNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
