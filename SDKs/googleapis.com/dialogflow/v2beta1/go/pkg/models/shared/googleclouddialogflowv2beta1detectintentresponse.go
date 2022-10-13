package shared

type GoogleCloudDialogflowV2beta1DetectIntentResponse struct {
	AlternativeQueryResults []GoogleCloudDialogflowV2beta1QueryResult      `json:"alternativeQueryResults"`
	OutputAudio             *string                                        `json:"outputAudio"`
	OutputAudioConfig       *GoogleCloudDialogflowV2beta1OutputAudioConfig `json:"outputAudioConfig"`
	QueryResult             *GoogleCloudDialogflowV2beta1QueryResult       `json:"queryResult"`
	ResponseID              *string                                        `json:"responseId"`
	WebhookStatus           *GoogleRPCStatus                               `json:"webhookStatus"`
}
