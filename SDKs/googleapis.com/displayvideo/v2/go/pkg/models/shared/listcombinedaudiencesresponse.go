package shared



type ListCombinedAudiencesResponse struct {
    CombinedAudiences []CombinedAudience `json:"combinedAudiences,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

