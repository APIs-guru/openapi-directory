package shared

// ListReviewsResponse
// Response message for Reviews.ListReviews.
type ListReviewsResponse struct {
	AverageRating    *float64 `json:"averageRating,omitempty"`
	NextPageToken    *string  `json:"nextPageToken,omitempty"`
	Reviews          []Review `json:"reviews,omitempty"`
	TotalReviewCount *int32   `json:"totalReviewCount,omitempty"`
}
