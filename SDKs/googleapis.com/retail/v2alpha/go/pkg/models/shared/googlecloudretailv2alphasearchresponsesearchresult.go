package shared

type GoogleCloudRetailV2alphaSearchResponseSearchResult struct {
	ID                    *string                          `json:"id"`
	MatchingVariantCount  *int32                           `json:"matchingVariantCount"`
	MatchingVariantFields map[string]string                `json:"matchingVariantFields"`
	PersonalLabels        []string                         `json:"personalLabels"`
	Product               *GoogleCloudRetailV2alphaProduct `json:"product"`
	VariantRollupValues   map[string]interface{}           `json:"variantRollupValues"`
}
