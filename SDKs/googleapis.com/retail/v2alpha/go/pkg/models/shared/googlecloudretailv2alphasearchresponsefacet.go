package shared

type GoogleCloudRetailV2alphaSearchResponseFacet struct {
	DynamicFacet *bool                                                   `json:"dynamicFacet"`
	Key          *string                                                 `json:"key"`
	Values       []GoogleCloudRetailV2alphaSearchResponseFacetFacetValue `json:"values"`
}
