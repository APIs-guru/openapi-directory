package shared



type GoogleCloudRecommendationengineV1beta1InputConfig struct {
    BigQuerySource *GoogleCloudRecommendationengineV1beta1BigQuerySource `json:"bigQuerySource,omitempty"`
    CatalogInlineSource *GoogleCloudRecommendationengineV1beta1CatalogInlineSource `json:"catalogInlineSource,omitempty"`
    GcsSource *GoogleCloudRecommendationengineV1beta1GcsSource `json:"gcsSource,omitempty"`
    UserEventInlineSource *GoogleCloudRecommendationengineV1beta1UserEventInlineSource `json:"userEventInlineSource,omitempty"`
    
}

