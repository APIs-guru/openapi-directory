package shared

type GenderTargetingOptionDetailsGenderEnum string

const (
	GenderTargetingOptionDetailsGenderEnumGenderUnspecified GenderTargetingOptionDetailsGenderEnum = "GENDER_UNSPECIFIED"
	GenderTargetingOptionDetailsGenderEnumGenderMale        GenderTargetingOptionDetailsGenderEnum = "GENDER_MALE"
	GenderTargetingOptionDetailsGenderEnumGenderFemale      GenderTargetingOptionDetailsGenderEnum = "GENDER_FEMALE"
	GenderTargetingOptionDetailsGenderEnumGenderUnknown     GenderTargetingOptionDetailsGenderEnum = "GENDER_UNKNOWN"
)

// GenderTargetingOptionDetails
// Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
type GenderTargetingOptionDetails struct {
	Gender *GenderTargetingOptionDetailsGenderEnum `json:"gender,omitempty"`
}
