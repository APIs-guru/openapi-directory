package shared

type GenderTargetingOptionDetailsGenderEnum string

const (
	GenderTargetingOptionDetailsGenderEnumGenderUnspecified GenderTargetingOptionDetailsGenderEnum = "GENDER_UNSPECIFIED"
	GenderTargetingOptionDetailsGenderEnumGenderMale        GenderTargetingOptionDetailsGenderEnum = "GENDER_MALE"
	GenderTargetingOptionDetailsGenderEnumGenderFemale      GenderTargetingOptionDetailsGenderEnum = "GENDER_FEMALE"
	GenderTargetingOptionDetailsGenderEnumGenderUnknown     GenderTargetingOptionDetailsGenderEnum = "GENDER_UNKNOWN"
)

type GenderTargetingOptionDetails struct {
	Gender *GenderTargetingOptionDetailsGenderEnum `json:"gender"`
}
