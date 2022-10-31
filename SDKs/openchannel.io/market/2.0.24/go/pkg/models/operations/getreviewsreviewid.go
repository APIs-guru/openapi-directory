package operations

type GetReviewsReviewIDPathParams struct {
	ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
}

type GetReviewsReviewIDRequest struct {
	PathParams GetReviewsReviewIDPathParams
}

type GetReviewsReviewIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
