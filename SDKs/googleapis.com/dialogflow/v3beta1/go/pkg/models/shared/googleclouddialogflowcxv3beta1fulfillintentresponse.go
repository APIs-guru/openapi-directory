package shared

type GoogleCloudDialogflowCxV3beta1FulfillIntentResponse struct {
	OutputAudio       *string                                          `json:"outputAudio"`
	OutputAudioConfig *GoogleCloudDialogflowCxV3beta1OutputAudioConfig `json:"outputAudioConfig"`
	QueryResult       *GoogleCloudDialogflowCxV3beta1QueryResult       `json:"queryResult"`
	ResponseID        *string                                          `json:"responseId"`
}
