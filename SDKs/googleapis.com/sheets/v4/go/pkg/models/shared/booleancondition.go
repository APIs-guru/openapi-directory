package shared




type BooleanConditionTypeEnum string

const (
    BooleanConditionTypeEnumConditionTypeUnspecified BooleanConditionTypeEnum = "CONDITION_TYPE_UNSPECIFIED"
BooleanConditionTypeEnumNumberGreater BooleanConditionTypeEnum = "NUMBER_GREATER"
BooleanConditionTypeEnumNumberGreaterThanEq BooleanConditionTypeEnum = "NUMBER_GREATER_THAN_EQ"
BooleanConditionTypeEnumNumberLess BooleanConditionTypeEnum = "NUMBER_LESS"
BooleanConditionTypeEnumNumberLessThanEq BooleanConditionTypeEnum = "NUMBER_LESS_THAN_EQ"
BooleanConditionTypeEnumNumberEq BooleanConditionTypeEnum = "NUMBER_EQ"
BooleanConditionTypeEnumNumberNotEq BooleanConditionTypeEnum = "NUMBER_NOT_EQ"
BooleanConditionTypeEnumNumberBetween BooleanConditionTypeEnum = "NUMBER_BETWEEN"
BooleanConditionTypeEnumNumberNotBetween BooleanConditionTypeEnum = "NUMBER_NOT_BETWEEN"
BooleanConditionTypeEnumTextContains BooleanConditionTypeEnum = "TEXT_CONTAINS"
BooleanConditionTypeEnumTextNotContains BooleanConditionTypeEnum = "TEXT_NOT_CONTAINS"
BooleanConditionTypeEnumTextStartsWith BooleanConditionTypeEnum = "TEXT_STARTS_WITH"
BooleanConditionTypeEnumTextEndsWith BooleanConditionTypeEnum = "TEXT_ENDS_WITH"
BooleanConditionTypeEnumTextEq BooleanConditionTypeEnum = "TEXT_EQ"
BooleanConditionTypeEnumTextIsEmail BooleanConditionTypeEnum = "TEXT_IS_EMAIL"
BooleanConditionTypeEnumTextIsURL BooleanConditionTypeEnum = "TEXT_IS_URL"
BooleanConditionTypeEnumDateEq BooleanConditionTypeEnum = "DATE_EQ"
BooleanConditionTypeEnumDateBefore BooleanConditionTypeEnum = "DATE_BEFORE"
BooleanConditionTypeEnumDateAfter BooleanConditionTypeEnum = "DATE_AFTER"
BooleanConditionTypeEnumDateOnOrBefore BooleanConditionTypeEnum = "DATE_ON_OR_BEFORE"
BooleanConditionTypeEnumDateOnOrAfter BooleanConditionTypeEnum = "DATE_ON_OR_AFTER"
BooleanConditionTypeEnumDateBetween BooleanConditionTypeEnum = "DATE_BETWEEN"
BooleanConditionTypeEnumDateNotBetween BooleanConditionTypeEnum = "DATE_NOT_BETWEEN"
BooleanConditionTypeEnumDateIsValid BooleanConditionTypeEnum = "DATE_IS_VALID"
BooleanConditionTypeEnumOneOfRange BooleanConditionTypeEnum = "ONE_OF_RANGE"
BooleanConditionTypeEnumOneOfList BooleanConditionTypeEnum = "ONE_OF_LIST"
BooleanConditionTypeEnumBlank BooleanConditionTypeEnum = "BLANK"
BooleanConditionTypeEnumNotBlank BooleanConditionTypeEnum = "NOT_BLANK"
BooleanConditionTypeEnumCustomFormula BooleanConditionTypeEnum = "CUSTOM_FORMULA"
BooleanConditionTypeEnumBoolean BooleanConditionTypeEnum = "BOOLEAN"
BooleanConditionTypeEnumTextNotEq BooleanConditionTypeEnum = "TEXT_NOT_EQ"
BooleanConditionTypeEnumDateNotEq BooleanConditionTypeEnum = "DATE_NOT_EQ"
)


type BooleanCondition struct {
    Type *BooleanConditionTypeEnum `json:"type,omitempty"`
    Values []ConditionValue `json:"values,omitempty"`
    
}

