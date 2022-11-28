package shared

// GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
// Request message for the ImportUserEvents request.
type GoogleCloudDiscoveryengineV1betaImportUserEventsRequest struct {
	BigquerySource *GoogleCloudDiscoveryengineV1betaBigQuerySource                      `json:"bigquerySource,omitempty"`
	ErrorConfig    *GoogleCloudDiscoveryengineV1betaImportErrorConfig                   `json:"errorConfig,omitempty"`
	GcsSource      *GoogleCloudDiscoveryengineV1betaGcsSource                           `json:"gcsSource,omitempty"`
	InlineSource   *GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource `json:"inlineSource,omitempty"`
}
