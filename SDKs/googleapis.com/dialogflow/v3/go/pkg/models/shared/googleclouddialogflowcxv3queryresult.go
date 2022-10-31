package shared

type GoogleCloudDialogflowCxV3QueryResult struct {
	CurrentPage               *GoogleCloudDialogflowCxV3Page                    `json:"currentPage,omitempty"`
	DiagnosticInfo            map[string]interface{}                            `json:"diagnosticInfo,omitempty"`
	Dtmf                      *GoogleCloudDialogflowCxV3DtmfInput               `json:"dtmf,omitempty"`
	Intent                    *GoogleCloudDialogflowCxV3Intent                  `json:"intent,omitempty"`
	IntentDetectionConfidence *float32                                          `json:"intentDetectionConfidence,omitempty"`
	LanguageCode              *string                                           `json:"languageCode,omitempty"`
	Match                     *GoogleCloudDialogflowCxV3Match                   `json:"match,omitempty"`
	Parameters                map[string]interface{}                            `json:"parameters,omitempty"`
	ResponseMessages          []GoogleCloudDialogflowCxV3ResponseMessage        `json:"responseMessages,omitempty"`
	SentimentAnalysisResult   *GoogleCloudDialogflowCxV3SentimentAnalysisResult `json:"sentimentAnalysisResult,omitempty"`
	Text                      *string                                           `json:"text,omitempty"`
	Transcript                *string                                           `json:"transcript,omitempty"`
	TriggerEvent              *string                                           `json:"triggerEvent,omitempty"`
	TriggerIntent             *string                                           `json:"triggerIntent,omitempty"`
	WebhookPayloads           []map[string]interface{}                          `json:"webhookPayloads,omitempty"`
	WebhookStatuses           []GoogleRPCStatus                                 `json:"webhookStatuses,omitempty"`
}
