package shared

type PageInfo struct {
	ResultsPerPage *int32 `json:"resultsPerPage"`
	TotalResults   *int32 `json:"totalResults"`
}
