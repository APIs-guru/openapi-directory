package shared

type GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingUnspecified         GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingLinear16            GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingFlac                GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_FLAC"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingMulaw               GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_MULAW"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingAmr                 GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingAmrWb               GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_AMR_WB"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingOggOpus             GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnumAudioEncodingSpeexWithHeaderByte GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
)

type GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum string

const (
	GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnumSpeechModelVariantUnspecified GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnumUseBestAvailable              GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum = "USE_BEST_AVAILABLE"
	GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnumUseStandard                   GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum = "USE_STANDARD"
	GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnumUseEnhanced                   GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum = "USE_ENHANCED"
)

// GoogleCloudDialogflowCxV3InputAudioConfig
// Instructs the speech recognizer on how to process the audio content.
type GoogleCloudDialogflowCxV3InputAudioConfig struct {
	AudioEncoding   *GoogleCloudDialogflowCxV3InputAudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	EnableWordInfo  *bool                                                       `json:"enableWordInfo,omitempty"`
	Model           *string                                                     `json:"model,omitempty"`
	ModelVariant    *GoogleCloudDialogflowCxV3InputAudioConfigModelVariantEnum  `json:"modelVariant,omitempty"`
	PhraseHints     []string                                                    `json:"phraseHints,omitempty"`
	SampleRateHertz *int32                                                      `json:"sampleRateHertz,omitempty"`
	SingleUtterance *bool                                                       `json:"singleUtterance,omitempty"`
}
