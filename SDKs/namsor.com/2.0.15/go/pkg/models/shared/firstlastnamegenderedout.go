package shared

type FirstLastNameGenderedOutLikelyGenderEnum string

const (
	FirstLastNameGenderedOutLikelyGenderEnumMale    FirstLastNameGenderedOutLikelyGenderEnum = "male"
	FirstLastNameGenderedOutLikelyGenderEnumFemale  FirstLastNameGenderedOutLikelyGenderEnum = "female"
	FirstLastNameGenderedOutLikelyGenderEnumUnknown FirstLastNameGenderedOutLikelyGenderEnum = "unknown"
)

type FirstLastNameGenderedOut struct {
	FirstName             *string                                   `json:"firstName"`
	GenderScale           *float64                                  `json:"genderScale"`
	ID                    *string                                   `json:"id"`
	LastName              *string                                   `json:"lastName"`
	LikelyGender          *FirstLastNameGenderedOutLikelyGenderEnum `json:"likelyGender"`
	ProbabilityCalibrated *float64                                  `json:"probabilityCalibrated"`
	Score                 *float64                                  `json:"score"`
	Script                *string                                   `json:"script"`
}
