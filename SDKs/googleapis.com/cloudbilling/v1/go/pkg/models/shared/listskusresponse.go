package shared



type ListSkusResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Skus []Sku `json:"skus,omitempty"`
    
}

