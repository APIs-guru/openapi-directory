package shared

// GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey
// Specifies how a facet is computed.
type GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey struct {
	CaseInsensitive  *bool                             `json:"caseInsensitive,omitempty"`
	Contains         []string                          `json:"contains,omitempty"`
	Intervals        []GoogleCloudRetailV2betaInterval `json:"intervals,omitempty"`
	Key              *string                           `json:"key,omitempty"`
	OrderBy          *string                           `json:"orderBy,omitempty"`
	Prefixes         []string                          `json:"prefixes,omitempty"`
	Query            *string                           `json:"query,omitempty"`
	RestrictedValues []string                          `json:"restrictedValues,omitempty"`
	ReturnMinMax     *bool                             `json:"returnMinMax,omitempty"`
}
