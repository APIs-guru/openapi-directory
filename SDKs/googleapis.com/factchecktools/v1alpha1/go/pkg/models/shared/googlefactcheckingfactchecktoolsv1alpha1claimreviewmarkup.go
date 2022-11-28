package shared

// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
// Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup struct {
	ClaimAppearances     []string                                             `json:"claimAppearances,omitempty"`
	ClaimAuthor          *GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor `json:"claimAuthor,omitempty"`
	ClaimDate            *string                                              `json:"claimDate,omitempty"`
	ClaimFirstAppearance *string                                              `json:"claimFirstAppearance,omitempty"`
	ClaimLocation        *string                                              `json:"claimLocation,omitempty"`
	ClaimReviewed        *string                                              `json:"claimReviewed,omitempty"`
	Rating               *GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating `json:"rating,omitempty"`
	URL                  *string                                              `json:"url,omitempty"`
}
