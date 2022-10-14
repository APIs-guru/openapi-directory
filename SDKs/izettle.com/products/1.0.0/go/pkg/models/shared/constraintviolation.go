package shared

type ConstraintViolationConstraintTypeEnum string

const (
	ConstraintViolationConstraintTypeEnumMustBeFalse            ConstraintViolationConstraintTypeEnum = "MUST_BE_FALSE"
	ConstraintViolationConstraintTypeEnumMustBeTrue             ConstraintViolationConstraintTypeEnum = "MUST_BE_TRUE"
	ConstraintViolationConstraintTypeEnumMustBeLessThan         ConstraintViolationConstraintTypeEnum = "MUST_BE_LESS_THAN"
	ConstraintViolationConstraintTypeEnumMustBeGreaterThan      ConstraintViolationConstraintTypeEnum = "MUST_BE_GREATER_THAN"
	ConstraintViolationConstraintTypeEnumDigitOutOfBounds       ConstraintViolationConstraintTypeEnum = "DIGIT_OUT_OF_BOUNDS"
	ConstraintViolationConstraintTypeEnumDateMustBeInTheFuture  ConstraintViolationConstraintTypeEnum = "DATE_MUST_BE_IN_THE_FUTURE"
	ConstraintViolationConstraintTypeEnumMustBeLessOrEqualThan  ConstraintViolationConstraintTypeEnum = "MUST_BE_LESS_OR_EQUAL_THAN"
	ConstraintViolationConstraintTypeEnumMustBeGreaterOrEqualTo ConstraintViolationConstraintTypeEnum = "MUST_BE_GREATER_OR_EQUAL_TO"
	ConstraintViolationConstraintTypeEnumMustNotBeNull          ConstraintViolationConstraintTypeEnum = "MUST_NOT_BE_NULL"
	ConstraintViolationConstraintTypeEnumMustBeNull             ConstraintViolationConstraintTypeEnum = "MUST_BE_NULL"
	ConstraintViolationConstraintTypeEnumDateMustBeInThePast    ConstraintViolationConstraintTypeEnum = "DATE_MUST_BE_IN_THE_PAST"
	ConstraintViolationConstraintTypeEnumMustMatchPattern       ConstraintViolationConstraintTypeEnum = "MUST_MATCH_PATTERN"
	ConstraintViolationConstraintTypeEnumInvalidSize            ConstraintViolationConstraintTypeEnum = "INVALID_SIZE"
	ConstraintViolationConstraintTypeEnumInvalidEmail           ConstraintViolationConstraintTypeEnum = "INVALID_EMAIL"
	ConstraintViolationConstraintTypeEnumMustNotBeEmpty         ConstraintViolationConstraintTypeEnum = "MUST_NOT_BE_EMPTY"
	ConstraintViolationConstraintTypeEnumInvalidRange           ConstraintViolationConstraintTypeEnum = "INVALID_RANGE"
	ConstraintViolationConstraintTypeEnumUnknown                ConstraintViolationConstraintTypeEnum = "UNKNOWN"
)

type ConstraintViolation struct {
	ConstraintType   *ConstraintViolationConstraintTypeEnum `json:"constraintType,omitempty"`
	DeveloperMessage *string                                `json:"developerMessage,omitempty"`
	Expected         *string                                `json:"expected,omitempty"`
	PropertyName     *string                                `json:"propertyName,omitempty"`
	Value            *string                                `json:"value,omitempty"`
}
