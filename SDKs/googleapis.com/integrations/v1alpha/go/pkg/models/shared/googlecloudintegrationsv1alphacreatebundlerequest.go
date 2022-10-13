package shared

type GoogleCloudIntegrationsV1alphaCreateBundleRequest struct {
	BundleID               *string  `json:"bundleId"`
	Integrations           []string `json:"integrations"`
	SecondaryCustomerOrgID *string  `json:"secondaryCustomerOrgId"`
}
