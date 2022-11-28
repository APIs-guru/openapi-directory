package shared

// GoogleCloudDialogflowV2beta1OutputAudio
// Represents the natural language speech audio to be played to the end user.
type GoogleCloudDialogflowV2beta1OutputAudio struct {
	Audio  *string                                        `json:"audio,omitempty"`
	Config *GoogleCloudDialogflowV2beta1OutputAudioConfig `json:"config,omitempty"`
}
