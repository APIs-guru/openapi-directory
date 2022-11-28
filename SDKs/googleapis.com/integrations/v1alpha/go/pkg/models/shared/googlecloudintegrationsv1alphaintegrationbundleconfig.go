package shared

// GoogleCloudIntegrationsV1alphaIntegrationBundleConfig
// This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
type GoogleCloudIntegrationsV1alphaIntegrationBundleConfig struct {
	Integrations   []string `json:"integrations,omitempty"`
	ServiceAccount *string  `json:"serviceAccount,omitempty"`
}

// GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput
// This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
type GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput struct {
	Integrations []string `json:"integrations,omitempty"`
}
