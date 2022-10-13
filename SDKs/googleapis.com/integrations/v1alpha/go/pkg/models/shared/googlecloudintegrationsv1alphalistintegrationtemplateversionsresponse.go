package shared

type GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse struct {
	IntegrationTemplateVersions []GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion `json:"integrationTemplateVersions"`
	NextPageToken               *string                                                    `json:"nextPageToken"`
}
