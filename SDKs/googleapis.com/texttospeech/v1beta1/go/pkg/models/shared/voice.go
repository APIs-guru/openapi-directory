package shared

type VoiceSsmlGenderEnum string

const (
	VoiceSsmlGenderEnumSsmlVoiceGenderUnspecified VoiceSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	VoiceSsmlGenderEnumMale                       VoiceSsmlGenderEnum = "MALE"
	VoiceSsmlGenderEnumFemale                     VoiceSsmlGenderEnum = "FEMALE"
	VoiceSsmlGenderEnumNeutral                    VoiceSsmlGenderEnum = "NEUTRAL"
)

type Voice struct {
	LanguageCodes          []string             `json:"languageCodes"`
	Name                   *string              `json:"name"`
	NaturalSampleRateHertz *int32               `json:"naturalSampleRateHertz"`
	SsmlGender             *VoiceSsmlGenderEnum `json:"ssmlGender"`
}
