package shared

type GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingUnspecified         GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingLinear16            GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingFlac                GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_FLAC"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingMulaw               GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_MULAW"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingAmr                 GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingAmrWb               GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR_WB"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingOggOpus             GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingSpeexWithHeaderByte GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
)

type GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum string

const (
	GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumUseBestAvailable              GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumUseStandard                   GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumUseEnhanced                   GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum = "USE_ENHANCED"
)

type GoogleCloudDialogflowV2beta1InputAudioConfig struct {
	AudioEncoding                  *GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum `json:"audioEncoding"`
	DisableNoSpeechRecognizedEvent *bool                                                          `json:"disableNoSpeechRecognizedEvent"`
	EnableWordInfo                 *bool                                                          `json:"enableWordInfo"`
	LanguageCode                   *string                                                        `json:"languageCode"`
	Model                          *string                                                        `json:"model"`
	ModelVariant                   *GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum  `json:"modelVariant"`
	PhraseHints                    []string                                                       `json:"phraseHints"`
	SampleRateHertz                *int32                                                         `json:"sampleRateHertz"`
	SingleUtterance                *bool                                                          `json:"singleUtterance"`
	SpeechContexts                 []GoogleCloudDialogflowV2beta1SpeechContext                    `json:"speechContexts"`
}
