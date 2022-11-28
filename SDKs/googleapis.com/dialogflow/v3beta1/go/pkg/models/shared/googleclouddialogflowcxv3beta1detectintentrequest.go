package shared

// GoogleCloudDialogflowCxV3beta1DetectIntentRequest
// The request to detect user's intent.
type GoogleCloudDialogflowCxV3beta1DetectIntentRequest struct {
	OutputAudioConfig *GoogleCloudDialogflowCxV3beta1OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	QueryInput        *GoogleCloudDialogflowCxV3beta1QueryInput        `json:"queryInput,omitempty"`
	QueryParams       *GoogleCloudDialogflowCxV3beta1QueryParameters   `json:"queryParams,omitempty"`
}
