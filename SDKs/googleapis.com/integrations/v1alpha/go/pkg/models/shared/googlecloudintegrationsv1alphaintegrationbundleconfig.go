package shared

type GoogleCloudIntegrationsV1alphaIntegrationBundleConfig struct {
	Integrations   []string `json:"integrations,omitempty"`
	ServiceAccount *string  `json:"serviceAccount,omitempty"`
}
