import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgeRangeTargetingOptionDetailsAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    AgeRange1824 = "AGE_RANGE_18_24",
    AgeRange2534 = "AGE_RANGE_25_34",
    AgeRange3544 = "AGE_RANGE_35_44",
    AgeRange4554 = "AGE_RANGE_45_54",
    AgeRange5564 = "AGE_RANGE_55_64",
    AgeRange65Plus = "AGE_RANGE_65_PLUS",
    AgeRangeUnknown = "AGE_RANGE_UNKNOWN"
}


// AgeRangeTargetingOptionDetails
/** 
 * Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
export class AgeRangeTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageRange" })
  ageRange?: AgeRangeTargetingOptionDetailsAgeRangeEnum;
}
