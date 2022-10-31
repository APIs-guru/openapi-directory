package shared

type GoogleCloudDialogflowCxV3FulfillIntentResponse struct {
	OutputAudio       *string                                     `json:"outputAudio,omitempty"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	QueryResult       *GoogleCloudDialogflowCxV3QueryResult       `json:"queryResult,omitempty"`
	ResponseID        *string                                     `json:"responseId,omitempty"`
}
