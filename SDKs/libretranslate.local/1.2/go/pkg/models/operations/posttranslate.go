package operations

type PostTranslateRequest struct {
	Request *string `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostTranslateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
