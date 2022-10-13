package operations

type SuspendUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type SuspendUserRequest struct {
	PathParams SuspendUserPathParams
	Request    []byte `request:"mediaType=text/plain"`
}

type SuspendUserResponse struct {
	ContentType string
	StatusCode  int64
}
