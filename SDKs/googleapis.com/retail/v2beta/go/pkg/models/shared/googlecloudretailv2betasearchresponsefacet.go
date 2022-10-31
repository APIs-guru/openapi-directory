package shared

type GoogleCloudRetailV2betaSearchResponseFacet struct {
	DynamicFacet *bool                                                  `json:"dynamicFacet,omitempty"`
	Key          *string                                                `json:"key,omitempty"`
	Values       []GoogleCloudRetailV2betaSearchResponseFacetFacetValue `json:"values,omitempty"`
}
