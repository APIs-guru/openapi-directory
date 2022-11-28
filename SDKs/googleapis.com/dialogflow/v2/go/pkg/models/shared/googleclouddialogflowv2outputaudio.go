package shared

// GoogleCloudDialogflowV2OutputAudio
// Represents the natural language speech audio to be played to the end user.
type GoogleCloudDialogflowV2OutputAudio struct {
	Audio  *string                                   `json:"audio,omitempty"`
	Config *GoogleCloudDialogflowV2OutputAudioConfig `json:"config,omitempty"`
}
