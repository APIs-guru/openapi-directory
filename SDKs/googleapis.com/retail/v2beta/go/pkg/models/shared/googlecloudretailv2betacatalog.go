package shared

// GoogleCloudRetailV2betaCatalog
// The catalog configuration.
type GoogleCloudRetailV2betaCatalog struct {
	DisplayName                 *string                                             `json:"displayName,omitempty"`
	MerchantCenterLinkingConfig *GoogleCloudRetailV2betaMerchantCenterLinkingConfig `json:"merchantCenterLinkingConfig,omitempty"`
	Name                        *string                                             `json:"name,omitempty"`
	ProductLevelConfig          *GoogleCloudRetailV2betaProductLevelConfig          `json:"productLevelConfig,omitempty"`
}
