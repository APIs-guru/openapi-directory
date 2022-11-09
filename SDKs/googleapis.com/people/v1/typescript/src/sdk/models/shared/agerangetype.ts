import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";

export enum AgeRangeTypeAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED"
,    LessThanEighteen = "LESS_THAN_EIGHTEEN"
,    EighteenToTwenty = "EIGHTEEN_TO_TWENTY"
,    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}


// AgeRangeType
/** 
 * A person's age range.
**/
export class AgeRangeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageRange" })
  ageRange?: AgeRangeTypeAgeRangeEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;
}
