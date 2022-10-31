package shared



type AreaResponse struct {
    Areas []Area `json:"areas,omitempty"`
    RowCount *int32 `json:"row_count,omitempty"`
    
}

