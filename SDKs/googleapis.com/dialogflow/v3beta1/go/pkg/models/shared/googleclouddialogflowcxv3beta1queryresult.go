package shared

type GoogleCloudDialogflowCxV3beta1QueryResult struct {
	CurrentPage               *GoogleCloudDialogflowCxV3beta1Page                    `json:"currentPage"`
	DiagnosticInfo            map[string]interface{}                                 `json:"diagnosticInfo"`
	Dtmf                      *GoogleCloudDialogflowCxV3beta1DtmfInput               `json:"dtmf"`
	Intent                    *GoogleCloudDialogflowCxV3beta1Intent                  `json:"intent"`
	IntentDetectionConfidence *float32                                               `json:"intentDetectionConfidence"`
	LanguageCode              *string                                                `json:"languageCode"`
	Match                     *GoogleCloudDialogflowCxV3beta1Match                   `json:"match"`
	Parameters                map[string]interface{}                                 `json:"parameters"`
	ResponseMessages          []GoogleCloudDialogflowCxV3beta1ResponseMessage        `json:"responseMessages"`
	SentimentAnalysisResult   *GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult `json:"sentimentAnalysisResult"`
	Text                      *string                                                `json:"text"`
	Transcript                *string                                                `json:"transcript"`
	TriggerEvent              *string                                                `json:"triggerEvent"`
	TriggerIntent             *string                                                `json:"triggerIntent"`
	WebhookPayloads           []map[string]interface{}                               `json:"webhookPayloads"`
	WebhookStatuses           []GoogleRPCStatus                                      `json:"webhookStatuses"`
}
