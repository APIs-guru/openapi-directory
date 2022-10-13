package shared

type GoogleCloudRetailV2SearchResponseFacet struct {
	DynamicFacet *bool                                              `json:"dynamicFacet"`
	Key          *string                                            `json:"key"`
	Values       []GoogleCloudRetailV2SearchResponseFacetFacetValue `json:"values"`
}
