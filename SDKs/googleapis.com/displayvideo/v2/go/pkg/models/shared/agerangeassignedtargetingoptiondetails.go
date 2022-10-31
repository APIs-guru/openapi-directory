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
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1820        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_18_20"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2124        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_21_24"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2529        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_25_29"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3034        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_30_34"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3539        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_35_39"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4044        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_40_44"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4549        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_45_49"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5054        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_50_54"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5559        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_55_59"
	AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange6064        AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_60_64"
)

type AgeRangeAssignedTargetingOptionDetails struct {
	AgeRange *AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum `json:"ageRange,omitempty"`
}
