package shared

type GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum string

const (
	GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale        GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_MALE"
	GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderFemale      GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_FEMALE"
	GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderNeutral     GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_NEUTRAL"
)

// GoogleCloudDialogflowCxV3VoiceSelectionParams
// Description of which voice to use for speech synthesis.
type GoogleCloudDialogflowCxV3VoiceSelectionParams struct {
	Name       *string                                                      `json:"name,omitempty"`
	SsmlGender *GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum `json:"ssmlGender,omitempty"`
}
