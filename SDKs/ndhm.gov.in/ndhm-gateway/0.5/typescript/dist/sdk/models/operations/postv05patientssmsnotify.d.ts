import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05PatientsSmsNotifyHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05PatientsSmsNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientSmsNotifcationRequest?: shared.PatientSmsNotifcationRequest;
}
export declare class PostV05PatientsSmsNotifyRequest extends SpeakeasyBase {
    headers: PostV05PatientsSmsNotifyHeaders;
    request: PostV05PatientsSmsNotifyRequests;
}
export declare class PostV05PatientsSmsNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
