package operations

type PostDetectRequest struct {
	Request *string `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostDetectResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
