import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05PatientsFindHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05PatientsFindRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientIdentificationRequest?: shared.PatientIdentificationRequest;
}
export declare class PostV05PatientsFindRequest extends SpeakeasyBase {
    headers: PostV05PatientsFindHeaders;
    request: PostV05PatientsFindRequests;
}
export declare class PostV05PatientsFindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
