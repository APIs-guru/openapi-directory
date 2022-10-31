package shared

type GoogleCloudRetailV2SearchResponseSearchResult struct {
	ID                    *string                     `json:"id,omitempty"`
	MatchingVariantCount  *int32                      `json:"matchingVariantCount,omitempty"`
	MatchingVariantFields map[string]string           `json:"matchingVariantFields,omitempty"`
	PersonalLabels        []string                    `json:"personalLabels,omitempty"`
	Product               *GoogleCloudRetailV2Product `json:"product,omitempty"`
	VariantRollupValues   map[string]interface{}      `json:"variantRollupValues,omitempty"`
}
