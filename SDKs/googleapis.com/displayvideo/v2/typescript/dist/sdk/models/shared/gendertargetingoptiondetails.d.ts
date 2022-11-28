import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GenderTargetingOptionDetailsGenderEnum {
    GenderUnspecified = "GENDER_UNSPECIFIED",
    GenderMale = "GENDER_MALE",
    GenderFemale = "GENDER_FEMALE",
    GenderUnknown = "GENDER_UNKNOWN"
}
/**
 * Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
export declare class GenderTargetingOptionDetails extends SpeakeasyBase {
    gender?: GenderTargetingOptionDetailsGenderEnum;
}
