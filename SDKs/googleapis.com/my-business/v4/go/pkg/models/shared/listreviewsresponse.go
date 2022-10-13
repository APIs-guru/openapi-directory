package shared

type ListReviewsResponse struct {
	AverageRating    *float64 `json:"averageRating"`
	NextPageToken    *string  `json:"nextPageToken"`
	Reviews          []Review `json:"reviews"`
	TotalReviewCount *int32   `json:"totalReviewCount"`
}
