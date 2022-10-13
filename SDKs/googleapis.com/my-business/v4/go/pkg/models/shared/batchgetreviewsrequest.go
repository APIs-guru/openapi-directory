package shared

type BatchGetReviewsRequest struct {
	IgnoreRatingOnlyReviews *bool    `json:"ignoreRatingOnlyReviews"`
	LocationNames           []string `json:"locationNames"`
	OrderBy                 *string  `json:"orderBy"`
	PageSize                *int32   `json:"pageSize"`
	PageToken               *string  `json:"pageToken"`
}
