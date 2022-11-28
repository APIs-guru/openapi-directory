import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientIdentificationResponsePatient extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PatientIdentificationResponse extends SpeakeasyBase {
    error?: Error;
    patient?: PatientIdentificationResponsePatient;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
