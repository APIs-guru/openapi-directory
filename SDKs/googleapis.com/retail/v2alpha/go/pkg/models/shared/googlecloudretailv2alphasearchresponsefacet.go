package shared

type GoogleCloudRetailV2alphaSearchResponseFacet struct {
	DynamicFacet *bool                                                   `json:"dynamicFacet,omitempty"`
	Key          *string                                                 `json:"key,omitempty"`
	Values       []GoogleCloudRetailV2alphaSearchResponseFacetFacetValue `json:"values,omitempty"`
}
