package shared



type GoogleCloudDialogflowV2beta1QueryResult struct {
    Action *string `json:"action,omitempty"`
    AllRequiredParamsPresent *bool `json:"allRequiredParamsPresent,omitempty"`
    CancelsSlotFilling *bool `json:"cancelsSlotFilling,omitempty"`
    DiagnosticInfo map[string]interface{} `json:"diagnosticInfo,omitempty"`
    FulfillmentMessages []GoogleCloudDialogflowV2beta1IntentMessage `json:"fulfillmentMessages,omitempty"`
    FulfillmentText *string `json:"fulfillmentText,omitempty"`
    Intent *GoogleCloudDialogflowV2beta1Intent `json:"intent,omitempty"`
    IntentDetectionConfidence *float32 `json:"intentDetectionConfidence,omitempty"`
    KnowledgeAnswers *GoogleCloudDialogflowV2beta1KnowledgeAnswers `json:"knowledgeAnswers,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    OutputContexts []GoogleCloudDialogflowV2beta1Context `json:"outputContexts,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    QueryText *string `json:"queryText,omitempty"`
    SentimentAnalysisResult *GoogleCloudDialogflowV2beta1SentimentAnalysisResult `json:"sentimentAnalysisResult,omitempty"`
    SpeechRecognitionConfidence *float32 `json:"speechRecognitionConfidence,omitempty"`
    WebhookPayload map[string]interface{} `json:"webhookPayload,omitempty"`
    WebhookSource *string `json:"webhookSource,omitempty"`
    
}

