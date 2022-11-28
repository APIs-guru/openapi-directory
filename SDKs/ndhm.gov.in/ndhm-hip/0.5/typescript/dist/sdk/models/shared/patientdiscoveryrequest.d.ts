import { SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
export declare enum PatientDiscoveryRequestPatientGenderEnum {
    M = "M",
    F = "F",
    O = "O",
    U = "U"
}
export declare class PatientDiscoveryRequestPatient extends SpeakeasyBase {
    gender: PatientDiscoveryRequestPatientGenderEnum;
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
