package operations

type GetUsersUserIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUsersUserIDRequest struct {
	PathParams GetUsersUserIDPathParams
}

type GetUsersUserIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
