package shared



type GoogleCloudRetailV2betaSearchResponseSearchResult struct {
    ID *string `json:"id,omitempty"`
    MatchingVariantCount *int32 `json:"matchingVariantCount,omitempty"`
    MatchingVariantFields map[string]string `json:"matchingVariantFields,omitempty"`
    PersonalLabels []string `json:"personalLabels,omitempty"`
    Product *GoogleCloudRetailV2betaProduct `json:"product,omitempty"`
    VariantRollupValues map[string]interface{} `json:"variantRollupValues,omitempty"`
    
}

