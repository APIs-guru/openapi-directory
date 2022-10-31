package shared




type PersonalNameGenderedOutLikelyGenderEnum string

const (
    PersonalNameGenderedOutLikelyGenderEnumMale PersonalNameGenderedOutLikelyGenderEnum = "male"
PersonalNameGenderedOutLikelyGenderEnumFemale PersonalNameGenderedOutLikelyGenderEnum = "female"
PersonalNameGenderedOutLikelyGenderEnumUnknown PersonalNameGenderedOutLikelyGenderEnum = "unknown"
)


type PersonalNameGenderedOut struct {
    GenderScale *float64 `json:"genderScale,omitempty"`
    ID *string `json:"id,omitempty"`
    LikelyGender *PersonalNameGenderedOutLikelyGenderEnum `json:"likelyGender,omitempty"`
    Name *string `json:"name,omitempty"`
    ProbabilityCalibrated *float64 `json:"probabilityCalibrated,omitempty"`
    Score *float64 `json:"score,omitempty"`
    Script *string `json:"script,omitempty"`
    
}

