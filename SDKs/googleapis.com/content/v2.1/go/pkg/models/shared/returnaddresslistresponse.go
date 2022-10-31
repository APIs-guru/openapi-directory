package shared



type ReturnaddressListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []ReturnAddress `json:"resources,omitempty"`
    
}

