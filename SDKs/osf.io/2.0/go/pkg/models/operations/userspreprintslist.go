package operations

type UsersPreprintsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UsersPreprintsListRequest struct {
	PathParams UsersPreprintsListPathParams
}

type UsersPreprintsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
