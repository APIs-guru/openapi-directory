package shared

type GoogleCloudRetailV2betaSearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                                  `json:"enableDynamicPosition,omitempty"`
	ExcludedFilterKeys    []string                                               `json:"excludedFilterKeys,omitempty"`
	FacetKey              *GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey `json:"facetKey,omitempty"`
	Limit                 *int32                                                 `json:"limit,omitempty"`
}
