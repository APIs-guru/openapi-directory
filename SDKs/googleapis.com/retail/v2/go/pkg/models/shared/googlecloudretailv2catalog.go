package shared

// GoogleCloudRetailV2Catalog
// The catalog configuration.
type GoogleCloudRetailV2Catalog struct {
	DisplayName        *string                                `json:"displayName,omitempty"`
	Name               *string                                `json:"name,omitempty"`
	ProductLevelConfig *GoogleCloudRetailV2ProductLevelConfig `json:"productLevelConfig,omitempty"`
}
