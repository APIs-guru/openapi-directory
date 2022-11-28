package shared

// GoogleCloudIntegrationsV1alphaCreateBundleRequest
// PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request to create a new Bundle.
type GoogleCloudIntegrationsV1alphaCreateBundleRequest struct {
	BundleID               *string  `json:"bundleId,omitempty"`
	Integrations           []string `json:"integrations,omitempty"`
	SecondaryCustomerOrgID *string  `json:"secondaryCustomerOrgId,omitempty"`
}
