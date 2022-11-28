package shared

type GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingUnspecified GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingLinear16    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp3         GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3"
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp364Kbps   GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingOggOpus     GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMulaw       GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MULAW"
)

// GoogleCloudDialogflowV2beta1OutputAudioConfig
// Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
type GoogleCloudDialogflowV2beta1OutputAudioConfig struct {
	AudioEncoding          *GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	SampleRateHertz        *int32                                                          `json:"sampleRateHertz,omitempty"`
	SynthesizeSpeechConfig *GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig             `json:"synthesizeSpeechConfig,omitempty"`
}
