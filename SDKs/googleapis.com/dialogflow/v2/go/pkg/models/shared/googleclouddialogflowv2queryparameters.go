package shared

type GoogleCloudDialogflowV2QueryParameters struct {
	Contexts                       []GoogleCloudDialogflowV2Context                       `json:"contexts,omitempty"`
	GeoLocation                    *GoogleTypeLatLng                                      `json:"geoLocation,omitempty"`
	Payload                        map[string]interface{}                                 `json:"payload,omitempty"`
	ResetContexts                  *bool                                                  `json:"resetContexts,omitempty"`
	SentimentAnalysisRequestConfig *GoogleCloudDialogflowV2SentimentAnalysisRequestConfig `json:"sentimentAnalysisRequestConfig,omitempty"`
	SessionEntityTypes             []GoogleCloudDialogflowV2SessionEntityType             `json:"sessionEntityTypes,omitempty"`
	TimeZone                       *string                                                `json:"timeZone,omitempty"`
	WebhookHeaders                 map[string]string                                      `json:"webhookHeaders,omitempty"`
}
