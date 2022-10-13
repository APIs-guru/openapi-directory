package shared

type GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingUnspecified         GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingLinear16            GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingFlac                GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_FLAC"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingMulaw               GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_MULAW"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingAmr                 GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingAmrWb               GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR_WB"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingOggOpus             GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnumAudioEncodingSpeexWithHeaderByte GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
)

type GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum string

const (
	GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnumUseBestAvailable              GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnumUseStandard                   GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnumUseEnhanced                   GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum = "USE_ENHANCED"
)

type GoogleCloudDialogflowCxV3beta1InputAudioConfig struct {
	AudioEncoding   *GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum `json:"audioEncoding"`
	EnableWordInfo  *bool                                                            `json:"enableWordInfo"`
	Model           *string                                                          `json:"model"`
	ModelVariant    *GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum  `json:"modelVariant"`
	PhraseHints     []string                                                         `json:"phraseHints"`
	SampleRateHertz *int32                                                           `json:"sampleRateHertz"`
	SingleUtterance *bool                                                            `json:"singleUtterance"`
}
