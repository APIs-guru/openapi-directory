package operations

type PostPersonRegisterRequest struct {
	Request []byte `request:"mediaType=application/xml"`
}

type PostPersonRegisterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
