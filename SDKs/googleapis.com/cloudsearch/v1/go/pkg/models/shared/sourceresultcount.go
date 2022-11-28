package shared

// SourceResultCount
// Per source result count information.
type SourceResultCount struct {
	HasMoreResults      *bool   `json:"hasMoreResults,omitempty"`
	ResultCountEstimate *string `json:"resultCountEstimate,omitempty"`
	ResultCountExact    *string `json:"resultCountExact,omitempty"`
	Source              *Source `json:"source,omitempty"`
}
