package shared

type GoogleCloudDialogflowV2QueryResult struct {
	Action                      *string                                         `json:"action"`
	AllRequiredParamsPresent    *bool                                           `json:"allRequiredParamsPresent"`
	CancelsSlotFilling          *bool                                           `json:"cancelsSlotFilling"`
	DiagnosticInfo              map[string]interface{}                          `json:"diagnosticInfo"`
	FulfillmentMessages         []GoogleCloudDialogflowV2IntentMessage          `json:"fulfillmentMessages"`
	FulfillmentText             *string                                         `json:"fulfillmentText"`
	Intent                      *GoogleCloudDialogflowV2Intent                  `json:"intent"`
	IntentDetectionConfidence   *float32                                        `json:"intentDetectionConfidence"`
	LanguageCode                *string                                         `json:"languageCode"`
	OutputContexts              []GoogleCloudDialogflowV2Context                `json:"outputContexts"`
	Parameters                  map[string]interface{}                          `json:"parameters"`
	QueryText                   *string                                         `json:"queryText"`
	SentimentAnalysisResult     *GoogleCloudDialogflowV2SentimentAnalysisResult `json:"sentimentAnalysisResult"`
	SpeechRecognitionConfidence *float32                                        `json:"speechRecognitionConfidence"`
	WebhookPayload              map[string]interface{}                          `json:"webhookPayload"`
	WebhookSource               *string                                         `json:"webhookSource"`
}
