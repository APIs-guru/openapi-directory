package shared

// GoogleCloudIntegrationsV1alphaCreateBundleResponse
// Response for create bundle.
type GoogleCloudIntegrationsV1alphaCreateBundleResponse struct {
	Config    *GoogleCloudIntegrationsV1alphaIntegrationBundleConfig `json:"config,omitempty"`
	TriggerID *string                                                `json:"triggerId,omitempty"`
}
