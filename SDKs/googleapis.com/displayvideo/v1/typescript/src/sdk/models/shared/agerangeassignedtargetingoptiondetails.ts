import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    AgeRange1824 = "AGE_RANGE_18_24",
    AgeRange2534 = "AGE_RANGE_25_34",
    AgeRange3544 = "AGE_RANGE_35_44",
    AgeRange4554 = "AGE_RANGE_45_54",
    AgeRange5564 = "AGE_RANGE_55_64",
    AgeRange65Plus = "AGE_RANGE_65_PLUS",
    AgeRangeUnknown = "AGE_RANGE_UNKNOWN"
}


// AgeRangeAssignedTargetingOptionDetails
/** 
 * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
export class AgeRangeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageRange" })
  ageRange?: AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
