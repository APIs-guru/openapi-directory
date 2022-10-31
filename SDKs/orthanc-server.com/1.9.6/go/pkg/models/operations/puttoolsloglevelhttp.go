package operations

type PutToolsLogLevelHTTPRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PutToolsLogLevelHTTPResponse struct {
	ContentType string
	StatusCode  int64
}
