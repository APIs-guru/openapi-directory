package operations

type UsersReadPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UsersReadRequest struct {
	PathParams UsersReadPathParams
}

type UsersReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
