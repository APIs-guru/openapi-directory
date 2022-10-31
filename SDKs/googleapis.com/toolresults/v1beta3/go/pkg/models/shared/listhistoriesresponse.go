package shared



type ListHistoriesResponse struct {
    Histories []History `json:"histories,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

