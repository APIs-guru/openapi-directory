import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PersonalNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}
/**
 * Classified genderized names
**/
export declare class PersonalNameGenderedOut extends SpeakeasyBase {
    genderScale?: number;
    id?: string;
    likelyGender?: PersonalNameGenderedOutLikelyGenderEnum;
    name?: string;
    probabilityCalibrated?: number;
    score?: number;
    script?: string;
}
