package shared

// GoogleCloudRetailV2betaProductLevelConfig
// Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
type GoogleCloudRetailV2betaProductLevelConfig struct {
	IngestionProductType         *string `json:"ingestionProductType,omitempty"`
	MerchantCenterProductIDField *string `json:"merchantCenterProductIdField,omitempty"`
}
