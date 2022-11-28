package shared

// GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey
// Specifies how a facet is computed.
type GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey struct {
	CaseInsensitive  *bool                              `json:"caseInsensitive,omitempty"`
	Contains         []string                           `json:"contains,omitempty"`
	Intervals        []GoogleCloudRetailV2alphaInterval `json:"intervals,omitempty"`
	Key              *string                            `json:"key,omitempty"`
	OrderBy          *string                            `json:"orderBy,omitempty"`
	Prefixes         []string                           `json:"prefixes,omitempty"`
	Query            *string                            `json:"query,omitempty"`
	RestrictedValues []string                           `json:"restrictedValues,omitempty"`
	ReturnMinMax     *bool                              `json:"returnMinMax,omitempty"`
}
