import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05PatientsOnFindServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05PatientsOnFindHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05PatientsOnFindRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientIdentificationResponse?: shared.PatientIdentificationResponse;
}
export declare class PostV05PatientsOnFindRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05PatientsOnFindHeaders;
    request: PostV05PatientsOnFindRequests;
}
export declare class PostV05PatientsOnFindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
