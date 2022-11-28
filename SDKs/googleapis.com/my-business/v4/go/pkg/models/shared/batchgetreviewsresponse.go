package shared

// BatchGetReviewsResponse
// Response message for Reviews.BatchGetReviews.
type BatchGetReviewsResponse struct {
	LocationReviews []LocationReview `json:"locationReviews,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
