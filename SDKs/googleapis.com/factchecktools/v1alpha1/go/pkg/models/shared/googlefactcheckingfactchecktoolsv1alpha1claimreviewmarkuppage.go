package shared

type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage struct {
	ClaimReviewAuthor  *GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor  `json:"claimReviewAuthor,omitempty"`
	ClaimReviewMarkups []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup `json:"claimReviewMarkups,omitempty"`
	Name               *string                                                     `json:"name,omitempty"`
	PageURL            *string                                                     `json:"pageUrl,omitempty"`
	PublishDate        *string                                                     `json:"publishDate,omitempty"`
	VersionID          *string                                                     `json:"versionId,omitempty"`
}
