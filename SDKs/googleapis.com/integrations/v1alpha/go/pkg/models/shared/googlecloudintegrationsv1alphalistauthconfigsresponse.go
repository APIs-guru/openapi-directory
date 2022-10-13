package shared

type GoogleCloudIntegrationsV1alphaListAuthConfigsResponse struct {
	AuthConfigs   []GoogleCloudIntegrationsV1alphaAuthConfig `json:"authConfigs"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
