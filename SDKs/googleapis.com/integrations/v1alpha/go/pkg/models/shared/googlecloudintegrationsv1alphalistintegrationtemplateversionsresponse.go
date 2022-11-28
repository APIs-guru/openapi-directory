package shared

// GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse
// Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
type GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse struct {
	IntegrationTemplateVersions []GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion `json:"integrationTemplateVersions,omitempty"`
	NextPageToken               *string                                                    `json:"nextPageToken,omitempty"`
}
