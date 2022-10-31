package shared

type GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum string

const (
	GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnumUseBestAvailable              GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnumUseStandard                   GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnumUseEnhanced                   GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum = "USE_ENHANCED"
)

type GoogleCloudDialogflowV2SpeechToTextConfig struct {
	SpeechModelVariant *GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum `json:"speechModelVariant,omitempty"`
}
