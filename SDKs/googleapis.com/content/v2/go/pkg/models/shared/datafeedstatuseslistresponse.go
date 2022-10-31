package shared



type DatafeedstatusesListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []DatafeedStatus `json:"resources,omitempty"`
    
}

