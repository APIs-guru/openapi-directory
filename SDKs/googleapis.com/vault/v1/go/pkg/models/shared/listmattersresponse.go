package shared



type ListMattersResponse struct {
    Matters []Matter `json:"matters,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

