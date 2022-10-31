package shared



type ListFleetsResponse struct {
    Fleets []Fleet `json:"fleets,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

