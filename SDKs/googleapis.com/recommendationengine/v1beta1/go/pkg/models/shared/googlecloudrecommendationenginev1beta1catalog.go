package shared

// GoogleCloudRecommendationengineV1beta1Catalog
// The catalog configuration. Next ID: 5.
type GoogleCloudRecommendationengineV1beta1Catalog struct {
	CatalogItemLevelConfig *GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig `json:"catalogItemLevelConfig,omitempty"`
	DefaultEventStoreID    *string                                                       `json:"defaultEventStoreId,omitempty"`
	DisplayName            *string                                                       `json:"displayName,omitempty"`
	Name                   *string                                                       `json:"name,omitempty"`
}
