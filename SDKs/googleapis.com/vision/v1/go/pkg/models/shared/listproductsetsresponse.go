package shared



type ListProductSetsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ProductSets []ProductSet `json:"productSets,omitempty"`
    
}

