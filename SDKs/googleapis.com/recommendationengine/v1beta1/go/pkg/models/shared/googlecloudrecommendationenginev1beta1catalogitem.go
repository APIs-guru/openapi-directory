package shared

type GoogleCloudRecommendationengineV1beta1CatalogItem struct {
	CategoryHierarchies []GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy `json:"categoryHierarchies"`
	Description         *string                                                              `json:"description"`
	ID                  *string                                                              `json:"id"`
	ItemAttributes      *GoogleCloudRecommendationengineV1beta1FeatureMap                    `json:"itemAttributes"`
	ItemGroupID         *string                                                              `json:"itemGroupId"`
	LanguageCode        *string                                                              `json:"languageCode"`
	ProductMetadata     *GoogleCloudRecommendationengineV1beta1ProductCatalogItem            `json:"productMetadata"`
	Tags                []string                                                             `json:"tags"`
	Title               *string                                                              `json:"title"`
}
