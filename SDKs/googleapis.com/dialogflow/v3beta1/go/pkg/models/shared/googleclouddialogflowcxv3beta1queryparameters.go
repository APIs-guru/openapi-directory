package shared

type GoogleCloudDialogflowCxV3beta1QueryParameters struct {
	AnalyzeQueryTextSentiment *bool                                             `json:"analyzeQueryTextSentiment"`
	CurrentPage               *string                                           `json:"currentPage"`
	DisableWebhook            *bool                                             `json:"disableWebhook"`
	FlowVersions              []string                                          `json:"flowVersions"`
	GeoLocation               *GoogleTypeLatLng                                 `json:"geoLocation"`
	Parameters                map[string]interface{}                            `json:"parameters"`
	Payload                   map[string]interface{}                            `json:"payload"`
	SessionEntityTypes        []GoogleCloudDialogflowCxV3beta1SessionEntityType `json:"sessionEntityTypes"`
	TimeZone                  *string                                           `json:"timeZone"`
	WebhookHeaders            map[string]string                                 `json:"webhookHeaders"`
}
