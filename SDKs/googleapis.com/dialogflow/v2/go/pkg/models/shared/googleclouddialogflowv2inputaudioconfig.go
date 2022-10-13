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

type GoogleCloudDialogflowV2InputAudioConfig struct {
	AudioEncoding                  *GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum `json:"audioEncoding"`
	DisableNoSpeechRecognizedEvent *bool                                                     `json:"disableNoSpeechRecognizedEvent"`
	EnableWordInfo                 *bool                                                     `json:"enableWordInfo"`
	LanguageCode                   *string                                                   `json:"languageCode"`
	Model                          *string                                                   `json:"model"`
	ModelVariant                   *GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum  `json:"modelVariant"`
	PhraseHints                    []string                                                  `json:"phraseHints"`
	SampleRateHertz                *int32                                                    `json:"sampleRateHertz"`
	SingleUtterance                *bool                                                     `json:"singleUtterance"`
	SpeechContexts                 []GoogleCloudDialogflowV2SpeechContext                    `json:"speechContexts"`
}
