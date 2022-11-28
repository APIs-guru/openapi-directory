package shared

// GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating
// Information about the claim rating.
type GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating struct {
	BestRating        *int32  `json:"bestRating,omitempty"`
	ImageURL          *string `json:"imageUrl,omitempty"`
	RatingExplanation *string `json:"ratingExplanation,omitempty"`
	RatingValue       *int32  `json:"ratingValue,omitempty"`
	TextualRating     *string `json:"textualRating,omitempty"`
	WorstRating       *int32  `json:"worstRating,omitempty"`
}
