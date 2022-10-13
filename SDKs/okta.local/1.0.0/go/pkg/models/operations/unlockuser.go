package operations

type UnlockUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UnlockUserRequest struct {
	PathParams UnlockUserPathParams
	Request    []byte `request:"mediaType=text/plain"`
}

type UnlockUserResponse struct {
	ContentType string
	StatusCode  int64
}
