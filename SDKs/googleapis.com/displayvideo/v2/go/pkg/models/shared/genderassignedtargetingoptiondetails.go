package shared

type GenderAssignedTargetingOptionDetailsGenderEnum string

const (
	GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_UNSPECIFIED"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderMale        GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_MALE"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale      GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_FEMALE"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown     GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_UNKNOWN"
)

type GenderAssignedTargetingOptionDetails struct {
	Gender *GenderAssignedTargetingOptionDetailsGenderEnum `json:"gender"`
}
