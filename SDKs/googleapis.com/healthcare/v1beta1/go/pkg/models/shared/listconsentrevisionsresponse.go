package shared



type ListConsentRevisionsResponse struct {
    Consents []Consent `json:"consents,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

