package shared

type GoogleCloudIntegrationsV1alphaListIntegrationsResponse struct {
	Integrations  []GoogleCloudIntegrationsV1alphaIntegration `json:"integrations"`
	NextPageToken *string                                     `json:"nextPageToken"`
}
