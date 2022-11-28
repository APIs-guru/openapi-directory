import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";


export enum AgeRangeTypeAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}


// AgeRangeType
/** 
 * A person's age range.
**/
export class AgeRangeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageRange" })
  ageRange?: AgeRangeTypeAgeRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;
}
