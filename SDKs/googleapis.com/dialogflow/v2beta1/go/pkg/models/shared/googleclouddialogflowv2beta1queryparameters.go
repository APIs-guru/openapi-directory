package shared

type GoogleCloudDialogflowV2beta1QueryParameters struct {
	Contexts                       []GoogleCloudDialogflowV2beta1Context                       `json:"contexts,omitempty"`
	GeoLocation                    *GoogleTypeLatLng                                           `json:"geoLocation,omitempty"`
	KnowledgeBaseNames             []string                                                    `json:"knowledgeBaseNames,omitempty"`
	Payload                        map[string]interface{}                                      `json:"payload,omitempty"`
	ResetContexts                  *bool                                                       `json:"resetContexts,omitempty"`
	SentimentAnalysisRequestConfig *GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig `json:"sentimentAnalysisRequestConfig,omitempty"`
	SessionEntityTypes             []GoogleCloudDialogflowV2beta1SessionEntityType             `json:"sessionEntityTypes,omitempty"`
	SubAgents                      []GoogleCloudDialogflowV2beta1SubAgent                      `json:"subAgents,omitempty"`
	TimeZone                       *string                                                     `json:"timeZone,omitempty"`
	WebhookHeaders                 map[string]string                                           `json:"webhookHeaders,omitempty"`
}
