package shared



type GoogleFactcheckingFactchecktoolsV1alpha1Claim struct {
    ClaimDate *string `json:"claimDate,omitempty"`
    ClaimReview []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview `json:"claimReview,omitempty"`
    Claimant *string `json:"claimant,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

