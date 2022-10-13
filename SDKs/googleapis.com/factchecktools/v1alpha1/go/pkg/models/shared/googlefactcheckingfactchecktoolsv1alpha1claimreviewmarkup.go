package shared

type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup struct {
	ClaimAppearances     []string                                             `json:"claimAppearances"`
	ClaimAuthor          *GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor `json:"claimAuthor"`
	ClaimDate            *string                                              `json:"claimDate"`
	ClaimFirstAppearance *string                                              `json:"claimFirstAppearance"`
	ClaimLocation        *string                                              `json:"claimLocation"`
	ClaimReviewed        *string                                              `json:"claimReviewed"`
	Rating               *GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating `json:"rating"`
	URL                  *string                                              `json:"url"`
}
