package shared



type PageMetaData struct {
    Number *int64 `json:"number,omitempty"`
    Size *int64 `json:"size,omitempty"`
    TotalElements *int64 `json:"total_elements,omitempty"`
    TotalPages *int64 `json:"total_pages,omitempty"`
    
}

