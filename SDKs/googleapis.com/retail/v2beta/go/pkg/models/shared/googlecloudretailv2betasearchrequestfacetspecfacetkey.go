package shared

type GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey struct {
	CaseInsensitive  *bool                             `json:"caseInsensitive"`
	Contains         []string                          `json:"contains"`
	Intervals        []GoogleCloudRetailV2betaInterval `json:"intervals"`
	Key              *string                           `json:"key"`
	OrderBy          *string                           `json:"orderBy"`
	Prefixes         []string                          `json:"prefixes"`
	Query            *string                           `json:"query"`
	RestrictedValues []string                          `json:"restrictedValues"`
	ReturnMinMax     *bool                             `json:"returnMinMax"`
}
