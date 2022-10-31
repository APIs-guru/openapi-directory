package shared



type ListConsentArtifactsResponse struct {
    ConsentArtifacts []ConsentArtifact `json:"consentArtifacts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

