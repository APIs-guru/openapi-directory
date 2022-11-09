import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED"
,    AgeRange1824 = "AGE_RANGE_18_24"
,    AgeRange2534 = "AGE_RANGE_25_34"
,    AgeRange3544 = "AGE_RANGE_35_44"
,    AgeRange4554 = "AGE_RANGE_45_54"
,    AgeRange5564 = "AGE_RANGE_55_64"
,    AgeRange65Plus = "AGE_RANGE_65_PLUS"
,    AgeRangeUnknown = "AGE_RANGE_UNKNOWN"
,    AgeRange1820 = "AGE_RANGE_18_20"
,    AgeRange2124 = "AGE_RANGE_21_24"
,    AgeRange2529 = "AGE_RANGE_25_29"
,    AgeRange3034 = "AGE_RANGE_30_34"
,    AgeRange3539 = "AGE_RANGE_35_39"
,    AgeRange4044 = "AGE_RANGE_40_44"
,    AgeRange4549 = "AGE_RANGE_45_49"
,    AgeRange5054 = "AGE_RANGE_50_54"
,    AgeRange5559 = "AGE_RANGE_55_59"
,    AgeRange6064 = "AGE_RANGE_60_64"
}


// AgeRangeAssignedTargetingOptionDetails
/** 
 * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
export class AgeRangeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageRange" })
  ageRange?: AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
}
