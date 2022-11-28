package shared

// GoogleCloudRetailV2alphaMerchantCenterLinkingConfig
// Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
type GoogleCloudRetailV2alphaMerchantCenterLinkingConfig struct {
	Links []GoogleCloudRetailV2alphaMerchantCenterLink `json:"links,omitempty"`
}
