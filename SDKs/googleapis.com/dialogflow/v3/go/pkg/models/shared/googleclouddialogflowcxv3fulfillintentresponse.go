package shared

type GoogleCloudDialogflowCxV3FulfillIntentResponse struct {
	OutputAudio       *string                                     `json:"outputAudio"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3OutputAudioConfig `json:"outputAudioConfig"`
	QueryResult       *GoogleCloudDialogflowCxV3QueryResult       `json:"queryResult"`
	ResponseID        *string                                     `json:"responseId"`
}
