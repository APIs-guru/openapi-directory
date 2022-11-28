import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GenderAssignedTargetingOptionDetailsGenderEnum {
    GenderUnspecified = "GENDER_UNSPECIFIED",
    GenderMale = "GENDER_MALE",
    GenderFemale = "GENDER_FEMALE",
    GenderUnknown = "GENDER_UNKNOWN"
}
/**
 * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
export declare class GenderAssignedTargetingOptionDetails extends SpeakeasyBase {
    gender?: GenderAssignedTargetingOptionDetailsGenderEnum;
    targetingOptionId?: string;
}
