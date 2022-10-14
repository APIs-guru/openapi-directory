package shared

type AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum string

const (
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnspecified AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1824        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_18_24"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_25_34"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_35_44"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4554        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_45_54"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5564        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_55_64"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus      AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_65_PLUS"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnknown     AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_UNKNOWN"
)

type AgeRangeAssignedTargetingOptionDetails struct {
	AgeRange          *AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum `json:"ageRange,omitempty"`
	TargetingOptionID *string                                             `json:"targetingOptionId,omitempty"`
}
