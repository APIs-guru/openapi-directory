package shared



type GoogleCloudRecommendationengineV1beta1CatalogItem struct {
    CategoryHierarchies []GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy `json:"categoryHierarchies,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    ItemAttributes *GoogleCloudRecommendationengineV1beta1FeatureMap `json:"itemAttributes,omitempty"`
    ItemGroupID *string `json:"itemGroupId,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    ProductMetadata *GoogleCloudRecommendationengineV1beta1ProductCatalogItem `json:"productMetadata,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

