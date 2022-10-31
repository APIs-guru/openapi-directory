package shared



type ListBuyersResponse struct {
    Buyers []Buyer `json:"buyers,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

