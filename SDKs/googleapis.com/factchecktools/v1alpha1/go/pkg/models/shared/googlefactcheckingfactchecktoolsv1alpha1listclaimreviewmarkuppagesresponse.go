package shared

// GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
// Response from listing `ClaimReview` markup.
type GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse struct {
	ClaimReviewMarkupPages []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage `json:"claimReviewMarkupPages,omitempty"`
	NextPageToken          *string                                                         `json:"nextPageToken,omitempty"`
}
