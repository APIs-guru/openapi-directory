package shared

// GoogleCloudRetailV2alphaRating
// The rating of a Product.
type GoogleCloudRetailV2alphaRating struct {
	AverageRating   *float32 `json:"averageRating,omitempty"`
	RatingCount     *int32   `json:"ratingCount,omitempty"`
	RatingHistogram []int32  `json:"ratingHistogram,omitempty"`
}
