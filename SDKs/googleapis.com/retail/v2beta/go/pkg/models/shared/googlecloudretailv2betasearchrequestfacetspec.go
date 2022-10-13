package shared

type GoogleCloudRetailV2betaSearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                                  `json:"enableDynamicPosition"`
	ExcludedFilterKeys    []string                                               `json:"excludedFilterKeys"`
	FacetKey              *GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey `json:"facetKey"`
	Limit                 *int32                                                 `json:"limit"`
}
