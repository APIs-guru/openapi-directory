package shared

type GoogleCloudRetailV2SearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                              `json:"enableDynamicPosition"`
	ExcludedFilterKeys    []string                                           `json:"excludedFilterKeys"`
	FacetKey              *GoogleCloudRetailV2SearchRequestFacetSpecFacetKey `json:"facetKey"`
	Limit                 *int32                                             `json:"limit"`
}
