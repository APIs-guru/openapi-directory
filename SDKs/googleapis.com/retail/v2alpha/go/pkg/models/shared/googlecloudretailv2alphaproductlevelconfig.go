package shared

// GoogleCloudRetailV2alphaProductLevelConfig
// Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
type GoogleCloudRetailV2alphaProductLevelConfig struct {
	IngestionProductType         *string `json:"ingestionProductType,omitempty"`
	MerchantCenterProductIDField *string `json:"merchantCenterProductIdField,omitempty"`
}
