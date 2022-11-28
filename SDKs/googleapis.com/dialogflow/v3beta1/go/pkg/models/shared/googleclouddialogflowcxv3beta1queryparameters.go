package shared

// GoogleCloudDialogflowCxV3beta1QueryParameters
// Represents the parameters of a conversational query.
type GoogleCloudDialogflowCxV3beta1QueryParameters struct {
	AnalyzeQueryTextSentiment *bool                                             `json:"analyzeQueryTextSentiment,omitempty"`
	CurrentPage               *string                                           `json:"currentPage,omitempty"`
	DisableWebhook            *bool                                             `json:"disableWebhook,omitempty"`
	FlowVersions              []string                                          `json:"flowVersions,omitempty"`
	GeoLocation               *GoogleTypeLatLng                                 `json:"geoLocation,omitempty"`
	Parameters                map[string]interface{}                            `json:"parameters,omitempty"`
	Payload                   map[string]interface{}                            `json:"payload,omitempty"`
	SessionEntityTypes        []GoogleCloudDialogflowCxV3beta1SessionEntityType `json:"sessionEntityTypes,omitempty"`
	TimeZone                  *string                                           `json:"timeZone,omitempty"`
	WebhookHeaders            map[string]string                                 `json:"webhookHeaders,omitempty"`
}
