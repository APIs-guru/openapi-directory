package shared

type GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum string

const (
	GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale        GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_MALE"
	GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderFemale      GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_FEMALE"
	GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderNeutral     GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_NEUTRAL"
)

// GoogleCloudDialogflowV2beta1VoiceSelectionParams
// Description of which voice to use for speech synthesis.
type GoogleCloudDialogflowV2beta1VoiceSelectionParams struct {
	Name       *string                                                         `json:"name,omitempty"`
	SsmlGender *GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum `json:"ssmlGender,omitempty"`
}
