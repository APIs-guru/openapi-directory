package operations

type DeactivateUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeactivateUserRequest struct {
	PathParams DeactivateUserPathParams
	Request    []byte `request:"mediaType=text/plain"`
}

type DeactivateUserResponse struct {
	ContentType string
	StatusCode  int64
}
