package shared

// GoogleCloudDialogflowV2beta1AudioInput
// Represents the natural language speech audio to be processed.
type GoogleCloudDialogflowV2beta1AudioInput struct {
	Audio  *string                                       `json:"audio,omitempty"`
	Config *GoogleCloudDialogflowV2beta1InputAudioConfig `json:"config,omitempty"`
}
