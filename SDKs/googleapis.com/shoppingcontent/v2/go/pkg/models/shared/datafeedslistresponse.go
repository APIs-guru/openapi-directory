package shared



type DatafeedsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []Datafeed `json:"resources,omitempty"`
    
}

