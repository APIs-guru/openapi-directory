package shared

// GoogleCloudDialogflowCxV3beta1AudioInput
// Represents the natural speech audio to be processed.
type GoogleCloudDialogflowCxV3beta1AudioInput struct {
	Audio  *string                                         `json:"audio,omitempty"`
	Config *GoogleCloudDialogflowCxV3beta1InputAudioConfig `json:"config,omitempty"`
}
