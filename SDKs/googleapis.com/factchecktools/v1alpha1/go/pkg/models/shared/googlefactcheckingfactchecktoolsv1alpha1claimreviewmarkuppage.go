package shared

type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage struct {
	ClaimReviewAuthor  *GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor  `json:"claimReviewAuthor"`
	ClaimReviewMarkups []GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup `json:"claimReviewMarkups"`
	Name               *string                                                     `json:"name"`
	PageURL            *string                                                     `json:"pageUrl"`
	PublishDate        *string                                                     `json:"publishDate"`
	VersionID          *string                                                     `json:"versionId"`
}
