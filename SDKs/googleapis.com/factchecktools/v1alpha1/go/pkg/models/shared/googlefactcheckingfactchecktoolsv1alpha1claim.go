package shared

// GoogleFactcheckingFactchecktoolsV1alpha1Claim
// Information about the claim.
type GoogleFactcheckingFactchecktoolsV1alpha1Claim struct {
	ClaimDate   *string                                               `json:"claimDate,omitempty"`
	ClaimReview []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview `json:"claimReview,omitempty"`
	Claimant    *string                                               `json:"claimant,omitempty"`
	Text        *string                                               `json:"text,omitempty"`
}
