package shared

type GoogleCloudDialogflowV2beta1QueryResult struct {
	Action                      *string                                              `json:"action"`
	AllRequiredParamsPresent    *bool                                                `json:"allRequiredParamsPresent"`
	CancelsSlotFilling          *bool                                                `json:"cancelsSlotFilling"`
	DiagnosticInfo              map[string]interface{}                               `json:"diagnosticInfo"`
	FulfillmentMessages         []GoogleCloudDialogflowV2beta1IntentMessage          `json:"fulfillmentMessages"`
	FulfillmentText             *string                                              `json:"fulfillmentText"`
	Intent                      *GoogleCloudDialogflowV2beta1Intent                  `json:"intent"`
	IntentDetectionConfidence   *float32                                             `json:"intentDetectionConfidence"`
	KnowledgeAnswers            *GoogleCloudDialogflowV2beta1KnowledgeAnswers        `json:"knowledgeAnswers"`
	LanguageCode                *string                                              `json:"languageCode"`
	OutputContexts              []GoogleCloudDialogflowV2beta1Context                `json:"outputContexts"`
	Parameters                  map[string]interface{}                               `json:"parameters"`
	QueryText                   *string                                              `json:"queryText"`
	SentimentAnalysisResult     *GoogleCloudDialogflowV2beta1SentimentAnalysisResult `json:"sentimentAnalysisResult"`
	SpeechRecognitionConfidence *float32                                             `json:"speechRecognitionConfidence"`
	WebhookPayload              map[string]interface{}                               `json:"webhookPayload"`
	WebhookSource               *string                                              `json:"webhookSource"`
}
