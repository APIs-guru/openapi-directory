package shared

type GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum string

const (
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingUnspecified GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingLinear16    GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingMp3         GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3"
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingMp364Kbps   GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingOggOpus     GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingMulaw       GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MULAW"
)

type GoogleCloudDialogflowV2TextToSpeechSettings struct {
	EnableTextToSpeech      *bool                                                               `json:"enableTextToSpeech"`
	OutputAudioEncoding     *GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum `json:"outputAudioEncoding"`
	SampleRateHertz         *int32                                                              `json:"sampleRateHertz"`
	SynthesizeSpeechConfigs map[string]GoogleCloudDialogflowV2SynthesizeSpeechConfig            `json:"synthesizeSpeechConfigs"`
}
