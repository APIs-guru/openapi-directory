package shared

type GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating struct {
	BestRating        *int32  `json:"bestRating"`
	ImageURL          *string `json:"imageUrl"`
	RatingExplanation *string `json:"ratingExplanation"`
	RatingValue       *int32  `json:"ratingValue"`
	TextualRating     *string `json:"textualRating"`
	WorstRating       *int32  `json:"worstRating"`
}
