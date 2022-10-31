package shared



type AmendmentSearchItemSearchResult struct {
    Items []AmendmentSearchItem `json:"items,omitempty"`
    ItemsPerPage *int32 `json:"itemsPerPage,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

