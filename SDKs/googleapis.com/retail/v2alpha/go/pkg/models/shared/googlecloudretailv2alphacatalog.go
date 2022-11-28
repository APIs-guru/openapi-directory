package shared

// GoogleCloudRetailV2alphaCatalog
// The catalog configuration.
type GoogleCloudRetailV2alphaCatalog struct {
	DisplayName                 *string                                              `json:"displayName,omitempty"`
	MerchantCenterLinkingConfig *GoogleCloudRetailV2alphaMerchantCenterLinkingConfig `json:"merchantCenterLinkingConfig,omitempty"`
	Name                        *string                                              `json:"name,omitempty"`
	ProductLevelConfig          *GoogleCloudRetailV2alphaProductLevelConfig          `json:"productLevelConfig,omitempty"`
}
