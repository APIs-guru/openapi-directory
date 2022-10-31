package shared

type SearchResponse struct {
	DebugInfo           *ResponseDebugInfo   `json:"debugInfo,omitempty"`
	ErrorInfo           *ErrorInfo           `json:"errorInfo,omitempty"`
	FacetResults        []FacetResult        `json:"facetResults,omitempty"`
	HasMoreResults      *bool                `json:"hasMoreResults,omitempty"`
	QueryInterpretation *QueryInterpretation `json:"queryInterpretation,omitempty"`
	ResultCountEstimate *string              `json:"resultCountEstimate,omitempty"`
	ResultCountExact    *string              `json:"resultCountExact,omitempty"`
	ResultCounts        *ResultCounts        `json:"resultCounts,omitempty"`
	Results             []SearchResult       `json:"results,omitempty"`
	SpellResults        []SpellResult        `json:"spellResults,omitempty"`
	StructuredResults   []StructuredResult   `json:"structuredResults,omitempty"`
}
