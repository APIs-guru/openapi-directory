package operations

type PutToolsUnknownSopClassAcceptedRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PutToolsUnknownSopClassAcceptedResponse struct {
	ContentType string
	StatusCode  int64
}
