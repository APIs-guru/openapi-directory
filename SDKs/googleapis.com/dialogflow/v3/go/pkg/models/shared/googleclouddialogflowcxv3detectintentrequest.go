package shared

type GoogleCloudDialogflowCxV3DetectIntentRequest struct {
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig"`
	QueryInput        *GoogleCloudDialogflowCxV3QueryInput        `json:"queryInput"`
	QueryParams       *GoogleCloudDialogflowCxV3QueryParameters   `json:"queryParams"`
}
