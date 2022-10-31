package shared



type SearchResponse struct {
    Count *int64 `json:"count,omitempty"`
    NextOffset *int64 `json:"next_offset,omitempty"`
    Results []interface{} `json:"results,omitempty"`
    Took *float64 `json:"took,omitempty"`
    Total *int64 `json:"total,omitempty"`
    
}

