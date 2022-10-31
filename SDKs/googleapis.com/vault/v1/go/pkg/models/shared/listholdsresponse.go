package shared



type ListHoldsResponse struct {
    Holds []Hold `json:"holds,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

