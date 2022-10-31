package shared



type ListFirstAndThirdPartyAudiencesResponse struct {
    FirstAndThirdPartyAudiences []FirstAndThirdPartyAudience `json:"firstAndThirdPartyAudiences,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

