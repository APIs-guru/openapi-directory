import { SpeakeasyBase } from "../../../internal/utils";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";
export declare class PatientDemographicResponse extends SpeakeasyBase {
    address?: PatientAddress;
    gender: PatientGenderEnum;
    id: string;
    identifiers?: Identifier[];
    name: string;
    yearOfBirth: number;
}
