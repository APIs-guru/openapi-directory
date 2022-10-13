package shared

type GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview struct {
	LanguageCode  *string                                            `json:"languageCode"`
	Publisher     *GoogleFactcheckingFactchecktoolsV1alpha1Publisher `json:"publisher"`
	ReviewDate    *string                                            `json:"reviewDate"`
	TextualRating *string                                            `json:"textualRating"`
	Title         *string                                            `json:"title"`
	URL           *string                                            `json:"url"`
}
