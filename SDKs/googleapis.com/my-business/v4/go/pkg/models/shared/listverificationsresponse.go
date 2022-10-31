package shared



type ListVerificationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Verifications []Verification `json:"verifications,omitempty"`
    
}

