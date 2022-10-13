package shared

type ProfileConditionTypeEnum string

const (
	ProfileConditionTypeEnumEquals           ProfileConditionTypeEnum = "Equals"
	ProfileConditionTypeEnumNotEquals        ProfileConditionTypeEnum = "NotEquals"
	ProfileConditionTypeEnumLessThanEqual    ProfileConditionTypeEnum = "LessThanEqual"
	ProfileConditionTypeEnumGreaterThanEqual ProfileConditionTypeEnum = "GreaterThanEqual"
	ProfileConditionTypeEnumEqualsAny        ProfileConditionTypeEnum = "EqualsAny"
)
