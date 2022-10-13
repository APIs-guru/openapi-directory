package shared

type GoogleFactcheckingFactchecktoolsV1alpha1Claim struct {
	ClaimDate   *string                                               `json:"claimDate"`
	ClaimReview []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview `json:"claimReview"`
	Claimant    *string                                               `json:"claimant"`
	Text        *string                                               `json:"text"`
}
