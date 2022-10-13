package shared

type SourceResultCount struct {
	HasMoreResults      *bool   `json:"hasMoreResults"`
	ResultCountEstimate *string `json:"resultCountEstimate"`
	ResultCountExact    *string `json:"resultCountExact"`
	Source              *Source `json:"source"`
}
