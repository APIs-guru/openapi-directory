package shared

// GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest
// Request message for the ImportUserEvents request.
type GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest struct {
	BigquerySource *GoogleCloudDiscoveryengineV1alphaBigQuerySource                      `json:"bigquerySource,omitempty"`
	ErrorConfig    *GoogleCloudDiscoveryengineV1alphaImportErrorConfig                   `json:"errorConfig,omitempty"`
	GcsSource      *GoogleCloudDiscoveryengineV1alphaGcsSource                           `json:"gcsSource,omitempty"`
	InlineSource   *GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource `json:"inlineSource,omitempty"`
}
