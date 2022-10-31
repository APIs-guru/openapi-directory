package shared

type VoiceSsmlGenderEnum string

const (
	VoiceSsmlGenderEnumSsmlVoiceGenderUnspecified VoiceSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	VoiceSsmlGenderEnumMale                       VoiceSsmlGenderEnum = "MALE"
	VoiceSsmlGenderEnumFemale                     VoiceSsmlGenderEnum = "FEMALE"
	VoiceSsmlGenderEnumNeutral                    VoiceSsmlGenderEnum = "NEUTRAL"
)

type Voice struct {
	LanguageCodes          []string             `json:"languageCodes,omitempty"`
	Name                   *string              `json:"name,omitempty"`
	NaturalSampleRateHertz *int32               `json:"naturalSampleRateHertz,omitempty"`
	SsmlGender             *VoiceSsmlGenderEnum `json:"ssmlGender,omitempty"`
}
