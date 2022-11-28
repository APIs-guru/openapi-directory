package shared

// GoogleCloudDialogflowCxV3AudioInput
// Represents the natural speech audio to be processed.
type GoogleCloudDialogflowCxV3AudioInput struct {
	Audio  *string                                    `json:"audio,omitempty"`
	Config *GoogleCloudDialogflowCxV3InputAudioConfig `json:"config,omitempty"`
}
