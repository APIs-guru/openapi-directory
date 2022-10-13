package shared

type URLRestrictionRestrictionTypeEnum string

const (
	URLRestrictionRestrictionTypeEnumRestrictionTypeUnspecified URLRestrictionRestrictionTypeEnum = "RESTRICTION_TYPE_UNSPECIFIED"
	URLRestrictionRestrictionTypeEnumContains                   URLRestrictionRestrictionTypeEnum = "CONTAINS"
	URLRestrictionRestrictionTypeEnumEquals                     URLRestrictionRestrictionTypeEnum = "EQUALS"
	URLRestrictionRestrictionTypeEnumStartsWith                 URLRestrictionRestrictionTypeEnum = "STARTS_WITH"
	URLRestrictionRestrictionTypeEnumEndsWith                   URLRestrictionRestrictionTypeEnum = "ENDS_WITH"
	URLRestrictionRestrictionTypeEnumDoesNotEqual               URLRestrictionRestrictionTypeEnum = "DOES_NOT_EQUAL"
	URLRestrictionRestrictionTypeEnumDoesNotContain             URLRestrictionRestrictionTypeEnum = "DOES_NOT_CONTAIN"
	URLRestrictionRestrictionTypeEnumDoesNotStartWith           URLRestrictionRestrictionTypeEnum = "DOES_NOT_START_WITH"
	URLRestrictionRestrictionTypeEnumDoesNotEndWith             URLRestrictionRestrictionTypeEnum = "DOES_NOT_END_WITH"
)

type URLRestriction struct {
	EndDate         *Date                              `json:"endDate"`
	RestrictionType *URLRestrictionRestrictionTypeEnum `json:"restrictionType"`
	StartDate       *Date                              `json:"startDate"`
	URL             *string                            `json:"url"`
}
