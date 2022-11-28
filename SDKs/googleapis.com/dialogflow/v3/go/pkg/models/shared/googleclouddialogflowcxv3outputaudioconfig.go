package shared

type GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingUnspecified GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingLinear16    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp3         GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3"
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp364Kbps   GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingOggOpus     GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMulaw       GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MULAW"
)

// GoogleCloudDialogflowCxV3OutputAudioConfig
// Instructs the speech synthesizer how to generate the output audio content.
type GoogleCloudDialogflowCxV3OutputAudioConfig struct {
	AudioEncoding          *GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	SampleRateHertz        *int32                                                       `json:"sampleRateHertz,omitempty"`
	SynthesizeSpeechConfig *GoogleCloudDialogflowCxV3SynthesizeSpeechConfig             `json:"synthesizeSpeechConfig,omitempty"`
}
