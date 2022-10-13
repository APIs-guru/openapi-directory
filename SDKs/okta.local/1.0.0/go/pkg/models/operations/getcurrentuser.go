package operations

type GetCurrentUserRequest struct {
	Request []byte `request:"mediaType=application/octet-stream"`
}

type GetCurrentUserResponse struct {
	ContentType string
	StatusCode  int64
}
