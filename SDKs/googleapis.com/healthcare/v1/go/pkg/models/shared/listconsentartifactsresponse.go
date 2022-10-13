package shared

type ListConsentArtifactsResponse struct {
	ConsentArtifacts []ConsentArtifact `json:"consentArtifacts"`
	NextPageToken    *string           `json:"nextPageToken"`
}
