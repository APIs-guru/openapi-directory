package shared

// GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
// Response from searching fact-checked claims.
type GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse struct {
	Claims        []GoogleFactcheckingFactchecktoolsV1alpha1Claim `json:"claims,omitempty"`
	NextPageToken *string                                         `json:"nextPageToken,omitempty"`
}
