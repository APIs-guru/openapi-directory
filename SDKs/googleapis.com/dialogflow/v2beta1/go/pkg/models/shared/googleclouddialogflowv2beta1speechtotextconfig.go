package shared

type GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum string

const (
	GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnumUseBestAvailable              GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnumUseStandard                   GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnumUseEnhanced                   GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum = "USE_ENHANCED"
)

type GoogleCloudDialogflowV2beta1SpeechToTextConfig struct {
	SpeechModelVariant *GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum `json:"speechModelVariant,omitempty"`
}
