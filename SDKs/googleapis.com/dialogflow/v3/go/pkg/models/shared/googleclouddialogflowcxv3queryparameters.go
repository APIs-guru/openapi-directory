package shared

type GoogleCloudDialogflowCxV3QueryParameters struct {
	AnalyzeQueryTextSentiment *bool                                        `json:"analyzeQueryTextSentiment,omitempty"`
	CurrentPage               *string                                      `json:"currentPage,omitempty"`
	DisableWebhook            *bool                                        `json:"disableWebhook,omitempty"`
	FlowVersions              []string                                     `json:"flowVersions,omitempty"`
	GeoLocation               *GoogleTypeLatLng                            `json:"geoLocation,omitempty"`
	Parameters                map[string]interface{}                       `json:"parameters,omitempty"`
	Payload                   map[string]interface{}                       `json:"payload,omitempty"`
	SessionEntityTypes        []GoogleCloudDialogflowCxV3SessionEntityType `json:"sessionEntityTypes,omitempty"`
	TimeZone                  *string                                      `json:"timeZone,omitempty"`
	WebhookHeaders            map[string]string                            `json:"webhookHeaders,omitempty"`
}
