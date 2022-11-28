import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConstraintViolationConstraintTypeEnum {
    MustBeFalse = "MUST_BE_FALSE",
    MustBeTrue = "MUST_BE_TRUE",
    MustBeLessThan = "MUST_BE_LESS_THAN",
    MustBeGreaterThan = "MUST_BE_GREATER_THAN",
    DigitOutOfBounds = "DIGIT_OUT_OF_BOUNDS",
    DateMustBeInTheFuture = "DATE_MUST_BE_IN_THE_FUTURE",
    MustBeLessOrEqualThan = "MUST_BE_LESS_OR_EQUAL_THAN",
    MustBeGreaterOrEqualTo = "MUST_BE_GREATER_OR_EQUAL_TO",
    MustNotBeNull = "MUST_NOT_BE_NULL",
    MustBeNull = "MUST_BE_NULL",
    DateMustBeInThePast = "DATE_MUST_BE_IN_THE_PAST",
    MustMatchPattern = "MUST_MATCH_PATTERN",
    InvalidSize = "INVALID_SIZE",
    InvalidEmail = "INVALID_EMAIL",
    MustNotBeEmpty = "MUST_NOT_BE_EMPTY",
    InvalidRange = "INVALID_RANGE",
    Unknown = "UNKNOWN"
}


export class ConstraintViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraintType" })
  constraintType?: ConstraintViolationConstraintTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=developerMessage" })
  developerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=expected" })
  expected?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
