package shared

type ConditionTypeEnum string

const (
	ConditionTypeEnumConditionTypeUnspecified ConditionTypeEnum = "conditionTypeUnspecified"
	ConditionTypeEnumEquals                   ConditionTypeEnum = "equals"
	ConditionTypeEnumContains                 ConditionTypeEnum = "contains"
	ConditionTypeEnumStartsWith               ConditionTypeEnum = "startsWith"
	ConditionTypeEnumEndsWith                 ConditionTypeEnum = "endsWith"
	ConditionTypeEnumMatchRegex               ConditionTypeEnum = "matchRegex"
	ConditionTypeEnumGreater                  ConditionTypeEnum = "greater"
	ConditionTypeEnumGreaterOrEquals          ConditionTypeEnum = "greaterOrEquals"
	ConditionTypeEnumLess                     ConditionTypeEnum = "less"
	ConditionTypeEnumLessOrEquals             ConditionTypeEnum = "lessOrEquals"
	ConditionTypeEnumCSSSelector              ConditionTypeEnum = "cssSelector"
	ConditionTypeEnumURLMatches               ConditionTypeEnum = "urlMatches"
)

type Condition struct {
	Parameter []Parameter        `json:"parameter"`
	Type      *ConditionTypeEnum `json:"type"`
}
