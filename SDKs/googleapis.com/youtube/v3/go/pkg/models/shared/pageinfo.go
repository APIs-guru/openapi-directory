package shared

// PageInfo
// Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
type PageInfo struct {
	ResultsPerPage *int32 `json:"resultsPerPage,omitempty"`
	TotalResults   *int32 `json:"totalResults,omitempty"`
}
