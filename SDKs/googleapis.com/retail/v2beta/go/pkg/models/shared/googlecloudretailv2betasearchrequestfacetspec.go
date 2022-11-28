package shared

// GoogleCloudRetailV2betaSearchRequestFacetSpec
// A facet specification to perform faceted search.
type GoogleCloudRetailV2betaSearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                                  `json:"enableDynamicPosition,omitempty"`
	ExcludedFilterKeys    []string                                               `json:"excludedFilterKeys,omitempty"`
	FacetKey              *GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey `json:"facetKey,omitempty"`
	Limit                 *int32                                                 `json:"limit,omitempty"`
}
