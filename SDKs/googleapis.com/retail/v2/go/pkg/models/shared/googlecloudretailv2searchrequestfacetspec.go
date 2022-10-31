package shared



type GoogleCloudRetailV2SearchRequestFacetSpec struct {
    EnableDynamicPosition *bool `json:"enableDynamicPosition,omitempty"`
    ExcludedFilterKeys []string `json:"excludedFilterKeys,omitempty"`
    FacetKey *GoogleCloudRetailV2SearchRequestFacetSpecFacetKey `json:"facetKey,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    
}

