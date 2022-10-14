package shared

type GoogleCloudRetailV2alphaSearchRequestFacetSpec struct {
	EnableDynamicPosition *bool                                                   `json:"enableDynamicPosition,omitempty"`
	ExcludedFilterKeys    []string                                                `json:"excludedFilterKeys,omitempty"`
	FacetKey              *GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey `json:"facetKey,omitempty"`
	Limit                 *int32                                                  `json:"limit,omitempty"`
}
