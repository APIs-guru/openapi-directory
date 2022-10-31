package shared



type OrdersListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []Order `json:"resources,omitempty"`
    
}

