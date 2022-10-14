package shared

type GoogleCloudDialogflowCxV3DetectIntentRequest struct {
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	QueryInput        *GoogleCloudDialogflowCxV3QueryInput        `json:"queryInput,omitempty"`
	QueryParams       *GoogleCloudDialogflowCxV3QueryParameters   `json:"queryParams,omitempty"`
}
