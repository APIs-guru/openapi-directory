package shared



type ListGoogleAudiencesResponse struct {
    GoogleAudiences []GoogleAudience `json:"googleAudiences,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

