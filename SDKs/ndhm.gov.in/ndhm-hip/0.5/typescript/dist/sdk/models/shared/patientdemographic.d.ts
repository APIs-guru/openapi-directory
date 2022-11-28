import { SpeakeasyBase } from "../../../internal/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";
/**
 * demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.
**/
export declare class PatientDemographic extends SpeakeasyBase {
    dateOfBirth: string;
    gender: PatientGenderEnum;
    identifier?: AuthConfirmIdentifier;
    name: string;
}
