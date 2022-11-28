import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    AgeRange1824 = "AGE_RANGE_18_24",
    AgeRange2534 = "AGE_RANGE_25_34",
    AgeRange3544 = "AGE_RANGE_35_44",
    AgeRange4554 = "AGE_RANGE_45_54",
    AgeRange5564 = "AGE_RANGE_55_64",
    AgeRange65Plus = "AGE_RANGE_65_PLUS",
    AgeRangeUnknown = "AGE_RANGE_UNKNOWN"
}
/**
 * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
export declare class AgeRangeAssignedTargetingOptionDetails extends SpeakeasyBase {
    ageRange?: AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
    targetingOptionId?: string;
}
