package shared

type GoogleCloudRetailV2Rating struct {
	AverageRating   *float32 `json:"averageRating"`
	RatingCount     *int32   `json:"ratingCount"`
	RatingHistogram []int32  `json:"ratingHistogram"`
}
