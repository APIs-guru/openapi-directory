package shared



type OrderreturnsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []MerchantOrderReturn `json:"resources,omitempty"`
    
}

