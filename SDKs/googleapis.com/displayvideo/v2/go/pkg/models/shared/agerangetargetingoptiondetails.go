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
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange1820        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_18_20"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange2124        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_21_24"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange2529        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_25_29"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange3034        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_30_34"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange3539        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_35_39"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange4044        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_40_44"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange4549        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_45_49"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange5054        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_50_54"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange5559        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_55_59"
	AgeRangeTargetingOptionDetailsAgeRangeEnumAgeRange6064        AgeRangeTargetingOptionDetailsAgeRangeEnum = "AGE_RANGE_60_64"
)

type AgeRangeTargetingOptionDetails struct {
	AgeRange *AgeRangeTargetingOptionDetailsAgeRangeEnum `json:"ageRange,omitempty"`
}
