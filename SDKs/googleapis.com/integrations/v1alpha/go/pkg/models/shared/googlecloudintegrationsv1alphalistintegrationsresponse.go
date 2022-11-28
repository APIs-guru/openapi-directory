package shared

// GoogleCloudIntegrationsV1alphaListIntegrationsResponse
// Response for ListIntegrations.
type GoogleCloudIntegrationsV1alphaListIntegrationsResponse struct {
	Integrations  []GoogleCloudIntegrationsV1alphaIntegration `json:"integrations,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
