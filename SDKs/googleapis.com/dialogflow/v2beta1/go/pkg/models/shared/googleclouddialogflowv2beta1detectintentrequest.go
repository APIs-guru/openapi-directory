package shared

// GoogleCloudDialogflowV2beta1DetectIntentRequest
// The request to detect user's intent.
type GoogleCloudDialogflowV2beta1DetectIntentRequest struct {
	InputAudio            *string                                        `json:"inputAudio,omitempty"`
	OutputAudioConfig     *GoogleCloudDialogflowV2beta1OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	OutputAudioConfigMask *string                                        `json:"outputAudioConfigMask,omitempty"`
	QueryInput            *GoogleCloudDialogflowV2beta1QueryInput        `json:"queryInput,omitempty"`
	QueryParams           *GoogleCloudDialogflowV2beta1QueryParameters   `json:"queryParams,omitempty"`
}
