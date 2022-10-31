package operations

type PostReviewsReviewIDPathParams struct {
	ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
}

type PostReviewsReviewIDQueryParams struct {
	CustomData    *string `queryParam:"style=form,explode=true,name=customData"`
	Description   string  `queryParam:"style=form,explode=true,name=description"`
	Headline      string  `queryParam:"style=form,explode=true,name=headline"`
	Rating        int64   `queryParam:"style=form,explode=true,name=rating"`
	UserAccountID string  `queryParam:"style=form,explode=true,name=userAccountId"`
	UserID        string  `queryParam:"style=form,explode=true,name=userId"`
}

type PostReviewsReviewIDRequest struct {
	PathParams  PostReviewsReviewIDPathParams
	QueryParams PostReviewsReviewIDQueryParams
}

type PostReviewsReviewIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
