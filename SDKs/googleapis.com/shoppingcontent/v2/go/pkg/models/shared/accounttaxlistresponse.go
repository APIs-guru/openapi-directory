package shared



type AccounttaxListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []AccountTax `json:"resources,omitempty"`
    
}

