package shared

// GoogleCloudRetailV2betaMerchantCenterLinkingConfig
// Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
type GoogleCloudRetailV2betaMerchantCenterLinkingConfig struct {
	Links []GoogleCloudRetailV2betaMerchantCenterLink `json:"links,omitempty"`
}
