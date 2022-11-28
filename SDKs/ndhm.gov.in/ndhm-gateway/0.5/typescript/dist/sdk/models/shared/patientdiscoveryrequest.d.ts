import { SpeakeasyBase } from "../../../internal/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";
export declare class PatientDiscoveryRequestPatient extends SpeakeasyBase {
    gender: PatientGenderEnum;
    id: string;
    name: string;
    unverifiedIdentifiers?: Identifier[];
    verifiedIdentifiers: Identifier[];
    yearOfBirth: number;
}
export declare class PatientDiscoveryRequest extends SpeakeasyBase {
    patient: PatientDiscoveryRequestPatient;
    requestId: string;
    timestamp: Date;
    transactionId: string;
}
