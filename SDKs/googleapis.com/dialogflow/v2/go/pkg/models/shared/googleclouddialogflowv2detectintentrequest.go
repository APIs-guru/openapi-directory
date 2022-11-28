package shared

// GoogleCloudDialogflowV2DetectIntentRequest
// The request to detect user's intent.
type GoogleCloudDialogflowV2DetectIntentRequest struct {
	InputAudio            *string                                   `json:"inputAudio,omitempty"`
	OutputAudioConfig     *GoogleCloudDialogflowV2OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	OutputAudioConfigMask *string                                   `json:"outputAudioConfigMask,omitempty"`
	QueryInput            *GoogleCloudDialogflowV2QueryInput        `json:"queryInput,omitempty"`
	QueryParams           *GoogleCloudDialogflowV2QueryParameters   `json:"queryParams,omitempty"`
}
