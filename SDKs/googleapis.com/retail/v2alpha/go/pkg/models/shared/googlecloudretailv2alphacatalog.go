package shared

type GoogleCloudRetailV2alphaCatalog struct {
	DisplayName                 *string                                              `json:"displayName"`
	MerchantCenterLinkingConfig *GoogleCloudRetailV2alphaMerchantCenterLinkingConfig `json:"merchantCenterLinkingConfig"`
	Name                        *string                                              `json:"name"`
	ProductLevelConfig          *GoogleCloudRetailV2alphaProductLevelConfig          `json:"productLevelConfig"`
}
