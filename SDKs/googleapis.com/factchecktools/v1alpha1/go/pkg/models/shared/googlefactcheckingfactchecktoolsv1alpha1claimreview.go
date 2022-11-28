package shared

// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
// Information about a claim review.
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview struct {
	LanguageCode  *string                                            `json:"languageCode,omitempty"`
	Publisher     *GoogleFactcheckingFactchecktoolsV1alpha1Publisher `json:"publisher,omitempty"`
	ReviewDate    *string                                            `json:"reviewDate,omitempty"`
	TextualRating *string                                            `json:"textualRating,omitempty"`
	Title         *string                                            `json:"title,omitempty"`
	URL           *string                                            `json:"url,omitempty"`
}
