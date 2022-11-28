package shared

// BatchGetReviewsRequest
// Request message for Reviews.BatchGetReviews.
type BatchGetReviewsRequest struct {
	IgnoreRatingOnlyReviews *bool    `json:"ignoreRatingOnlyReviews,omitempty"`
	LocationNames           []string `json:"locationNames,omitempty"`
	OrderBy                 *string  `json:"orderBy,omitempty"`
	PageSize                *int32   `json:"pageSize,omitempty"`
	PageToken               *string  `json:"pageToken,omitempty"`
}
