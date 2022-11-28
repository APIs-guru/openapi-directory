package shared

type VoiceSelectionParamsSsmlGenderEnum string

const (
	VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	VoiceSelectionParamsSsmlGenderEnumMale                       VoiceSelectionParamsSsmlGenderEnum = "MALE"
	VoiceSelectionParamsSsmlGenderEnumFemale                     VoiceSelectionParamsSsmlGenderEnum = "FEMALE"
	VoiceSelectionParamsSsmlGenderEnumNeutral                    VoiceSelectionParamsSsmlGenderEnum = "NEUTRAL"
)

// VoiceSelectionParams
// Description of which voice to use for a synthesis request.
type VoiceSelectionParams struct {
	CustomVoice  *CustomVoiceParams                  `json:"customVoice,omitempty"`
	LanguageCode *string                             `json:"languageCode,omitempty"`
	Name         *string                             `json:"name,omitempty"`
	SsmlGender   *VoiceSelectionParamsSsmlGenderEnum `json:"ssmlGender,omitempty"`
}
