package shared



type ListRegistrationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Registrations []Registration `json:"registrations,omitempty"`
    
}

