import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
export declare enum AgeRangeTypeAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}
/**
 * A person's age range.
**/
export declare class AgeRangeType extends SpeakeasyBase {
    ageRange?: AgeRangeTypeAgeRangeEnum;
    metadata?: FieldMetadata;
}
