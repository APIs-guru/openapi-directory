package shared



type PublicationTypeSearchResult struct {
    Items []PublicationType `json:"items,omitempty"`
    ItemsPerPage *int32 `json:"itemsPerPage,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

