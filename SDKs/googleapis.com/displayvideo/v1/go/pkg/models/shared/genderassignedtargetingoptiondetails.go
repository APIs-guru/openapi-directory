package shared

type GenderAssignedTargetingOptionDetailsGenderEnum string

const (
	GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_UNSPECIFIED"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderMale        GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_MALE"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale      GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_FEMALE"
	GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown     GenderAssignedTargetingOptionDetailsGenderEnum = "GENDER_UNKNOWN"
)

// GenderAssignedTargetingOptionDetails
// Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
type GenderAssignedTargetingOptionDetails struct {
	Gender            *GenderAssignedTargetingOptionDetailsGenderEnum `json:"gender,omitempty"`
	TargetingOptionID *string                                         `json:"targetingOptionId,omitempty"`
}
