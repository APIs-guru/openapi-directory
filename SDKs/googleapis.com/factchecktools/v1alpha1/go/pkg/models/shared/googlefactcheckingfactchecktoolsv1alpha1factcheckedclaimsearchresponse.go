package shared

type GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse struct {
	Claims        []GoogleFactcheckingFactchecktoolsV1alpha1Claim `json:"claims"`
	NextPageToken *string                                         `json:"nextPageToken"`
}
