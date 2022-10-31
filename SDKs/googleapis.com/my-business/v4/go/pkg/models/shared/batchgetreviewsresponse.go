package shared

type BatchGetReviewsResponse struct {
	LocationReviews []LocationReview `json:"locationReviews,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
