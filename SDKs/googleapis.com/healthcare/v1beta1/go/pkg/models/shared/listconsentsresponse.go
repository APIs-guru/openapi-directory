package shared



type ListConsentsResponse struct {
    Consents []Consent `json:"consents,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

