import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";
export declare class ShareProfileRequestPatientUserDemographics extends SpeakeasyBase {
    address?: PatientAddress;
    dayOfBirth?: number;
    gender: PatientGenderEnum;
    healthId: string;
    healthIdNumber: string;
    identifiers?: Identifier[];
    monthOfBirth?: number;
    name: string;
    yearOfBirth: number;
}
export declare class ShareProfileRequestPatient extends SpeakeasyBase {
    hipCode?: string;
    userDemographics: ShareProfileRequestPatientUserDemographics;
}
export declare class ShareProfileRequest extends SpeakeasyBase {
    patient: ShareProfileRequestPatient;
    requestId: string;
    timestamp: Date;
}
