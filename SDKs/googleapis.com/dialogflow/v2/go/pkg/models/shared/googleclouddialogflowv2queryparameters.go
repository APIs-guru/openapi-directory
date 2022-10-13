package shared

type GoogleCloudDialogflowV2QueryParameters struct {
	Contexts                       []GoogleCloudDialogflowV2Context                       `json:"contexts"`
	GeoLocation                    *GoogleTypeLatLng                                      `json:"geoLocation"`
	Payload                        map[string]interface{}                                 `json:"payload"`
	ResetContexts                  *bool                                                  `json:"resetContexts"`
	SentimentAnalysisRequestConfig *GoogleCloudDialogflowV2SentimentAnalysisRequestConfig `json:"sentimentAnalysisRequestConfig"`
	SessionEntityTypes             []GoogleCloudDialogflowV2SessionEntityType             `json:"sessionEntityTypes"`
	TimeZone                       *string                                                `json:"timeZone"`
	WebhookHeaders                 map[string]string                                      `json:"webhookHeaders"`
}
