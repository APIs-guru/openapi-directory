package shared



type AddressSearchResult struct {
    Hits []Address `json:"hits,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Page *int32 `json:"page,omitempty"`
    Total *int32 `json:"total,omitempty"`
    
}

