package shared



type ListVariablesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Variables []Variable `json:"variables,omitempty"`
    
}

