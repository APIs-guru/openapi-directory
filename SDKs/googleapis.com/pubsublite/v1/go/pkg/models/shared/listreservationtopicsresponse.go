package shared



type ListReservationTopicsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Topics []string `json:"topics,omitempty"`
    
}

