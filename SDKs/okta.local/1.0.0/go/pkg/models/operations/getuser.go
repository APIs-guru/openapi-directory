package operations

type GetUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type GetUserResponse struct {
	ContentType string
	StatusCode  int64
}
