package shared



type BillSummarySearchResult struct {
    Items []BillSummary `json:"items,omitempty"`
    ItemsPerPage *int32 `json:"itemsPerPage,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

