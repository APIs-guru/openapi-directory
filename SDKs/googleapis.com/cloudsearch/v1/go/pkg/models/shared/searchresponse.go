package shared

type SearchResponse struct {
	DebugInfo           *ResponseDebugInfo   `json:"debugInfo"`
	ErrorInfo           *ErrorInfo           `json:"errorInfo"`
	FacetResults        []FacetResult        `json:"facetResults"`
	HasMoreResults      *bool                `json:"hasMoreResults"`
	QueryInterpretation *QueryInterpretation `json:"queryInterpretation"`
	ResultCountEstimate *string              `json:"resultCountEstimate"`
	ResultCountExact    *string              `json:"resultCountExact"`
	ResultCounts        *ResultCounts        `json:"resultCounts"`
	Results             []SearchResult       `json:"results"`
	SpellResults        []SpellResult        `json:"spellResults"`
	StructuredResults   []StructuredResult   `json:"structuredResults"`
}
