package shared

// GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
// Response to list AuthConfigs.
type GoogleCloudIntegrationsV1alphaListAuthConfigsResponse struct {
	AuthConfigs   []GoogleCloudIntegrationsV1alphaAuthConfig `json:"authConfigs,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
