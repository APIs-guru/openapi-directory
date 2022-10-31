package shared

type AgeRangeTargetingOptionDetailsAgeRangeEnum string

const (
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRangeUnspecified AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange1824        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_18_24"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange2534        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_25_34"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange3544        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_35_44"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange4554        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_45_54"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange5564        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_55_64"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange65Plus      AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_65_PLUS"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRangeUnknown     AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_UNKNOWN"
)

type AgeRangeTargetingOptionDetails struct {
	AgeRange *AgeRangeTargetingOptionDetailsAgeRangeEnum `json:"ageRange,omitempty"`
}
