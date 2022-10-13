package shared

type GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum string

const (
	GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale        GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_MALE"
	GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderFemale      GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_FEMALE"
	GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderNeutral     GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum = "SSML_VOICE_GENDER_NEUTRAL"
)

type GoogleCloudDialogflowCxV3beta1VoiceSelectionParams struct {
	Name       *string                                                           `json:"name"`
	SsmlGender *GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum `json:"ssmlGender"`
}
