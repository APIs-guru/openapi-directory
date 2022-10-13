package shared

type GoogleCloudDialogflowV2beta1QueryParameters struct {
	Contexts                       []GoogleCloudDialogflowV2beta1Context                       `json:"contexts"`
	GeoLocation                    *GoogleTypeLatLng                                           `json:"geoLocation"`
	KnowledgeBaseNames             []string                                                    `json:"knowledgeBaseNames"`
	Payload                        map[string]interface{}                                      `json:"payload"`
	ResetContexts                  *bool                                                       `json:"resetContexts"`
	SentimentAnalysisRequestConfig *GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig `json:"sentimentAnalysisRequestConfig"`
	SessionEntityTypes             []GoogleCloudDialogflowV2beta1SessionEntityType             `json:"sessionEntityTypes"`
	SubAgents                      []GoogleCloudDialogflowV2beta1SubAgent                      `json:"subAgents"`
	TimeZone                       *string                                                     `json:"timeZone"`
	WebhookHeaders                 map[string]string                                           `json:"webhookHeaders"`
}
