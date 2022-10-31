package shared



type GoogleCloudIntegrationsV1alphaCreateBundleRequest struct {
    BundleID *string `json:"bundleId,omitempty"`
    Integrations []string `json:"integrations,omitempty"`
    SecondaryCustomerOrgID *string `json:"secondaryCustomerOrgId,omitempty"`
    
}

