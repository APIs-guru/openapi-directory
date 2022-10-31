package shared

type GoogleCloudRetailV2SearchResponseFacet struct {
	DynamicFacet *bool                                              `json:"dynamicFacet,omitempty"`
	Key          *string                                            `json:"key,omitempty"`
	Values       []GoogleCloudRetailV2SearchResponseFacetFacetValue `json:"values,omitempty"`
}
