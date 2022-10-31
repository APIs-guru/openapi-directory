package shared

type GoogleCloudDialogflowV2beta1DetectIntentResponse struct {
	AlternativeQueryResults []GoogleCloudDialogflowV2beta1QueryResult      `json:"alternativeQueryResults,omitempty"`
	OutputAudio             *string                                        `json:"outputAudio,omitempty"`
	OutputAudioConfig       *GoogleCloudDialogflowV2beta1OutputAudioConfig `json:"outputAudioConfig,omitempty"`
	QueryResult             *GoogleCloudDialogflowV2beta1QueryResult       `json:"queryResult,omitempty"`
	ResponseID              *string                                        `json:"responseId,omitempty"`
	WebhookStatus           *GoogleRPCStatus                               `json:"webhookStatus,omitempty"`
}
