package shared



type ListSavedQueriesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SavedQueries []SavedQuery `json:"savedQueries,omitempty"`
    
}

