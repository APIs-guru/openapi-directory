package shared

type GoogleCloudDialogflowV2DetectIntentResponse struct {
	OutputAudio       *string                                   `json:"outputAudio"`
	OutputAudioConfig *GoogleCloudDialogflowV2OutputAudioConfig `json:"outputAudioConfig"`
	QueryResult       *GoogleCloudDialogflowV2QueryResult       `json:"queryResult"`
	ResponseID        *string                                   `json:"responseId"`
	WebhookStatus     *GoogleRPCStatus                          `json:"webhookStatus"`
}
