import { SpeakeasyBase } from "../../../internal/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";
/**
 * Demographic details are only required for demographic auth at this point. Demographic details must be same as registered
**/
export declare class PatientDemographic extends SpeakeasyBase {
    dateOfBirth: string;
    gender: PatientGenderEnum;
    identifier?: AuthConfirmIdentifier;
    name: string;
}
