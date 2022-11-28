package shared

type GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingUnspecified         GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingLinear16            GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingFlac                GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_FLAC"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingMulaw               GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_MULAW"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingAmr                 GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingAmrWb               GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR_WB"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingOggOpus             GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingSpeexWithHeaderByte GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
)

type GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum string

const (
	GoogleCloudDialogflowV2InputAudioConfigModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowV2InputAudioConfigModelVariantEnumUseBestAvailable              GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowV2InputAudioConfigModelVariantEnumUseStandard                   GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowV2InputAudioConfigModelVariantEnumUseEnhanced                   GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum = "USE_ENHANCED"
)

// GoogleCloudDialogflowV2InputAudioConfig
// Instructs the speech recognizer how to process the audio content.
type GoogleCloudDialogflowV2InputAudioConfig struct {
	AudioEncoding                  *GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	DisableNoSpeechRecognizedEvent *bool                                                     `json:"disableNoSpeechRecognizedEvent,omitempty"`
	EnableWordInfo                 *bool                                                     `json:"enableWordInfo,omitempty"`
	LanguageCode                   *string                                                   `json:"languageCode,omitempty"`
	Model                          *string                                                   `json:"model,omitempty"`
	ModelVariant                   *GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum  `json:"modelVariant,omitempty"`
	PhraseHints                    []string                                                  `json:"phraseHints,omitempty"`
	SampleRateHertz                *int32                                                    `json:"sampleRateHertz,omitempty"`
	SingleUtterance                *bool                                                     `json:"singleUtterance,omitempty"`
	SpeechContexts                 []GoogleCloudDialogflowV2SpeechContext                    `json:"speechContexts,omitempty"`
}
