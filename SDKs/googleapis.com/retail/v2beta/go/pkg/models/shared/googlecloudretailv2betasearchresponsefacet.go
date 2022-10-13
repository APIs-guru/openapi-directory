package shared

type GoogleCloudRetailV2betaSearchResponseFacet struct {
	DynamicFacet *bool                                                  `json:"dynamicFacet"`
	Key          *string                                                `json:"key"`
	Values       []GoogleCloudRetailV2betaSearchResponseFacetFacetValue `json:"values"`
}
