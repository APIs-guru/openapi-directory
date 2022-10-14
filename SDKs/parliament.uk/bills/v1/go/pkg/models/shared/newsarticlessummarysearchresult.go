package shared

type NewsArticlesSummarySearchResult struct {
	Items        []NewsArticlesSummary `json:"items,omitempty"`
	ItemsPerPage *int32                `json:"itemsPerPage,omitempty"`
	TotalResults *int32                `json:"totalResults,omitempty"`
}
