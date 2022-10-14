package shared

type PageInfo struct {
	ResultsPerPage *int32 `json:"resultsPerPage,omitempty"`
	TotalResults   *int32 `json:"totalResults,omitempty"`
}
