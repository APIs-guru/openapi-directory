package shared

type GoogleCloudRetailV2betaCatalog struct {
	DisplayName                 *string                                             `json:"displayName"`
	MerchantCenterLinkingConfig *GoogleCloudRetailV2betaMerchantCenterLinkingConfig `json:"merchantCenterLinkingConfig"`
	Name                        *string                                             `json:"name"`
	ProductLevelConfig          *GoogleCloudRetailV2betaProductLevelConfig          `json:"productLevelConfig"`
}
