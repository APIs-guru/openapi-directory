package shared

type BatchGetReviewsResponse struct {
	LocationReviews []LocationReview `json:"locationReviews"`
	NextPageToken   *string          `json:"nextPageToken"`
}
