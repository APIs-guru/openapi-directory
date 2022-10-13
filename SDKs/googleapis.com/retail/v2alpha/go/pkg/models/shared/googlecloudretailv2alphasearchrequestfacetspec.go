package shared

type GoogleCloudRetailV2alphaSearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                                   `json:"enableDynamicPosition"`
	ExcludedFilterKeys    []string                                                `json:"excludedFilterKeys"`
	FacetKey              *GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey `json:"facetKey"`
	Limit                 *int32                                                  `json:"limit"`
}
