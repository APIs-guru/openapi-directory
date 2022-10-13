package shared

type PersonalNameGenderedOutLikelyGenderEnum string

const (
	PersonalNameGenderedOutLikelyGenderEnumMale    PersonalNameGenderedOutLikelyGenderEnum = "male"
	PersonalNameGenderedOutLikelyGenderEnumFemale  PersonalNameGenderedOutLikelyGenderEnum = "female"
	PersonalNameGenderedOutLikelyGenderEnumUnknown PersonalNameGenderedOutLikelyGenderEnum = "unknown"
)

type PersonalNameGenderedOut struct {
	GenderScale           *float64                                 `json:"genderScale"`
	ID                    *string                                  `json:"id"`
	LikelyGender          *PersonalNameGenderedOutLikelyGenderEnum `json:"likelyGender"`
	Name                  *string                                  `json:"name"`
	ProbabilityCalibrated *float64                                 `json:"probabilityCalibrated"`
	Score                 *float64                                 `json:"score"`
	Script                *string                                  `json:"script"`
}
