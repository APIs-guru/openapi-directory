package shared

type GoogleCloudRetailV2SearchRequestFacetSpecFacetKey struct {
	CaseInsensitive  *bool                         `json:"caseInsensitive,omitempty"`
	Contains         []string                      `json:"contains,omitempty"`
	Intervals        []GoogleCloudRetailV2Interval `json:"intervals,omitempty"`
	Key              *string                       `json:"key,omitempty"`
	OrderBy          *string                       `json:"orderBy,omitempty"`
	Prefixes         []string                      `json:"prefixes,omitempty"`
	Query            *string                       `json:"query,omitempty"`
	RestrictedValues []string                      `json:"restrictedValues,omitempty"`
	ReturnMinMax     *bool                         `json:"returnMinMax,omitempty"`
}
