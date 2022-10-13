package shared

type NewsArticlesSummarySearchResult struct {
	Items        []NewsArticlesSummary `json:"items"`
	ItemsPerPage *int32                `json:"itemsPerPage"`
	TotalResults *int32                `json:"totalResults"`
}
