package shared

// GoogleCloudDialogflowCxV3DetectIntentRequest
// The request to detect user's intent.
type GoogleCloudDialogflowCxV3DetectIntentRequest struct {
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	QueryInput        *GoogleCloudDialogflowCxV3QueryInput        `json:"queryInput,omitempty"`
	QueryParams       *GoogleCloudDialogflowCxV3QueryParameters   `json:"queryParams,omitempty"`
}
