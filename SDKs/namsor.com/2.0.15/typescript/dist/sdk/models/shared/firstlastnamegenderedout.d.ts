import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirstLastNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}
/**
 * Represents the output of inferring the LIKELY gender from a personal name.
**/
export declare class FirstLastNameGenderedOut extends SpeakeasyBase {
    firstName?: string;
    genderScale?: number;
    id?: string;
    lastName?: string;
    likelyGender?: FirstLastNameGenderedOutLikelyGenderEnum;
    probabilityCalibrated?: number;
    score?: number;
    script?: string;
}
