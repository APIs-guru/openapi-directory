package shared



type StageReferenceSearchResult struct {
    Items []StageReference `json:"items,omitempty"`
    ItemsPerPage *int32 `json:"itemsPerPage,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

