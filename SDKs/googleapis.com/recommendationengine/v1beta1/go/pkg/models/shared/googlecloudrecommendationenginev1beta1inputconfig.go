package shared

type GoogleCloudRecommendationengineV1beta1InputConfig struct {
	BigQuerySource        *GoogleCloudRecommendationengineV1beta1BigQuerySource        `json:"bigQuerySource"`
	CatalogInlineSource   *GoogleCloudRecommendationengineV1beta1CatalogInlineSource   `json:"catalogInlineSource"`
	GcsSource             *GoogleCloudRecommendationengineV1beta1GcsSource             `json:"gcsSource"`
	UserEventInlineSource *GoogleCloudRecommendationengineV1beta1UserEventInlineSource `json:"userEventInlineSource"`
}
