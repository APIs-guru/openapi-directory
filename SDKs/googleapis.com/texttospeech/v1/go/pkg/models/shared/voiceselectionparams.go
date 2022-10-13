package shared

type VoiceSelectionParamsSsmlGenderEnum string

const (
	VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	VoiceSelectionParamsSsmlGenderEnumMale                       VoiceSelectionParamsSsmlGenderEnum = "MALE"
	VoiceSelectionParamsSsmlGenderEnumFemale                     VoiceSelectionParamsSsmlGenderEnum = "FEMALE"
	VoiceSelectionParamsSsmlGenderEnumNeutral                    VoiceSelectionParamsSsmlGenderEnum = "NEUTRAL"
)

type VoiceSelectionParams struct {
	CustomVoice  *CustomVoiceParams                  `json:"customVoice"`
	LanguageCode *string                             `json:"languageCode"`
	Name         *string                             `json:"name"`
	SsmlGender   *VoiceSelectionParamsSsmlGenderEnum `json:"ssmlGender"`
}
