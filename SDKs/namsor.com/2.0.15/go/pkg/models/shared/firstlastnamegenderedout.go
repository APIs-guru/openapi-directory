package shared

type FirstLastNameGenderedOutLikelyGenderEnum string

const (
	FirstLastNameGenderedOutLikelyGenderEnumMale    FirstLastNameGenderedOutLikelyGenderEnum = "male"
	FirstLastNameGenderedOutLikelyGenderEnumFemale  FirstLastNameGenderedOutLikelyGenderEnum = "female"
	FirstLastNameGenderedOutLikelyGenderEnumUnknown FirstLastNameGenderedOutLikelyGenderEnum = "unknown"
)

type FirstLastNameGenderedOut struct {
	FirstName             *string                                   `json:"firstName,omitempty"`
	GenderScale           *float64                                  `json:"genderScale,omitempty"`
	ID                    *string                                   `json:"id,omitempty"`
	LastName              *string                                   `json:"lastName,omitempty"`
	LikelyGender          *FirstLastNameGenderedOutLikelyGenderEnum `json:"likelyGender,omitempty"`
	ProbabilityCalibrated *float64                                  `json:"probabilityCalibrated,omitempty"`
	Score                 *float64                                  `json:"score,omitempty"`
	Script                *string                                   `json:"script,omitempty"`
}
