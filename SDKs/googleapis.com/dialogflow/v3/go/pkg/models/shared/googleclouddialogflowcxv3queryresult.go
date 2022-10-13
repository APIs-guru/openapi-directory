package shared

type GoogleCloudDialogflowCxV3QueryResult struct {
	CurrentPage               *GoogleCloudDialogflowCxV3Page                    `json:"currentPage"`
	DiagnosticInfo            map[string]interface{}                            `json:"diagnosticInfo"`
	Dtmf                      *GoogleCloudDialogflowCxV3DtmfInput               `json:"dtmf"`
	Intent                    *GoogleCloudDialogflowCxV3Intent                  `json:"intent"`
	IntentDetectionConfidence *float32                                          `json:"intentDetectionConfidence"`
	LanguageCode              *string                                           `json:"languageCode"`
	Match                     *GoogleCloudDialogflowCxV3Match                   `json:"match"`
	Parameters                map[string]interface{}                            `json:"parameters"`
	ResponseMessages          []GoogleCloudDialogflowCxV3ResponseMessage        `json:"responseMessages"`
	SentimentAnalysisResult   *GoogleCloudDialogflowCxV3SentimentAnalysisResult `json:"sentimentAnalysisResult"`
	Text                      *string                                           `json:"text"`
	Transcript                *string                                           `json:"transcript"`
	TriggerEvent              *string                                           `json:"triggerEvent"`
	TriggerIntent             *string                                           `json:"triggerIntent"`
	WebhookPayloads           []map[string]interface{}                          `json:"webhookPayloads"`
	WebhookStatuses           []GoogleRPCStatus                                 `json:"webhookStatuses"`
}
